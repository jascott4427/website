"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import { useState, useEffect } from "react"
import { useClickSound } from "@/hooks/use-click-sound"

interface PipBoyLayoutProps {
  children: ReactNode
}

export function PipBoyLayout({ children }: PipBoyLayoutProps) {
  const pathname = usePathname()
  const [showSettings, setShowSettings] = useState(false)
  const [bgColor, setBgColor] = useState("#1a3a1a")
  const [borderColor, setBorderColor] = useState("#4ade80")

  useClickSound()

  useEffect(() => {
    const savedBg = localStorage.getItem("pipboy-bg-color")
    const savedBorder = localStorage.getItem("pipboy-border-color")
    if (savedBg) setBgColor(savedBg)
    if (savedBorder) setBorderColor(savedBorder)
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty("--pipboy-bg-custom", bgColor)
    document.documentElement.style.setProperty("--pipboy-border-custom", borderColor)
    localStorage.setItem("pipboy-bg-color", bgColor)
    localStorage.setItem("pipboy-border-color", borderColor)
  }, [bgColor, borderColor])

  const navItems = [
    { href: "/", label: "HOME", icon: "◆" },
    { href: "/projects", label: "PROJECTS", icon: "▣" },
    { href: "/hobbies", label: "HOBBIES", icon: "♦" },
    { href: "/gamedev", label: "GAMEDEV", icon: "▲" },
    { href: "/resume", label: "RESUME", icon: "■" },
  ]

  const presets = [
    { name: "Classic Green", bg: "#1a3a1a", border: "#4ade80" },
    { name: "Amber", bg: "#2a1a0a", border: "#fbbf24" },
    { name: "Blue", bg: "#0a1a2a", border: "#60a5fa" },
    { name: "Red", bg: "#2a0a0a", border: "#f87171" },
    { name: "Purple", bg: "#1a0a2a", border: "#c084fc" },
  ]

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ backgroundColor: bgColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Pip-Boy Header */}
        <header className="border-2 p-4 mb-6 bg-card/50" style={{ borderColor }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="text-2xl md:text-3xl font-bold tracking-wider" style={{ color: borderColor }}>
                PIP-BOY 3000 MARK IV
              </div>
              <div className="hidden md:block text-sm opacity-70" style={{ color: borderColor }}>
                [PERSONAL INFORMATION PROCESSOR]
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="px-3 py-2 border transition-all hover:bg-primary/10"
                style={{ borderColor, color: borderColor }}
                aria-label="Settings"
              >
                ⚙ SETTINGS
              </button>
              <div className="text-sm" style={{ color: borderColor }}>
                <div className="flex gap-2">
                  <span>HP:</span>
                  <div className="flex gap-1">
                    {[...Array(10)].map((_, i) => (
                      <span key={i}>▮</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {showSettings && (
            <div className="mb-4 p-4 border bg-card/80" style={{ borderColor }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: borderColor }}>
                COLOR SETTINGS
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: borderColor }}>
                    Background Color
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-16 h-10 cursor-pointer border"
                      style={{ borderColor }}
                    />
                    <input
                      type="text"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="flex-1 px-3 py-2 border bg-transparent font-mono"
                      style={{ borderColor, color: borderColor }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2" style={{ color: borderColor }}>
                    Border/Text Color
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={borderColor}
                      onChange={(e) => setBorderColor(e.target.value)}
                      className="w-16 h-10 cursor-pointer border"
                      style={{ borderColor }}
                    />
                    <input
                      type="text"
                      value={borderColor}
                      onChange={(e) => setBorderColor(e.target.value)}
                      className="flex-1 px-3 py-2 border bg-transparent font-mono"
                      style={{ borderColor, color: borderColor }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2" style={{ color: borderColor }}>
                  Presets
                </label>
                <div className="flex flex-wrap gap-2">
                  {presets.map((preset) => (
                    <button
                      key={preset.name}
                      onClick={() => {
                        setBgColor(preset.bg)
                        setBorderColor(preset.border)
                      }}
                      className="px-3 py-2 border text-sm transition-all hover:opacity-80"
                      style={{
                        borderColor: preset.border,
                        color: preset.border,
                        backgroundColor: `${preset.bg}80`,
                      }}
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex flex-wrap gap-2 md:gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 border transition-all ${
                    isActive ? "shadow-[0_0_15px_currentColor]" : "hover:bg-primary/10"
                  }`}
                  style={{
                    borderColor: isActive ? borderColor : `${borderColor}80`,
                    color: borderColor,
                    backgroundColor: isActive ? `${borderColor}20` : "transparent",
                  }}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </header>

        {/* Main Content */}
        <main className="border-2 p-6 md:p-8 bg-card/30 min-h-[600px]" style={{ borderColor, color: borderColor }}>
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-6 border-2 p-4 bg-card/50" style={{ borderColor }}>
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm"
            style={{ color: borderColor }}
          >
            <div className="flex gap-4">
              <span>RAD: 0</span>
              <span>LEVEL: 99</span>
              <span>XP: ∞</span>
            </div>
            <div className="opacity-70">© 2077 ROBCO INDUSTRIES</div>
            <div className="flex gap-2">
              <span>AP:</span>
              <div className="flex gap-1">
                {[...Array(10)].map((_, i) => (
                  <span key={i}>▮</span>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
