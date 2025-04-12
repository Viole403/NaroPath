import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { AuthTester } from "@/src/components/auth-test"

export default function AuthTestPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl">BloggerUp</Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link href="/auth-test" className="text-primary transition-colors">Auth Test</Link>
          </nav>
          <div className="flex space-x-4">
            <Button variant="outline" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">Authentication Testing Page</h1>
            <p className="text-center text-muted-foreground mb-8">
              This page allows you to test different authentication roles and access levels for the blog application.
            </p>

            <AuthTester />

            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/blog">Browse Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground">
            This is a test page for authentication simulation. © 2023 BloggerUp.
          </p>
        </div>
      </footer>
    </div>
  )
}