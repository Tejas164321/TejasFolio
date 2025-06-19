"use client"

/**
 * ThemeProvider component wraps the application with the NextThemesProvider
 * to enable theme switching functionality (e.g., light/dark mode).
 * It forwards all props to the underlying NextThemesProvider component.
 */

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
