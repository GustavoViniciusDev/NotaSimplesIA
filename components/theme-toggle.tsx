"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex items-center justify-center rounded-lg bg-muted p-2 hover:bg-muted/80 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <Sun className="w-5 h-5 text-foreground rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute w-5 h-5 text-foreground rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}
