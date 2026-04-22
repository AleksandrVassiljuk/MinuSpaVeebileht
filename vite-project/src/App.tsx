import { useState } from 'react';
import './App.css';

type ProjectStatus = 'building' | 'done';

type Project = {
  id: number;
  title: string;
  liked: boolean;
  status: ProjectStatus;
};

type Filter = 'all' | 'liked' | 'done';

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  const addProject = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setProjects([
      ...projects,
      {
        id: Date.now(),
        title: trimmed,
        liked: false,
        status: 'building',
      },
    ]);

    setInput('');
  };

  const deleteProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const toggleLike = (id: number) => {
    setProjects(
      projects.map((p) =>
        p.id === id ? { ...p, liked: !p.liked } : p
      )
    );
  };

  const toggleStatus = (id: number) => {
    setProjects(
      projects.map((p) =>
        p.id === id
          ? {
              ...p,
              status: p.status === 'building' ? 'done' : 'building',
            }
          : p
      )
    );
  };

  const filtered = projects.filter((p) => {
    if (filter === 'liked') return p.liked;
    if (filter === 'done') return p.status === 'done';
    return true;
  });

  return (
    <div className="container">
      <h1>Aleksandr Vassiljuk</h1>
      <p>Tarkvara arendaja portfoolio</p>

      {/* ADD */}
      <div className="add">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addProject()}
          placeholder="Lisa projekt..."
        />
        <button onClick={addProject}>Lisa</button>
      </div>

      {/* FILTER */}
      <div className="filters">
        <button onClick={() => setFilter('all')}>Kõik</button>
        <button onClick={() => setFilter('liked')}>Lemmikud</button>
        <button onClick={() => setFilter('done')}>Valmis</button>
      </div>

      {/* EMPTY */}
      {filtered.length === 0 ? (
        <p>Ühtegi projekti pole veel</p>
      ) : (
        filtered.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.title}</h3>

            <p>
              {p.status === 'building' ? 'Arendamisel' : 'Valmis'}
              {p.liked ? ' • Lemmik' : ''}
            </p>

            <div className="buttons">
              <button onClick={() => toggleLike(p.id)}>
                like
              </button>

              <button onClick={() => toggleStatus(p.id)}>
                status
              </button>

              <button onClick={() => deleteProject(p.id)}>
                delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}