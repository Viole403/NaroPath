"use client"

import { ReactNode } from "react"
import { UserRole } from "@/src/lib/auth"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card"
import Link from "next/link"
import { LockIcon } from "lucide-react"

interface AuthRequiredProps {
  role: UserRole
  children?: ReactNode
}

/**
 * Component to show a message when authentication is required
 */
export default function AuthRequired({ role, children }: AuthRequiredProps) {
  // Generate appropriate message based on required role
  const getMessage = () => {
    switch (role) {
      case UserRole.ADMIN:
        return "This content is only available to administrators."
      case UserRole.EDITOR:
        return "This content is only available to editors and administrators."
      case UserRole.USER:
        return "This content is only available to registered users."
      default:
        return "Please sign in to access this content."
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
            <LockIcon className="w-8 h-8 text-muted-foreground" />
          </div>
        </div>
        <CardTitle className="text-center">Authentication Required</CardTitle>
        <CardDescription className="text-center">{getMessage()}</CardDescription>
      </CardHeader>

      <CardContent>
        {children || (
          <p className="text-center text-muted-foreground">
            You need {role.toLowerCase()} access to view this content. Please sign in with an appropriate account or contact the administrator.
          </p>
        )}
      </CardContent>

      <CardFooter className="flex justify-center gap-4">
        <Button asChild>
          <Link href="/login">Sign In</Link>
        </Button>
        {role !== UserRole.ADMIN && (
          <Button variant="outline" asChild>
            <Link href="/upgrade">Upgrade Account</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}