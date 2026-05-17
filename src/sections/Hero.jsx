import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import Sparkles from '../components/Sparkles.jsx';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-20">
      <div
        aria-hidden
        className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(241,168,189,0.45), transparent 65%)', filter: 'blur(20px)' }}
      />
      <div
        aria-hidden
        className="absolute top-1/3 -right-32 w-[520px] h-[520px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(229,201,168,0.45), transparent 65%)', filter: 'blur(28px)' }}
      />

      <Sparkles count={14} />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <Reveal>
            <div className="eyebrow flex items-center gap-3">
              <span
                className="inline-block w-2 h-2 rounded-full bg-blush-500"
                style={{ animation: 'pulse-glow 2s ease-out infinite' }}
              />
              Available · 2026
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display mt-6 text-[58px] md:text-[96px] leading-[0.95] text-blush-800">
              Maram <span className="display-italic text-gradient-rose">Khalid</span>
              <br />
              <span className="text-[42px] md:text-[68px] text-blush-700/85">Mohamed</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-7 flex items-center gap-4 text-blush-700">
              <span className="gold-rule" style={{ width: 28 }} />
              <span className="eyebrow">AI Engineer · Multi-Agent Architectures</span>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-7 text-lg md:text-xl text-blush-800/75 leading-relaxed max-w-xl font-light">
              I build intelligent systems where{' '}
              <span className="display-italic text-blush-600">agents collaborate</span>, models see, and language flows —
              from EEG-to-text decoding to production multi-agent orchestration for healthcare & NLP.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm tracking-wide">
                View Projects <Icon.arrow width={16} height={16} />
              </a>
              <a
                href="assets/Maram_Khalid_CV.pdf"
                download
                className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm tracking-wide"
              >
                <Icon.download width={16} height={16} /> Download CV
              </a>
              <a href="#contact" className="ml-1 text-sm text-blush-700 hover:text-blush-600 underline underline-offset-4 decoration-gold-400">
                Or say hello →
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-14 grid grid-cols-2 gap-6 max-w-sm">
              {[
                ['5+', 'Agent workflows shipped'],
                ['94%', 'Clinical CV accuracy'],
              ].map(([k, v]) => (
                <div key={v} style={{ textAlign: 'center' }}>
                  <div className="display text-[34px] md:text-[40px] text-gradient-rose leading-none">{k}</div>
                  <div className="mt-2 text-[11px] tracking-wider uppercase text-blush-700/60">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5 relative">
          <Reveal delay={200}>
            <div className="space-y-4">
              <div className="glass rounded-3xl p-6 relative overflow-hidden">
                <div
                  className="absolute -top-12 -right-12 w-44 h-44 rounded-full opacity-50"
                  style={{ background: 'radial-gradient(circle, rgba(241,168,189,0.5), transparent 70%)' }}
                />
                <div className="relative">
                  <div className="flex items-center gap-2 eyebrow">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full bg-blush-500"
                      style={{ animation: 'pulse-glow 2s ease-out infinite' }}
                    />
                    Currently
                  </div>
                  <div className="display mt-3 text-[26px] md:text-[30px] text-blush-800 leading-[1.1]">
                    Shipping <span className="display-italic text-gradient-rose">multi-agent</span> AI pipelines
                  </div>
                  <div className="mt-3 text-sm text-blush-800/70 leading-relaxed">
                    Production LangGraph orchestration on serverless AWS Lambda for the MyZesty platform.
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {['LangGraph', 'Python', 'FastAPI'].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/70 text-blush-700 hairline">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-3xl p-5 flex flex-col gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{ background: 'linear-gradient(135deg,#E380A0,#9F3F61)' }}
                  >
                    <Icon.pin width={16} height={16} />
                  </div>
                  <div>
                    <div className="eyebrow">Based in</div>
                    <div className="font-medium text-blush-800 mt-0.5">Cairo, Egypt</div>
                    <div className="text-[11px] text-blush-700/60 mt-0.5">UTC+2 · GMT</div>
                  </div>
                </div>
                <div className="glass rounded-3xl p-5 flex flex-col gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{ background: 'linear-gradient(135deg,#D4A574,#8E6A51)' }}
                  >
                    <Icon.spark width={16} height={16} />
                  </div>
                  <div>
                    <div className="eyebrow">Speaks</div>
                    <div className="font-medium text-blush-800 mt-0.5">Arabic · English</div>
                    <div className="text-[11px] text-blush-700/60 mt-0.5">Native · Fluent</div>
                  </div>
                </div>
              </div>

              <div className="glass-soft rounded-3xl p-5 flex items-center gap-4">
                <div
                  className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                  style={{ background: 'linear-gradient(135deg,#E5C9A8,#D4A574)' }}
                >
                  <Icon.sparkle width={20} height={20} />
                </div>
                <div className="min-w-0">
                  <div className="eyebrow">Graduation Honor · 2025</div>
                  <div className="text-blush-800 font-medium mt-0.5 leading-tight">
                    Brain Signals → Text · <span className="text-gradient-rose font-semibold">48% reconstruction</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blush-700/70">
        <span className="eyebrow" style={{ fontSize: 9 }}>Scroll</span>
        <span className="block w-px h-16 bg-gradient-to-b from-blush-400 to-transparent" />
      </div>
    </section>
  );
}
