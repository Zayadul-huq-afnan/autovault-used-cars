import { Link } from 'react-router-dom';
import CarGrid from '../cars/CarGrid';
import './FeaturedCars.css';

export default function FeaturedCars({ cars }) {
  return (
    <section className="section featured">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Hand-Picked</span>
          <h2 className="section-title">Featured Vehicles</h2>
          <p className="section-subtitle">
            Our most sought-after listings — exceptional cars that won&apos;t last long.
          </p>
        </div>

        <CarGrid cars={cars} />

        <div className="featured__cta">
          <Link to="/inventory" className="btn btn-outline">
            View Full Inventory
          </Link>
        </div>
      </div>
    </section>
  );
}
