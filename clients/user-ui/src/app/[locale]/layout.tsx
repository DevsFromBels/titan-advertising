import Header from "@/widgets/header";
import NextTopLoader from 'nextjs-toploader';
import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import  { cn } from '@/shared/components/ui/utils'

import './globals.css'
import {ThemeProvider} from "@/shared/Providers/theme-provider";
import MainContainerLayout from "@/shared/Layout/main-container-layout";
import ApolloProviderClient from "@/shared/Providers/ApolloProvider";
import {NextIntlClientProvider, useMessages} from 'next-intl';
import { Toaster } from "react-hot-toast";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

const locales = ['en', 'de'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: 'TITAN Finance',
  description: 'The finance app to be a TITAN of economics',
}

// @ts-ignore
export default function LocaleLayout({children, params: {locale}}) {

  const messages = useMessages();

  return (
    <html lang={locale}>
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
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header/>
            <MainContainerLayout>{children}</MainContainerLayout>
            <Toaster
              reverseOrder={false}
              position={'bottom-center'}
            />
          </NextIntlClientProvider>
        </ThemeProvider>
      </ApolloProviderClient>
      </body>
    </html>
  )
}
