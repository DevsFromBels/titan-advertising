import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/shared/components/ui/utils";

import { ThemeProvider } from "@/shared/Providers/theme-provider";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Toaster } from "react-hot-toast";

import MainContainerLayout from "@/shared/Layout/main-container-layout";
import ApolloProviderClient from "@/shared/Providers/ApolloProvider";
import Header from "@/widgets/header";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TITAN Finance",
  description: "The finance app to be a TITAN of economics",
};


export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
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
              <Header />
              <MainContainerLayout>{children}</MainContainerLayout>
              <Toaster reverseOrder={false} position={"bottom-center"} />
            </ThemeProvider>
          </ApolloProviderClient>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
