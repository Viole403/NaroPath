import Image from "next/image"
import Link from "next/link"
import { Check, Clock, Star } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

interface CourseCardProps {
  id: string
  title: string
  description: string
  price: number
  rating: number
  reviews: number
  duration: string
  level: "Beginner" | "Intermediate" | "Advanced"
  instructor: string
  image: string
  featured?: boolean
  category: string
}

function CourseCard({ course }: { course: CourseCardProps }) {
  return (
    <div className={`group relative h-full overflow-hidden rounded-2xl border-2 ${course.featured
      ? "col-span-2 md:row-span-2 border-primary shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)]"
      : "border-border shadow-lg"}`}>
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Featured badge */}
      {course.featured && (
        <div className="absolute top-4 right-4 z-20">
          <Badge variant="default" className="bg-primary text-primary-foreground border-2 border-black font-black px-3 py-1 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)]">
            FEATURED
          </Badge>
        </div>
      )}

      {/* Category badge */}
      <div className="absolute top-4 left-4 z-20">
        <Badge variant="secondary" className="border-2 border-black font-bold px-3 py-1">
          {course.category}
        </Badge>
      </div>

      {/* Course Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        {/* Level indicator */}
        <div className="flex items-center mb-3">
          <div className={`w-3 h-3 rounded-full mr-2 ${
            course.level === "Beginner" ? "bg-emerald-500" :
            course.level === "Intermediate" ? "bg-amber-500" : "bg-rose-500"
          }`}></div>
          <span className="text-xs font-bold">{course.level}</span>
          <div className="flex items-center ml-auto">
            <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{course.duration}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-black ${course.featured ? "text-2xl" : "text-xl"} leading-tight mb-2`}>
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="text-sm mb-4">
          <span className="font-medium">By </span>
          <span className="font-bold text-primary">{course.instructor}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-6">
          <div className="flex items-center">
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < Math.floor(course.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`} />
            ))}
          </div>
          <span className="ml-2 text-sm font-bold">{course.rating.toFixed(1)}</span>
          <span className="ml-1 text-sm text-muted-foreground">({course.reviews})</span>
        </div>

        {/* Bottom row with price and button */}
        <div className="flex items-center justify-between">
          <div className="text-xl font-black">
            ${course.price.toFixed(2)}
          </div>
          <Button size="sm" className={course.featured
            ? "border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition-all font-bold"
            : ""} asChild>
            <Link href={`/courses/${course.id}`}>
              View Course
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

const coursesData: CourseCardProps[] = [
  {
    id: "web-dev-101",
    title: "Web Development Fundamentals",
    description: "Master HTML, CSS, and JavaScript to build modern responsive websites from scratch.",
    price: 49.99,
    rating: 4.8,
    reviews: 423,
    duration: "32 hours",
    level: "Beginner",
    instructor: "Sarah Johnson",
    image: "https://picsum.photos/seed/web-dev-course/800/450",
    featured: true,
    category: "Web Development"
  },
  {
    id: "data-science-intro",
    title: "Introduction to Data Science with Python",
    description: "Learn the fundamentals of data analysis, visualization, and machine learning using Python.",
    price: 59.99,
    rating: 4.7,
    reviews: 318,
    duration: "28 hours",
    level: "Intermediate",
    instructor: "Michael Chen",
    image: "https://picsum.photos/seed/data-science-course/800/450",
    category: "Data Science"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design Principles",
    description: "Create stunning interfaces and seamless user experiences using modern design principles.",
    price: 54.99,
    rating: 4.9,
    reviews: 257,
    duration: "24 hours",
    level: "Beginner",
    instructor: "Alex Rivera",
    image: "https://picsum.photos/seed/ui-ux-course/800/450",
    category: "Design"
  },
  {
    id: "mobile-app-dev",
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile applications using React Native and JavaScript.",
    price: 64.99,
    rating: 4.6,
    reviews: 192,
    duration: "36 hours",
    level: "Intermediate",
    instructor: "Jessica Lee",
    image: "https://picsum.photos/seed/mobile-dev-course/800/450",
    category: "Mobile Development"
  },
  {
    id: "ai-ml-intro",
    title: "Artificial Intelligence & Machine Learning",
    description: "Understand core AI concepts and build your own machine learning models.",
    price: 79.99,
    rating: 4.9,
    reviews: 346,
    duration: "40 hours",
    level: "Advanced",
    instructor: "Dr. Robert Smith",
    image: "https://picsum.photos/seed/ai-ml-course/800/450",
    category: "Artificial Intelligence"
  }
]

export function CourseSection() {
  return (
    <section id="courses" className="py-20 relative">
      {/* Background elements for visual interest */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-40 w-20 h-20 bg-destructive/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section header with neubrutalism style */}
        <div className="flex flex-col items-center text-center mb-16 relative">
          <div className="inline-block relative mb-4">
            <span className="bg-secondary px-3 py-1 text-secondary-foreground text-sm font-black tracking-wider border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] transform -rotate-2">
              TRENDING NOW
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 relative">
            <span className="relative">
              Our Featured Courses
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-primary"></div>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our most popular courses across different categories. These courses are carefully curated to help you start your learning journey.
          </p>
        </div>

        {/* Bento grid layout for courses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View all courses button with neubrutalism style */}
        <div className="flex justify-center mt-12">
          <Button size="lg" variant="outline" className="bg-secondary text-secondary-foreground border-4 border-black shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] transition-all font-black text-lg px-8 py-6 h-auto" asChild>
            <Link href="/courses">
              VIEW ALL COURSES
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}