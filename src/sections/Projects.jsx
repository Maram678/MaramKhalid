import Icon from '../components/Icon.jsx';
import Petal from '../components/Petal.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const PROJECTS = [
  {
    title: 'Genie Edit',
    cat: 'Agentic Systems',
    blurb: 'Multi-agent AI orchestrating 5+ automated workflows that turn natural-language input into structured editing — cutting ~15 manual clicks down to a single prompt.',
    tags: ['LangGraph', 'LLM Agents', 'Python', 'Orchestration'],
    icon: Icon.brain,
    metric: { k: '15→1', v: 'clicks per task' },
    visual: 'agents',
  },
  {
    title: 'Brain Signals → Text',
    cat: 'NLP · Signal Processing',
    blurb: 'End-to-end EEG-to-text decoding on the ZUCO dataset using T5 & BART transformers — with sentiment classification directly from brain signals.',
    tags: ['T5', 'BART', 'EEG', 'PyTorch', 'Transformers'],
    icon: Icon.spark,
    metric: { k: '48%', v: 'reconstruction (SOTA+)' },
    visual: 'wave',
  },
  {
    title: 'Dental Caries Detection',
    cat: 'Computer Vision · Healthcare',
    blurb: 'Object detection model identifying oral disease (caries) from dental images. Shipped for a clinic to assist clinical decision support.',
    tags: ['YOLO', 'Object Detection', 'PyTorch', 'Healthcare'],
    icon: Icon.eye,
    metric: { k: 'Clinic', v: 'in production' },
    visual: 'grid',
  },
  {
    title: 'Diabetic Foot Ulcer',
    cat: 'Computer Vision · Healthcare',
    blurb: 'CNN-based classifier integrated into the “Rafiqi” chatbot, helping patients understand and triage diabetic foot ulcer conditions.',
    tags: ['CNN', 'Classification', 'Chatbot Integration'],
    icon: Icon.flask,
    metric: { k: 'Rafiqi', v: 'patient-facing' },
    visual: 'petal',
  },
  {
    title: 'Dental Condition Classifier',
    cat: 'Medical Imaging',
    blurb: 'Fine-tuned ResNet18 in PyTorch on a multi-class dental dataset (caries, ulcers & more) — built during a structured CV internship at NTI.',
    tags: ['ResNet18', 'PyTorch', 'Multi-class'],
    icon: Icon.cpu,
    metric: { k: '94%', v: 'accuracy' },
    visual: 'grid',
  },
  {
    title: 'Air Quality Prediction',
    cat: 'Data Science',
    blurb: 'Deep neural-network regression predicting air-pollution levels from temperature, humidity, wind speed & emissions data.',
    tags: ['DNN', 'Regression', 'Pandas'],
    icon: Icon.cloud,
    metric: { k: 'DNN', v: 'regression' },
    visual: 'wave',
  },
];

