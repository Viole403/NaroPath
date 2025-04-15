import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { cn } from "@/src/lib/utils"
import Link from "next/link"

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

export default function ForgotPasswordPage() {
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
          <h1 className="text-3xl font-black uppercase mb-2">Reset Password</h1>
          <p className="text-muted-foreground">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>

        <form className="space-y-6">
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
            Send Reset Link
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Remember your password?{" "}
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
