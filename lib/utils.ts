import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBasePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH || ''
}

export function getAssetPath(path: string) {
  const basePath = getBasePath()
  if (!path) return basePath
  if (path.startsWith('http')) return path
  return `${basePath}${path.startsWith('/') ? '' : '/'}${path}`
}
