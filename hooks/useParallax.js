'use client';
import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

export default function useParallax(multiplier = 1) {
  const targetRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef(null);

  const handleMouse = useCallback((e) => {
    mouseRef.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    };
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [handleMouse]);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const range = 20 * multiplier;

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
    return () => cancelAnimationFrame(rafRef.current);
  }, [multiplier]);

  return targetRef;
}
