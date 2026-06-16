import CarCard from './CarCard';
import './CarGrid.css';

export default function CarGrid({ cars, emptyMessage = 'No vehicles match your filters.' }) {
  if (cars.length === 0) {
    return (
      <div className="car-grid__empty">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="car-grid">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
