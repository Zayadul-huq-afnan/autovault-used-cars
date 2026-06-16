import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
          alt=""
          aria-hidden="true"
        />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <span className="hero__label">Premium Pre-Owned</span>
        <h1 className="hero__title">
          Drive Your
          <br />
          <em>Dream Car</em>
        </h1>
        <p className="hero__subtitle">
          Hand-selected luxury and performance vehicles, rigorously inspected
          and ready for the road. Your next chapter starts here.
        </p>
        <div className="hero__actions">
          <Link to="/inventory" className="btn btn-primary">
            Explore Inventory
          </Link>
          <Link to="/about" className="btn btn-outline">
            Our Story
          </Link>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">500+</span>
            <span className="hero__stat-label">Cars Sold</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">4.9</span>
            <span className="hero__stat-label">Customer Rating</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">150pt</span>
            <span className="hero__stat-label">Inspection</span>
          </div>
        </div>
      </div>
    </section>
  );
}
