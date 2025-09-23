import { MenuItem } from "@/app/types";

export const COLORS = {
  forest: "#0b3d2e",
  night: "#0a0f0c",
  moss: "#1f4d3a",
  stone: "#1a1e1a",
  gold: "#f0d77b",
  goldDim: "#d9c369",
  teal: "#3aa58f",
} as const;

export const FAIRY_CURSOR = 'url("/Zelda Sword Icon.png") 10 10, auto';

export const MENU_ITEMS: MenuItem[] = [
  { id: "about", label: "自己紹介" },
  { id: "experience", label: "現場経験" },
  { id: "works", label: "作品" },
  { id: "skills", label: "スキルセット" },
  { id: "strengths", label: "強み" },
  { id: "summary", label: "まとめ" },
];
