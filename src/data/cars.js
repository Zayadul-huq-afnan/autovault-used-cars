export const cars = [
  {
    id: 1,
    make: 'BMW',
    model: 'M4 Competition',
    year: 2022,
    price: 68900,
    mileage: 12400,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    color: 'Alpine White',
    featured: true,
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1200&q=80',
      'https://images.unsplash.com/photo-1555215692-1564020d6ddf?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
    ],
    description:
      'Immaculate M4 Competition with carbon bucket seats, Harman Kardon audio, and full service history. A thrilling daily driver with track-ready performance.',
    specs: { engine: '3.0L Twin-Turbo I6', horsepower: 503, drivetrain: 'RWD', seats: 4 },
  },
  {
    id: 2,
    make: 'Mercedes-Benz',
    model: 'E 53 AMG',
    year: 2021,
    price: 62400,
    mileage: 18700,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Obsidian Black',
    featured: true,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80',
    ],
    description:
      'Elegant AMG sedan blending luxury and power. Burmester surround sound, panoramic roof, and adaptive air suspension for a refined ride.',
    specs: { engine: '3.0L Turbo I6 + EQ Boost', horsepower: 429, drivetrain: 'AWD', seats: 5 },
  },
  {
    id: 3,
    make: 'Porsche',
    model: '911 Carrera S',
    year: 2020,
    price: 112500,
    mileage: 9800,
    fuel: 'Gasoline',
    transmission: 'PDK',
    bodyType: 'Sports',
    color: 'Guards Red',
    featured: true,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200&q=80',
      'https://images.unsplash.com/photo-1614200179396-2bdb4eb0f7b2?w=1200&q=80',
    ],
    description:
      'Iconic 911 Carrera S in stunning Guards Red. Sport Chrono package, PASM suspension, and meticulously maintained by authorized dealer.',
    specs: { engine: '3.0L Twin-Turbo Flat-6', horsepower: 443, drivetrain: 'RWD', seats: 4 },
  },
  {
    id: 4,
    make: 'Audi',
    model: 'RS6 Avant',
    year: 2023,
    price: 98500,
    mileage: 6200,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Wagon',
    color: 'Nardo Gray',
    featured: false,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80',
      'https://images.unsplash.com/photo-1603584173870-869f66102919?w=1200&q=80',
    ],
    description:
      'The ultimate super wagon. RS sport exhaust, matrix LED headlights, and virtual cockpit plus. Practicality meets supercar performance.',
    specs: { engine: '4.0L Twin-Turbo V8', horsepower: 591, drivetrain: 'AWD', seats: 5 },
  },
  {
    id: 5,
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2022,
    price: 79900,
    mileage: 15300,
    fuel: 'Electric',
    transmission: 'Single-Speed',
    bodyType: 'Sedan',
    color: 'Pearl White',
    featured: false,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80',
    ],
    description:
      'Mind-bending acceleration with tri-motor AWD. Full self-driving capability, yoke steering, and 21" Arachnid wheels included.',
    specs: { engine: 'Tri-Motor Electric', horsepower: 1020, drivetrain: 'AWD', seats: 5 },
  },
  {
    id: 6,
    make: 'Range Rover',
    model: 'Sport HSE',
    year: 2021,
    price: 54800,
    mileage: 22100,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Santorini Black',
    featured: false,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1519641470094-691f63ad733e?w=1200&q=80',
      'https://images.unsplash.com/photo-1533473356761-10ae8bda0630?w=1200&q=80',
    ],
    description:
      'Commanding presence with Meridian sound, air suspension, and premium leather throughout. Perfect for city and adventure alike.',
    specs: { engine: '3.0L Supercharged V6', horsepower: 395, drivetrain: 'AWD', seats: 5 },
  },
  {
    id: 7,
    make: 'Lexus',
    model: 'LC 500',
    year: 2020,
    price: 72900,
    mileage: 14500,
    fuel: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    color: 'Structural Blue',
    featured: false,
    image: 'https://images.unsplash.com/photo-1621135802925-cca57b9b6b4a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1621135802925-cca57b9b6b4a?w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
    ],
    description:
      'Naturally aspirated V8 symphony in a stunning grand tourer. Mark Levinson audio, heads-up display, and impeccable reliability.',
    specs: { engine: '5.0L V8', horsepower: 471, drivetrain: 'RWD', seats: 4 },
  },
  {
    id: 8,
    make: 'Ford',
    model: 'Mustang GT',
    year: 2023,
    price: 42900,
    mileage: 8100,
    fuel: 'Gasoline',
    transmission: 'Manual',
    bodyType: 'Coupe',
    color: 'Rapid Red',
    featured: false,
    image: 'https://images.unsplash.com/photo-1584345609906-2e27165e1447?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1584345609906-2e27165e1447?w=1200&q=80',
      'https://images.unsplash.com/photo-1494976388531-d1058498cdd5?w=1200&q=80',
    ],
    description:
      'American muscle with a 6-speed manual. Performance pack, MagneRide suspension, and Brembo brakes. Pure driving engagement.',
    specs: { engine: '5.0L V8', horsepower: 480, drivetrain: 'RWD', seats: 4 },
  },
];

export function getCarById(id) {
  return cars.find((car) => car.id === Number(id));
}

export function getFeaturedCars() {
  return cars.filter((car) => car.featured);
}

export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatMileage(mileage) {
  return new Intl.NumberFormat('en-US').format(mileage) + ' mi';
}
