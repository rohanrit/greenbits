'use client';
import { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { VARIANT_CONFIGS } from '@/lib/blobGenerator';
import FloatingBlob from './FloatingBlob';
import GlowLayer from './GlowLayer';
import MeshGradient from './MeshGradient';
import MouseParallax from './MouseParallax';

export default function SectionBackground({
  variant = 'hero',
  className,
  dark = true,
}) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const config = VARIANT_CONFIGS[variant] || VARIANT_CONFIGS.hero;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const blobColors = ['#3ab54b', '#45c65a', '#56d96d', '#2d8a3b', '#58b368', '#82d492'];

  const glowColors = [
    `rgba(58,181,75,${0.25 * config.glowIntensity})`,
    `rgba(69,198,90,${0.2 * config.glowIntensity})`,
    `rgba(45,138,59,${0.18 * config.glowIntensity})`,
  ];

  const positions = [
    { left: '10%', top: '15%' },
    { left: '75%', top: '10%' },
    { left: '60%', top: '65%' },
    { left: '20%', top: '75%' },
    { left: '85%', top: '70%' },
    { left: '40%', top: '20%' },
    { left: '30%', top: '45%' },
    { left: '70%', top: '40%' },
  ];

  return (
    <div
      ref={sectionRef}
      className={clsx('pointer-events-none absolute inset-0 select-none overflow-hidden', className)}
      aria-hidden="true"
      style={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.95,
        filter: visible ? 'blur(0)' : 'blur(30px)',
        transition: 'opacity 1.2s ease, scale 1.2s ease, filter 1.2s ease',
        zIndex: 0,
      }}
    >
      {dark && (
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse at 20% 50%, #07111f 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, #050816 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, #091321 0%, transparent 50%),
            #030712
          `,
        }} />
      )}

      <GlowLayer colors={glowColors} intensity={config.glowIntensity} blur={150 + config.blur * 0.3} />

      <MouseParallax intensity={0.3 * config.glowIntensity}>
        <MeshGradient intensity={config.glowIntensity} />
      </MouseParallax>

      {Array.from({ length: config.blobCount }).map((_, i) => {
        const isLarge = i < Math.ceil(config.blobCount / 3);
        const size = (isLarge ? 400 : 260) * config.size;
        const bSize = size * 0.5;
        const blur = config.blur * (isLarge ? 1.2 : 0.8);
        const pos = positions[i % positions.length];

        return (
          <FloatingBlob
            key={i}
            color={blobColors[i % blobColors.length]}
            size={bSize}
            blur={blur}
            opacity={config.opacity}
            duration={10 + (i % 5) * 3}
            delay={i * 1.2}
            floatAmplitude={0.5 + (i % 4) * 0.25}
            style={{ left: pos.left, top: pos.top }}
          />
        );
      })}
    </div>
  );
}