function ProjectVisual({ kind }) {
  if (kind === 'agents') {
    return (
      <svg viewBox="0 0 240 140" className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="nodec" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E380A0" />
          </radialGradient>
        </defs>
        <g stroke="rgba(159,63,97,0.35)" strokeWidth="1" strokeDasharray="2 3" fill="none">
          <path d="M40 70 Q 80 30 120 70 T 200 70" />
          <path d="M40 70 Q 80 110 120 70" />
          <path d="M120 70 L 200 30 M 120 70 L 200 110" />
        </g>
        {[[40, 70, 12], [120, 70, 16], [200, 30, 10], [200, 70, 12], [200, 110, 10]].map(([cx, cy, r], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={r + 6} fill="rgba(241,168,189,0.3)" />
            <circle cx={cx} cy={cy} r={r} fill="url(#nodec)" stroke="#9F3F61" strokeWidth="0.8" />
          </g>
        ))}
      </svg>
    );
  }
  if (kind === 'wave') {
    return (
      <svg viewBox="0 0 240 140" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="wg" x1="0" x2="1">
            <stop offset="0%" stopColor="#9F3F61" />
            <stop offset="100%" stopColor="#D4A574" />
          </linearGradient>
        </defs>
        {Array.from({ length: 5 }).map((_, i) => (
          <path
            key={i}
            d={`M 0 ${70 + i * 4} Q 30 ${30 + i * 6} 60 ${70 + i * 4} T 120 ${70 + i * 4} T 180 ${70 + i * 4} T 240 ${70 + i * 4}`}
            stroke="url(#wg)"
            strokeWidth={1.2 - i * 0.15}
            fill="none"
            opacity={0.7 - i * 0.12}
          />
        ))}
        <text x="14" y="22" fill="#9F3F61" fontFamily="DM Mono" fontSize="9" letterSpacing="2">
          EEG · CH 1–8
        </text>
      </svg>
    );
  }
  if (kind === 'grid') {
    return (
      <svg viewBox="0 0 240 140" className="absolute inset-0 w-full h-full">
        <g stroke="rgba(159,63,97,0.25)" strokeWidth="0.6" fill="none">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="140" />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 28} x2="240" y2={i * 28} />
          ))}
        </g>
        <rect x="70" y="40" width="60" height="40" fill="none" stroke="#9F3F61" strokeWidth="1.4" rx="4" />
        <rect x="140" y="60" width="34" height="30" fill="none" stroke="#9F3F61" strokeWidth="1.4" rx="4" />
        <rect x="40" y="84" width="28" height="22" fill="none" stroke="#9F3F61" strokeWidth="1.4" rx="4" />
        <circle cx="100" cy="60" r="2" fill="#9F3F61" />
        <circle cx="157" cy="75" r="2" fill="#9F3F61" />
        <circle cx="54" cy="95" r="2" fill="#9F3F61" />
      </svg>
    );
  }
  return (
    <div className="absolute inset-0">
      {[
        { t: 20, l: 25, s: 48, c: '#E380A0' },
        { t: 40, l: 55, s: 34, c: '#F1A8BD' },
        { t: 60, l: 18, s: 28, c: '#D4A574' },
        { t: 30, l: 75, s: 24, c: '#FDEBEF' },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute"
          style={{ top: `${p.t}%`, left: `${p.l}%`, animation: `sway ${4 + i}s ease-in-out infinite alternate` }}
        >
          <Petal size={p.s} color={p.c} />
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ p }) {
  const I = p.icon;
  return (
    <article className="project-card glass rounded-3xl p-6 h-full flex flex-col relative overflow-hidden">
      <div className="project-glow absolute inset-0 pointer-events-none" />
      <div
        className="relative h-40 rounded-2xl overflow-hidden mb-5"
        style={{ background: 'linear-gradient(135deg, #FDEBEF 0%, #F8CAD6 60%, #F2E2CE 100%)' }}
      >
        <ProjectVisual kind={p.visual} />
        <div className="absolute top-3 left-3 glass-soft rounded-full px-3 py-1 text-[10px] tracking-widest uppercase text-blush-700">
          {p.cat}
        </div>
        <div
          className="absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center text-white"
          style={{ background: 'linear-gradient(135deg,#E380A0,#9F3F61)' }}
        >
          <I width={16} height={16} />
        </div>
      </div>

      <h3 className="display text-2xl text-blush-800 leading-tight">{p.title}</h3>
      <p className="mt-2 text-[14px] text-blush-800/70 leading-relaxed flex-1">{p.blurb}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span key={t} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/70 text-blush-700 hairline">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 pt-5 border-t border-blush-200/40 flex items-center justify-between">
        <div>
          <div className="display text-[26px] text-gradient-rose leading-none">{p.metric.k}</div>
          <div className="text-[10px] tracking-widest uppercase text-blush-700/60 mt-1">{p.metric.v}</div>
        </div>
        <button className="btn-ghost inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-medium">
          View Details <Icon.arrow width={12} height={12} />
        </button>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader
            eyebrow="Selected Work"
            title="Projects, picked"
            italic="with care"
            blurb="A small garden of things I've built — from production multi-agent systems to brain-computer interfaces and clinical computer vision."
          />
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
