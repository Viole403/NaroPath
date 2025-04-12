import { Button } from "@workspace/ui/components/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

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

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/">
          <Button
            variant="outline"
            className={cn(
              "flex items-center gap-2",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.small,
              NEOBRUTALISM.hover.transform,
              NEOBRUTALISM.hover.shadow
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Main Content */}
      <div className={cn(
        "p-8 bg-white",
        NEOBRUTALISM.borders.normal,
        NEOBRUTALISM.shadows.medium
      )}>
        <h1 className="text-4xl font-black uppercase mb-6">Cookie Policy</h1>

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold uppercase mb-4">What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold uppercase mb-4">How We Use Cookies</h2>
            <p className="mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand how visitors use our site</li>
              <li>Preference cookies to remember your settings</li>
              <li>Marketing cookies to deliver relevant advertising</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold uppercase mb-4">Types of Cookies We Use</h2>
            <div className="grid gap-4">
              <div className={cn(
                "p-4",
                NEOBRUTALISM.borders.normal,
                "bg-blue-50"
              )}>
                <h3 className="font-bold uppercase mb-2">Essential Cookies</h3>
                <p>These cookies are necessary for the website to function properly.</p>
              </div>
              <div className={cn(
                "p-4",
                NEOBRUTALISM.borders.normal,
                "bg-green-50"
              )}>
                <h3 className="font-bold uppercase mb-2">Analytics Cookies</h3>
                <p>These cookies help us understand how visitors interact with our website.</p>
              </div>
              <div className={cn(
                "p-4",
                NEOBRUTALISM.borders.normal,
                "bg-yellow-50"
              )}>
                <h3 className="font-bold uppercase mb-2">Preference Cookies</h3>
                <p>These cookies remember your preferences and settings.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold uppercase mb-4">Managing Cookies</h2>
            <p className="mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
            </p>
            <div className={cn(
              "p-4",
              NEOBRUTALISM.borders.normal,
              "bg-gray-50"
            )}>
              <h3 className="font-bold uppercase mb-2">How to Manage Cookies</h3>
              <ul className="list-disc pl-6">
                <li>Check your browser settings</li>
                <li>Use browser extensions</li>
                <li>Clear cookies regularly</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our Cookie Policy, please contact us at:
            </p>
            <div className={cn(
              "p-4",
              NEOBRUTALISM.borders.normal,
              "bg-purple-50"
            )}>
              <p className="font-bold">Email: privacy@example.com</p>
              <p className="font-bold">Phone: +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
