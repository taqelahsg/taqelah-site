import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TAQELAH - Singapore QA Community',
  description: 'Singapore\'s vibrant QA and testing community. Join us to learn, share, and grow together.',
  keywords: ['QA', 'testing', 'Singapore', 'community', 'software testing', 'quality assurance'],
  authors: [{ name: 'TAQELAH' }],
  openGraph: {
    title: 'TAQELAH - Singapore QA Community',
    description: 'Singapore\'s vibrant QA and testing community',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
