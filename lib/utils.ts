// lib/utils.ts
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names conditionally and merges Tailwind classes intelligently.
 * @param inputs - One or more class names (or objects/arrays with conditions).
 * @returns A single string of class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}