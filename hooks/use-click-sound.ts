"use client"

import { useEffect, useRef } from "react"

export function useClickSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/files-blob/website/public/assets/audio/click-pkHQA5Ze6MoEm4XDIXQ6m7cBwhl2i5.wav")
    audioRef.current.volume = 0.3 // Set volume to 30%

    // Add click event listener to all buttons and links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Check if clicked element is a button, link, or has role="button"
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        // Play sound
        if (audioRef.current) {
          audioRef.current.currentTime = 0 // Reset to start
          audioRef.current.play().catch(() => {
            // Ignore errors (e.g., if user hasn't interacted with page yet)
          })
        }
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])
}
