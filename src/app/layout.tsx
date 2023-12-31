import "./globals.scss"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fábio Borato',
  description: 'Product Manager and Software Developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Analytics/>
      </body>
    </html>
  );
}
