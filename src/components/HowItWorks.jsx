import { MousePointerClick, UserPlus, BookOpen, MessageCircle } from 'lucide-react';
import '../styles/how.css';

const steps = [
  {
    num: '01',
    Icon: MousePointerClick,
    title: 'CLICK',
    desc: 'Tap the WhatsApp button on this page.',
  },
  {
    num: '02',
    Icon: UserPlus,
    title: 'JOIN',
    desc: 'Join our WhatsApp community group.',
  },
  {
    num: '03',
    Icon: BookOpen,
    title: 'READ',
    desc: 'Read the group rules & guidelines.',
  },
  {
    num: '04',
    Icon: MessageCircle,
    title: 'PARTICIPATE',
    desc: 'Get daily tips & join the discussion.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how reveal" id="how">
      <div className="container">
        <div className="section-header">
          <span className="divider-line" aria-hidden="true" />
          <h2 className="section-title">HOW IT WORKS</h2>
          <span className="divider-line" aria-hidden="true" />
        </div>

        <div className="how__steps">
          {steps.map(({ num, Icon, title, desc }, i) => (
            <div className="how__step-wrap" key={num}>
              <div className="how__step">
                <div className="how__step-num">{num}</div>
                <div className="how__step-icon">
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <span className="how__step-title gold">{title}</span>
                <p className="how__step-desc">{desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="how__connector" aria-hidden="true">
                  <span /><span /><span />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
