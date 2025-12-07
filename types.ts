import { LucideIcon } from 'lucide-react';

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  actionText?: string;
  actionLink?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  id: number;
  label: string;
  value: string;
  icon: LucideIcon;
}