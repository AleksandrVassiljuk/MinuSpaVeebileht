import { useState } from 'react';

interface ProjectFormProps {
  onAdd: (title: string) => void;
}

export function ProjectForm({ onAdd }: ProjectFormProps) {
  const [value, setValue] = useState('');

  const submit = () => {
    const title = value.trim();
    if (!title) return;

    onAdd(title);
    setValue('');
  };

  return (
    <form
      className="add-row"
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <input
        className="project-input"
        value={value}
        placeholder="Lisa uus projekt..."
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit" className="add-button">
        Lisa
      </button>
    </form>
  );
}