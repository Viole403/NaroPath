import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@/src/lib/utils"

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

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Breadcrumbs */}
      <div className="border-y-2 border-black bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm font-bold">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-muted-foreground">About Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className={cn(
              "p-6",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.medium
            )}>
              <h1 className="text-3xl font-black uppercase mb-6">About BloggerUp</h1>

              <div className={cn(
                "relative aspect-video w-full overflow-hidden mb-8",
                NEOBRUTALISM.borders.normal
              )}>
                <img
                  src="https://picsum.photos/seed/about/1200/630"
                  alt="About BloggerUp"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className={cn(
                "p-4 mb-8",
                "bg-yellow-100",
                NEOBRUTALISM.borders.normal
              )}>
                <p className="font-bold italic">
                  BloggerUp helps content creators boost their online presence with powerful blogging
                  tools and comprehensive courses designed for the modern web.
                </p>
              </div>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-black uppercase mb-3">Our Mission</h2>
                  <p className="mb-4">
                    At BloggerUp, we believe everyone has a unique voice that deserves to be heard.
                    Our mission is to empower writers, creators, and entrepreneurs with the tools and
                    knowledge they need to build successful online platforms and reach their audience.
                  </p>
                  <p>
                    We combine cutting-edge technology with comprehensive educational resources to create
                    an all-in-one platform for content creators of all experience levels.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-black uppercase mb-3">Our Story</h2>
                  <p className="mb-4">
                    Founded in 2023 by a group of passionate bloggers and web developers, BloggerUp
                    began as a solution to the frustrations we experienced while building our own blogs.
                    We wanted to create a platform that was both powerful and easy to use.
                  </p>
                  <p>
                    Today, our team has grown to include experts in content creation, digital marketing,
                    and web development, all working together to help creators like you succeed online.
                  </p>
                </section>
              </div>
            </div>

            <div className={cn(
              "p-6",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.medium
            )}>
              <h2 className="text-2xl font-black uppercase mb-6">Our Values</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={cn(
                  "p-4",
                  "bg-blue-100",
                  NEOBRUTALISM.borders.normal
                )}>
                  <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                  <p>We believe in making powerful tools accessible to everyone, regardless of technical experience.</p>
                </div>

                <div className={cn(
                  "p-4",
                  "bg-green-100",
                  NEOBRUTALISM.borders.normal
                )}>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p>We continuously evolve our platform to incorporate the latest advancements in web technology.</p>
                </div>

                <div className={cn(
                  "p-4",
                  "bg-pink-100",
                  NEOBRUTALISM.borders.normal
                )}>
                  <h3 className="text-xl font-bold mb-2">Community</h3>
                  <p>We foster a supportive community where creators can learn from and inspire each other.</p>
                </div>

                <div className={cn(
                  "p-4",
                  "bg-purple-100",
                  NEOBRUTALISM.borders.normal
                )}>
                  <h3 className="text-xl font-bold mb-2">Quality</h3>
                  <p>We're committed to delivering high-quality education and reliable tools that help you succeed.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className={cn(
              "sticky top-24 space-y-8",
            )}>
              {/* Team Section */}
              <div className={cn(
                "p-6",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.medium
              )}>
                <h2 className="text-xl font-black uppercase mb-4">Our Team</h2>

                <div className="space-y-4">
                  {["CEO & Founder", "Head of Content", "Lead Developer", "Community Manager"].map((role, index) => (
                    <div key={index} className={cn(
                      "flex items-center gap-3 p-3",
                      index % 2 === 0 ? "bg-blue-100" : "bg-yellow-100",
                      NEOBRUTALISM.borders.normal
                    )}>
                      <div className={cn(
                        "w-12 h-12 overflow-hidden",
                        "border-2 border-black"
                      )}>
                        <img
                          src={`https://picsum.photos/seed/team${index}/200`}
                          alt={role}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold">John Doe</div>
                        <div className="text-xs font-medium">{role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className={cn(
                "p-6",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.medium
              )}>
                <h2 className="text-xl font-black uppercase mb-4">Get In Touch</h2>

                <p className="mb-4">Want to learn more about BloggerUp or join our team?</p>

                <Link href="/contact">
                  <Button className={cn(
                    "w-full",
                    "bg-pink-400 hover:bg-pink-500",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.small,
                    "hover:shadow-none transform transition hover:-translate-y-1",
                    "text-black font-bold"
                  )}>
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
