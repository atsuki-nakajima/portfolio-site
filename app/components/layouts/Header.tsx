"use client";
import { TriforceButton } from "@/app/components/elements/TriforceButton";
import { TriforceButtonProps } from "@/app/types";

interface HeaderProps extends TriforceButtonProps {}

export function Header({ open, toggle }: HeaderProps) {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-4 flex items-center gap-3">
          <TriforceButton open={open} toggle={toggle} />
          <div className="flex-1 h-12 rounded-xl border border-emerald-800/50 bg-emerald-950/40 backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-transparent via-yellow-300/10 to-transparent" />
            <div className="relative h-full flex items-center px-4">
              <span className="text-yellow-200/90 font-semibold tracking-widest uppercase text-sm sm:text-base select-none font-cinzel">
                Atsuki's — Portfolio
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
