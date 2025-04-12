import { Button } from "@workspace/ui/components/button"
import { cn } from "@/src/lib/utils"
import { AlertCircle, FileText, Shield } from "lucide-react"

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

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className={cn(
              "max-w-3xl mx-auto text-center p-8",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.medium
            )}>
              <h1 className="text-4xl md:text-5xl font-black mb-4">Terms of Service</h1>
              <p className="text-lg text-muted-foreground">
                Please read these terms carefully before using NaroPath
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className={cn(
              "p-8",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.large
            )}>
              <div className="max-w-3xl mx-auto space-y-8">
                {/* Introduction Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black">Introduction</h2>
                  <p className="text-muted-foreground">
                    Welcome to NaroPath. By accessing or using our platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
                  </p>
                </div>

                {/* Key Terms Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black">Key Terms</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={cn(
                      "p-4",
                      "bg-white",
                      NEOBRUTALISM.borders.normal,
                      NEOBRUTALISM.shadows.small
                    )}>
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <h3 className="font-bold">Account Terms</h3>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• You must be 13 years or older</li>
                        <li>• You must provide accurate information</li>
                        <li>• You are responsible for account security</li>
                      </ul>
                    </div>
                    <div className={cn(
                      "p-4",
                      "bg-white",
                      NEOBRUTALISM.borders.normal,
                      NEOBRUTALISM.shadows.small
                    )}>
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-5 w-5 text-primary" />
                        <h3 className="font-bold">Content Guidelines</h3>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Respect intellectual property rights</li>
                        <li>• No harmful or illegal content</li>
                        <li>• Maintain professional conduct</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Important Sections */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black">Important Information</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      {
                        title: "Subscription and Payments",
                        content: "Subscription fees are billed in advance. You can cancel your subscription at any time, but no refunds will be provided for partial months."
                      },
                      {
                        title: "Intellectual Property",
                        content: "All content on NaroPath, including courses, materials, and platform features, is protected by copyright and other intellectual property laws."
                      },
                      {
                        title: "Termination",
                        content: "We reserve the right to terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users."
                      }
                    ].map((section) => (
                      <div
                        key={section.title}
                        className={cn(
                          "p-4",
                          "bg-white",
                          NEOBRUTALISM.borders.normal,
                          NEOBRUTALISM.shadows.small
                        )}
                      >
                        <h3 className="font-bold mb-2">{section.title}</h3>
                        <p className="text-sm text-muted-foreground">{section.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Disclaimer Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black">Disclaimer</h2>
                  <div className={cn(
                    "p-4",
                    "bg-white",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.small
                  )}>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-500 mt-1" />
                      <p className="text-muted-foreground">
                        NaroPath is provided "as is" without any warranties, expressed or implied. We do not guarantee that the service will be uninterrupted, timely, secure, or error-free.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black">Contact Us</h2>
                  <div className={cn(
                    "p-4",
                    "bg-white",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.small
                  )}>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about these Terms, please contact us.
                    </p>
                    <Button
                      className={cn(
                        "bg-primary text-primary-foreground",
                        NEOBRUTALISM.borders.normal,
                        NEOBRUTALISM.shadows.small,
                        NEOBRUTALISM.hover.transform
                      )}
                    >
                      Contact Support
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
