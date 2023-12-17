"use client"

import { NextUIProvider } from "@nextui-org/react"
import  {ThemeProvider as NextThemes}

export function Providers({ children }: { children: React.ReactNode }) {
	return <NextUIProvider>{children}</NextUIProvider>
}
