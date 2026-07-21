import { Star, Quote } from 'lucide-react';
import '../styles/testimonials.css';

const reviews = [
  {
    name: 'Sipho M.',
    location: 'Johannesburg',
    flag: '🇿🇦',
    text: 'BetMaster changed how I bet. The daily tips are accurate and the group is super active. Won 3 parlays this month alone!',
    stars: 5,
    since: 'Member since 2024',
  },
  {
    name: 'Thandi K.',
    location: 'Cape Town',
    flag: '🇿🇦',
    text: "Best free betting group I've joined. No spam, just real analysis. The guys know their football — PSL and EPL coverage is on point.",
    stars: 5,
    since: 'Member since 2023',
  },
  {
    name: 'Bongani D.',
    location: 'Durban',
    flag: '🇿🇦',
    text: "I was sceptical at first but the tips speak for themselves. This WhatsApp group is the real deal — consistent and trustworthy.",
    stars: 5,
    since: 'Member since 2024',
  },
  {
    name: 'Lebo N.',
    location: 'Pretoria',
    flag: '🇿🇦',
    text: 'Finally a community that takes betting seriously. The strategies shared here are better than anything you pay for elsewhere.',
    stars: 5,
    since: 'Member since 2025',
  },
];

function StarRow({ count }) {
  return (
    <div className="t-card__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#d4a017" color="#d4a017" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials reveal">
      <div className="container">
        <div className="section-header">
          <span className="divider-line" aria-hidden="true" />
          <h2 className="section-title">WHAT OUR MEMBERS SAY</h2>
          <span className="divider-line" aria-hidden="true" />
        </div>

        <div className="t-grid">
          {reviews.map(({ name, location, flag, text, stars, since }) => (
            <div className="t-card" key={name}>
              <div className="t-card__top">
                <Quote size={28} strokeWidth={1.5} className="t-card__quote" />
                <StarRow count={stars} />
              </div>
              <p className="t-card__text">"{text}"</p>
              <div className="t-card__footer">
                <div className="t-card__avatar" aria-hidden="true">
                  {name.charAt(0)}
                </div>
                <div className="t-card__info">
                  <span className="t-card__name">{flag} {name}</span>
                  <span className="t-card__meta">{location} · {since}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
