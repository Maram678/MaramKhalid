import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const EXPERIENCES = [
  {
    role: 'AI Instructor',
    org: 'National Telecommunication Institute (NTI)',
    place: 'Cairo, Egypt',
    period: 'May 2026 — Present',
    icon: Icon.cap,
    bullets: [
      'Teaching AI & machine learning fundamentals to early-career engineers at NTI.',
      'Designing hands-on labs covering deep learning, computer vision, and modern MLOps.',
      'Mentoring trainees through capstone projects from problem framing to deployment.',
    ],
    tags: ['Teaching', 'Curriculum Design', 'Mentorship'],
  },
  {
    role: 'Junior AI Engineer',
    org: 'Beyond App Groups',
    place: 'Cairo, Egypt · Full-Time',
    period: 'Sep 2025 — Mar 2026',
    icon: Icon.brain,
    bullets: [
      'Designed & deployed production multi-agent orchestration with LangGraph hybrid reasoning pipelines.',
      'Integrated AI features into the MyZesty platform alongside backend & product teams.',
      'Shipped production AI services on serverless AWS Lambda.',
    ],
    tags: ['LangGraph', 'AWS Lambda', 'Multi-Agent', 'Python'],
  },
  {
    role: 'AI Engineer Intern',
    org: 'National Telecommunication Institute (NTI)',
    place: 'Cairo, Egypt',
    period: 'Jul 2025 — Sep 2025',
    icon: Icon.eye,
    bullets: [
      '420-hour advanced program: production CV systems.',
      'Built full-stack CV pipelines — YOLOv8, SSD, U-Net, Mask R-CNN, ViT.',
      'Deployed with FastAPI + Docker following modern MLOps practices.',
    ],
    tags: ['YOLOv8', 'ViT', 'FastAPI', 'Docker', 'MLOps'],
  },
  {
    role: 'Freelance AI Engineer',
    org: 'Upwork · Khamsat',
    place: 'Self-employed',
    period: 'Feb 2025 — Present',
    icon: Icon.flask,
    bullets: [
      'Computer vision for a dental clinic — caries object detection from clinical images.',
      'Diabetic foot ulcer classifier integrated into the “Rafiqi” patient chatbot.',
      'Owned the full ML lifecycle: preprocessing → training → evaluation → delivery.',
    ],
    tags: ['Healthcare AI', 'Object Detection', 'Classification'],
  },
  {
    role: 'Computer Vision Intern',
    org: 'NTI · Nasr City',
    place: 'Cairo, Egypt',
    period: 'Jan 2025 — Feb 2025',
    icon: Icon.cpu,
    bullets: [
      'Dental Condition Classification System — caries, ulcers & more.',
      'Fine-tuned ResNet18 in PyTorch achieving 94% accuracy.',
    ],
    tags: ['ResNet18', 'PyTorch', 'Medical Imaging'],
  },
  {
    role: 'AI Instructor (Volunteer)',
    org: 'IEEE & MSP',
    place: 'Helwan University',
    period: 'Oct 2022 — Jun 2024',
    icon: Icon.cap,
    bullets: [
      'Led workshops in ML, deep learning, and Python for student communities.',
      'Mentored students through technical competitions & end-to-end AI projects.',
    ],
    tags: ['Teaching', 'Mentorship', 'Community'],
  },
];

function ExperienceCard({ item, align }) {
  const I = item.icon;
  return (
    <div className={`glass rounded-3xl p-7 relative overflow-hidden group ${align === 'right' ? 'md:ml-auto' : ''}`}>
      <div
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30 transition-opacity group-hover:opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(241,168,189,0.6), transparent 70%)' }}
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
              style={{ background: 'linear-gradient(135deg,#E380A0,#9F3F61)' }}
            >
              <I width={18} height={18} />
            </div>
            <div>
              <div className="display text-2xl text-blush-800 leading-tight">{item.role}</div>
              <div className="text-sm text-blush-600 font-medium mt-0.5">{item.org}</div>
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="text-[11px] tracking-widest uppercase text-blush-700/60">{item.period}</div>
            <div className="text-[12px] text-blush-700/70 mt-0.5">{item.place}</div>
          </div>
        </div>

        <ul className="mt-5 space-y-2 text-[15px] text-blush-800/80 leading-relaxed">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span
                className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full"
                style={{ background: 'linear-gradient(135deg,#D4A574,#E380A0)' }}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/70 text-blush-700 hairline">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineRow({ item, index }) {
  const left = index % 2 === 0;
  return (
    <Reveal delay={index * 80} className="relative">
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className={`${left ? '' : 'invisible'}`}>{left && <ExperienceCard item={item} align="right" />}</div>
          <div className={`${!left ? '' : 'invisible'}`}>{!left && <ExperienceCard item={item} align="left" />}</div>
        </div>
        <div className="absolute left-1/2 top-8 -translate-x-1/2">
          <div className="timeline-dot" />
        </div>
      </div>
      <div className="md:hidden pl-12">
        <div className="absolute left-[12px] top-3 timeline-dot" />
        <ExperienceCard item={item} align="left" />
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          eyebrow="Experience"
          title="A timeline of"
          italic="quiet shipping"
          blurb="From freelance clinics to production agent systems — a path through healthcare AI, computer vision, and the orchestration of language models that actually do things."
        />

        <div className="relative mt-16">
          <div className="timeline-line" />
          <div className="space-y-12 md:space-y-16">
            {EXPERIENCES.map((e, i) => (
              <TimelineRow key={e.role + e.org} item={e} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
