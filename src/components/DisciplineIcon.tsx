import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlassChart,
  faDiagramSubtask,
  faPenRuler,
  faShieldHalved,
} from '@fortawesome/pro-regular-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type DisciplineKey = 'understand' | 'define' | 'build' | 'keep';

const iconMap: Record<DisciplineKey, IconDefinition> = {
  understand: faMagnifyingGlassChart,
  define: faDiagramSubtask,
  build: faPenRuler,
  keep: faShieldHalved,
};

interface DisciplineIconProps {
  discipline: DisciplineKey;
  size?: number;
}

export function DisciplineIcon({ discipline, size = 32 }: DisciplineIconProps) {
  return <FontAwesomeIcon icon={iconMap[discipline]} width={size} height={size} />;
}
