export function generateBlobPath(cx = 0, cy = 0, avgRadius = 100, numPoints = 8, variance = 0.35) {
  const angles = [];
  const radii = [];

  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 2 - Math.PI / 2;
    const r = avgRadius * (1 + (Math.random() - 0.5) * variance * 2);
    angles.push(angle);
    radii.push(r);
  }

  const points = angles.map((angle, i) => ({
    x: cx + radii[i] * Math.cos(angle),
    y: cy + radii[i] * Math.sin(angle),
  }));

  let d = '';
  for (let i = 0; i <= points.length; i++) {
    const p = points[i % points.length];
    const prev = points[(i - 1 + points.length) % points.length];
    const next = points[(i + 1) % points.length];

    if (i === 0) {
      d += `M ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
    } else {
      const cp1x = (prev.x + p.x) / 2;
      const cp1y = (prev.y + p.y) / 2;
      const cp2x = (p.x + next.x) / 2;
      const cp2y = (p.y + next.y) / 2;
      d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
    }
  }

  return d;
}

export function generateBlobVariants(count = 5, cx = 0, cy = 0, avgRadius = 100) {
  const variants = [];
  for (let i = 0; i < count; i++) {
    const variance = 0.25 + Math.random() * 0.25;
    variants.push(generateBlobPath(cx, cy, avgRadius, 8, variance));
  }
  return variants;
}

export const BLOB_COLORS = [
  '#7C3AED',
  '#8B5CF6',
  '#A855F7',
  '#06B6D4',
  '#0EA5E9',
  '#EC4899',
];

export const VARIANT_CONFIGS = {
  hero: {
    blobCount: 8,
    glowIntensity: 1,
    animSpeed: 1,
    opacity: 0.25,
    blur: 150,
    size: 1.2,
  },
  features: {
    blobCount: 5,
    glowIntensity: 0.6,
    animSpeed: 0.7,
    opacity: 0.18,
    blur: 120,
    size: 0.9,
  },
  pricing: {
    blobCount: 4,
    glowIntensity: 0.4,
    animSpeed: 0.5,
    opacity: 0.12,
    blur: 100,
    size: 0.7,
  },
  cta: {
    blobCount: 6,
    glowIntensity: 0.9,
    animSpeed: 0.8,
    opacity: 0.22,
    blur: 130,
    size: 1.1,
  },
  footer: {
    blobCount: 3,
    glowIntensity: 0.3,
    animSpeed: 0.4,
    opacity: 0.08,
    blur: 80,
    size: 0.5,
  },
};
