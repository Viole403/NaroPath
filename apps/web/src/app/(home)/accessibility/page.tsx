import { Button } from "@workspace/ui/components/button"
import { cn } from "@/src/lib/utils"
import { CheckCircle2, AlertCircle, Info } from "lucide-react"

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

export default function AccessibilityPage() {
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
              <h1 className="text-4xl md:text-5xl font-black mb-4">Accessibility Statement</h1>
              <p className="text-lg text-muted-foreground">
                Our commitment to making NaroPath accessible to everyone
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
                {/* Commitment Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black">Our Commitment</h2>
                  <p className="text-muted-foreground">
                    NaroPath is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                  </p>
                </div>

                {/* Standards Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black">Accessibility Standards</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={cn(
                      "p-4",
                      "bg-white",
                      NEOBRUTALISM.borders.normal,
                      NEOBRUTALISM.shadows.small
                    )}>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <h3 className="font-bold">WCAG 2.1</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        We aim to meet WCAG 2.1 Level AA standards for web accessibility.
                      </p>
                    </div>
                    <div className={cn(
                      "p-4",
                      "bg-white",
                      NEOBRUTALISM.borders.normal,
                      NEOBRUTALISM.shadows.small
                    )}>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <h3 className="font-bold">Screen Readers</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Our platform is compatible with major screen readers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black">Accessibility Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Keyboard Navigation",
                        description: "Full keyboard support for all interactive elements"
                      },
                      {
                        title: "Color Contrast",
                        description: "High contrast ratios for better readability"
                      },
                      {
                        title: "Text Resizing",
                        description: "Ability to resize text without loss of functionality"
                      }
                    ].map((feature) => (
                      <div
                        key={feature.title}
                        className={cn(
                          "p-4",
                          "bg-white",
                          NEOBRUTALISM.borders.normal,
                          NEOBRUTALISM.shadows.small
                        )}
                      >
                        <h3 className="font-bold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feedback Section */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black">Feedback & Support</h2>
                  <div className={cn(
                    "p-4",
                    "bg-white",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.small
                  )}>
                    <div className="flex items-start gap-2">
                      <Info className="h-5 w-5 text-blue-500 mt-1" />
                      <div>
                        <p className="text-muted-foreground">
                          We welcome your feedback on the accessibility of NaroPath. If you encounter any accessibility barriers or have suggestions for improvement, please contact us.
                        </p>
                        <Button
                          className={cn(
                            "mt-4",
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
                        While we strive to make our platform accessible to everyone, we recognize that there may be areas that need improvement. We are committed to ongoing efforts to enhance accessibility.
                      </p>
                    </div>
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
