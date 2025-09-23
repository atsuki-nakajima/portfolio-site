export interface MenuItem {
  id: string;
  label: string;
}

export interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export interface TriforceButtonProps {
  open: boolean;
  toggle: () => void;
}
