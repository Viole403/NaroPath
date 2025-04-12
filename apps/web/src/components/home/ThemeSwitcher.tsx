"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@workspace/ui/components/button"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/src/lib/utils"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by rendering only after component is mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-12 h-12"></div> // Placeholder with same dimensions
  }

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      variant="outline"
      size="icon"
      className={cn(
        "relative w-12 h-12 p-0 rounded-lg overflow-hidden border-2 border-black",
        "transition-all duration-300 hover:scale-105 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)]",
        "hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none",
        theme === "dark" ? "bg-zinc-800" : "bg-amber-50"
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${theme === "dark" ? "from-blue-500 to-purple-600" : "from-yellow-300 to-orange-500"}`}></div>
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-yellow-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] z-10 animate-pulse" />
        ) : (
          <Moon className="h-5 w-5 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] z-10 animate-pulse" />
        )}
      </div>
      <div className={`absolute ${theme === "dark" ? "top-1 right-1" : "bottom-1 left-1"} w-2 h-2 rounded-full bg-primary`}></div>
    </Button>
  )
}