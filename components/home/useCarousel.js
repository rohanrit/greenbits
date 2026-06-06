'use client';

import { useState, useCallback } from 'react';

export default function useCarousel(items) {
  const [idx, setIdx] = useState(0);
  const next = useCallback(() => setIdx((p) => (p + 1) % items.length), [items.length]);
  const prev = useCallback(() => setIdx((p) => (p - 1 + items.length) % items.length), [items.length]);
  return { idx, next, prev, setIdx };
}
