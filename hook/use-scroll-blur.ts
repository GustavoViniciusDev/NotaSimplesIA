"use client"

import { useEffect, useState } from "react"

export function useScrollBlur() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")
  const [lastScrollY, setLastScrollY] = useState(0)
  const [maxScrollReached, setMaxScrollReached] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      setScrollDirection(current > lastScrollY ? "down" : "up")

      if (current > maxScrollReached) {
        setMaxScrollReached(current)
      }

      setScrollY(current)
      setLastScrollY(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, maxScrollReached])

  const getBlurValue = (elementTop: number) => {
    if (scrollDirection === "up") return 0
    const distance = elementTop - scrollY
    const blur = Math.max(0, Math.min(15, Math.abs(distance) / 50))
    return blur
  }

  return { scrollY, getBlurValue, scrollDirection, maxScrollReached }
}
