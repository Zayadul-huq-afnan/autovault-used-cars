import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-icon">◆</span>
            AutoVault
          </Link>
          <p className="footer__tagline">
            Curating exceptional pre-owned vehicles for discerning drivers since 2018.
          </p>
        </div>

        <div className="footer__links">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>Contact</h4>
          <ul>
            <li>1-800-AUTO-VLT</li>
            <li>hello@autovault.com</li>
            <li>742 Evergreen Terrace, LA</li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>Hours</h4>
          <ul>
            <li>Mon – Fri: 9am – 7pm</li>
            <li>Saturday: 10am – 5pm</li>
            <li>Sunday: By appointment</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} AutoVault. All rights reserved.</p>
          <p className="footer__demo">Demo UI — no backend connected</p>
        </div>
      </div>
    </footer>
  );
}
