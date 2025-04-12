"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { cn } from "@/src/lib/utils"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@workspace/ui/components/button"

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

// Define testimonial type
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  content: string;
  date: string;
  isRecent: number;
  isFeatured: number;
}

// Mock data for testimonials - expanded to 18 entries
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "TechCorp",
    image: "/testimonials/sarah.jpg",
    rating: 5,
    content: "NaroPath's courses completely transformed my career. The hands-on approach and real-world projects helped me land my dream job at TechCorp.",
    date: "2024-03-15",
    isRecent: 1,
    isFeatured: 1
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Scientist",
    company: "DataFlow",
    image: "/testimonials/michael.jpg",
    rating: 5,
    content: "The quality of instruction and the depth of content exceeded my expectations. I've recommended NaroPath to all my colleagues.",
    date: "2024-02-28",
    isRecent: 1,
    isFeatured: 0
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "UX Designer",
    company: "DesignHub",
    image: "/testimonials/emma.jpg",
    rating: 4,
    content: "The design courses are top-notch. The instructors are industry experts who provide valuable insights and feedback.",
    date: "2024-01-10",
    isRecent: 1,
    isFeatured: 1
  },
  {
    id: 4,
    name: "John Doe",
    role: "Software Engineer",
    company: "TechCorp",
    image: "/testimonials/john.jpg",
    rating: 5,
    content: "The coding challenges were a great way to sharpen my skills. The community support is fantastic.",
    date: "2023-12-05",
    isRecent: 1,
    isFeatured: 0
  },
  {
    id: 5,
    name: "Jane Smith",
    role: "UX Designer",
    company: "DesignHub",
    image: "/testimonials/jane.jpg",
    rating: 4,
    content: "The design courses are top-notch. The instructors are industry experts who provide valuable insights and feedback.",
    date: "2023-11-15",
    isRecent: 0,
    isFeatured: 1
  },
  {
    id: 6,
    name: "John Doe",
    role: "Software Engineer",
    company: "TechCorp",
    image: "/testimonials/john.jpg",
    rating: 5,
    content: "The coding challenges were a great way to sharpen my skills. The community support is fantastic.",
    date: "2023-10-20",
    isRecent: 0,
    isFeatured: 0
  },
  {
    id: 7,
    name: "Alex Thompson",
    role: "Frontend Developer",
    company: "WebSolutions",
    image: "/testimonials/alex.jpg",
    rating: 5,
    content: "The frontend development course was exactly what I needed to level up my skills. The projects were challenging but rewarding.",
    date: "2023-09-18",
    isRecent: 0,
    isFeatured: 1
  },
  {
    id: 8,
    name: "Priya Patel",
    role: "Backend Engineer",
    company: "ServerStack",
    image: "/testimonials/priya.jpg",
    rating: 4,
    content: "NaroPath's backend development track gave me the confidence to tackle complex server-side challenges. Great curriculum!",
    date: "2023-08-25",
    isRecent: 0,
    isFeatured: 0
  },
  {
    id: 9,
    name: "David Wilson",
    role: "DevOps Engineer",
    company: "CloudNine",
    image: "/testimonials/david.jpg",
    rating: 5,
    content: "The DevOps certification program was comprehensive and practical. I'm now implementing CI/CD pipelines with confidence.",
    date: "2023-07-14",
    isRecent: 0,
    isFeatured: 1
  },
  {
    id: 10,
    name: "Sophia Garcia",
    role: "Mobile Developer",
    company: "AppWorks",
    image: "/testimonials/sophia.jpg",
    rating: 5,
    content: "Learning mobile development through NaroPath was a game-changer. The instructors were responsive and the content was up-to-date.",
    date: "2023-06-22",
    isRecent: 0,
    isFeatured: 0
  },
  {
    id: 11,
    name: "James Lee",
    role: "Blockchain Developer",
    company: "ChainTech",
    image: "/testimonials/james.jpg",
    rating: 4,
    content: "The blockchain course demystified complex concepts and provided hands-on experience with smart contracts. Highly recommend!",
    date: "2023-05-19",
    isRecent: 0,
    isFeatured: 1
  },
  {
    id: 12,
    name: "Olivia Brown",
    role: "AI Specialist",
    company: "NeuralNet",
    image: "/testimonials/olivia.jpg",
    rating: 5,
    content: "NaroPath's AI and machine learning track was rigorous but incredibly rewarding. The projects helped me build a strong portfolio.",
    date: "2023-04-11",
    isRecent: 0,
    isFeatured: 0
  },
  {
    id: 13,
    name: "Ryan Martinez",
    role: "Game Developer",
    company: "GameCraft",
    image: "/testimonials/ryan.jpg",
    rating: 5,
    content: "The game development bootcamp exceeded my expectations. I published my first indie game just two months after completing it!",
    date: "2023-03-08",
    isRecent: 0,
    isFeatured: 1
  },
  {
    id: 14,
    name: "Zoe Williams",
    role: "Cybersecurity Analyst",
    company: "SecureNet",
    image: "/testimonials/zoe.jpg",
    rating: 4,
    content: "NaroPath's cybersecurity program provided practical skills that I use daily in my role protecting critical infrastructure.",
    date: "2023-02-15",
    isRecent: 0,
    isFeatured: 0
  },
  {
    id: 15,
    name: "Ethan Clark",
    role: "Cloud Architect",
    company: "SkyCompute",
    image: "/testimonials/ethan.jpg",
    rating: 5,
    content: "The cloud architecture certification prepared me for real-world challenges. I received a promotion within weeks of completing it.",
    date: "2023-01-20",
    isRecent: 0,
    isFeatured: 1
  },
  {
    id: 16,
    name: "Mia Jackson",
    role: "Product Manager",
    company: "ProductLabs",
    image: "/testimonials/mia.jpg",
    rating: 5,
    content: "As someone transitioning to product management, NaroPath's course gave me the framework and confidence to lead technical teams.",
    date: "2022-12-12",
    isRecent: 0,
    isFeatured: 0
  },
  {
    id: 17,
    name: "Noah Kim",
    role: "Data Engineer",
    company: "DataStream",
    image: "/testimonials/noah.jpg",
    rating: 4,
    content: "The data engineering track was comprehensive and practical. I'm now building data pipelines that scale to millions of users.",
    date: "2022-11-09",
    isRecent: 0,
    isFeatured: 1
  },
  {
    id: 18,
    name: "Ava Robinson",
    role: "AR/VR Developer",
    company: "ImmerseTech",
    image: "/testimonials/ava.jpg",
    rating: 5,
    content: "NaroPath's immersive technology course was cutting-edge. I'm now working on AR applications that are changing how people interact with technology.",
    date: "2022-10-05",
    isRecent: 0,
    isFeatured: 0
  }
]

