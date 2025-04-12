"use client"

import { ReactNode, useState, useEffect } from "react"
import { UserData, UserRole, hasRole } from "@/src/lib/auth"

interface RoleBasedContentProps {
  requiredRole: UserRole
  currentUser: UserData | null
  children: ReactNode
  fallback?: ReactNode
}

/**
 * Component to conditionally render content based on user role
 */
export function RoleBasedContent({
  requiredRole,
  currentUser,
  children,
  fallback = null,
}: RoleBasedContentProps) {
  // Add state to track if hydration is complete
  const [isHydrated, setIsHydrated] = useState(false);

  // After hydration is complete, set isHydrated to true
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // When not hydrated yet, render the same content that was rendered on the server
  // The server always renders based on the initial data
  if (!isHydrated) {
    // When this is a guest role, always show content regardless of user
    if (requiredRole === UserRole.GUEST) {
      return <>{children}</>
    }

    // During server rendering, use the initial data to determine what to show
    const userHasAccess = currentUser && hasRole(currentUser, requiredRole)
    return <>{userHasAccess ? children : fallback}</>
  }

  // When this is a guest role, always show content regardless of user
  if (requiredRole === UserRole.GUEST) {
    return <>{children}</>
  }

  // Check if user has required role
  const userHasAccess = currentUser && hasRole(currentUser, requiredRole)

  // Return appropriate content based on access
  return <>{userHasAccess ? children : fallback}</>
}