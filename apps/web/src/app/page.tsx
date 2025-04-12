import { Navbar } from "@/src/components/home/Navbar"
import { Hero } from "@/src/components/home/Hero"
import { Benefits } from "@/src/components/home/Benefits"
import { CourseSection } from "@/src/components/home/CourseSection"
import { TestimonialsSection } from "@/src/components/home/TestimonialsSection"
import { FaqSection } from "@/src/components/home/FaqSection"
import { CallToAction } from "@/src/components/home/CallToAction"
import { Footer } from "@/src/components/home/Footer"
import { FeaturesSection } from "@/src/components/home/FeaturesSection"
import { HeroSection } from "@/src/components/home/HeroSection"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <Benefits />
        <CourseSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FaqSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
