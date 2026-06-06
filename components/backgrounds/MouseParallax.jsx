'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MouseParallax({
  children,
  intensity = 1,
  className = '',
}) {
  const layerRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    window.addEventListener('mousemove', handleMouse);

    const el = layerRef.current;
    if (!el) return;

    const range = 30 * intensity;

    function tick() {
      const mx = (mouseRef.current.x - 0.5) * 2;
      const my = (mouseRef.current.y - 0.5) * 2;
      gsap.set(el, {
        x: mx * range,
        y: my * range,
        overwrite: 'auto',
      });
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(rafRef.current);
    };
  }, [intensity]);

  return (
    <div
      ref={layerRef}
      className={`pointer-events-none absolute inset-0 select-none ${className}`}
      aria-hidden="true"
      style={{
        willChange: 'transform',
        transform: 'translate3d(0,0,0)',
      }}
    >
      {children}
    </div>
  );
}
