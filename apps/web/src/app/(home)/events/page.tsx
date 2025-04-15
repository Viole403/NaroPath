import { Button } from "@workspace/ui/components/button"
import { cn } from "@/src/lib/utils"
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"
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

// Mock events data - in a real app, this would come from an API
const events = [
  {
    id: "1",
    slug: "web-development-bootcamp",
    title: "Web Development Bootcamp",
    description: "Intensive 12-week program covering full-stack web development",
    date: "2024-05-01",
    time: "09:00",
    location: "Online",
    capacity: 30,
    price: "Free",
    type: "bootcamp",
    image: "/images/events/web-dev-bootcamp.jpg"
  },
  {
    id: "2",
    slug: "data-science-workshop",
    title: "Data Science Workshop",
    description: "Hands-on workshop covering Python, Pandas, and Machine Learning",
    date: "2024-04-15",
    time: "14:00",
    location: "Online",
    capacity: 50,
    price: "$49.99",
    type: "workshop",
    image: "/images/events/data-science.jpg"
  },
  {
    id: "3",
    slug: "ux-design-masterclass",
    title: "UX Design Masterclass",
    description: "Learn UX principles and design thinking from industry experts",
    date: "2024-04-20",
    time: "10:00",
    location: "Online",
    capacity: 25,
    price: "Free",
    type: "masterclass",
    image: "/images/events/ux-design.jpg"
  }
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="border-y-2 border-black bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm font-bold">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-muted-foreground">Events</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black uppercase mb-4">Upcoming Events</h1>
          <p className="text-xl text-muted-foreground">
            Join our live sessions, workshops, and bootcamps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className={cn(
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.medium,
                "transform transition-all duration-200",
                NEOBRUTALISM.hover.transform,
                NEOBRUTALISM.hover.shadow
              )}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
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

                <h2 className="text-2xl font-black uppercase mb-2">{event.title}</h2>
                <p className="text-muted-foreground mb-6">{event.description}</p>

                <div className="space-y-3 mb-6">
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

                <Link href={`/events/${event.slug}`}>
                  <Button
                    className={cn(
                      "w-full",
                      "bg-primary text-primary-foreground",
                      NEOBRUTALISM.borders.normal,
                      NEOBRUTALISM.shadows.small,
                      NEOBRUTALISM.hover.transform
                    )}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
