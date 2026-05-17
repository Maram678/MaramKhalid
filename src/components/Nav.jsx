import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import Petal from './Petal.jsx';

const LINKS = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Contact', '#contact'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.35, rootMargin: '-20% 0px -40% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'nav-blur py-3' : 'py-5'}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12"
            style={{ background: 'linear-gradient(135deg,#E380A0,#9F3F61)' }}
          >
            <Petal size={18} color="#FFFFFF" />
          </div>
          <div className="leading-none">
            <div className="display text-xl text-blush-800">
              Maram <span className="display-italic">K.</span>
            </div>
            <div className="text-[9.5px] tracking-[0.25em] uppercase text-blush-700/65 mt-0.5">AI Engineer</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1 glass-soft rounded-full px-1.5 py-1.5">
          {LINKS.map(([label, href]) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                className={`relative px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-blush-700 hover:text-blush-600'
                }`}
              >
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-full -z-0"
                    style={{
                      background: 'linear-gradient(135deg,#E380A0,#9F3F61)',
                      boxShadow: '0 8px 20px -8px rgba(159,63,97,0.55)',
                    }}
                  />
                )}
                <span className="relative">{label}</span>
              </a>
            );
          })}
        </nav>

        <a
          href="assets/Maram_Khalid_CV.pdf"
          download
          className="hidden md:inline-flex btn-primary items-center gap-2 px-5 py-2.5 rounded-full text-[13px] tracking-wide"
        >
          <Icon.download width={14} height={14} /> CV
        </a>

        <button
          className="md:hidden btn-ghost rounded-full p-2.5"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-6 mt-3 glass rounded-2xl p-4 flex flex-col">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-xl text-blush-800 hover:bg-white/60 text-[15px]"
            >
              {label}
            </a>
          ))}
          <a
            href="assets/Maram_Khalid_CV.pdf"
            download
            className="mt-2 btn-primary inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm"
          >
            <Icon.download width={14} height={14} /> Download CV
          </a>
        </div>
      )}
    </header>
  );
}
