import { Button } from "@workspace/ui/components/button"
import { cn } from "@/src/lib/utils"
import { Shield, Lock, Eye, Database } from "lucide-react"

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

export default function PrivacyPolicyPage() {
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
              <h1 className="text-4xl md:text-5xl font-black mb-4">Privacy Policy</h1>
              <p className="text-lg text-muted-foreground">
                How we protect and handle your data
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
                    At NaroPath, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                  </p>
                </div>

                {/* Data Collection Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black">Data Collection</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={cn(
                      "p-4",
                      "bg-white",
                      NEOBRUTALISM.borders.normal,
                      NEOBRUTALISM.shadows.small
                    )}>
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="h-5 w-5 text-primary" />
                        <h3 className="font-bold">Information We Collect</h3>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Account information</li>
                        <li>• Learning progress data</li>
                        <li>• Usage statistics</li>
                        <li>• Communication preferences</li>
                      </ul>
                    </div>
                    <div className={cn(
                      "p-4",
                      "bg-white",
                      NEOBRUTALISM.borders.normal,
                      NEOBRUTALISM.shadows.small
                    )}>
                      <div className="flex items-center gap-2 mb-2">
                        <Eye className="h-5 w-5 text-primary" />
                        <h3 className="font-bold">How We Use Data</h3>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Personalize learning experience</li>
                        <li>• Improve our services</li>
                        <li>• Send important updates</li>
                        <li>• Provide customer support</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Data Protection Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black">Data Protection</h2>
                  <div className={cn(
                    "p-4",
                    "bg-white",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.small
                  )}>
                    <div className="flex items-start gap-2">
                      <Lock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="text-muted-foreground">
                          We implement appropriate security measures to protect your personal information. This includes encryption, secure servers, and regular security audits.
                        </p>
                        <ul className="mt-4 text-sm text-muted-foreground space-y-2">
                          <li>• Industry-standard encryption</li>
                          <li>• Regular security updates</li>
                          <li>• Access controls and monitoring</li>
                          <li>• Data backup and recovery</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Your Rights Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black">Your Rights</h2>
                  <div className={cn(
                    "p-4",
                    "bg-white",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.small
                  )}>
                    <div className="flex items-start gap-2">
                      <Shield className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="text-muted-foreground">
                          You have the right to:
                        </p>
                        <ul className="mt-4 text-sm text-muted-foreground space-y-2">
                          <li>• Access your personal data</li>
                          <li>• Correct inaccurate data</li>
                          <li>• Request data deletion</li>
                          <li>• Opt-out of marketing communications</li>
                          <li>• Export your data</li>
                        </ul>
                      </div>
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
                      If you have any questions about our Privacy Policy or how we handle your data, please contact our Data Protection Officer.
                    </p>
                    <Button
                      className={cn(
                        "bg-primary text-primary-foreground",
                        NEOBRUTALISM.borders.normal,
                        NEOBRUTALISM.shadows.small,
                        NEOBRUTALISM.hover.transform
                      )}
                    >
                      Contact DPO
                    </Button>
                  </div>
                </div>

                {/* Last Updated Section */}
                <div className="text-sm text-muted-foreground text-center">
                  Last updated: {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
