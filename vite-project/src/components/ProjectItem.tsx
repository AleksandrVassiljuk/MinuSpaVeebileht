import type { PortfolioProject } from '../types';

function getStatusText(status: PortfolioProject['status']) {
  return status === 'building' ? 'Arendamisel' : 'Valmis';
}

export function ProjectItem({
  project,
  onDelete,
  onToggleLike,
  onToggleStatus,
}: {
  project: PortfolioProject;
  onDelete: (id: number) => void;
  onToggleLike: (id: number) => void;
  onToggleStatus: (id: number) => void;
}) {
  return (
    <div className="card">
      <div>
        <h3>{project.title}</h3>

        <p>
          {getStatusText(project.status)}
          {project.isFeatured ? ' • Lemmik' : ''}
        </p>
      </div>

      <div className="actions">
        <button onClick={() => onToggleLike(project.id)}>
          {project.isFeatured ? 'liked' : 'like'}
        </button>

        <button onClick={() => onToggleStatus(project.id)}>
          switch
        </button>

        <button onClick={() => onDelete(project.id)}>
          delete
        </button>
      </div>
    </div>
  );
}