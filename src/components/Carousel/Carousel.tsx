'use client';

import {
  useRef,
  useLayoutEffect,
  useCallback,
  useState,
  useEffect,
  type ReactNode,
  type RefCallback,
} from 'react';
import {
  motion,
  useMotionValue,
  animate,
  useReducedMotion,
  type PanInfo,
  type ValueAnimationTransition,
} from 'framer-motion';
import { Button } from '@carbon/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/sharp-regular-svg-icons';
import styles from './Carousel.module.scss';

const FAArrowLeft = () => <FontAwesomeIcon icon={faArrowLeft} />;
const FAArrowRight = () => <FontAwesomeIcon icon={faArrowRight} />;

// ─── Spring config ────────────────────────────────────────────────────────────

const SPRING: ValueAnimationTransition<number> = {
  type: 'spring',
  stiffness: 350,
  damping: 38,
  mass: 0.8,
};

// Respects prefers-reduced-motion: fast tween, no bounce
const INSTANT: ValueAnimationTransition<number> = {
  type: 'tween',
  duration: 0.15,
  ease: 'easeOut',
};

// Velocity threshold (px/s) to commit to the next/prev card on flick
const VELOCITY_THRESHOLD = 500;

// ─── Types ────────────────────────────────────────────────────────────────────

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  label?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Carousel<T,>({
  items,
  renderItem,
  label = 'Carousel',
}: CarouselProps<T>) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);

  // All DOM measurements deferred to client — no SSR/hydration mismatch
  const [mounted, setMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // snapPoints[i]: x value (≤ 0) to scroll to snap position i
  const [snapPoints, setSnapPoints] = useState<number[]>([0]);
  // Derived from total content width vs container width
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ─── Measurement ────────────────────────────────────────────────────────────

  const measure = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const card0 = cardRefs.current[0];
    const card1 = cardRefs.current[1];

    if (!container || !track || !card0) return;

    const containerWidth = container.offsetWidth;
    // scrollWidth covers padding + all cards + gaps
    const trackScrollWidth = track.scrollWidth;
    const maxDrag = Math.max(0, trackScrollWidth - containerWidth);
    const cardWidth = card0.offsetWidth;

    // Measure actual rendered gap between cards — robust regardless of how gap is set
    let gap = 0;
    if (card1) {
      const r0 = card0.getBoundingClientRect();
      const r1 = card1.getBoundingClientRect();
      gap = Math.max(0, r1.left - r0.right);
    }

    // Build snap points:
    // - Left-aligned: x = -i*(cardWidth+gap), card i aligns with left margin
    // - End snap: x = -maxDrag, last card right-edge aligns with right margin
    const points: number[] = [];
    if (maxDrag <= 0) {
      points.push(0);
    } else {
      let i = 0;
      while (true) {
        const snap = -(i * (cardWidth + gap));
        if (-snap >= maxDrag) break;
        points.push(snap);
        i++;
      }
      points.push(-maxDrag);
    }

    setSnapPoints(points);
    setDragConstraints({ left: -maxDrag, right: 0 });

    // Clamp x if the viewport resized and the position is now out of range
    const currentX = x.get();
    if (currentX < -maxDrag) x.set(-maxDrag);
    else if (currentX > 0) x.set(0);
  }, [items.length, x]);

  // Activate only client-side; prevents SSR/hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;
    measure();

    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [mounted, measure]);

  // ─── Navigation ─────────────────────────────────────────────────────────────

  const transition = prefersReducedMotion ? INSTANT : SPRING;

  const goToIndex = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, snapPoints.length - 1));
      setCurrentIndex(clamped);
      animate(x, snapPoints[clamped], transition);
    },
    [snapPoints, x, transition],
  );

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      setIsDragging(false);
      const velocity = info.velocity.x;
      const currentX = x.get();
      let targetIndex: number;

      if (velocity < -VELOCITY_THRESHOLD) {
        targetIndex = Math.min(currentIndex + 1, snapPoints.length - 1);
      } else if (velocity > VELOCITY_THRESHOLD) {
        targetIndex = Math.max(currentIndex - 1, 0);
      } else {
        // Slow drag: snap to nearest point
        let nearest = 0;
        let minDist = Infinity;
        snapPoints.forEach((point, i) => {
          const dist = Math.abs(point - currentX);
          if (dist < minDist) {
            minDist = dist;
            nearest = i;
          }
        });
        targetIndex = nearest;
      }

      setCurrentIndex(targetIndex);
      animate(x, snapPoints[targetIndex], transition);
    },
    [x, currentIndex, snapPoints, transition],
  );

  // ─── Render ─────────────────────────────────────────────────────────────────

  const isAtStart = !mounted || currentIndex === 0;
  const isAtEnd = !mounted || currentIndex >= snapPoints.length - 1;

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.arrows} aria-label="Carousel navigation">
          <Button
            kind="ghost"
            size="sm"
            hasIconOnly
            iconDescription="Previous"
            renderIcon={FAArrowLeft}
            onClick={() => goToIndex(currentIndex - 1)}
            disabled={isAtStart}
            aria-disabled={isAtStart}
          />
          <Button
            kind="ghost"
            size="sm"
            hasIconOnly
            iconDescription="Next"
            renderIcon={FAArrowRight}
            onClick={() => goToIndex(currentIndex + 1)}
            disabled={isAtEnd}
            aria-disabled={isAtEnd}
          />
        </div>
      </div>

      <div
        ref={containerRef}
        className={styles.viewport}
        role="region"
        aria-label={label}
        aria-roledescription="carousel"
      >
        <motion.div
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ref={trackRef as any}
          className={`${styles.track} ${isDragging ? styles.trackDragging : ''}`}
          drag="x"
          // {left:0,right:0} before mount → no drag until measured client-side
          dragConstraints={dragConstraints}
          // Slight resistance when dragging past hard bounds
          dragElastic={0.08}
          // Stiff bounce-back from the elastic overscroll
          dragTransition={{ bounceStiffness: 500, bounceDamping: 50 }}
          // framer-motion sets touch-action: pan-y on drag="x" automatically,
          // so vertical page scroll on touch devices is preserved
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          style={{ x }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={styles.card}
              ref={
                ((el: HTMLDivElement | null) => {
                  cardRefs.current[i] = el;
                }) as RefCallback<HTMLDivElement>
              }
              aria-roledescription="slide"
              aria-label={`Item ${i + 1} of ${items.length}`}
            >
              {renderItem(item, i)}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
