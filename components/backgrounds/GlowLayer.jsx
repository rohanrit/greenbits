'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function GlowLayer({
  colors = ['rgba(124,58,237,0.25)', 'rgba(6,182,212,0.2)', 'rgba(236,72,153,0.18)'],
  intensity = 1,
  animDuration = 40,
  blur = 200,
}) {
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        x: `random(-80, 80)`,
        y: `random(-60, 60)`,
        scale: `random(0.9, 1.1)`,
        duration: animDuration + i * 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 3,
      });
    });
  }, [animDuration]);

  const sizes = [800, 600, 1000];

  return (
    <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
      {colors.map((color, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className="absolute rounded-full"
          style={{
            width: sizes[i] * intensity,
            height: sizes[i] * intensity,
            left: `${20 + i * 25}%`,
            top: `${15 + i * 20}%`,
            marginLeft: -(sizes[i] * intensity) / 2,
            marginTop: -(sizes[i] * intensity) / 2,
            background: `radial-gradient(circle, ${color}, transparent 70%)`,
            filter: `blur(${blur}px)`,
            willChange: 'transform',
            transform: 'translate3d(0,0,0)',
          }}
        />
      ))}
    </div>
  );
}
