'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useInterval } from '@/hooks/useInterval';
import { debounce } from '@/utils/debounce';

const BACKGROUND_CHARACTERS = ' *,      ./0!8#X~;$\\}%'.replaceAll(' ', '\u00A0');
const POP_COLORS = ["#a70947", "#FF0000", "#FFA500", "#FFE135", "#008000", "#131836", "#1E90FF"];
const BASE_COLOR = "rgba(23, 23, 23, 0.02)";

type Cell = { ch: string };

function randChar() {
  return BACKGROUND_CHARACTERS[
    Math.floor(Math.random() * BACKGROUND_CHARACTERS.length)
  ];
}

export function GlyphBackground() {
  const [mounted, setMounted] = useState(false);
  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);
  const [cells, setCells] = useState<Cell[]>([]);

  const calculateBackground = useCallback(() => {
    if (typeof window === 'undefined') return;

    const widthPx = window.innerWidth;
    const heightPx = window.innerHeight;
    const chWidthPx = 8;
    const emHeightPx = 26;

    const newCols = Math.ceil(widthPx / chWidthPx);
    const newRows = Math.ceil(heightPx / emHeightPx);

    const base: Cell[] = Array.from({ length: newCols * newRows }, () => ({ ch: randChar() }));

    setCols(newCols);
    setRows(newRows);
    setCells(base);
  }, []);

  const debouncedCalculateBackground = useCallback(
    debounce(() => calculateBackground(), 150),
    [calculateBackground]
  );

  useEffect(() => {
    setMounted(true);
    calculateBackground();

    const handleResize = () => debouncedCalculateBackground();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateBackground, debouncedCalculateBackground]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      id="background"
      className="fixed inset-0 overflow-hidden opacity-0 glyph-bg-fadein"
      style={{
        animationDelay: '0.15s',
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1ch)`,
        gridAutoRows: '1.6em',
        fontFamily: 'monospace',
        fontSize: '16px',
        lineHeight: '1em',
        color: BASE_COLOR,
        justifyItems: 'center',
        alignItems: 'center',
      }}
    >
      {cells.map((cell, i) => (
        <GlyphChar key={i} value={cell.ch} />
      ))}
    </div>
  );
}

function GlyphChar({ value }: { value: string }) {
  const noise = useRef(Math.floor(Math.random() * 800) + 300);
  const ref = useRef<HTMLSpanElement>(null);
  const shimmerEnabled = useRef(Math.random() < 0.28);

  useInterval(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (Math.random() < 0.008 && ref.current) {
      const randomColor = POP_COLORS[Math.floor(Math.random() * POP_COLORS.length)];
      ref.current.animate(
        [{ color: BASE_COLOR }, { color: randomColor }, { color: BASE_COLOR }],
        { duration: 1100, easing: 'ease-out' }
      );
    }
  }, shimmerEnabled.current ? noise.current : null);

  const hoverAnim = useRef<Animation | null>(null);
  const lastHoverAt = useRef(0);

  const triggerHover = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!ref.current) return;

    const now = performance.now();
    if (now - lastHoverAt.current < 45) return;
    lastHoverAt.current = now;

    const hoverColor = 'rgba(23, 23, 23, 0.6)';
    hoverAnim.current?.cancel();
    hoverAnim.current = ref.current.animate(
      [
        { color: BASE_COLOR, offset: 0 },
        { color: hoverColor, offset: 0.18 },
        { color: hoverColor, offset: 0.72 },
        { color: BASE_COLOR, offset: 1 },
      ],
      { duration: 900, easing: 'ease-out' }
    );
  };

  return (
    <span
      ref={ref}
      onPointerEnter={triggerHover}
      onPointerMove={triggerHover}
      className="glyph-bg-char flex w-[1ch] h-[1.6em] items-center justify-center text-center transition-[color] duration-[900ms]"
    >
      {value}
    </span>
  );
}
