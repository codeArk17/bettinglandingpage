import { Users, TrendingUp, MessageCircle, Award } from 'lucide-react';
import '../styles/statsbar.css';

const stats = [
  { Icon: Users,         value: '12,000+', label: 'Active Members' },
  { Icon: TrendingUp,    value: '85%',     label: 'Win Rate Tips' },
  { Icon: MessageCircle, value: '24/7',    label: 'Group Activity' },
  { Icon: Award,         value: '3+ Yrs',  label: 'Trusted Community' },
];

export default function StatsBar() {
  return (
    <div className="stats-bar reveal">
      <div className="container">
        <div className="stats-bar__grid">
          {stats.map(({ Icon, value, label }) => (
            <div className="stats-bar__item" key={label}>
              <span className="stats-bar__icon">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <span className="stats-bar__value">{value}</span>
              <span className="stats-bar__label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
