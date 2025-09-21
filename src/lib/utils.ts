import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { READING_TIME } from "./constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export function calculateReadTime(content: string): string {
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / READING_TIME.WORDS_PER_MINUTE);
  return `${minutes} min read`;
}
