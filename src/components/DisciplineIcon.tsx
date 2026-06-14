import { SearchLocate, ChartRelationship, Code, Renew } from '@carbon/icons-react';
import type { CarbonIconType } from '@carbon/icons-react';

export type DisciplineKey = 'understand' | 'define' | 'build' | 'keep';

const iconMap: Record<DisciplineKey, CarbonIconType> = {
  understand: SearchLocate,
  define: ChartRelationship,
  build: Code,
  keep: Renew,
};

interface DisciplineIconProps {
  discipline: DisciplineKey;
  size?: number;
}

export function DisciplineIcon({ discipline, size = 32 }: DisciplineIconProps) {
  const Icon = iconMap[discipline];
  return <Icon size={size} />;
}
