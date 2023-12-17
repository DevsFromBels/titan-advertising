"use client"

import { NextUIProvider } from "@nextui-org/react"

interface P

export function Providers({ children }: { children: React.ReactNode }) {
	return <NextUIProvider>{children}</NextUIProvider>
}
