import { useMemo, useState } from 'react';
import { cars } from '../data/cars';

const defaultFilters = {
  search: '',
  bodyType: 'All',
  sort: 'price-asc',
};

function sortCars(list, sort) {
  const sorted = [...list];
  switch (sort) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'year-desc':
      return sorted.sort((a, b) => b.year - a.year);
    case 'mileage-asc':
      return sorted.sort((a, b) => a.mileage - b.mileage);
    default:
      return sorted;
  }
}

export function useCarFilters(initialFilters = defaultFilters) {
  const [filters, setFilters] = useState(initialFilters);

  const updateFilters = (partial) => {
    setFilters((prev) => ({ ...prev, ...partial }));
  };

  const filteredCars = useMemo(() => {
    let result = cars;

    if (filters.search) {
      const query = filters.search.toLowerCase();
      result = result.filter(
        (car) =>
          car.make.toLowerCase().includes(query) ||
          car.model.toLowerCase().includes(query)
      );
    }

    if (filters.bodyType !== 'All') {
      result = result.filter((car) => car.bodyType === filters.bodyType);
    }

    return sortCars(result, filters.sort);
  }, [filters]);

  return { filters, updateFilters, filteredCars };
}
