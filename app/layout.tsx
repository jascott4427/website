import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pip-Boy Portfolio | Vault Dweller",
  description: "Personal portfolio in authentic Fallout Pip-Boy style",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-mono">
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
