"use client"

import { useState, FormEvent } from "react"
import { Search } from "lucide-react"

interface CourseSearchProps {
  onSearch: (query: string) => void
  initialQuery?: string
}

export default function CourseSearch({ onSearch, initialQuery = "" }: CourseSearchProps) {
  const [query, setQuery] = useState(initialQuery)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for courses by title, topic, or instructor..."
          className="w-full h-14 pl-12 pr-4 py-3 bg-background border border-input rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-foreground"
        />
        <button
          type="submit"
          className="absolute inset-y-0 left-0 flex items-center pl-4 text-muted-foreground"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>
  )
}