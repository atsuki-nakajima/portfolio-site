export function useSmoothScroll(onAfter?: () => void) {
  return (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (onAfter) onAfter();
  };
}
