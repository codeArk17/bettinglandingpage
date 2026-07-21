import CrownIcon from './icons/CrownIcon';
import '../styles/footer.css';
import { SITE_NAME } from '../constants';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">
            <span className="footer__crown">
              <CrownIcon size={22} />
            </span>
            <span className="footer__name">{SITE_NAME}</span>
          </div>

          <p className="footer__copy">© 2026 BetMaster. All Rights Reserved.</p>

          <nav className="footer__links" aria-label="Footer navigation">
            <a href="#">Privacy Policy</a>
            <span aria-hidden="true">|</span>
            <a href="#">Terms of Use</a>
            <span aria-hidden="true">|</span>
            <a href="#">Responsible Gambling</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
