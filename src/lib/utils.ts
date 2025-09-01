import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { LucideIcon } from "lucide-react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getIcon(iconName: string): LucideIcon | undefined {
  // This is a placeholder. You would need a mapping from string to LucideIcon component.
  // Example: const icons: { [key: string]: LucideIcon } = { 'UserMd': UserMd, ... }
  // For now, this will not work as intended without such a mapping.
  return undefined;
}
