import Link from "next/link"
import { ArrowRight, Zap, Users, Star, ShieldCheck } from "lucide-react"
import { Button } from "@workspace/ui/components/button"

export function CallToAction() {
  return (
    <section className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-secondary/20 rounded-full blur-3xl"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-24 w-96 h-96 rotate-12 opacity-10">
          <div className="w-full h-full border-[16px] border-dashed border-primary rounded-3xl"></div>
        </div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rotate-45 opacity-10">
          <div className="w-full h-full border-[16px] border-dashed border-primary rounded-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA card with neubrutalism style */}
          <div className="rounded-3xl border-4 border-black bg-background p-8 md:p-12 shadow-[0.75rem_0.75rem_0px_0px_rgba(0,0,0,0.8)] relative overflow-hidden">
            {/* Overlapping elements for dimension */}
            <div className="absolute top-0 right-0 w-40 h-40 border-8 border-dashed border-primary/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full transform rotate-12"></div>
            <div className="absolute top-1/2 right-0 w-20 h-20 bg-secondary/10 rounded-full translate-x-1/2"></div>

            <div className="relative z-10">
              {/* Badge with neubrutalism style */}
              <div className="inline-flex mb-6 px-4 py-2 bg-primary text-primary-foreground rounded-full border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] font-black transform -rotate-2">
                <Zap className="w-4 h-4 mr-2" />
                SPECIAL OFFER
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                <span className="block">Dive Into the Future</span>
                <span className="relative inline-block">
                  of Education
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary"></div>
                </span>
                <span className="block mt-2">Join Now!</span>
              </h2>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Get unlimited access to over 500+ courses taught by industry experts. Start your learning journey today and transform your career.
              </p>

              {/* Features with icons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">15,000+ students</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">4.9/5 average rating</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">30-day guarantee</span>
                </div>
              </div>

              {/* Action buttons with neubrutalism style */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground border-4 border-black shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] transition-all font-black text-lg px-8 py-8 h-auto"
                  asChild
                >
                  <Link href="/signup">
                    GET STARTED NOW
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-4 border-black bg-secondary/10 text-foreground shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] transition-all font-black text-lg px-8 py-8 h-auto"
                  asChild
                >
                  <Link href="/courses">
                    EXPLORE COURSES
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Supporting text under the card */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Join thousands of students already learning on our platform.
              <br className="hidden md:block" />
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}