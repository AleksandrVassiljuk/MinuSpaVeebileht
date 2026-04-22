import { useState } from 'react';

export function ProjectForm({ onAdd }: { onAdd: (title: string) => void }) {
  const [value, setValue] = useState('');

  const handleAdd = () => {
    const trimmed = value.trim();

    if (!trimmed) return;

    onAdd(trimmed);
    setValue('');
  };

  return (
    <div className="add-row">
      <input
        value={value}
        placeholder="Lisa uus projekt..."
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleAdd();
        }}
      />

      <button onClick={handleAdd}>
        Lisa
      </button>
    </div>
  );
}