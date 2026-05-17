import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Sparkles from '../components/Sparkles.jsx';

export default function Education() {
  return (
    <section id="education" className="section relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader eyebrow="Education" title="Where it" italic="started" />

        <div className="mt-12 grid md:grid-cols-12 gap-6">
          <Reveal className="md:col-span-7">
            <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden h-full">
              <div
                className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-50"
                style={{ background: 'radial-gradient(circle, rgba(241,168,189,0.5), transparent 70%)' }}
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="eyebrow">2021 — 2025</div>
                    <h3 className="display mt-2 text-3xl md:text-4xl text-blush-800 leading-tight">
                      Bachelor of <span className="display-italic text-gradient-rose">Computer Science</span>
                    </h3>
                    <div className="mt-1 text-blush-700 font-medium">Major · Artificial Intelligence</div>
                    <div className="mt-1 text-sm text-blush-700/70">
                      Faculty of Computers & Artificial Intelligence · Helwan University
                    </div>
                  </div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0"
                    style={{ background: 'linear-gradient(135deg,#E380A0,#9F3F61)' }}
                  >
                    <Icon.cap width={24} height={24} />
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="glass-soft rounded-2xl p-4">
                    <div className="eyebrow">GPA</div>
                    <div className="display text-3xl text-gradient-rose mt-1">
                      3.2 <span className="text-blush-700/50 text-xl">/ 4.0</span>
                    </div>
                  </div>
                  <div className="glass-soft rounded-2xl p-4">
                    <div className="eyebrow">Final Grade</div>
                    <div className="display text-3xl text-gradient-rose mt-1">A+</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-5">
            <div className="glass rounded-3xl p-8 h-full relative overflow-hidden">
              <Sparkles count={6} />
              <div className="relative">
                <div className="eyebrow">Graduation Project · Honor</div>
                <h3 className="display mt-2 text-2xl md:text-3xl text-blush-800 leading-tight">
                  Brain Signals to <span className="display-italic">Text</span> Decoding
                </h3>
                <p className="mt-3 text-sm text-blush-800/75 leading-relaxed">
                  End-to-end EEG-to-text pipeline using T5 & BART transformers on the ZUCO dataset, with sentiment
                  classification directly from brain signals.
                </p>
                <div
                  className="mt-6 p-4 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212,165,116,0.18), rgba(227,128,160,0.18))',
                    border: '1px solid rgba(212,165,116,0.4)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Icon.sparkle width={18} height={18} className="text-gold-500" />
                    <div className="display text-2xl text-gradient-rose">48% reconstruction</div>
                  </div>
                  <div className="mt-1 text-[12.5px] text-blush-800/75">Surpassing prior published benchmarks.</div>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {['T5', 'BART', 'PyTorch', 'Hugging Face', 'NLP', 'EEG'].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/70 text-blush-700 hairline">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
