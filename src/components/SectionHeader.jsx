import Reveal from './Reveal.jsx';

export default function SectionHeader({ eyebrow, title, italic, blurb, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'}>
      <Reveal>
        <div className={`eyebrow flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="gold-rule" />
          {eyebrow}
          <span className="gold-rule" />
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="display mt-5 text-[44px] md:text-[64px] leading-[1.02] text-blush-800">
          {title} {italic && <span className="display-italic text-gradient-rose">{italic}</span>}
        </h2>
      </Reveal>
      {blurb && (
        <Reveal delay={140}>
          <p className="mt-5 text-[17px] md:text-lg text-blush-700/70 max-w-2xl leading-relaxed">{blurb}</p>
        </Reveal>
      )}
    </div>
  );
}
