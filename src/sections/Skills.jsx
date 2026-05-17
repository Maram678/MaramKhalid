import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const SKILL_CATEGORIES = [
  {
    name: 'AI & Deep Learning',
    icon: Icon.brain,
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Transformers', 'Scikit-learn', 'Hugging Face'],
  },
  {
    name: 'Computer Vision',
    icon: Icon.eye,
    items: ['YOLOv8', 'SSD', 'U-Net', 'Mask R-CNN', 'ViT', 'VAE', 'Pose Estimation'],
  },
  {
    name: 'Natural Language',
    icon: Icon.spark,
    items: ['T5', 'BART', 'BERT', 'RAG', 'Sentiment Analysis', 'Text Classification', 'Web Scraping'],
  },
  {
    name: 'MLOps & Deployment',
    icon: Icon.cloud,
    items: ['Docker', 'FastAPI', 'AWS Lambda', 'LangGraph', 'Streamlit', 'Ngrok', 'Git'],
  },
  {
    name: 'Languages',
    icon: Icon.cpu,
    items: ['Python', 'C / C++', 'Java', 'JavaScript', 'SQL'],
  },
  {
    name: 'Data & Analytics',
    icon: Icon.flask,
    items: ['Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'MySQL', 'Power BI', 'EDA'],
  },
];

const MARQUEE_TERMS = ['Multi-Agent', 'Computer Vision', 'NLP', 'Healthcare AI', 'LangGraph', 'Transformers'];

export default function Skills() {
  return (
    <section id="skills" className="section relative py-20 md:py-24">
      <div className="relative overflow-hidden mb-16 py-3" aria-hidden>
        <div className="flex marquee-track gap-12 whitespace-nowrap text-blush-300/60 display text-6xl md:text-8xl italic">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-12">
              {MARQUEE_TERMS.map((term) => (
                <span key={term} className="flex gap-12">
                  <span>{term}</span>
                  <span>·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          eyebrow="Skills · Toolkit"
          title="The kit I"
          italic="reach for"
          blurb="A working toolkit assembled across production roles, internships and graduation research — heavy on PyTorch, Transformers and modern orchestration."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((c, i) => {
            const I = c.icon;
            return (
              <Reveal key={c.name} delay={i * 80}>
                <div className="glass rounded-3xl p-6 h-full relative overflow-hidden">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                      style={{ background: 'linear-gradient(135deg,#E380A0,#9F3F61)' }}
                    >
                      <I width={18} height={18} />
                    </div>
                    <h3 className="display text-2xl text-blush-800">{c.name}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {c.items.map((it) => (
                      <span
                        key={it}
                        className="pill px-3 py-1.5 rounded-full text-[12.5px] font-medium text-blush-700 bg-white/70 hairline relative overflow-hidden"
                      >
                        <span className="relative z-10">{it}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
