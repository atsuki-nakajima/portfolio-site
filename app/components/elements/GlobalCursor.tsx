import { FAIRY_CURSOR } from "@/app/utils/constants";

export function GlobalCursor() {
  return (
    <style jsx global>{`
      :root { --fairy-cursor: ${FAIRY_CURSOR}; }
      *, *:hover, *:focus { cursor: var(--fairy-cursor) !important; }
      input, textarea { cursor: text !important; }
    `}</style>
  );
}
