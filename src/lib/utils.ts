/**
 * Utility function to combine class names using clsx and tailwind-merge.
 * This helps in conditionally joining class names and merging Tailwind CSS classes.
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names and merges Tailwind CSS classes.
 * @param inputs - Array of class values.
 * @returns Combined and merged class string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
