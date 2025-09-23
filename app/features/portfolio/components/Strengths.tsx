'use client';

import { Section } from '@/app/components/elements/Section';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { wrap } from '@/app/utils/array';

export const strengths = [
  {
    title: '〜 企画→実装→改善まで『一気通貫』で回せる 〜',
    description:
      'デザイナーや企画チームと要件・UIをすり合わせて設計し、実装→単体/結合テスト→不具合修正まで自走。リリース後はユーザーの声や計測値を起点に改善提案まで担い、短いサイクルで価値を積み上げた経験を活かせます',
  },
  {
    title: '〜 認識ズレを生まない『コミュニケーション設計』 〜',
    description:
      '企画側・実装側・ユーザーの観点を事前に統一。仕様は関係者レビューで合意形成し、実装方針はエンジニアリーダー/上級メンバーと相談して決定。個人判断に寄らずチーム合意で進めることで、意図と体験が一致する成果物を届けます。',
  },
  {
    title: '〜 チームで最大化する『実行力』 〜',
    description:
      '黙々と単独で進めるより、こまめな共有・短いPR・支援依頼でスループットを底上げ。自分から話しかけて雰囲気を明るくし、意思決定を前に進めるファシリ役として、チームのパフォーマンスを引き出します。',
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 200 : -200,
    opacity: 0,
  }),
};

export function Strengths() {
  const [[page, direction], setPage] = useState([0, 0]);

  const strengthIndex = wrap(0, strengths.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const goToPage = (newPage: number) => {
    const newDirection = newPage > strengthIndex ? 1 : -1;
    setPage([newPage, newDirection]);
  };

  return (
    <Section id="strengths" title="強み">
      <div className="flex flex-col items-center w-full mt-6">
        <div className="w-full max-w-2xl relative">
          {/* Carousel Container */}
          <div className="relative min-h-[280px] w-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 w-full h-full bg-emerald-950/30 border border-emerald-800/50 rounded-xl p-6 md:p-8 flex flex-col justify-center items-center"
              >
                <h3 className="text-xl font-semibold text-yellow-100/90 text-center">
                  {strengths[strengthIndex].title}
                </h3>
                <p className="mt-4 text-center text-emerald-100/80 leading-relaxed">
                  {strengths[strengthIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev/Next Buttons */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 w-10 h-10 rounded-full bg-yellow-200/80 flex items-center justify-center cursor-pointer hover:bg-yellow-200 transition-colors z-10"
            onClick={() => paginate(-1)}
          >
            <ArrowLeft />
          </div>
          <div
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 w-10 h-10 rounded-full bg-yellow-200/80 flex items-center justify-center cursor-pointer hover:bg-yellow-200 transition-colors z-10"
            onClick={() => paginate(1)}
          >
            <ArrowRight />
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-6">
          {strengths.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                strengthIndex === index
                  ? 'bg-yellow-200'
                  : 'bg-emerald-800 hover:bg-emerald-700'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
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
