import Header from "@/widgets/header";
import NextTopLoader from 'nextjs-toploader';
import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import  { cn } from '@/shared/components/ui/utils'

import './globals.css'
import {ThemeProvider} from "@/shared/Providers/theme-provider";
import MainContainerLayout from "@/shared/Layout/main-container-layout";
import ApolloProviderClient from "@/shared/Providers/ApolloProvider";
import { Toaster } from "react-hot-toast";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'TITAN Finance',
  description: 'The finance app to be a TITAN of economics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
          className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
          )}
      >
      <ApolloProviderClient>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <NextTopLoader
            color="#00AA00"
            initialPosition={0.6}
            showSpinner={false}
          />
            <Header/>
            <MainContainerLayout>{children}</MainContainerLayout>
            <Toaster
              reverseOrder={false}
              position={'bottom-center'}
            />
        </ThemeProvider>
      </ApolloProviderClient>
      </body>
    </html>
  )
}
