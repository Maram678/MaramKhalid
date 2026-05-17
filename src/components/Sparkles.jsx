import { useMemo } from 'react';
import Icon from './Icon.jsx';

export default function Sparkles({ count = 18 }) {
  const items = useMemo(() => (
    Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 6 + Math.random() * 10,
      delay: Math.random() * 4,
      dur: 2.4 + Math.random() * 2.8,
      color: Math.random() > 0.5 ? '#D4A574' : '#E380A0',
    }))
  ), [count]);

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {items.map((s) => (
        <div key={s.id} style={{
          position: 'absolute',
          top: `${s.top}%`,
          left: `${s.left}%`,
          width: s.size,
          height: s.size,
          color: s.color,
          animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
        }}>
          <Icon.sparkle width={s.size} height={s.size} />
        </div>
      ))}
    </div>
  );
}
