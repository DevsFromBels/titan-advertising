import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers/NextUiProvider'

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"]
})

export const metadata: Metadata = {
  title: 'TITAN Finance App',
  description: 'TITAN Finance App website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
