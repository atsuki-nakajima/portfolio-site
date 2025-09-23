"use client";
import { motion } from "framer-motion";
import { MenuItem } from "@/app/types";

interface HeroSectionProps {
  items: MenuItem[];
  onItemClick: (id: string) => void;
}

export function HeroSection({ items, onItemClick }: HeroSectionProps) {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-cinzel">
              <span className="text-emerald-100">Welcome </span>
              <span className="text-yellow-200">Atsuki's </span>
              <span className="text-emerald-100">portfolio</span>
            </h1>
            <p className="mt-6 text-lg text-emerald-100/90">
              本ポートフォリオは、ゼルダの伝説へのリスペクトを込めて制作しております。
              商用や著作権等に関し絵は
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onItemClick(item.id)}
                  className="px-4 py-2 rounded-lg border border-yellow-300/30 text-yellow-100/90 hover:bg-yellow-300/10"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-emerald-800/50 bg-emerald-950/40 p-6 md:p-8 backdrop-blur-md shadow-xl"
          >
            <div className="text-sm text-emerald-100/90">
              <p>想定スタック：</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Next.js + App Router</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
              <p className="mt-4">
                レビュー後に配色、フォント、装飾（ルピーや妖精アイコン、石碑の罫線など）を拡張します。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
