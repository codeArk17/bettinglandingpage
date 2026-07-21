import WhatsAppIcon from './icons/WhatsAppIcon';
import CrownIcon    from './icons/CrownIcon';
import { Users, TrendingUp, Zap, CheckCircle } from 'lucide-react';
import '../styles/cta.css';
import { WHATSAPP_LINK } from '../constants';

const perks = [
  { Icon: TrendingUp, text: 'Daily winning predictions' },
  { Icon: Users,      text: 'Thousands of SA members' },
  { Icon: Zap,        text: 'Instant WhatsApp alerts' },
  { Icon: CheckCircle,text: 'Free to join, always' },
];

export default function JoinCTA() {
  return (
    <section className="join-cta reveal">
      {/* ── Full-bleed generated background ── */}
      <div className="join-cta__scene" aria-hidden="true">
        {/* Pitch lines */}
        <div className="scene__pitch" />
        <div className="scene__centre-circle" />
        <div className="scene__halfway" />
        {/* Spotlights */}
        <div className="scene__spot scene__spot--l" />
        <div className="scene__spot scene__spot--r" />
        {/* Particle dots */}
        {[...Array(18)].map((_, i) => (
          <div key={i} className="scene__particle" style={{
            '--x': `${Math.round(5 + (i * 53) % 90)}%`,
            '--y': `${Math.round(10 + (i * 37) % 80)}%`,
            '--s': `${2 + (i % 4)}px`,
            '--d': `${(i * 0.4).toFixed(1)}s`,
          }} />
        ))}
      </div>

      <div className="container">
        <div className="join-cta__body">

          {/* ── LEFT: brand + perks ── */}
          <div className="join-cta__left">
            <div className="join-cta__brand">
              <span className="join-cta__crown">
                <CrownIcon size={40} />
              </span>
              <div>
                <div className="join-cta__brand-name">BETMASTER</div>
                <div className="join-cta__brand-tag">SMARTER BETS · STRONGER COMMUNITY</div>
              </div>
            </div>

            <ul className="join-cta__perks">
              {perks.map(({ Icon, text }) => (
                <li key={text}>
                  <span className="join-cta__perk-icon">
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT: CTA ── */}
          <div className="join-cta__right">
            <div className="join-cta__wa-ring">
              <div className="join-cta__wa-blob">
                <WhatsAppIcon size={40} />
              </div>
            </div>

            <div className="join-cta__text">
              <h2>
                READY TO JOIN THE{' '}
                <span className="gold">BETMASTER</span>{' '}
                COMMUNITY?
              </h2>
              <p>
                Become part of a growing community of smart South African
                bettors. No cost. No nonsense. Just winning tips.
              </p>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--wa btn--lg join-cta__btn"
            >
              <WhatsAppIcon size={22} />
              JOIN OUR WHATSAPP GROUP
            </a>

            <p className="join-cta__note">
              🇿🇦 Built for South African bettors · Free forever
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
