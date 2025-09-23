import { SectionProps } from "@/app/types";

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-24 sm:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-yellow-200 drop-shadow-[0_2px_12px_rgba(240,215,123,0.15)] font-cinzel">
          {title}
        </h2>
        <div className="mt-6 text-emerald-100/90 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}
