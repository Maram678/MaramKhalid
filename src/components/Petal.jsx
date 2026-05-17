import { useMemo } from 'react';

let _petalIdCounter = 0;

export default function Petal({ size = 16, color = '#F1A8BD', spin = true }) {
  const id = useMemo(() => `r${++_petalIdCounter}`, []);
  const dark = '#6E2A45';
  const mid  = '#9F3F61';
  const light = '#FFFFFF';

  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'inline-block',
        animation: spin ? `orbit-slow ${30 + (size % 7) * 2}s linear infinite` : undefined,
        filter: 'drop-shadow(0 3px 6px rgba(110, 42, 69, 0.32))',
      }}
    >
      <svg width={size} height={size} viewBox="-50 -50 100 100" fill="none">
        <defs>
          <radialGradient id={`po-${id}`} cx="50%" cy="30%" r="80%">
            <stop offset="0%"   stopColor={color}  stopOpacity="0.95"/>
            <stop offset="55%"  stopColor={color}  stopOpacity="1"/>
            <stop offset="100%" stopColor={dark}   stopOpacity="0.95"/>
          </radialGradient>
          <radialGradient id={`pi-${id}`} cx="45%" cy="25%" r="75%">
            <stop offset="0%"   stopColor={light}  stopOpacity="0.95"/>
            <stop offset="40%"  stopColor={color}  stopOpacity="1"/>
            <stop offset="100%" stopColor={mid}    stopOpacity="0.9"/>
          </radialGradient>
          <radialGradient id={`pc-${id}`} cx="40%" cy="35%" r="65%">
            <stop offset="0%"   stopColor={light}  stopOpacity="0.9"/>
            <stop offset="55%"  stopColor={mid}/>
            <stop offset="100%" stopColor={dark}/>
          </radialGradient>
          <radialGradient id={`pg-${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor={light} stopOpacity="0.5"/>
            <stop offset="100%" stopColor={light} stopOpacity="0"/>
          </radialGradient>
        </defs>

        <g>
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 360) / 8;
            return (
              <path key={`o${i}`}
                d="M 0 -2 C -14 -10, -18 -28, 0 -42 C 18 -28, 14 -10, 0 -2 Z"
                fill={`url(#po-${id})`}
                stroke={dark} strokeOpacity="0.28" strokeWidth="0.6"
                transform={`rotate(${angle})`}
              />
            );
          })}
        </g>

        <g transform="rotate(22.5)">
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 360) / 6;
            return (
              <path key={`m${i}`}
                d="M 0 -1 C -10 -8, -13 -22, 0 -32 C 13 -22, 10 -8, 0 -1 Z"
                fill={`url(#pi-${id})`}
                stroke={dark} strokeOpacity="0.25" strokeWidth="0.5"
                transform={`rotate(${angle})`}
              />
            );
          })}
        </g>

        <g transform="rotate(45)">
          {Array.from({ length: 4 }).map((_, i) => {
            const angle = (i * 360) / 4;
            return (
              <path key={`i${i}`}
                d="M 0 0 C -6 -5, -8 -16, 0 -22 C 8 -16, 6 -5, 0 0 Z"
                fill={`url(#pi-${id})`}
                stroke={dark} strokeOpacity="0.3" strokeWidth="0.5"
                transform={`rotate(${angle})`}
              />
            );
          })}
        </g>

        <g>
          <circle r="9" fill={`url(#pc-${id})`} stroke={dark} strokeOpacity="0.35" strokeWidth="0.5"/>
          <path d="M -4 -2 Q 0 -6 4 -2 Q 0 4 -4 -2 Z" fill={dark} opacity="0.55"/>
          <path d="M -2 -1 Q 0 -3 2 -1" stroke={light} strokeWidth="0.8" strokeOpacity="0.8" fill="none" strokeLinecap="round"/>
          <circle cx="-2" cy="-3" r="1.2" fill={light} opacity="0.85"/>
        </g>

        <circle r="50" fill={`url(#pg-${id})`} opacity="0.4"/>
      </svg>
    </div>
  );
}
