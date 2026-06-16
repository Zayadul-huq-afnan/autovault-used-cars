import FilterBar from '../components/cars/FilterBar';
import CarGrid from '../components/cars/CarGrid';
import { useCarFilters } from '../hooks/useCarFilters';
import './InventoryPage.css';

export default function InventoryPage() {
  const { filters, updateFilters, filteredCars } = useCarFilters();

  return (
    <div className="page-enter inventory-page">
      <div className="inventory-page__header">
        <div className="container">
          <span className="section-label">Our Collection</span>
          <h1 className="inventory-page__title">Vehicle Inventory</h1>
          <p className="inventory-page__subtitle">
            Browse our curated selection of premium pre-owned vehicles.
          </p>
        </div>
      </div>

      <div className="container inventory-page__content">
        <FilterBar
          filters={filters}
          onChange={updateFilters}
          resultCount={filteredCars.length}
        />
        <CarGrid cars={filteredCars} />
      </div>
    </div>
  );
}
