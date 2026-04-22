export type ProjectStatus = 'building' | 'launched';

export type FilterMode = 'all' | 'featured' | 'building' | 'launched';

export interface PortfolioProject {
  id: number;
  title: string;
  status: ProjectStatus;
  isFeatured: boolean;
}