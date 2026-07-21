import { AlertTriangle } from 'lucide-react';
import '../styles/disclaimer.css';

export default function Disclaimer() {
  return (
    <section className="disclaimer reveal">
      <div className="container">
        <div className="disclaimer__inner">
          <div className="disclaimer__left">
            <AlertTriangle size={22} strokeWidth={2} className="disclaimer__warn" />
            <div className="disclaimer__text">
              <strong>IMPORTANT NOTICE</strong>
              <p>
                Betting involves risk. There are no guaranteed outcomes. Please
                bet responsibly and only if you are of legal age. If you feel
                you may have a gambling problem, contact the{' '}
                <a
                  href="https://www.responsiblegambling.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Responsible Gambling Programme
                </a>{' '}
                — 0800 006 008 (toll-free, 24/7).
              </p>
            </div>
          </div>
          <div className="disclaimer__badge" aria-label="18 years and older only">
            <span className="disclaimer__badge-num">18+</span>
            <span className="disclaimer__badge-label">ONLY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
