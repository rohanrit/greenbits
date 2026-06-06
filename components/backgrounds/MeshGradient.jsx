'use client';

export default function MeshGradient({ intensity = 1, className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 select-none ${className}`}
      aria-hidden="true"
      style={{ mixBlendMode: 'screen' }}
    >
      <div
        className="absolute h-[60%] w-[60%] rounded-full"
        style={{
          left: '10%',
          top: '5%',
          background: `radial-gradient(circle at 30% 40%, rgba(124,58,237,${0.15 * intensity}), transparent 70%)`,
          filter: 'blur(100px)',
        }}
      />
      <div
        className="absolute h-[50%] w-[50%] rounded-full"
        style={{
          right: '5%',
          bottom: '10%',
          background: `radial-gradient(circle at 70% 60%, rgba(6,182,212,${0.12 * intensity}), transparent 70%)`,
          filter: 'blur(100px)',
        }}
      />
      <div
        className="absolute h-[40%] w-[40%] rounded-full"
        style={{
          left: '45%',
          top: '35%',
          background: `radial-gradient(circle at 50% 50%, rgba(236,72,153,${0.1 * intensity}), transparent 70%)`,
          filter: 'blur(100px)',
        }}
        />
    </div>
  );
}
