import { useState, useEffect, useCallback } from 'react';

import new1 from '../assets/new1.jpg';
import new2 from '../assets/new2.jpg';
import new3 from '../assets/new3.jpg';
import cs3  from '../assets/cs3.jpg';

import WhatsAppIcon from './icons/WhatsAppIcon';
import { ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/hero.css';
import { WHATSAPP_LINK } from '../constants';

const SLIDES = [
  { img: new1, alt: 'Live Betting Odds',  duration: 6000 },
  { img: new2, alt: 'Stadium at Night',   duration: 6000 },
  { img: new3, alt: 'Betting App',        duration: 6000 },
  { img: cs3,  alt: 'BetMaster Sports',   duration: 6000 },
];

export default function Hero() {
  const [active,   setActive]   = useState(0);
  const [prev,     setPrev]     = useState(null);
  const [paused,   setPaused]   = useState(false);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((idx) => {
    setPrev(active);
    setActive(idx);
    setProgress(0);
  }, [active]);

  const next  = useCallback(() => goTo((active + 1) % SLIDES.length), [active, goTo]);
  const prev_ = useCallback(() => goTo((active - 1 + SLIDES.length) % SLIDES.length), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const start = performance.now();
    const dur   = SLIDES[active].duration;
    let raf;
    const tick = (now) => {
      const elapsed = now - start;
      setProgress(Math.min((elapsed / dur) * 100, 100));
      if (elapsed < dur) raf = requestAnimationFrame(tick);
      else next();
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, paused, next]);

  return (
    <section
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Carousel */}
      <div className="hero__carousel" aria-hidden="true">
        {SLIDES.map(({ img, alt }, i) => (
          <div
            key={i}
            className={`hero__slide${i === active ? ' hero__slide--active' : ''}${i === prev ? ' hero__slide--prev' : ''}`}
          >
            <img src={img} alt={alt} className="hero__slide-img" />
          </div>
        ))}
        <div className="hero__overlay" />
      </div>

      {/* Glow blobs */}
      <div className="hero__glow hero__glow--gold"  aria-hidden="true" />
      <div className="hero__glow hero__glow--green" aria-hidden="true" />

      {/* Content — centered */}
      <div className="hero__inner">
        <div className="hero__content">

          <p className="hero__eyebrow hero__a hero__a1">
            <ShieldCheck size={13} strokeWidth={2.5} />
            South Africa's #1 Betting Community
          </p>

          <h1 className="hero__heading hero__a hero__a2">
            <span className="hero__h-white">SMARTER BETS</span>
            <span className="hero__h-gold">BETTER COMMUNITY</span>
          </h1>

          <p className="hero__sub hero__a hero__a3">
            Join the BetMaster WhatsApp community and get match insights,
            betting tips, and daily updates straight to your phone.
          </p>

          <div className="hero__cta-group hero__a hero__a4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__cta-btn"
            >
              <span className="hero__cta-pulse" aria-hidden="true" />
              <WhatsAppIcon size={21} />
              JOIN OUR WHATSAPP GROUP
            </a>

            <div className="hero__trust">
              <span className="hero__trust-item">
                <ShieldCheck size={11} strokeWidth={2} />
                FREE TO JOIN
              </span>
              <span className="hero__trust-sep" aria-hidden="true" />
              <span className="hero__trust-item">100% COMMUNITY</span>
              <span className="hero__trust-sep" aria-hidden="true" />
              <span className="hero__trust-item">24/7 DISCUSSIONS</span>
            </div>
          </div>

        </div>
      </div>

      {/* Carousel controls */}
      <div className="hero__controls">
        <button className="hero__arrow" onClick={prev_} aria-label="Previous slide">
          <ChevronLeft size={18} strokeWidth={2.5} />
        </button>

        <div className="hero__dots" role="tablist">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1}`}
              className={`hero__dot${i === active ? ' hero__dot--active' : ''}`}
              onClick={() => goTo(i)}
            >
              {i === active && (
                <span
                  className="hero__dot-progress"
                  style={{ width: `${progress}%` }}
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </div>

        <button className="hero__arrow" onClick={next} aria-label="Next slide">
          <ChevronRight size={18} strokeWidth={2.5} />
        </button>
      </div>

    </section>
  );
}
