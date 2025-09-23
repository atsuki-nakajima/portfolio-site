"use client";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItem } from "@/app/types";

interface MenuProps {
  open: boolean;
  items: MenuItem[];
  onItemClick: (id: string) => void;
}

export function Menu({ open, items, onItemClick }: MenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          key="menu"
          initial={{ x: -320, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -320, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
          className="fixed top-0 left-0 bottom-0 z-50 w-72 sm:w-80 bg-emerald-950/90 backdrop-blur-xl border-r border-emerald-800/40 shadow-2xl"
        >
          <div className="h-20 border-b border-emerald-800/40 grid place-items-center relative">
            <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(240,215,123,0.10),transparent)]" />
            <div className="relative text-yellow-200 font-semibold tracking-widest font-cinzel">
              Menu
            </div>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onItemClick(item.id)}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-emerald-800/30 focus:outline-none focus:ring-1 focus:ring-yellow-400/40"
                  >
                    <span className="text-yellow-100/90 font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
