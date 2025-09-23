"use client";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="max-w-4xl mx-auto px-6 py-20 sm:py-24">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-cinzel">
              <span className="text-emerald-100">Welcome </span>
              <span className="text-yellow-200">Atsuki&apos;s </span>
              <span className="text-emerald-100">portfolio</span>
            </h1>
            <p className="mt-6 text-lg text-emerald-100/90">
              本ポートフォリオは、next.jsを使用し作成しています。<br/>
              オリジナルデザインで、テイストは幼少から伝説のゲームのファンのため参考にし作成しております。<br/>
              ポートフォリオを作成する上での技術スタックは以下に記載しておきます。<br/>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-emerald-800/50 bg-emerald-950/40 p-6 md:p-8 backdrop-blur-md shadow-xl"
          >
            <div className="text-sm text-emerald-100/90">
              <p className="font-medium text-yellow-100/90">技術スタック</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Next.js (App Router) / TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion (アニメーション)</li>
                <li>Biome (フォーマッター)</li>
                <li>ESLint (リンター)</li>
                <li>Husky + lint-staged (Gitフック)</li>
              </ul>
              <p className="mt-4">
                上記を基盤に本ポートフォリオサイトの開発を行っています。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
