import { Button } from "@workspace/ui/components/button"
import { cn } from "@/src/lib/utils"
import { Calendar, Clock, MapPin, Users, ArrowRight, Share2 } from "lucide-react"
import Link from "next/link"

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

// Mock event data - in a real app, this would come from an API
const event = {
  id: "1",
  slug: "web-development-bootcamp",
  title: "Web Development Bootcamp",
  description: "Intensive 12-week program covering full-stack web development",
  longDescription: "Join our comprehensive web development bootcamp where you'll learn everything from HTML and CSS to advanced JavaScript frameworks. This intensive program is designed to take you from beginner to job-ready developer in just 12 weeks. You'll work on real-world projects, collaborate with peers, and receive mentorship from industry professionals.",
  date: "2024-05-01",
  time: "09:00",
  location: "Online",
  capacity: 30,
  price: "Free",
  type: "bootcamp",
  image: "/images/events/web-dev-bootcamp.jpg",
  instructor: {
    name: "John Doe",
    title: "Senior Full-Stack Developer",
    image: "/images/instructors/john-doe.jpg"
  },
  curriculum: [
    "HTML5 & CSS3 Fundamentals",
    "JavaScript & ES6+",
    "React.js & Next.js",
    "Node.js & Express",
    "Database Design & SQL",
    "RESTful APIs",
    "Authentication & Security",
    "Deployment & DevOps"
  ],
  requirements: [
    "Basic computer skills",
    "No prior programming experience required",
    "Dedication to learning and practicing",
    "Reliable internet connection"
  ]
}

export default function EventPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/events"
              className={cn(
                "inline-flex items-center text-sm font-bold",
                "text-primary hover:text-primary/80",
                "transition-colors duration-200"
              )}
            >
              <ArrowRight className="h-4 w-4 rotate-180 mr-2" />
              Back to Events
            </Link>
          </div>

          <div className={cn(
            "bg-white",
            NEOBRUTALISM.borders.normal,
            NEOBRUTALISM.shadows.medium,
            "overflow-hidden"
          )}>
            <div className="aspect-video relative">
              <img
                src={event.image}
                alt={event.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className={cn(
                  "px-3 py-1 text-sm font-bold",
                  "bg-primary/10",
                  NEOBRUTALISM.borders.normal
                )}>
                  {event.type}
                </span>
                <span className={cn(
                  "px-3 py-1 text-sm font-bold",
                  "bg-green-100",
                  NEOBRUTALISM.borders.normal
                )}>
                  {event.price}
                </span>
              </div>

              <h1 className="text-4xl font-black uppercase mb-4">{event.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{event.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>{event.capacity} spots available</span>
                  </div>
                </div>

                <div className={cn(
                  "p-4",
                  "bg-gray-50",
                  NEOBRUTALISM.borders.normal
                )}>
                  <h3 className="font-bold mb-2">Instructor</h3>
                  <div className="flex items-center gap-3">
                    <img
                      src={event.instructor.image}
                      alt={event.instructor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold">{event.instructor.name}</p>
                      <p className="text-sm text-muted-foreground">{event.instructor.title}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none mb-8">
                <h2>About This Event</h2>
                <p>{event.longDescription}</p>

                <h2>Curriculum</h2>
                <ul>
                  {event.curriculum.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h2>Requirements</h2>
                <ul>
                  {event.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className={cn(
                    "flex-1",
                    "bg-primary text-primary-foreground",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.small,
                    NEOBRUTALISM.hover.transform
                  )}
                >
                  Register Now
                </Button>
                <Button
                  variant="outline"
                  className={cn(
                    "flex-1",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.small,
                    NEOBRUTALISM.hover.transform
                  )}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Event
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
