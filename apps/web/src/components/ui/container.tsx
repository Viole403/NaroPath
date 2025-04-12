import React from "react"
import { cn } from "@/src/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  size?: "default" | "small" | "large" | "full"
}

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "container mx-auto px-4",
        {
          "max-w-5xl": size === "small",
          "max-w-screen-xl": size === "default",
          "max-w-screen-2xl": size === "large",
          "max-w-none": size === "full",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}