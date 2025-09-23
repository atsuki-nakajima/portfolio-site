"use client";
import { Header } from "@/app/components/layouts/Header";
import { Menu } from "@/app/components/layouts/Menu";
import { Scrim } from "@/app/components/elements/Scrim";
import { GlobalCursor } from "@/app/components/elements/GlobalCursor";
import { TriforceWatermark } from "@/app/components/elements/TriforceWatermark";
import { HeroSection } from "@/app/features/portfolio/components/HeroSection";
import { ContentSections } from "@/app/features/portfolio/components/ContentSections";
import { Footer } from "@/app/components/layouts/Footer";
import { useMenu } from "@/app/hooks/useMenu";
import { useSmoothScroll } from "@/app/hooks/useSmoothScroll";
import { MENU_ITEMS, COLORS } from "@/app/utils/constants";

export default function ZeldaPortfolioLP() {
  const { open, toggle, close } = useMenu();
  const scrollTo = useSmoothScroll(close);

  const bgStyle: React.CSSProperties = {
    backgroundImage:
      `radial-gradient(1200px 600px at 80% -10%, rgba(58,165,143,0.10), transparent 60%),` +
      `radial-gradient(1000px 500px at 10% 20%, rgba(240,215,123,0.08), transparent 60%),` +
      `linear-gradient(180deg, ${COLORS.night}, ${COLORS.forest})`,
  };

  return (
    <div className="min-h-screen text-emerald-50" style={{ ...bgStyle }}>
      <GlobalCursor />
      <Header open={open} toggle={toggle} />
      <Menu open={open} items={MENU_ITEMS} onItemClick={scrollTo} />
      <Scrim open={open} onClose={close} />
      
      <main className="pt-28">
        <HeroSection items={MENU_ITEMS} onItemClick={scrollTo} />
        <ContentSections />
        <Footer />
      </main>

      <TriforceWatermark />
    </div>
  );
}