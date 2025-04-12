"use client"

import { useState } from "react"
import { ChevronDown, Star } from "lucide-react"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Slider } from "@workspace/ui/components/slider"

interface CourseFiltersProps {
  categories: string[]
  levels: string[]
  instructors: string[]
  selectedCategories: string[]
  selectedLevels: string[]
  selectedPriceRanges: string[]
  selectedInstructors: string[]
  selectedRatings: number[]
  setSelectedCategories: (categories: string[]) => void
  setSelectedLevels: (levels: string[]) => void
  setSelectedPriceRanges: (priceRanges: string[]) => void
  setSelectedInstructors: (instructors: string[]) => void
  setSelectedRatings: (ratings: number[]) => void
  clearAllFilters: () => void
}

export default function CourseFilters({
  categories,
  levels,
  instructors,
  selectedCategories,
  selectedLevels,
  selectedPriceRanges,
  selectedInstructors,
  selectedRatings,
  setSelectedCategories,
  setSelectedLevels,
  setSelectedPriceRanges,
  setSelectedInstructors,
  setSelectedRatings,
  clearAllFilters
}: CourseFiltersProps) {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    level: true,
    price: true,
    instructors: true,
    rating: true
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  const handleLevelChange = (level: string) => {
    if (selectedLevels.includes(level)) {
      setSelectedLevels(selectedLevels.filter(l => l !== level))
    } else {
      setSelectedLevels([...selectedLevels, level])
    }
  }

  const handlePriceRangeChange = (priceRange: string) => {
    if (selectedPriceRanges.includes(priceRange)) {
      setSelectedPriceRanges(selectedPriceRanges.filter(p => p !== priceRange))
    } else {
      setSelectedPriceRanges([...selectedPriceRanges, priceRange])
    }
  }

  const handleInstructorChange = (instructor: string) => {
    if (selectedInstructors.includes(instructor)) {
      setSelectedInstructors(selectedInstructors.filter(i => i !== instructor))
    } else {
      setSelectedInstructors([...selectedInstructors, instructor])
    }
  }

  const handleRatingChange = (rating: number) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter(r => r !== rating))
    } else {
      setSelectedRatings([...selectedRatings, rating])
    }
  }

  const priceRanges = ["Free", "Paid", "0-50", "50-100", "100+"]

  return (
    <div className="space-y-8 sticky top-24">
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="p-4 border-b border-border flex justify-between items-center">
          <h3 className="font-semibold">Filters</h3>
          <button
            onClick={clearAllFilters}
            className="text-sm text-primary hover:underline"
          >
            Clear All
          </button>
        </div>

        <div className="divide-y divide-border">
          {/* Categories filter */}
          <div className="p-4">
            <button
              onClick={() => toggleSection('categories')}
              className="flex justify-between items-center w-full font-medium mb-2"
            >
              <span>Categories</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  expandedSections.categories ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections.categories && (
              <div className="space-y-2 mt-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => handleCategoryChange(category)}
                      className="mr-2"
                    />
                    <label
                      htmlFor={`category-${category}`}
                      className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                    >
                      {category}
                    </label>
                  </div>
                ))}
                {categories.length === 0 && (
                  <p className="text-sm text-muted-foreground">No categories available</p>
                )}
              </div>
            )}
          </div>

          {/* Level filter */}
          <div className="p-4">
            <button
              onClick={() => toggleSection('level')}
              className="flex justify-between items-center w-full font-medium mb-2"
            >
              <span>Level</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  expandedSections.level ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections.level && (
              <div className="space-y-2 mt-3">
                {levels.map((level) => (
                  <div key={level} className="flex items-center">
                    <Checkbox
                      id={`level-${level}`}
                      checked={selectedLevels.includes(level)}
                      onCheckedChange={() => handleLevelChange(level)}
                      className="mr-2"
                    />
                    <label
                      htmlFor={`level-${level}`}
                      className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                    >
                      {level}
                    </label>
                  </div>
                ))}
                {levels.length === 0 && (
                  <p className="text-sm text-muted-foreground">No levels available</p>
                )}
              </div>
            )}
          </div>

          {/* Price filter */}
          <div className="p-4">
            <button
              onClick={() => toggleSection('price')}
              className="flex justify-between items-center w-full font-medium mb-2"
            >
              <span>Price</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  expandedSections.price ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections.price && (
              <div className="space-y-2 mt-3">
                {priceRanges.map((priceRange) => (
                  <div key={priceRange} className="flex items-center">
                    <Checkbox
                      id={`price-${priceRange}`}
                      checked={selectedPriceRanges.includes(priceRange)}
                      onCheckedChange={() => handlePriceRangeChange(priceRange)}
                      className="mr-2"
                    />
                    <label
                      htmlFor={`price-${priceRange}`}
                      className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                    >
                      {priceRange === "Free" ? "Free" :
                        priceRange === "Paid" ? "Paid" :
                        `$${priceRange}`}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rating filter */}
          <div className="p-4">
            <button
              onClick={() => toggleSection('rating')}
              className="flex justify-between items-center w-full font-medium mb-2"
            >
              <span>Rating</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  expandedSections.rating ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections.rating && (
              <div className="space-y-2 mt-3">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <Checkbox
                      id={`rating-${rating}`}
                      checked={selectedRatings.includes(rating)}
                      onCheckedChange={() => handleRatingChange(rating)}
                      className="mr-2"
                    />
                    <label
                      htmlFor={`rating-${rating}`}
                      className="text-sm text-muted-foreground cursor-pointer hover:text-foreground flex items-center"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                      <span className="ml-2">& up</span>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Instructors filter */}
          <div className="p-4">
            <button
              onClick={() => toggleSection('instructors')}
              className="flex justify-between items-center w-full font-medium mb-2"
            >
              <span>Instructors</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  expandedSections.instructors ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedSections.instructors && (
              <div className="space-y-2 mt-3">
                {instructors.map((instructor) => (
                  <div key={instructor} className="flex items-center">
                    <Checkbox
                      id={`instructor-${instructor}`}
                      checked={selectedInstructors.includes(instructor)}
                      onCheckedChange={() => handleInstructorChange(instructor)}
                      className="mr-2"
                    />
                    <label
                      htmlFor={`instructor-${instructor}`}
                      className="text-sm text-muted-foreground cursor-pointer hover:text-foreground"
                    >
                      {instructor}
                    </label>
                  </div>
                ))}
                {instructors.length === 0 && (
                  <p className="text-sm text-muted-foreground">No instructors available</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}