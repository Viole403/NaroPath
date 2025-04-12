import React from "react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { BookOpen, Clock, Calendar } from "lucide-react"
import { cn } from "@/src/lib/utils"
import { BlogPost } from "@/src/lib/blog-data"

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

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  // Format the date
  const formattedDate = format(new Date(post.publishedAt), "MMMM d, yyyy")

  // Calculate reading time - rough estimate based on word count
  const readingTime = Math.ceil(post.content.split(" ").length / 200) // Assuming 200 words per minute

  return (
    <div className={cn(
      "group bg-white overflow-hidden h-full",
      NEOBRUTALISM.borders.normal,
      NEOBRUTALISM.shadows.medium,
      "transform transition-all duration-300",
      "hover:-translate-y-1",
      "flex flex-col"
    )}>
      {/* Featured tag */}
      {post.featuredOrder !== undefined && (
        <div className={cn(
          "absolute top-0 right-0 z-10",
          "px-3 py-1 bg-yellow-300 font-bold",
          "border-l-2 border-b-2 border-black"
        )}>
          Featured
        </div>
      )}

      {/* Post image */}
      <Link href={`/blog/${post.slug}`}>
        <div className={cn(
          "relative w-full h-48 overflow-hidden border-b-2 border-black"
        )}>
          <img
            src={post.coverImage}
            alt={post.title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="flex-1 flex flex-col p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 2).map((tag, index) => (
            <Link
              key={tag.id}
              href={`/blog?tag=${encodeURIComponent(tag.name)}`}
              className={cn(
                "px-2 py-0.5 text-xs font-bold",
                getTagColor(index),
                NEOBRUTALISM.borders.normal
              )}
            >
              {tag.name}
            </Link>
          ))}
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`} className="group-hover:underline mb-2">
          <h3 className="font-black text-xl leading-tight uppercase">{post.title}</h3>
        </Link>

        {/* Excerpt */}
        <p className="text-sm mb-4 font-medium line-clamp-2">{post.excerpt}</p>

        {/* Metadata */}
        <div className="mt-auto pt-4 border-t-2 border-black flex flex-col gap-2">
          {/* Author info */}
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 border-2 border-black">
              <AvatarImage
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author.name)}`}
                alt={post.author.name}
              />
              <AvatarFallback>{post.author.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <span className="text-xs font-bold">{post.author.name}</span>
          </div>

          {/* Date and reading time */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{readingTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
