export type ProjectStatus = 'building' | 'launched';

export type FilterMode = 'all' | 'featured' | ProjectStatus;

export interface PortfolioProject {
  id: number;
  title: string;
  status: ProjectStatus;
  isFeatured: boolean;
}