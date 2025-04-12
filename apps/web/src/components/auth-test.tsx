"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { useAuth } from "@/src/hooks/useAuth"
import { UserRole } from "@/src/lib/auth"
import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group"
import { Label } from "@workspace/ui/components/label"

export function AuthTester() {
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.ADMIN)
  const { user, hasAccess, isAuthenticated } = useAuth({ simulateRole: selectedRole })

  const handleRoleChange = (value: string) => {
    setSelectedRole(value as UserRole)
  }

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>Authentication Tester</CardTitle>
        <CardDescription>
          This component allows you to simulate different user roles for testing purposes.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Simulate User Role</h3>
          <RadioGroup
            defaultValue={selectedRole}
            onValueChange={handleRoleChange}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={UserRole.ADMIN} id="role-admin" />
              <Label htmlFor="role-admin">Admin</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={UserRole.EDITOR} id="role-editor" />
              <Label htmlFor="role-editor">Editor</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={UserRole.USER} id="role-user" />
              <Label htmlFor="role-user">User</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={UserRole.GUEST} id="role-guest" />
              <Label htmlFor="role-guest">Guest (Not Logged In)</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="border rounded-md p-4">
          <h3 className="font-medium mb-2">Current User</h3>
          {isAuthenticated ? (
            <div className="space-y-2">
              <p><span className="font-semibold">Name:</span> {user?.name}</p>
              <p><span className="font-semibold">Email:</span> {user?.email}</p>
              <p><span className="font-semibold">Role:</span> {user?.role}</p>
              <p><span className="font-semibold">Access Levels:</span></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li className={hasAccess(UserRole.GUEST) ? "text-green-500" : "text-red-500"}>
                  Guest Content: {hasAccess(UserRole.GUEST) ? "Yes" : "No"}
                </li>
                <li className={hasAccess(UserRole.USER) ? "text-green-500" : "text-red-500"}>
                  User Content: {hasAccess(UserRole.USER) ? "Yes" : "No"}
                </li>
                <li className={hasAccess(UserRole.EDITOR) ? "text-green-500" : "text-red-500"}>
                  Editor Content: {hasAccess(UserRole.EDITOR) ? "Yes" : "No"}
                </li>
                <li className={hasAccess(UserRole.ADMIN) ? "text-green-500" : "text-red-500"}>
                  Admin Content: {hasAccess(UserRole.ADMIN) ? "Yes" : "No"}
                </li>
              </ul>
            </div>
          ) : (
            <p className="text-muted-foreground">Not authenticated (Guest)</p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          Note: This is a simulation for testing purposes only.
        </p>
      </CardFooter>
    </Card>
  )
}