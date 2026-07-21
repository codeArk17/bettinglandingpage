import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CrownIcon from './icons/CrownIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';
import '../styles/navbar.css';
import { SITE_NAME, TAGLINE, WHATSAPP_LINK } from '../constants';

const NAV_LINKS = [
  { label: 'What We Cover', href: '#gallery' },
  { label: 'Why BetMaster', href: '#why' },
  { label: 'How It Works', href: '#how' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* darken navbar on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* close drawer on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 900) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* prevent body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleLink = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner">

          {/* Logo */}
          <a href="#" className="navbar__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <span className="navbar__crown"><CrownIcon size={26} /></span>
            <div className="navbar__text">
              <span className="navbar__name">{SITE_NAME}</span>
              <span className="navbar__tagline">{TAGLINE}</span>
            </div>
          </a>

          {/* Desktop nav links */}
          <nav className="navbar__links" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className="navbar__link"
                onClick={(e) => handleLink(e, href)}>
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="navbar__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>

        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`nav-drawer${open ? ' nav-drawer--open' : ''}`} aria-hidden={!open}>
        <nav className="nav-drawer__links" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="nav-drawer__link"
              onClick={(e) => handleLink(e, href)}>
              {label}
            </a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
            className="btn btn--wa nav-drawer__cta" onClick={() => setOpen(false)}>
            <WhatsAppIcon size={18} />
            JOIN OUR WHATSAPP GROUP
          </a>
        </nav>
      </div>

      {/* Backdrop */}
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
    </>
  );
}
