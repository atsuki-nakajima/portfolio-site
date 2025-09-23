"use client";
import { useEffect, useState } from "react";
import { COLORS } from "@/app/utils/constants";

export function TriforceWatermark() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const compute = () => {
      const doc = document.documentElement;
      const top = doc.scrollTop || document.body.scrollTop;
      const max = (doc.scrollHeight || 1) - doc.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, top / max)) : 0;
      setScrollProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="fixed right-6 bottom-9 cursor-pointer hover:opacity-80 transition-opacity duration-200"
      onClick={scrollToTop}
      title="トップに戻る"
    >
      <svg width="92" height="84" viewBox="0 0 90 84" fill="none">
        <defs>
          {/* 進捗に応じたクリップ（下から上へ満たす） */}
          <clipPath id="triforce-fill">
            <rect 
              x="0" 
              y={84 - 84 * scrollProgress} 
              width="90" 
              height={84 * scrollProgress} 
            />
          </clipPath>
        </defs>

        {/* 内側の三角形 - ベース枠線 */}
        <path
          d="M45 14 L75 70 L15 70 Z"
          fill="transparent"
          stroke={COLORS.gold}
          strokeWidth="1"

        />

        {/* 金色の充填（下から満ちる） */}
        <path
          d="M45 14 L75 70 L15 70 Z"
          fill={COLORS.gold}
          clipPath="url(#triforce-fill)"
        />
      </svg>
    </div>
  );
}
