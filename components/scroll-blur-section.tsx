"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { useScrollBlur } from "@/hook/use-scroll-blur"
import { motion } from "framer-motion"

interface ScrollBlurSectionProps {
  children: React.ReactNode
  className?: string
}

export function ScrollBlurSection({ children, className = "" }: ScrollBlurSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY, scrollDirection, maxScrollReached } = useScrollBlur()
  const [blur, setBlur] = useState(0)
  const [elementTop, setElementTop] = useState(0)
  const [hasBeenRevealed, setHasBeenRevealed] = useState(false)

  useEffect(() => {
    if (ref.current) {
      setElementTop(ref.current.offsetTop)
    }
  }, [])

  useEffect(() => {
    if (scrollDirection === "down" && elementTop > 0 && !hasBeenRevealed) {
      const distance = elementTop - scrollY

      // Apply blur when element is entering viewport
      if (distance > 0 && distance < 400) {
        const blur = Math.max(0, Math.min(8, distance / 50))
        setBlur(blur)
      } else if (distance <= 0) {
        setBlur(0)
        setHasBeenRevealed(true)
      }
    } else if (hasBeenRevealed) {
      setBlur(0)
    }
  }, [scrollY, elementTop, scrollDirection, hasBeenRevealed])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ filter: `blur(${blur}px)` }}
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
    >
      {children}
    </motion.div>
  )
}
