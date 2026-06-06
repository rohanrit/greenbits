'use client';
import { useEffect, useRef, useMemo, useId } from 'react';
import gsap from 'gsap';
import { generateBlobVariants } from '@/lib/blobGenerator';

export default function FloatingBlob({
  color = '#3ab54b',
  size = 300,
  blur = 120,
  opacity = 0.15,
  duration = 12,
  delay = 0,
  floatAmplitude = 1,
  style = {},
}) {
  const pathRef = useRef(null);
  const wrapperRef = useRef(null);
  const uid = useId();

  const variants = useMemo(
    () => generateBlobVariants(5, 0, 0, size * 0.5),
    [size],
  );

  const morphDuration = useMemo(
    () => 8 + Math.random() * 10,
    [],
  );

  useEffect(() => {
    const path = pathRef.current;
    const wrapper = wrapperRef.current;
    if (!path || !wrapper) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    variants.forEach((d) => {
      tl.to(
        path,
        { duration: morphDuration, attr: { d }, ease: 'sine.inOut' },
        '>',
      );
    });

    const floatX = 200 * floatAmplitude;
    const floatY = 150 * floatAmplitude;
    const floatDur = 20 + Math.random() * 25;

    gsap.to(wrapper, {
      x: `random(-${floatX}, ${floatX})`,
      y: `random(-${floatY}, ${floatY})`,
      scale: `random(0.92, 1.08)`,
      rotation: `random(-8, 8)`,
      duration: floatDur,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay,
    });

    return () => {
      tl.kill();
      gsap.killTweensOf(wrapper);
    };
  }, [variants, morphDuration, floatAmplitude, delay]);

  const gradId = `bg-${uid.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none absolute select-none"
      style={{
        width: size,
        height: size,
        ...style,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        filter: `blur(${blur}px)`,
        opacity,
        willChange: 'transform',
        transform: 'translate3d(0,0,0)',
      }}
      aria-hidden="true"
    >
      <svg
        viewBox={`${-size} ${-size} ${size * 2} ${size * 2}`}
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d={variants[0]}
          fill={`url(#${gradId})`}
        />
      </svg>
    </div>
  );
}
