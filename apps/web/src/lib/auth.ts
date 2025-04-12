import { jwtDecode } from "jwt-decode"
import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies"

// Constants
const AUTH_COOKIE_NAME = "auth_token"

// User roles
export enum UserRole {
  ADMIN = "admin",
  EDITOR = "editor",
  USER = "user",
  GUEST = "guest"
}

// User data interface
export interface UserData {
  id: string
  email: string
  name: string
  role: UserRole
  exp: number
  avatar?: string
}

// Sample token for development purposes
export const SAMPLE_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJlbWFpbCI6ImFkbWluQGJsb2dnZXJ1cC5jb20iLCJuYW1lIjoiQWRtaW4gVXNlciIsInJvbGUiOiJhZG1pbiIsImF2YXRhciI6Imh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL2FkbWluLzIwMCIsImV4cCI6MTcxNTI0MTE2MH0.z4vbj69A1Z7r19rYIEcXKZ0X1zUPaAO3Gu_XsA9D5oQ"
export const SAMPLE_EDITOR_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIzNDU2Nzg5MDEiLCJlbWFpbCI6ImVkaXRvckBibG9nZ2VydXAuY29tIiwibmFtZSI6IkVkaXRvciBVc2VyIiwicm9sZSI6ImVkaXRvciIsImF2YXRhciI6Imh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL2VkaXRvci8yMDAiLCJleHAiOjE3MTUyNDExNjB9.Mct-PZdVp41D1-jz6zQME9jf78dW0dSDXSvPRMYX4YM"
export const SAMPLE_USER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM0NTY3ODkwMTIiLCJlbWFpbCI6InVzZXJAYmxvZ2dlcnVwLmNvbSIsIm5hbWUiOiJSZWd1bGFyIFVzZXIiLCJyb2xlIjoidXNlciIsImF2YXRhciI6Imh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3VzZXIvMjAwIiwiZXhwIjoxNzE1MjQxMTYwfQ.bEuVXDZ_u2B0bI4fpXGBciG7EQcRtO18L2SZcWHX0WY"
export const EXPIRED_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ1Njc4OTAxMjMiLCJlbWFpbCI6ImV4cGlyZWRAdXNlci5jb20iLCJuYW1lIjoiRXhwaXJlZCBVc2VyIiwicm9sZSI6InVzZXIiLCJhdmF0YXIiOiJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9leHBpcmVkLzIwMCIsImV4cCI6MTUxNjIzOTAyMn0.8C6OGCgSlGfWgZuELCCDe6sBNl1rJ18pZcA-_cNLGfU"

/**
 * Get the JWT token from the cookie
 */
export function getAuthToken(cookies?: RequestCookie[]): string | undefined {
  try {
    if (cookies) {
      const token = cookies.find(cookie => cookie.name === AUTH_COOKIE_NAME)
      return token?.value
    }

    // For client components or testing, use simulated token in development
    if (process.env.NODE_ENV === "development") {
      return SAMPLE_TOKEN
    }
    return undefined
  } catch (error) {
    console.error("Error accessing cookies:", error)
    return undefined
  }
}

/**
 * Decode and extract user data from JWT token
 */
export function getUserFromToken(token: string): UserData | null {
  try {
    return jwtDecode<UserData>(token)
  } catch (error) {
    console.error("Failed to decode token:", error)
    return null
  }
}

/**
 * Check if token is expired
 */
export function isTokenExpired(token: string): boolean {
  try {
    const decoded = jwtDecode<UserData>(token)
    const currentTime = Date.now() / 1000
    return decoded.exp < currentTime
  } catch (error) {
    console.error("Error checking token expiration:", error)
    return true
  }
}

/**
 * Check if user has required role
 */
export function hasRole(user: UserData | null, requiredRole: UserRole): boolean {
  if (!user) return false

  // Role hierarchy: admin > editor > user > guest
  switch (requiredRole) {
    case UserRole.GUEST:
      return true // Everyone can access guest content
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

/**
 * Get currently authenticated user from cookie or fall back to simulated token
 */
export function getCurrentUser(cookies?: RequestCookie[]): UserData | null {
  const token = getAuthToken(cookies)
  if (!token) return null

  if (isTokenExpired(token)) {
    console.warn("Token is expired")
    return null
  }

  return getUserFromToken(token)
}

/**
 * Simulate different user roles for testing
 */
export function simulateUser(role: UserRole): UserData | null {
  let token

  switch (role) {
    case UserRole.ADMIN:
      token = SAMPLE_TOKEN
      break
    case UserRole.EDITOR:
      token = SAMPLE_EDITOR_TOKEN
      break
    case UserRole.USER:
      token = SAMPLE_USER_TOKEN
      break
    case UserRole.GUEST:
    default:
      return null
  }

  return getUserFromToken(token)
}