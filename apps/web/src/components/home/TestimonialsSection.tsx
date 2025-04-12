"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
  course: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "UX Designer",
    company: "Creative Solutions",
    avatar: "/avatars/sarah.jpg",
    content: "The web development bootcamp completely transformed my career. The instructors were exceptional and the course material was up-to-date with the latest industry standards. I landed a job within two weeks of completing the course!",
    rating: 5,
    course: "Web Development Bootcamp"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Scientist",
    company: "TechAnalytics",
    avatar: "/avatars/michael.jpg",
    content: "I've taken several online courses before, but none were as comprehensive and well-structured as this one. The machine learning curriculum was challenging but extremely rewarding. The hands-on projects really cemented my understanding.",
    rating: 5,
    course: "Advanced Machine Learning"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Brand Innovators",
    avatar: "/avatars/emily.jpg",
    content: "The digital marketing course exceeded my expectations. The real-world case studies and practical assignments helped me implement strategies that increased our company's conversion rates by 40%. Absolutely worth the investment!",
    rating: 4,
    course: "Digital Marketing Mastery"
  },
  {
    id: 4,
    name: "David Okafor",
    role: "Software Engineer",
    company: "DevSphere",
    avatar: "/avatars/david.jpg",
    content: "As someone transitioning from another field, this course provided exactly what I needed to build a strong foundation in programming. The community support was incredible, and the instructors went above and beyond to answer questions.",
    rating: 5,
    course: "Python Programming Fundamentals"
  },
  {
    id: 5,
    name: "Aisha Patel",
    role: "Entrepreneur",
    company: "TechStart",
    avatar: "/avatars/aisha.jpg",
    content: "The business entrepreneurship program gave me the confidence and skills to launch my own startup. The mentorship program and networking opportunities were invaluable. I highly recommend this to anyone looking to start their own business.",
    rating: 5,
    course: "Business Entrepreneurship"
  },
  {
    id: 6,
    name: "Thomas Wilson",
    role: "Graphic Designer",
    company: "Creative Minds",
    avatar: "/avatars/thomas.jpg",
    content: "The UI/UX design course helped me elevate my design skills to the next level. The instructor's feedback was detailed and constructive. I've already recommended this course to several colleagues!",
    rating: 4,
    course: "UI/UX Design Masterclass"
  }
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative p-6 rounded-xl border-2 border-border bg-background/50 backdrop-blur-sm h-full flex flex-col shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.08)] hover:shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.08)] transition-all">
      {/* Quote icon with neubrutalism style */}
      <div className="absolute -top-5 -left-3 w-10 h-10 rounded-lg border-2 border-black bg-primary flex items-center justify-center shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)]">
        <Quote className="h-5 w-5 text-primary-foreground" />
      </div>

      {/* Rating stars */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
          />
        ))}
      </div>

      {/* Testimonial content */}
      <div className="flex-grow mb-6">
        <p className="text-muted-foreground">"{testimonial.content}"</p>
      </div>

      {/* Course badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary-foreground text-xs font-semibold rounded-full">
          {testimonial.course}
        </span>
      </div>

      {/* Author info */}
      <div className="flex items-center mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-black">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="ml-3">
          <h4 className="font-bold text-base">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  )

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section id="testimonials" className="py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section header with neubrutalism style */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block relative mb-4">
            <span className="bg-primary/80 px-3 py-1 text-primary-foreground text-sm font-black tracking-wider border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] transform -rotate-1">
              SUCCESS STORIES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 relative">
            <span className="relative">
              What Our Students Say
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-secondary"></div>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our community of learners who have transformed their careers through our courses.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
          {currentTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Pagination controls with neubrutalism styling */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prevPage}
            className="p-3 rounded-lg border-2 border-black bg-background hover:bg-muted shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition-all"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full border border-black transition-all
                  ${currentPage === i
                    ? "bg-primary scale-125"
                    : "bg-muted hover:bg-primary/50"
                  }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextPage}
            className="p-3 rounded-lg border-2 border-black bg-background hover:bg-muted shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition-all"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* CTA with neubrutalism */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-black mb-6 relative inline-block">
            <span className="relative">
              Ready to Start Your Learning Journey?
              <div className="absolute -bottom-2 left-0 w-full h-2 bg-primary"></div>
            </span>
          </h3>
          <a
            href="/courses"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg border-2 border-black shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,0.8)] font-bold text-lg hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,0.8)] transition-all"
          >
            Browse All Courses
          </a>
        </div>
      </div>
    </section>
  )
}