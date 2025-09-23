'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-yellow-200 drop-shadow-[0_2px_12px_rgba(240,215,123,0.15)] font-cinzel"
        >
          ・自己紹介
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-10 text-emerald-100/90 leading-relaxed space-y-6"
        >
          <motion.p variants={itemVariants}>
            <strong className="font-bold text-yellow-100">
              中島 敦輝（なかじま あつき）
            </strong>
            と申します。26歳、フロントエンドエンジニアとして活動しています。
          </motion.p>
          <motion.p variants={itemVariants}>
            学生時代はマーケティング戦略を学び、商品企画や産学連携プロジェクトに参加。
            卒業後はGoogle広告の運用、人材紹介営業、フリーランスでのコーディング経験を経て、
            現在は
            <strong className="font-bold text-yellow-100">
              Webサイト／業務システム／Chrome拡張機能
            </strong>
            の開発に携わりながら、企画から設計・実装・改善提案まで幅広く担当しています。
          </motion.p>

          <motion.hr
            variants={itemVariants}
            className="!my-12 border-emerald-800/50"
          />

          <motion.div variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-semibold text-yellow-200 font-cinzel mb-6 flex items-center gap-3">
              <span className="text-2xl">💡</span>
              私について一言でいうと？
            </h3>
            <blockquote className="border-l-4 border-yellow-700/80 bg-yellow-950/20 p-6 rounded-r-lg text-yellow-100/90">
              <p className="font-semibold text-lg">
                「手を動かし、一緒に改善提案もできるエンジニア」
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-yellow-300" />
                  <span>
                    <strong className="text-yellow-200/90">
                      Google広告運用経験×フロント実装力
                    </strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-yellow-300" />
                  <span>
                    <strong className="text-yellow-200/90">
                      チームや顧客と対話しながらデータを分析し課題解決
                    </strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-yellow-300" />
                  <span>
                    <strong className="text-yellow-200/90">
                      大手企業の現場でAI駆動開発等を経験したことによる業務の効率化を図る
                    </strong>
                  </span>
                </li>
              </ul>
            </blockquote>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-semibold text-yellow-200 font-cinzel mb-6 flex items-center gap-3">
              <span className="text-2xl">🌱</span>
              今後の目標
            </h3>
            <p>
              広告運用・改善提案・コーディングのサイクルを高速で回し、
              「この人となら最高の成果を成し遂げられる」と思ってもらえるIT人材になること。
            </p>
            <ul className="mt-8">
              <span>
                <strong className="text-3xl text-yellow-200/90">
                  数値分析 × コーディング × 改善提案
                </strong>
                <p>を一貫してできるようにする</p>
              </span>
            </ul>
          </motion.div>
          <motion.p variants={itemVariants} className="!mt-10">
            LOHA STYLEさんの「広告運用に強いチーム」においても、
            これまでの経験と強みを活かして貢献していきたいと考えています。
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}