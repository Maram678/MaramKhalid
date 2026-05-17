import Icon from '../components/Icon.jsx';
import Petal from '../components/Petal.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Sparkles from '../components/Sparkles.jsx';

const CONTACT_EMAIL = 'maramkhalid678@gmail.com';

const LINKS = [
  { icon: Icon.mail,     site: 'Email',    sub: 'Direct line',         href: `mailto:${CONTACT_EMAIL}`,                        grad: 'linear-gradient(135deg,#E380A0,#9F3F61)' },
  { icon: Icon.linkedin, site: 'LinkedIn', sub: 'Profile · CV',        href: 'https://linkedin.com/in/maram-khalid-mohamed',   grad: 'linear-gradient(135deg,#9F3F61,#6E2A45)' },
  { icon: Icon.kaggle,   site: 'Kaggle',   sub: 'Notebooks · Comps',   href: 'https://kaggle.com/maramkhalid67',               grad: 'linear-gradient(135deg,#E5C9A8,#D4A574)' },
  { icon: Icon.github,   site: 'GitHub',   sub: 'Code · Repos',        href: '#',                                              grad: 'linear-gradient(135deg,#C95F84,#8E6A51)' },
];

const FLOATING_PETALS = [
  { t: 10, l: 6,  s: 26, c: '#F1A8BD', d: 0 },
  { t: 80, l: 90, s: 22, c: '#E380A0', d: 1.2 },
  { t: 30, l: 88, s: 18, c: '#D4A574', d: 2.4 },
];

export default function Contact() {
  return (
    <section id="contact" className="section relative py-20 md:py-24">
      <Sparkles count={10} />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {FLOATING_PETALS.map((p, i) => (
          <div
            key={i}
            className="absolute"
            style={{ top: `${p.t}%`, left: `${p.l}%`, animation: `sway ${5 + i}s ease-in-out ${p.d}s infinite alternate` }}
          >
            <Petal size={p.s} color={p.c} />
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-5xl px-6 md:px-10 relative">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's build something"
          italic="thoughtful"
          align="center"
          blurb="Open to AI/ML roles, research collaborations and freelance briefs in healthcare AI, multi-agent systems and NLP."
        />

        <Reveal delay={120}>
          <div className="mt-14 glass rounded-3xl p-8 md:p-10 flex flex-col">
            <div className="text-center">
              <div className="display text-2xl md:text-3xl text-blush-800">Find me online</div>
              <div className="mt-1 text-sm text-blush-700/70">Tap a card to open.</div>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {LINKS.map((it) => {
                const I = it.icon;
                return (
                  <a
                    key={it.site}
                    href={it.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative glass-soft rounded-2xl p-5 flex flex-col gap-3 hover:bg-white/90 transition-all overflow-hidden"
                  >
                    <div
                      className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-60 transition-opacity"
                      style={{ background: 'radial-gradient(circle, rgba(241,168,189,0.6), transparent 70%)' }}
                    />
                    <div className="relative flex items-start justify-between">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-transform group-hover:scale-110 group-hover:rotate-3"
                        style={{ background: it.grad, boxShadow: '0 10px 24px -10px rgba(159,63,97,0.55)' }}
                      >
                        <I width={20} height={20} />
                      </div>
                      <Icon.arrow
                        width={16}
                        height={16}
                        className="text-blush-600 -rotate-45 opacity-40 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
                      />
                    </div>
                    <div className="relative">
                      <div className="font-semibold text-blush-800 text-[17px] tracking-tight">{it.site}</div>
                      <div className="text-[11px] tracking-wider uppercase text-blush-700/55 mt-0.5">{it.sub}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div
              className="mt-6 flex items-center gap-3 px-4 py-3 rounded-2xl self-stretch"
              style={{
                background: 'linear-gradient(135deg, rgba(212,165,116,0.15), rgba(227,128,160,0.12))',
                border: '1px solid rgba(212,165,116,0.35)',
              }}
            >
              <Icon.pin width={16} height={16} className="text-blush-600 shrink-0" />
              <div className="text-[13px] text-blush-800">
                Working from <span className="font-semibold">Cairo, Egypt</span>
                <span className="text-blush-700/55"> · Open to remote globally · Typical reply within 24 hours.</span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 pt-8 border-t border-blush-200/50 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#E380A0,#9F3F61)' }}
            >
              <Petal size={18} color="#FFFFFF" />
            </div>
            <div>
              <div className="display text-lg text-blush-800 leading-none">Maram Khalid</div>
              <div className="text-[11px] tracking-wider uppercase text-blush-700/60 mt-1">AI Engineer · Cairo</div>
            </div>
          </div>
          <div className="text-[12px] text-blush-700/60">
            © 2026 · Crafted with intention, blush gradients & a little caffeine.
          </div>
        </div>
      </div>
    </section>
  );
}
