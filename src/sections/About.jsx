import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const FOCUS_AREAS = [
  { icon: Icon.brain, label: 'Multi-Agent Systems', blurb: 'LangGraph · hybrid reasoning' },
  { icon: Icon.eye,   label: 'Computer Vision',     blurb: 'YOLOv8 · ViT · U-Net' },
  { icon: Icon.cpu,   label: 'Natural Language',    blurb: 'T5 · BART · Transformers' },
  { icon: Icon.spark, label: 'Deep Learning',       blurb: 'PyTorch · TensorFlow' },
];

const TAGS = ['Python', 'PyTorch', 'LangGraph', 'Transformers', 'FastAPI', 'Docker', 'AWS Lambda'];

export default function About() {
  return (
    <section id="about" className="section relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <SectionHeader
            eyebrow="About"
            title="A quiet obsession with"
            italic="thinking machines"
          />

          <Reveal delay={120}>
            <div className="mt-7 space-y-5 text-blush-800/80 leading-relaxed text-[17px] max-w-md">
              <p>
                I'm Maram — an AI Engineer working at the intersection of{' '}
                <span className="text-blush-600 display-italic">multi-agent orchestration</span>,
                computer vision, and language. I build production-grade ML systems where models don't just predict,
                they <em>collaborate</em>.
              </p>
              <p>
                My work spans healthcare diagnostics (dental caries, diabetic foot ulcers), brain–computer
                interfaces (EEG-to-text decoding), and serverless agentic platforms shipped on AWS Lambda.
                I care about elegance in pipelines the way a florist cares about a bouquet.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span key={t} className="pill px-3.5 py-1.5 rounded-full text-[12px] font-medium text-blush-700 hairline bg-white/60">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <div className="grid sm:grid-cols-2 gap-5">
            {FOCUS_AREAS.map((a, i) => {
              const I = a.icon;
              return (
                <Reveal key={a.label} delay={120 + i * 90}>
                  <div className="glass rounded-3xl p-6 h-full relative overflow-hidden group">
                    <div
                      className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-40"
                      style={{ background: 'radial-gradient(circle, rgba(227,128,160,0.5), transparent 70%)' }}
                    />
                    <div className="relative">
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center text-white"
                        style={{ background: 'linear-gradient(135deg,#E380A0,#9F3F61)', boxShadow: '0 8px 22px -8px rgba(159,63,97,0.6)' }}
                      >
                        <I width={20} height={20} />
                      </div>
                      <div className="display mt-5 text-2xl text-blush-800">{a.label}</div>
                      <div className="mt-1 text-sm text-blush-700/70">{a.blurb}</div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={500}>
            <div className="mt-6 glass-soft rounded-3xl p-6 flex items-center gap-5">
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#E5C9A8,#D4A574)' }}
              >
                <Icon.sparkle width={20} height={20} className="text-white" />
              </div>
              <div>
                <div className="display text-xl text-blush-800">Recently shipped</div>
                <div className="text-sm text-blush-700/75 mt-0.5">
                  Multi-agent orchestration pipelines for <span className="text-blush-600 font-medium">MyZesty</span> ·
                  serverless AWS Lambda · 5+ workflows in production.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
