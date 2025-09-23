"use client";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS } from "@/app/utils/constants";
import { TriforceButtonProps } from "@/app/types";

export function TriforceButton({ open, toggle }: TriforceButtonProps) {
  const triVariants = {
    closed: (i: number) => {
      const pos = [
        { x: 0, y: -12, rotate: 0 }, // top
        { x: -12, y: 8, rotate: 0 }, // bottom-left
        { x: 12, y: 8, rotate: 0 }, // bottom-right
      ][i];
      return { ...pos, opacity: 1, scale: 1 };
    },
    open: (i: number) => {
      const pos = [
        { x: -18, y: -18, rotate: -45 },
        { x: -20, y: 20, rotate: 45 },
        { x: 20, y: 20, rotate: -45 },
      ][i];
      return { ...pos, opacity: 0.7, scale: 0.95 };
    },
  } as const;

  return (
    <button
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={toggle}
      className="relative grid place-items-center w-12 h-12 rounded-xl border border-emerald-700/40 bg-gradient-to-b from-emerald-900/70 to-emerald-950/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:from-emerald-800/70 hover:to-emerald-950/80 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
      style={{ backdropFilter: "blur(4px)" }}
    >
      <span className="absolute inset-0 rounded-xl ring-1 ring-yellow-400/20" />

      {[0, 1, 2].map((i) => (
        <motion.svg
          key={i}
          custom={i}
          variants={triVariants}
          animate={open ? "open" : "closed"}
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          width="18"
          height="16"
          viewBox="0 0 18 16"
          className="absolute"
        >
          <motion.path
            d="M9 0 L18 16 L0 16 Z"
            fill={COLORS.gold}
            stroke={COLORS.goldDim}
            strokeWidth="1"
            style={{ filter: "drop-shadow(0 0 6px rgba(240,215,123,0.35))" }}
          />
        </motion.svg>
      ))}

      <AnimatePresence>
        {open && (
          <motion.div
            key="x"
            initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 15 }}
            transition={{ duration: 0.18 }}
            className="absolute text-yellow-200/90 font-bold text-2xl drop-shadow-[0_0_8px_rgba(240,215,123,0.35)]"
          >
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
