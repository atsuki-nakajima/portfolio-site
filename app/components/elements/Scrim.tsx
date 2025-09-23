"use client";
import { motion, AnimatePresence } from "framer-motion";

interface ScrimProps {
  open: boolean;
  onClose: () => void;
}

export function Scrim({ open, onClose }: ScrimProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="scrim"
          className="fixed inset-0 z-40 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
      )}
    </AnimatePresence>
  );
}
