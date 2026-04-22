type FilterType = 'all' | 'liked' | 'building' | 'done';

interface Props {
  active: FilterType;
  onChange: (value: FilterType) => void;
}

export function FilterBar({ active, onChange }: Props) {
  const filters: { label: string; value: FilterType }[] = [
    { label: 'Kõik', value: 'all' },
    { label: 'Lemmikud', value: 'liked' },
    { label: 'Arendamisel', value: 'building' },
    { label: 'Valmis', value: 'done' },
  ];

  return (
    <div style={{ margin: '15px' }}>
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          style={{
            margin: 5,
            padding: '8px 12px',
            borderRadius: 6,
            border: 'none',
            cursor: 'pointer',
            background: active === f.value ? '#4f46e5' : '#1f2937',
            color: 'white',
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}