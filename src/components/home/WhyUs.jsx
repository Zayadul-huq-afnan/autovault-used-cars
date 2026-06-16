import './WhyUs.css';

const features = [
  {
    icon: '✦',
    title: '150-Point Inspection',
    description: 'Every vehicle undergoes a comprehensive multi-point inspection before listing.',
  },
  {
    icon: '◇',
    title: 'Transparent Pricing',
    description: 'No hidden fees. What you see is what you pay — fair market value, always.',
  },
  {
    icon: '◈',
    title: '7-Day Return Policy',
    description: 'Not the right fit? Return within 7 days for a full refund, no questions asked.',
  },
  {
    icon: '◎',
    title: 'Financing Available',
    description: 'Competitive rates and flexible terms tailored to your budget and lifestyle.',
  },
];

export default function WhyUs() {
  return (
    <section className="section why-us">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why AutoVault</span>
          <h2 className="section-title">The AutoVault Difference</h2>
          <p className="section-subtitle">
            We redefine the used car experience with trust, quality, and white-glove service.
          </p>
        </div>

        <div className="why-us__grid">
          {features.map((feature) => (
            <div key={feature.title} className="why-us__card">
              <span className="why-us__icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
