"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/src/components/home/Navbar"
import { Footer } from "@/src/components/home/Footer"
import CourseBreadcrumbs from "@/src/components/courses/CourseBreadcrumbs"
import CourseGrid from "@/src/components/courses/CourseGrid"
import CourseFilters from "@/src/components/courses/CourseFilters"
import CourseSearch from "@/src/components/courses/CourseSearch"
import { Container } from "@/src/components/ui/container"
import { getCourses } from "@/src/lib/course-data"
import { Course } from "@/src/types/course"

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Filter states
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const [selectedInstructors, setSelectedInstructors] = useState<string[]>([])
  const [selectedRatings, setSelectedRatings] = useState<number[]>([])

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true)
      const courseData = await getCourses()
      setCourses(courseData)
      setFilteredCourses(courseData)
      setIsLoading(false)
    }

    fetchCourses()
  }, [])

  useEffect(() => {
    // Apply all filters
    let result = courses

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      result = result.filter(
        course =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.instructor.name.toLowerCase().includes(query)
      )
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(course =>
        selectedCategories.some(category => course.categories.includes(category))
      )
    }

    // Level filter
    if (selectedLevels.length > 0) {
      result = result.filter(course => selectedLevels.includes(course.level))
    }

    // Price range filter
    if (selectedPriceRanges.length > 0) {
      result = result.filter(course => {
        if (selectedPriceRanges.includes("Free") && course.price === 0) return true
        if (selectedPriceRanges.includes("Paid") && course.price > 0) return true
        if (selectedPriceRanges.includes("0-50") && course.price > 0 && course.price <= 50) return true
        if (selectedPriceRanges.includes("50-100") && course.price > 50 && course.price <= 100) return true
        if (selectedPriceRanges.includes("100+") && course.price > 100) return true
        return false
      })
    }

    // Instructor filter
    if (selectedInstructors.length > 0) {
      result = result.filter(course =>
        selectedInstructors.includes(course.instructor.name)
      )
    }

    // Rating filter
    if (selectedRatings.length > 0) {
      result = result.filter(course =>
        selectedRatings.some(rating => Math.floor(course.rating) === rating)
      )
    }

    setFilteredCourses(result)
  }, [courses, searchQuery, selectedCategories, selectedLevels, selectedPriceRanges, selectedInstructors, selectedRatings])

  const clearAllFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setSelectedLevels([])
    setSelectedPriceRanges([])
    setSelectedInstructors([])
    setSelectedRatings([])
  }

  // Extract unique values for filters
  const categories = [...new Set(courses.flatMap(course => course.categories))]
  const levels = [...new Set(courses.map(course => course.level))]
  const instructors = [...new Set(courses.map(course => course.instructor.name))]

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="relative bg-gradient-to-b from-muted/50 to-background py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '30px 30px' }}></div>
          </div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Explore Our Courses</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover courses taught by industry experts and take your skills to the next level
              </p>
              <CourseSearch onSearch={handleSearch} initialQuery={searchQuery} />
            </div>
          </Container>
        </section>

        {/* Breadcrumbs */}
        <div className="border-b border-border">
          <Container className="py-4">
            <CourseBreadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Courses', href: '/courses', active: true }
            ]} />
          </Container>
        </div>

        {/* Main content */}
        <section className="py-12">
          <Container>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Course grid */}
              <div className="w-full lg:w-3/4">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">
                    {isLoading ? 'Loading courses...' : `${filteredCourses.length} ${filteredCourses.length === 1 ? 'Course' : 'Courses'}`}
                  </h2>
                  <button
                    onClick={clearAllFilters}
                    disabled={!selectedCategories.length && !selectedLevels.length && !selectedPriceRanges.length && !selectedInstructors.length && !selectedRatings.length && !searchQuery}
                    className="text-sm px-4 py-2 border-2 border-border rounded-full hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Clear All Filters
                  </button>
                </div>

                <CourseGrid
                  courses={filteredCourses}
                  isLoading={isLoading}
                />
              </div>

              {/* Filters sidebar */}
              <div className="w-full lg:w-1/4 order-first lg:order-last">
                <CourseFilters
                  categories={categories}
                  levels={levels}
                  instructors={instructors}
                  selectedCategories={selectedCategories}
                  selectedLevels={selectedLevels}
                  selectedPriceRanges={selectedPriceRanges}
                  selectedInstructors={selectedInstructors}
                  selectedRatings={selectedRatings}
                  setSelectedCategories={setSelectedCategories}
                  setSelectedLevels={setSelectedLevels}
                  setSelectedPriceRanges={setSelectedPriceRanges}
                  setSelectedInstructors={setSelectedInstructors}
                  setSelectedRatings={setSelectedRatings}
                  clearAllFilters={clearAllFilters}
                />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}