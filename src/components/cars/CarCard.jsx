import { Link } from 'react-router-dom';
import { formatPrice, formatMileage } from '../../data/cars';
import './CarCard.css';

export default function CarCard({ car }) {
  return (
    <article className="car-card">
      <Link to={`/cars/${car.id}`} className="car-card__image-wrap">
        <img src={car.image} alt={`${car.year} ${car.make} ${car.model}`} loading="lazy" />
        <span className="car-card__year">{car.year}</span>
        {car.featured && <span className="car-card__badge">Featured</span>}
      </Link>

      <div className="car-card__body">
        <div className="car-card__meta">
          <span className="car-card__make">{car.make}</span>
          <span className="car-card__type">{car.bodyType}</span>
        </div>
        <h3 className="car-card__title">
          <Link to={`/cars/${car.id}`}>{car.model}</Link>
        </h3>
        <ul className="car-card__specs">
          <li>{formatMileage(car.mileage)}</li>
          <li>{car.transmission}</li>
          <li>{car.fuel}</li>
        </ul>
        <div className="car-card__footer">
          <span className="car-card__price">{formatPrice(car.price)}</span>
          <Link to={`/cars/${car.id}`} className="car-card__link">
            View Details →
          </Link>
        </div>
      </div>
    </article>
  );
}
