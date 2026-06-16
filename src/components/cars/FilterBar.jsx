import './FilterBar.css';

const bodyTypes = ['All', 'Sedan', 'Coupe', 'SUV', 'Sports', 'Wagon'];
const sortOptions = [
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'year-desc', label: 'Year: Newest' },
  { value: 'mileage-asc', label: 'Mileage: Lowest' },
];

export default function FilterBar({ filters, onChange, resultCount }) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__row">
        <div className="filter-bar__search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search make or model..."
            value={filters.search}
            onChange={(e) => onChange({ search: e.target.value })}
          />
        </div>

        <select
          className="filter-bar__select"
          value={filters.bodyType}
          onChange={(e) => onChange({ bodyType: e.target.value })}
        >
          {bodyTypes.map((type) => (
            <option key={type} value={type}>{type === 'All' ? 'All Body Types' : type}</option>
          ))}
        </select>

        <select
          className="filter-bar__select"
          value={filters.sort}
          onChange={(e) => onChange({ sort: e.target.value })}
        >
          {sortOptions.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <p className="filter-bar__count">
        Showing <strong>{resultCount}</strong> vehicle{resultCount !== 1 ? 's' : ''}
      </p>
    </div>
  );
}
