'use client';

export default function NoiseOverlay({ opacity = 0.02 }) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[99] select-none"
      aria-hidden="true"
      style={{
        opacity,
        mixBlendMode: 'overlay',
      }}
    >
      <svg className="h-full w-full" aria-hidden="true">
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#noise-filter)"
          opacity="1"
        />
      </svg>
      <style jsx>{`
        div {
          animation: noiseShift 4s steps(4) infinite;
        }
        @keyframes noiseShift {
          0% { transform: translate(0, 0); }
          25% { transform: translate(-1px, 1px); }
          50% { transform: translate(1px, -1px); }
          75% { transform: translate(-1px, -1px); }
        }
      `}</style>
    </div>
  );
}
