import Hero from '../components/home/Hero';
import FeaturedCars from '../components/home/FeaturedCars';
import WhyUs from '../components/home/WhyUs';
import { getFeaturedCars } from '../data/cars';

export default function HomePage() {
  return (
    <div className="page-enter">
      <Hero />
      <FeaturedCars cars={getFeaturedCars()} />
      <WhyUs />
    </div>
  );
}
