"use client"

import { NextUIProvider } from "@nextui-org/react"
import  {}

export function Providers({ children }: { children: React.ReactNode }) {
	return <NextUIProvider>{children}</NextUIProvider>
}
