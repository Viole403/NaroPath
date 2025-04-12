# JWT Cookie Authentication Implementation

This documentation explains how the JWT cookie-based authentication is implemented in the BloggerUp application. It includes details about the authentication flow, role-based access control, and how to test different roles.

## Authentication Flow

The authentication system uses JWT (JSON Web Tokens) stored in cookies for maintaining user sessions. Here's how the flow works:

1. **Token Storage**: JWTs are stored in HTTP-only cookies for security.
2. **Token Structure**: Each JWT contains user information including:
   - User ID
   - Email
   - Name
   - Role (admin, editor, user, guest)
   - Avatar URL
   - Expiration timestamp

3. **Server-Side Auth**: On the server, we use Next.js server components to access cookies and verify tokens.
4. **Client-Side Auth**: For client components, we provide hooks that fetch the user data from a simulated API endpoint.

## Role-Based Access Control

The application implements a hierarchical role-based access control system:

- **Admin**: Has access to all content including admin-only content
- **Editor**: Has access to editor content and regular user content
- **User**: Has access to user content
- **Guest**: Has access to public content only

The hierarchy is implemented in the `hasRole` function that checks if a user has sufficient privileges to access content with a specific required role.

## Authentication Utilities

### Server-Side

The `auth.ts` file provides several utilities for server components:

- `getAuthToken()`: Retrieves the JWT from cookies
- `getUserFromToken()`: Decodes a JWT into user data
- `isTokenExpired()`: Checks if a token has expired
- `hasRole()`: Checks if a user has the required role
- `getCurrentUser()`: Gets the current authenticated user

### Client-Side

The `useAuth.ts` hook provides similar functionality for client components:

- `user`: The current authenticated user
- `isLoading`: Loading state while fetching user data
- `hasAccess()`: Function to check if the user can access content with a specific role
- `isAuthenticated`: Boolean indicating if the user is authenticated

## Testing Authentication

For testing purposes, we've implemented a simulated authentication system:

1. **Simulated Tokens**: Sample JWTs for different roles are provided
2. **Role Simulation**: The AuthTester component allows switching between roles
3. **Access Testing**: The UI shows which content types the current role can access

### How to Test

1. Visit the `/auth-test` page
2. Select a role from the radio buttons
3. The page will display the current user's information and access levels
4. Navigate to the blog to see how content visibility changes based on the selected role

## Simulation vs. Production

In a production environment, you would implement:

1. A real authentication API with login/registration endpoints
2. Secure JWT generation and validation
3. Proper token refresh mechanisms
4. HTTPS for secure cookie transmission

This implementation provides a realistic simulation for development and testing purposes.

## Code Examples

### Server-Side Auth Check

```typescript
// In a page.tsx file (server component)
import { getCurrentUser, hasRole, UserRole } from "@/src/lib/auth"

export default async function ProtectedPage() {
  const user = getCurrentUser()

  if (!user || !hasRole(user, UserRole.ADMIN)) {
    // User doesn't have access - show error or redirect
    return <AuthRequired role={UserRole.ADMIN} />
  }

  // User has access - show protected content
  return <AdminContent />
}
```

### Client-Side Auth Check

```typescript
// In a client component
"use client"

import { useAuth } from "@/src/hooks/useAuth"
import { UserRole } from "@/src/lib/auth"

export function ProtectedComponent() {
  const { user, hasAccess, isLoading } = useAuth()

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (!hasAccess(UserRole.EDITOR)) {
    return <AccessDenied />
  }

  return <EditorContent />
}
```

### Role-Based Content Display

```typescript
// Using the RoleBasedContent component
import { RoleBasedContent } from "@/src/components/role-based-content"
import { UserRole } from "@/src/lib/auth"

export function MyPage({ user }) {
  return (
    <div>
      <h1>Welcome to the Blog</h1>

      {/* Public content visible to everyone */}
      <PublicContent />

      {/* Content only visible to logged-in users */}
      <RoleBasedContent requiredRole={UserRole.USER} currentUser={user}>
        <UserOnlyContent />
      </RoleBasedContent>

      {/* Content only visible to editors and admins */}
      <RoleBasedContent requiredRole={UserRole.EDITOR} currentUser={user}>
        <EditorOnlyContent />
      </RoleBasedContent>
    </div>
  )
}
```