export default function TestimonialsPage() {
  // Client-side component for pagination
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
              <h1 className="text-4xl md:text-5xl font-black mb-4">Student Success Stories</h1>
              <p className="text-lg text-muted-foreground">
                Hear from our students about their learning journey and career transformation
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className={cn(
              "p-6",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.large
            )}>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full grid grid-cols-3 p-0 bg-transparent rounded-none h-auto mb-6">
                  {["all", "recent", "featured"].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className={cn(
                        "py-3 rounded-none font-bold uppercase text-black",
                        "border-b-4 border-black",
                        "data-[state=active]:bg-blue-300 data-[state=active]:shadow-none"
                      )}
                    >
                      {tab === "all" ? "All Testimonials" :
                       tab === "recent" ? "Recent" : "Featured"}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="all" className="mt-0">
                  <TestimonialPagination testimonials={testimonials} />
                </TabsContent>

                <TabsContent value="recent" className="mt-0">
                  <TestimonialPagination testimonials={testimonials.filter(t => t.isRecent === 1)} />
                </TabsContent>

                <TabsContent value="featured" className="mt-0">
                  <TestimonialPagination testimonials={testimonials.filter(t => t.isFeatured === 1)} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Client-side pagination component
function TestimonialPagination({ testimonials }: { testimonials: Testimonial[] }) {
  // "use client"

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  // Calculate the testimonials to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentTestimonials = testimonials.slice(indexOfFirstItem, indexOfLastItem)

  // Handle pagination navigation
  const goToPage = (pageNumber: number): void => {
    // Implement circular pagination (loop back to 1 after max, or to max before 1)
    if (pageNumber > totalPages) {
      setCurrentPage(1)
    } else if (pageNumber < 1) {
      setCurrentPage(totalPages)
    } else {
      setCurrentPage(pageNumber)
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentTestimonials.map((testimonial: Testimonial) => (
          <div
            key={testimonial.id}
            className={cn(
              "p-6",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.small,
              NEOBRUTALISM.hover.transform,
              NEOBRUTALISM.hover.shadow
            )}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-black">{testimonial.name[0]}</span>
              </div>
              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "text-xl",
                    i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                  )}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-muted-foreground mb-4">{testimonial.content}</p>
            <p className="text-sm text-muted-foreground">{testimonial.date}</p>
          </div>
        ))}
      </div>

      {/* Pagination controls - only left and right arrows */}
      <div className="mt-10 flex items-center justify-center gap-4">
        <Button
          onClick={() => goToPage(currentPage - 1)}
          className={cn(
            "p-2",
            "bg-white",
            NEOBRUTALISM.borders.normal,
            NEOBRUTALISM.shadows.small,
            NEOBRUTALISM.hover.transform
          )}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-5 w-5 text-black" />
        </Button>

        <div className="text-center text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </div>

        <Button
          onClick={() => goToPage(currentPage + 1)}
          className={cn(
            "p-2",
            "bg-white",
            NEOBRUTALISM.borders.normal,
            NEOBRUTALISM.shadows.small,
            NEOBRUTALISM.hover.transform
          )}
          aria-label="Next page"
        >
          <ChevronRight className="h-5 w-5 text-black" />
        </Button>
      </div>
    </div>
  )
}
