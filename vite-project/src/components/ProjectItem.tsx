import type { KeyboardEvent } from 'react';
import type { PortfolioProject } from '../types';

interface ProjectItemProps {
  project: PortfolioProject;
  isEditing: boolean;
  editingTitle: string;
  onEditingTitleChange: (value: string) => void;
  onStartEditing: (project: PortfolioProject) => void;
  onSaveEdit: (id: number) => void;
  onToggleFavorite: (id: number) => void;
  onToggleStatus: (id: number) => void;
  onDelete: (id: number) => void;
}

export function ProjectItem({
  project,
  isEditing,
  editingTitle,
  onEditingTitleChange,
  onStartEditing,
  onSaveEdit,
  onToggleFavorite,
  onToggleStatus,
  onDelete,
}: ProjectItemProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSaveEdit(project.id);
    }
  };

  const statusText =
    project.status === 'building' ? 'In progress' : 'Completed';

  return (
    <article className="project-card">
      <div className="project-main">
        {isEditing ? (
          <input
            className="project-edit-input"
            value={editingTitle}
            onChange={(e) => onEditingTitleChange(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-meta">
              {statusText}
              {project.isFeatured && ' • Favorite'}
            </p>
          </>
        )}
      </div>

      <div className="project-actions">
        <button type="button" onClick={() => onToggleFavorite(project.id)}>
          {project.isFeatured ? 'Unfavorite' : 'Favorite'}
        </button>

        <button type="button" onClick={() => onToggleStatus(project.id)}>
          Toggle status
        </button>

        {isEditing ? (
          <button type="button" onClick={() => onSaveEdit(project.id)}>
            Save
          </button>
        ) : (
          <button type="button" onClick={() => onStartEditing(project)}>
            Edit
          </button>
        )}

        <button type="button" onClick={() => onDelete(project.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}