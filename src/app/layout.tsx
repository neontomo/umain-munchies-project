import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Munchies',
  description: 'Munchies food delivery service - order food online'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 p-10 box-content">{children}</body>
    </html>
  )
}
