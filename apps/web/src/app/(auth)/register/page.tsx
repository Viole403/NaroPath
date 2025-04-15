import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { cn } from "@/src/lib/utils"
import Link from "next/link"
import { Mail, Lock } from "lucide-react"

// Neubrutalism style constants
const NEOBRUTALISM = {
  borders: {
    normal: "border-2 border-black",
    thick: "border-4 border-black"
  },
  shadows: {
    small: "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    medium: "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
    large: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  },
  hover: {
    transform: "hover:-translate-x-[2px] hover:-translate-y-[2px]",
    shadow: "hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
  }
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className={cn(
        "w-full max-w-md",
        "bg-white",
        NEOBRUTALISM.borders.normal,
        NEOBRUTALISM.shadows.medium,
        "p-8"
      )}>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black uppercase mb-2">Create Account</h1>
          <p className="text-muted-foreground">Join our community today</p>
        </div>

        <div className="space-y-4 mb-6">
          <Button
            variant="outline"
            className={cn(
              "w-full",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.small,
              NEOBRUTALISM.hover.transform
            )}
          >
            <Mail className="mr-2 h-4 w-4" />
            Continue with Google
          </Button>
          <Button
            variant="outline"
            className={cn(
              "w-full",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.small,
              NEOBRUTALISM.hover.transform
            )}
          >
            <Lock className="mr-2 h-4 w-4" />
            Continue with Apple
          </Button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                className={cn(
                  NEOBRUTALISM.borders.normal,
                  NEOBRUTALISM.shadows.small,
                  "focus:ring-0"
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                className={cn(
                  NEOBRUTALISM.borders.normal,
                  NEOBRUTALISM.shadows.small,
                  "focus:ring-0"
                )}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={cn(
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.small,
                "focus:ring-0"
              )}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              className={cn(
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.small,
                "focus:ring-0"
              )}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className={cn(
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.small,
                "focus:ring-0"
              )}
            />
          </div>

          <Button
            type="submit"
            className={cn(
              "w-full",
              "bg-primary text-primary-foreground",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.small,
              NEOBRUTALISM.hover.transform
            )}
          >
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-primary hover:text-primary/80"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
