import { Link } from 'react-router-dom';
import './AboutPage.css';

const values = [
  { title: 'Integrity', text: 'Honest descriptions, transparent history reports, and fair pricing on every vehicle.' },
  { title: 'Quality', text: 'We only list cars we would proudly drive ourselves — nothing less.' },
  { title: 'Service', text: 'From first inquiry to keys in hand, our team is with you every step of the way.' },
];

export default function AboutPage() {
  return (
    <div className="page-enter about-page">
      <section className="about-page__hero">
        <div className="container">
          <span className="section-label">Our Story</span>
          <h1 className="about-page__title">Redefining the Pre-Owned Experience</h1>
          <p className="about-page__intro">
            Founded in 2018, AutoVault was born from a simple belief: buying a used car
            should feel as exciting and trustworthy as buying new. We combine rigorous
            inspection standards with a boutique showroom experience.
          </p>
        </div>
      </section>

      <section className="about-page__image-section">
        <div className="container about-page__image-grid">
          <div className="about-page__image-card">
            <img
              src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80"
              alt="AutoVault showroom"
            />
          </div>
          <div className="about-page__image-card">
            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80"
              alt="Car inspection"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>

          <div className="about-page__values">
            {values.map((value) => (
              <div key={value.title} className="about-page__value">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page__cta">
        <div className="container about-page__cta-inner">
          <h2>Ready to find your next car?</h2>
          <p>Browse our inventory or visit our showroom for a personalized experience.</p>
          <Link to="/inventory" className="btn btn-primary">
            View Inventory
          </Link>
        </div>
      </section>
    </div>
  );
}
