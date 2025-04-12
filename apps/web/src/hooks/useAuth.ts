"use client"

import { useState, useEffect } from "react"
import { jwtDecode } from "jwt-decode"
import { UserData, UserRole, SAMPLE_TOKEN, SAMPLE_EDITOR_TOKEN, SAMPLE_USER_TOKEN } from "@/src/lib/auth"

interface UseAuthProps {
  simulateRole?: UserRole
}

interface UseAuthResult {
  user: UserData | null
  isLoading: boolean
  hasAccess: (requiredRole: UserRole) => boolean
  isAuthenticated: boolean
}

/**
 * Custom hook for handling authentication in client components
 */
export function useAuth({ simulateRole }: UseAuthProps = {}): UseAuthResult {
  const [user, setUser] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check if user has access to content requiring a specific role
  const hasAccess = (requiredRole: UserRole): boolean => {
    if (!user) return false

    // Role hierarchy: admin > editor > user > guest
    switch (requiredRole) {
      case UserRole.GUEST:
        return true // Everyone has access to guest content
      case UserRole.USER:
        return user.role === UserRole.ADMIN || user.role === UserRole.EDITOR || user.role === UserRole.USER
      case UserRole.EDITOR:
        return user.role === UserRole.ADMIN || user.role === UserRole.EDITOR
      case UserRole.ADMIN:
        return user.role === UserRole.ADMIN
      default:
        return false
    }
  }

  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsLoading(true)

        // In development, we can simulate a specific role
        if (simulateRole && process.env.NODE_ENV === "development") {
          let token: string

          switch (simulateRole) {
            case UserRole.ADMIN:
              token = SAMPLE_TOKEN
              break
            case UserRole.EDITOR:
              token = SAMPLE_EDITOR_TOKEN
              break
            case UserRole.USER:
              token = SAMPLE_USER_TOKEN
              break
            default:
              setUser(null)
              setIsLoading(false)
              return
          }

          const decodedUser = jwtDecode<UserData>(token)
          setUser(decodedUser)
          setIsLoading(false)
          return
        }

        // In a real app, we'd get the token from a cookie using a fetch to an API route
        // that can access server-side cookies
        const response = await fetch("/api/auth/me")

        if (!response.ok) {
          // If the user is not authenticated or token expired
          setUser(null)
          return
        }

        const data = await response.json()
        setUser(data.user)
      } catch (error) {
        console.error("Error loading user:", error)
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    loadUser()
  }, [simulateRole])

  return {
    user,
    isLoading,
    hasAccess,
    isAuthenticated: !!user
  }
}