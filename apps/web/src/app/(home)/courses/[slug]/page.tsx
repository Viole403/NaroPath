"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Clock, BarChart, Users, CheckCircle2, ArrowLeft, Star, LucideShare2, CircleDollarSign, Award, Download } from "lucide-react"

import CourseBreadcrumbs from "@/src/components/courses/CourseBreadcrumbs"
import CourseGrid from "@/src/components/courses/CourseGrid"
import { Container } from "@/src/components/ui/container"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@workspace/ui/components/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

import { Course, getCourseBySlug, getSimilarCourses } from "@/src/lib/course-data"
import { formatPrice, cn } from "@/src/lib/utils"

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

export default function CourseDetailPage() {
  const { slug } = useParams() as { slug: string }
  const [course, setCourse] = useState<Course | null>(null)
  const [similarCourses, setSimilarCourses] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCourseData = async () => {
      setIsLoading(true)
      try {
        const courseData = await getCourseBySlug(slug)
        setCourse(courseData || null)

        if (courseData && courseData.categories && courseData.categories.length > 0) {
          const relatedCourses = await getSimilarCourses(
            courseData.id,
            courseData.categories[0] || '',
            3
          )
          setSimilarCourses(relatedCourses)
        }
      } catch (error) {
        console.error("Error fetching course:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (slug) {
      fetchCourseData()
    }
  }, [slug])

  // Format minutes to hours and minutes
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0
      ? `${hours}h ${mins > 0 ? `${mins}m` : ''}`
      : `${mins}m`
  }

  // Generate UI Avatar URL
  const getAvatarUrl = (name: string) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=128&rounded=true`;
  };

  // Random background color for neubrutalist tags
  const getTagColor = (index: number) => {
    const colors = [
      "bg-yellow-300",
      "bg-blue-300",
      "bg-pink-300",
      "bg-green-300",
      "bg-purple-300"
    ]
    return colors[index % colors.length]
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Container className="flex-1 flex items-center justify-center">
          <div className={cn(
            "p-8 text-center",
            "bg-white",
            NEOBRUTALISM.borders.normal,
            NEOBRUTALISM.shadows.medium
          )}>
            <div className="inline-block w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="font-bold text-xl uppercase">Loading Course...</p>
          </div>
        </Container>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Container className="py-12 flex flex-col items-center justify-center">
            <div className={cn(
              "p-8 text-center max-w-md mx-auto",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.large
            )}>
              <h1 className="text-3xl font-black uppercase mb-4">Course Not Found</h1>
              <p className="font-medium mb-8">The course you are looking for does not exist or has been removed.</p>
              <Link href="/courses">
                <Button className={cn(
                  "bg-yellow-400 hover:bg-yellow-500",
                  NEOBRUTALISM.borders.normal,
                  NEOBRUTALISM.shadows.small,
                  "hover:shadow-none transform transition hover:-translate-y-1",
                  "text-black font-bold"
                )}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Browse Courses
                </Button>
              </Link>
            </div>
          </Container>
        </main>
      </div>
    )
  }

  const {
    title,
    description,
    thumbnail,
    price,
    rating,
    instructor,
    enrollmentCount,
    duration,
    level,
    categories,
  } = course

  // Mock data for curriculum - in a real app, this would come from the API
  const curriculum = [
    {
      id: "m1",
      title: "Getting Started",
      lectures: [
        { id: "l1", title: "Introduction to the Course", duration: 15, isPreview: true },
        { id: "l2", title: "Setup and Installation", duration: 20, isPreview: false },
        { id: "l3", title: "Course Overview", duration: 10, isPreview: false },
      ]
    },
    {
      id: "m2",
      title: "Core Concepts",
      lectures: [
        { id: "l4", title: "Understanding the Basics", duration: 25, isPreview: true },
        { id: "l5", title: "Essential Techniques", duration: 30, isPreview: false },
        { id: "l6", title: "Advanced Methods", duration: 35, isPreview: false },
        { id: "l7", title: "Practical Examples", duration: 40, isPreview: false },
      ]
    },
    {
      id: "m3",
      title: "Building Real Projects",
      lectures: [
        { id: "l8", title: "Project Planning", duration: 20, isPreview: false },
        { id: "l9", title: "Implementation", duration: 45, isPreview: false },
        { id: "l10", title: "Testing and Debugging", duration: 30, isPreview: false },
        { id: "l11", title: "Deployment", duration: 25, isPreview: false },
      ]
    },
  ]

  // Mock data for what you'll learn - in a real app, this would come from the API
  const learningPoints = [
    "Master the fundamentals and advanced concepts",
    "Build real-world projects from scratch",
    "Understand best practices and industry standards",
    "Learn optimization techniques and performance tips",
    "Implement modern design patterns and architectures",
    "Debug common issues and solve complex problems",
    "Deploy your applications to production",
    "Collaborate effectively in a team environment"
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="border-y-2 border-black bg-gray-50">
          <Container className="py-4">
            <CourseBreadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Courses', href: '/courses' },
              { label: title, href: `/courses/${slug}`, active: true }
            ]} />
          </Container>
        </div>

        <Container className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course header */}
              <div className={cn(
                "p-6",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.medium
              )}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map((category, index) => (
                    <span key={category} className={cn(
                      "px-3 py-1 inline-block",
                      getTagColor(index),
                      "border-2 border-black",
                      "text-xs font-bold uppercase"
                    )}>
                      {category}
                    </span>
                  ))}
                  <span className={cn(
                    "px-3 py-1 inline-block",
                    "bg-white",
                    "border-2 border-black",
                    "text-xs font-bold uppercase"
                  )}>
                    {level}
                  </span>
                </div>

                <h1 className="text-3xl font-black uppercase mb-4">{title}</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className={cn(
                    "flex items-center gap-2 p-2",
                    "border-2 border-black",
                    "bg-blue-100"
                  )}>
                    <Image
                      src={getAvatarUrl(instructor.name)}
                      alt={instructor.name}
                      width={32}
                      height={32}
                      className="border-2 border-black rounded-none"
                      crossOrigin="anonymous"
                    />
                    <span className="font-bold">{instructor.name}</span>
                  </div>

                  <div className={cn(
                    "flex items-center gap-4 p-2",
                    "border-2 border-black",
                    "bg-yellow-100"
                  )}>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span className="font-bold">{formatDuration(duration)}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span className="font-bold">{enrollmentCount}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course image */}
              <div className={cn(
                "relative aspect-video w-full overflow-hidden",
                NEOBRUTALISM.borders.normal
              )}>
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Course tabs */}
              <div className={cn(
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.large
              )}>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full grid grid-cols-4 p-0 bg-transparent rounded-none h-auto">
                    {["overview", "curriculum", "instructor", "reviews"].map((tab, index) => (
                      <TabsTrigger
                        key={tab}
                        value={tab}
                        className={cn(
                          "py-3 rounded-none font-bold uppercase text-black",
                          "border-b-4 border-black",
                          "data-[state=active]:bg-blue-300 data-[state=active]:shadow-none",
                          index > 0 && "border-l-4 border-l-black"
                        )}
                      >
                        {tab}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <div className="p-6">
                    <TabsContent value="overview" className="mt-0 space-y-6">
                      <div className={cn(
                        "p-4",
                        "bg-yellow-100",
                        NEOBRUTALISM.borders.normal
                      )}>
                        <h2 className="text-xl font-black uppercase mb-3">Description</h2>
                        <div className="font-medium">
                          <p>{description}</p>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-xl font-black uppercase mb-3">What You'll Learn</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {learningPoints.map((point, index) => (
                            <div key={index} className={cn(
                              "flex gap-2 p-3",
                              index % 2 === 0 ? "bg-blue-100" : "bg-green-100",
                              NEOBRUTALISM.borders.normal
                            )}>
                              <CheckCircle2 className="h-5 w-5 shrink-0" />
                              <span className="font-medium">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="curriculum" className="mt-0 space-y-4">
                      <h2 className="text-xl font-black uppercase mb-3">Course Curriculum</h2>

                      <div className="space-y-3">
                        {curriculum.map((module) => (
                          <Accordion
                            key={module.id}
                            type="single"
                            collapsible
                            className={cn(
                              NEOBRUTALISM.borders.normal,
                              "bg-white"
                            )}
                          >
                            <AccordionItem value={module.id} className="border-none">
                              <AccordionTrigger className={cn(
                                "px-4 py-3 font-bold",
                                "hover:bg-blue-100"
                              )}>
                                <div className="flex justify-between w-full">
                                  <span>{module.title}</span>
                                  <span className="text-sm">
                                    {module.lectures.length} lectures •
                                    {formatDuration(
                                      module.lectures.reduce((acc, lecture) => acc + lecture.duration, 0)
                                    )}
                                  </span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="px-0 border-t-2 border-black">
                                <div className="divide-y-2 divide-black">
                                  {module.lectures.map((lecture, idx) => (
                                    <div key={lecture.id} className={cn(
                                      "flex justify-between py-3 px-4",
                                      idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    )}>
                                      <div className="flex items-center gap-2">
                                        <BookOpen className="h-4 w-4" />
                                        <span className="font-medium">{lecture.title}</span>
                                        {lecture.isPreview && (
                                          <span className={cn(
                                            "px-2 py-0.5 ml-2 text-xs font-bold",
                                            "bg-green-300",
                                            "border-2 border-black"
                                          )}>
                                            Preview
                                          </span>
                                        )}
                                      </div>
                                      <span className="text-sm font-bold">
                                        {lecture.duration}m
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="instructor" className="mt-0 space-y-6">
                      <div className={cn(
                        "p-4 flex flex-col sm:flex-row items-start gap-4",
                        "bg-blue-100",
                        NEOBRUTALISM.borders.normal
                      )}>
                        <Image
                          src={getAvatarUrl(instructor.name)}
                          alt={instructor.name}
                          width={100}
                          height={100}
                          className={cn(
                            "border-2 border-black",
                            NEOBRUTALISM.shadows.small
                          )}
                          crossOrigin="anonymous"
                        />
                        <div>
                          <h2 className="text-xl font-black uppercase mb-1">{instructor.name}</h2>
                          <p className="font-bold text-sm mb-4">Course Instructor</p>
                          <p className="font-medium">
                            Experienced instructor with a passion for teaching and helping students
                            master complex concepts. Specializes in creating practical,
                            hands-on learning experiences that prepare students for real-world challenges.
                          </p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="reviews" className="mt-0 space-y-6">
                      <div className="text-center">
                        <h2 className="text-xl font-black uppercase mb-4">Course Reviews</h2>
                        <div className={cn(
                          "inline-block p-4 mb-4",
                          "bg-yellow-200",
                          NEOBRUTALISM.borders.normal,
                          NEOBRUTALISM.shadows.medium
                        )}>
                          <div className="text-4xl font-black mb-2">{rating.toFixed(1)}</div>
                          <div className="flex items-center justify-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  "h-6 w-6",
                                  i < Math.round(rating) ? "fill-black" : "fill-gray-300"
                                )}
                              />
                            ))}
                          </div>
                          <div className="font-bold mt-2">
                            ({enrollmentCount} students)
                          </div>
                        </div>
                        <p className="font-medium">
                          Student reviews will appear here once they submit their feedback.
                        </p>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>

              {/* Similar courses */}
              {similarCourses.length > 0 && (
                <div className={cn(
                  "p-6",
                  "bg-white",
                  NEOBRUTALISM.borders.normal,
                  NEOBRUTALISM.shadows.medium
                )}>
                  <h2 className="text-2xl font-black uppercase mb-6">Similar Courses</h2>
                  <CourseGrid courses={similarCourses} isLoading={false} />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className={cn(
                "sticky top-24 p-6",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.large
              )}>
                <div className="space-y-6">
                  <div className={cn(
                    "text-center p-4",
                    "bg-green-100",
                    NEOBRUTALISM.borders.normal
                  )}>
                    <div className="text-3xl font-black">
                      {formatPrice(price)}
                    </div>
                  </div>

                  <button className={cn(
                    "w-full py-3 px-4",
                    "bg-blue-500 text-white font-black uppercase",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.medium,
                    "transform transition-all",
                    "hover:-translate-y-1 hover:shadow-[6px_12px_0px_0px_rgba(0,0,0,1)]"
                  )}>
                    Enroll Now
                  </button>

                  <p className="text-center font-bold">
                    30-Day Money-Back Guarantee
                  </p>
                </div>

                <div className="my-6 border-t-2 border-black pt-6">
                  <h3 className="font-black uppercase mb-4">This Course Includes:</h3>

                  <div className="space-y-3">
                    <div className={cn(
                      "flex gap-3 p-3",
                      "bg-yellow-100",
                      NEOBRUTALISM.borders.normal
                    )}>
                      <BookOpen className="h-5 w-5" />
                      <span className="font-bold">
                        {curriculum.reduce((acc, module) => acc + module.lectures.length, 0)} lessons
                      </span>
                    </div>

                    <div className={cn(
                      "flex gap-3 p-3",
                      "bg-blue-100",
                      NEOBRUTALISM.borders.normal
                    )}>
                      <Clock className="h-5 w-5" />
                      <span className="font-bold">{formatDuration(duration)} total length</span>
                    </div>

                    <div className={cn(
                      "flex gap-3 p-3",
                      "bg-pink-100",
                      NEOBRUTALISM.borders.normal
                    )}>
                      <Award className="h-5 w-5" />
                      <span className="font-bold">{level} level</span>
                    </div>

                    <div className={cn(
                      "flex gap-3 p-3",
                      "bg-green-100",
                      NEOBRUTALISM.borders.normal
                    )}>
                      <Users className="h-5 w-5" />
                      <span className="font-bold">{enrollmentCount} students enrolled</span>
                    </div>

                    <div className={cn(
                      "flex gap-3 p-3",
                      "bg-purple-100",
                      NEOBRUTALISM.borders.normal
                    )}>
                      <CircleDollarSign className="h-5 w-5" />
                      <span className="font-bold">Full lifetime access</span>
                    </div>

                    <div className={cn(
                      "flex gap-3 p-3",
                      "bg-orange-100",
                      NEOBRUTALISM.borders.normal
                    )}>
                      <Download className="h-5 w-5" />
                      <span className="font-bold">Downloadable resources</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t-2 border-black">
                  <button className={cn(
                    "w-full py-2 px-4 flex items-center justify-center gap-2",
                    "bg-white font-bold",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.small,
                    "transform transition hover:-translate-y-1"
                  )}>
                    <LucideShare2 className="h-4 w-4" />
                    Gift This Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}