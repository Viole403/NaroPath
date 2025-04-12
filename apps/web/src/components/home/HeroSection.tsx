import { Button } from "@workspace/ui/components/button"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80"></div>

        {/* Blob shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block relative mb-8 animate-bounce-slow">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl"></div>
              <div className="relative bg-primary/90 text-white px-4 py-2 rounded-full border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] font-medium flex items-center gap-1.5">
                <Sparkles className="h-4 w-4" />
                <span>New courses added every week</span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              <span className="inline-block relative">
                Learn,{" "}
                <span className="relative inline-block">
                  Grow,{" "}
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary"></div>
                </span>
              </span>
              <br />
              <span className="inline-block mt-2">Succeed Together</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground mb-8">
              Empower your journey with expert-led courses, interactive community support, and practical learning experiences designed to transform your potential into success.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="rounded-lg border-2 border-black shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] font-bold hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-lg border-2 border-black shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] bg-white text-foreground font-bold hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] transition-all hover:bg-background"
              >
                Watch Demo
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 pt-10 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4 font-medium">TRUSTED BY INDUSTRY LEADERS</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-28 bg-muted rounded-md flex items-center justify-center">
                    <span className="text-muted-foreground font-semibold">Company {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="max-w-xl mx-auto lg:mx-0">
            {/* Image with neubrutalism style */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-secondary/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-primary/30 rounded-full blur-xl"></div>

              {/* Image container with glassmorphism effect */}
              <div className="relative p-6 bg-white/10 backdrop-blur-sm border-2 border-black rounded-xl shadow-[0.75rem_0.75rem_0px_0px_rgba(0,0,0,0.8)] rotate-1">
                {/* Placeholder for actual image */}
                <div className="aspect-video w-full bg-muted rounded-lg border-2 border-black overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-tr from-primary/20 to-secondary/20 flex items-center justify-center text-muted-foreground">
                    {/* Replace with actual image */}
                    <span className="font-medium">Course Platform Screenshot</span>
                  </div>
                </div>

                {/* Floating card elements */}
                <div className="absolute -bottom-10 -left-6 p-4 bg-white rounded-lg border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] rotate-[-5deg] w-56">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">JS</span>
                    </div>
                    <div>
                      <h4 className="font-bold">John S.</h4>
                      <p className="text-sm text-muted-foreground">Completed 12 courses</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-12 -right-8 p-4 bg-white rounded-lg border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] rotate-[3deg]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium">94% Success Rate</span>
                  </div>
                </div>
              </div>

              {/* Stats cards */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-background border-2 border-black rounded-lg shadow-[0.35rem_0.35rem_0px_0px_rgba(0,0,0,0.8)] rotate-[-1deg]">
                  <h4 className="text-3xl font-black">2.5M+</h4>
                  <p className="text-sm text-muted-foreground">Students Worldwide</p>
                </div>
                <div className="p-4 bg-background border-2 border-black rounded-lg shadow-[0.35rem_0.35rem_0px_0px_rgba(0,0,0,0.8)] rotate-[1deg]">
                  <h4 className="text-3xl font-black">4.9/5</h4>
                  <p className="text-sm text-muted-foreground">Student Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}