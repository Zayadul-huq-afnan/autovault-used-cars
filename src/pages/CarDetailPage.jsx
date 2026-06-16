import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getCarById, formatPrice, formatMileage } from '../data/cars';
import './CarDetailPage.css';

export default function CarDetailPage() {
  const { id } = useParams();
  const car = getCarById(id);
  const [activeImage, setActiveImage] = useState(0);

  if (!car) {
    return <Navigate to="/inventory" replace />;
  }

  const specItems = [
    { label: 'Year', value: car.year },
    { label: 'Mileage', value: formatMileage(car.mileage) },
    { label: 'Transmission', value: car.transmission },
    { label: 'Fuel Type', value: car.fuel },
    { label: 'Body Type', value: car.bodyType },
    { label: 'Color', value: car.color },
    { label: 'Engine', value: car.specs.engine },
    { label: 'Horsepower', value: `${car.specs.horsepower} hp` },
    { label: 'Drivetrain', value: car.specs.drivetrain },
    { label: 'Seats', value: car.specs.seats },
  ];

  return (
    <div className="page-enter car-detail">
      <div className="container">
        <Link to="/inventory" className="car-detail__back">
          ← Back to Inventory
        </Link>

        <div className="car-detail__layout">
          <div className="car-detail__gallery">
            <div className="car-detail__main-image">
              <img src={car.images[activeImage]} alt={`${car.year} ${car.make} ${car.model}`} />
            </div>
            <div className="car-detail__thumbs">
              {car.images.map((img, index) => (
                <button
                  key={img}
                  className={`car-detail__thumb ${index === activeImage ? 'car-detail__thumb--active' : ''}`}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          </div>

          <div className="car-detail__info">
            <div className="car-detail__meta">
              <span className="car-detail__make">{car.make}</span>
              {car.featured && <span className="car-detail__badge">Featured</span>}
            </div>
            <h1 className="car-detail__title">{car.model}</h1>
            <p className="car-detail__year">{car.year} · {car.bodyType}</p>
            <p className="car-detail__price">{formatPrice(car.price)}</p>
            <p className="car-detail__description">{car.description}</p>

            <div className="car-detail__actions">
              <button className="btn btn-primary" type="button">
                Schedule Test Drive
              </button>
              <button className="btn btn-outline" type="button">
                Request Info
              </button>
            </div>

            <div className="car-detail__specs">
              <h2>Specifications</h2>
              <dl className="car-detail__spec-grid">
                {specItems.map(({ label, value }) => (
                  <div key={label} className="car-detail__spec-item">
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
