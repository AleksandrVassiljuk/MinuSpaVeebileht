import type { FilterMode } from '../types';

interface FilterBarProps {
  activeFilter: FilterMode;
  onChange: (filter: FilterMode) => void;
}

const FILTERS: { label: string; value: FilterMode }[] = [
  { label: 'Kõik projektid', value: 'all' },
  { label: 'Lemmikud ⭐', value: 'featured' },
  { label: 'Arendamisel 🛠️', value: 'building' },
  { label: 'Valmis 🚀', value: 'launched' },
];

export function FilterBar({ activeFilter, onChange }: FilterBarProps) {
  return (
    <div className="filter-row">
      {FILTERS.map((filter) => {
        const isActive = activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onChange(filter.value)}
            className={`filter-chip ${isActive ? 'filter-chip--active' : ''}`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}