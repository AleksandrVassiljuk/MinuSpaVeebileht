import { useState } from 'react';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { ProjectForm } from './components/Projectform';
import { ProjectItem } from './components/ProjectItem';

type FilterMode = 'all' | 'featured' | 'building' | 'launched';

type Project = {
  id: number;
  title: string;
  status: 'building' | 'launched';
  isFeatured: boolean;
};

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState<FilterMode>('all');

  const addProject = (title: string) => {
    const t = title.trim();
    if (!t) return;

    setProjects((prev) => [
      {
        id: Date.now(),
        title: t,
        status: 'building',
        isFeatured: false,
      },
      ...prev,
    ]);
  };

  const toggleFav = (id: number) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, isFeatured: !p.isFeatured } : p
      )
    );
  };

  const toggleStatus = (id: number) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              status:
                p.status === 'building' ? 'launched' : 'building',
            }
          : p
      )
    );
  };

  const deleteProject = (id: number) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const filtered = projects.filter((p) => {
    if (filter === 'featured') return p.isFeatured;
    if (filter === 'building') return p.status === 'building';
    if (filter === 'launched') return p.status === 'launched';
    return true;
  });

  return (
    <div className="app-shell">
      <Hero />

      <ProjectForm onAdd={addProject} />

      <FilterBar activeFilter={filter} onChange={setFilter} />

      {filtered.length === 0 ? (
        <p className="empty-state">Ühtegi projekti pole</p>
      ) : (
        filtered.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            isEditing={false}
            editingTitle=""
            onEditingTitleChange={() => {}}
            onStartEditing={() => {}}
            onSaveEdit={() => {}}
            onToggleFavorite={toggleFav}
            onToggleStatus={toggleStatus}
            onDelete={deleteProject}
          />
        ))
      )}
    </div>
  );
}