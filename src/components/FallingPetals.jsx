import { useMemo } from 'react';
import Petal from './Petal.jsx';

export default function FallingPetals({ count = 22 }) {
  const items = useMemo(() => {
    const colors = ['#F1A8BD', '#F8CAD6', '#E380A0', '#FDEBEF', '#E5C9A8'];
    return Array.from({ length: count }, (_, i) => {
      const size = 10 + Math.random() * 22;
      const left = Math.random() * 100;
      const dur = 18 + Math.random() * 22;
      const delay = -Math.random() * dur;
      const op = 0.45 + Math.random() * 0.45;
      const xMid = (Math.random() - 0.5) * 80;
      const xEnd = (Math.random() - 0.5) * 120;
      const color = colors[i % colors.length];
      const swayDur = 4 + Math.random() * 5;
      return { size, left, dur, delay, op, xMid, xEnd, color, swayDur, id: i };
    });
  }, [count]);

  return (
    <div className="petal-layer" aria-hidden="true">
      {items.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: '-10vh',
            left: `${p.left}%`,
            opacity: 0,
            animation: `fall ${p.dur}s linear ${p.delay}s infinite`,
            '--op': p.op,
            '--x-mid': `${p.xMid}px`,
            '--x-end': `${p.xEnd}px`,
          }}
        >
          <div style={{ animation: `sway ${p.swayDur}s ease-in-out infinite alternate` }}>
            <Petal size={p.size} color={p.color} />
          </div>
        </div>
      ))}
    </div>
  );
}
