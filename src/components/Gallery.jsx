import { Sword, Crown, Globe, TrendingUp } from 'lucide-react';
import CrownIcon from './icons/CrownIcon';
import '../styles/gallery.css';

import imgPremierLeague from '../assets/premier.jpg';
import imgGoldBoot      from '../assets/goldboot.jpg';
import imgMultiSport    from '../assets/bettingphone.jpg';
import imgBigWinBg      from '../assets/winbig.jpg';

/* Watermark shown on every card */
function BetMasterWatermark() {
  return (
    <div className="card__watermark" aria-hidden="true">
      <CrownIcon size={11} />
      BETMASTER
    </div>
  );
}

function BetMasterCard() {
  return (
    <div className="gallery__card gallery__card--branded">
      <img src={imgBigWinBg} alt="Win Big with BetMaster" className="gallery__img" />
      <div className="bm-card__grid" aria-hidden="true" />

      <BetMasterWatermark />

      <div className="bm-card__crown" aria-hidden="true">
        <CrownIcon size={44} />
      </div>

      <div className="gallery__caption">
        <span className="gallery__tag">
          <TrendingUp size={10} strokeWidth={2.5} />
          BIG WINS
        </span>
        <span className="gallery__title">Win Big with BetMaster</span>
        <span className="gallery__sub">Live tips straight to your WhatsApp.</span>
      </div>
    </div>
  );
}

const promos = [
  {
    img: imgPremierLeague,
    overlay: false,
    Icon: Sword,
    tag: 'FOOTBALL',
    title: 'Premier League Coverage',
    sub: 'Expert tips on every EPL match, every week.',
  },
  {
    img: imgGoldBoot,
    overlay: false,
    Icon: Crown,
    tag: 'BETMASTER',
    title: 'Bet Like a King',
    sub: 'Golden picks. Crowned winners. Daily.',
  },
  {
    img: imgMultiSport,
    overlay: true,
    Icon: Globe,
    tag: 'MULTI-SPORT',
    title: 'All Sports Covered',
    sub: 'Football, cricket, rugby & more.',
  },
];

export default function Gallery() {
  return (
    <section className="gallery reveal" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="divider-line" aria-hidden="true" />
          <h2 className="section-title">WHAT WE COVER</h2>
          <span className="divider-line" aria-hidden="true" />
        </div>

        <div className="gallery__grid">
          {promos.map(({ img, overlay, Icon, tag, title, sub }) => (
            <div className="gallery__card" key={title}>
              <img src={img} alt={title} className="gallery__img" />

              <BetMasterWatermark />

              {overlay && (
                <div className="gallery__rebrand" aria-hidden="true">
                  <Crown size={16} strokeWidth={2} className="gallery__rebrand-icon" />
                  <span className="gallery__rebrand-name">BETMASTER</span>
                </div>
              )}

              <div className="gallery__caption">
                <span className="gallery__tag">
                  <Icon size={10} strokeWidth={2.5} />
                  {tag}
                </span>
                <span className="gallery__title">{title}</span>
                <span className="gallery__sub">{sub}</span>
              </div>
            </div>
          ))}

          <BetMasterCard />
        </div>
      </div>
    </section>
  );
}
