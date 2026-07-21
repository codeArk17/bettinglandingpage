import { BarChart2, MessageSquare, TrendingUp, Trophy } from 'lucide-react';
import '../styles/why.css';

const cards = [
  {
    Icon: BarChart2,
    title: 'Quality Match Insights',
    desc: 'Expert analysis on SA Premier, PSL & European leagues.',
  },
  {
    Icon: MessageSquare,
    title: 'Community Discussions',
    desc: 'Chat with thousands of bettors across South Africa.',
  },
  {
    Icon: TrendingUp,
    title: 'Tips & Strategies',
    desc: 'Proven strategies shared daily by top predictors.',
  },
  {
    Icon: Trophy,
    title: 'Active Members',
    desc: 'Thousands of active members betting smart every day.',
  },
];

export default function WhyJoin() {
  return (
    <section className="why reveal" id="why">
      <div className="container">
        <div className="section-header">
          <span className="divider-line" aria-hidden="true" />
          <h2 className="section-title">WHY JOIN BETMASTER?</h2>
          <span className="divider-line" aria-hidden="true" />
        </div>

        <div className="why__grid">
          {cards.map(({ Icon, title, desc }) => (
            <div className="why__card" key={title}>
              <div className="why__icon">
                <Icon size={26} strokeWidth={1.75} />
              </div>
              <h3 className="why__card-title">{title}</h3>
              <p className="why__card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
