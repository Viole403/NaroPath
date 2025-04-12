import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names into a single string using clsx and tailwind-merge
 * This utility helps avoid class name conflicts when using Tailwind CSS
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Utility function to check if we're running on the client side (browser)
 * Useful for conditional rendering that depends on browser APIs
 */
export const isClient = typeof window !== 'undefined'

/**
 * Gets the current theme from localStorage
 */
export function getTheme(): string | null {
  if (!isClient) return null
  return localStorage.getItem('theme')
}

/**
 * Saves the theme preference to localStorage
 */
export function saveTheme(theme: string): void {
  if (!isClient) return
  localStorage.setItem('theme', theme)
}

/**
 * Generate an avatar URL using UI Avatars service
 * @param name - The user's name to generate avatar from
 * @param size - The size of the avatar in pixels (default: 128)
 * @returns Avatar URL string
 */
export function getAvatarUrl(name: string, size: number = 128): string {
  return `https://ui-avatars.com/api/?size=${size}&name=${encodeURIComponent(name)}&background=random`;
}

/**
 * Format a number as currency
 * @param price - The price to format
 * @returns Formatted price string
 */
export function formatPrice(price: number): string {
  // Check if the price is free
  if (price === 0) {
    return 'Free';
  }

  // Format the price with currency symbol and correct decimal places
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(price);
}