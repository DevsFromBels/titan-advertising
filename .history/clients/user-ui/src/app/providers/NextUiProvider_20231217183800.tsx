"use client"

import { NextUIProvider } from "@nextui-org/react"
import  {Them}

export function Providers({ children }: { children: React.ReactNode }) {
	return <NextUIProvider>{children}</NextUIProvider>
}
