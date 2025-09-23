"use client";

import { Section } from "@/app/components/elements/Section";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { wrap } from "@/app/utils/array";

const strengths = [
  {
    title: "企画・実装・改善まで一気通貫",
    description:
      "要件定義からワイヤーフレーム作成、実装、そしてリリース後の効果検証・改善提案まで、Web制作の全工程を一人で担当可能。全体像を把握し、ビジネスの成果に繋がる最適な提案を行います。",
  },
  {
    title: "パフォーマンスを意識したUI実装",
    description:
      "ユーザーの離脱を防ぐため、Core Web Vitalsを意識したパフォーマンスチューニングを得意とします。Next.jsの機能を最大限に活用し、軽量で高速なWebサイトを構築します。",
  },
  {
    title: "保守性と再利用性の高いコンポーネント設計",
    description:
      "Tailwind CSSやCSS in JSを用いたコンポーネントベースの設計・実装が得意です。Atomic Designの考え方を取り入れ、誰が見ても分かりやすく、メンテナンスしやすいコードを心がけています。",
  },
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    };
  },
};

export function Strengths() {
  const [[page, direction], setPage] = useState([0, 0]);

  const strengthIndex = wrap(0, strengths.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Section id="strengths" title="強み">
      <div className="flex flex-col items-center gap-8 mt-6">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial={direction === 0 ? { opacity: 0 } : "enter"}
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full max-w-2xl min-h-[250px] bg-emerald-950/30 border border-emerald-800/50 rounded-xl p-6 md:p-8 relative flex flex-col justify-center items-center"
          >
            <h3 className="text-xl font-semibold text-yellow-100/90 text-center">
              {strengths[strengthIndex].title}
            </h3>
            <p className="mt-4 text-center text-emerald-100/80 leading-relaxed">
              {strengths[strengthIndex].description}
            </p>

            {/* Prev/Next Buttons */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 w-10 h-10 rounded-full bg-yellow-200/80 flex items-center justify-center cursor-pointer hover:bg-yellow-200 transition-colors"
              onClick={() => paginate(-1)}
            >
              <ArrowLeft />
            </div>
            <div
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 w-10 h-10 rounded-full bg-yellow-200/80 flex items-center justify-center cursor-pointer hover:bg-yellow-200 transition-colors"
              onClick={() => paginate(1)}
            >
              <ArrowRight />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}

function ArrowLeft() {
  return (
    <svg
      className="w-6 h-6 text-emerald-950"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      className="w-6 h-6 text-emerald-950"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}