'use client'

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Heart, MessageCircle, Share2 } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@/src/lib/utils"
import { Comment } from "@/src/lib/blog-data"
import { BlogCommentList } from "./BlogCommentList"

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

interface BlogPostContentProps {
  likeCount: number
  commentCount: number
  comments: Comment[]
}

export function BlogPostContent({ likeCount: initialLikeCount, commentCount, comments }: BlogPostContentProps) {
  // Client-side state for handling likes
  const [likeCount, setLikeCount] = useState(initialLikeCount)
  const [hasLiked, setHasLiked] = useState(false)

  // Handle like button click
  const handleLike = () => {
    if (!hasLiked) {
      setLikeCount(prev => prev + 1)
      setHasLiked(true)
    } else {
      setLikeCount(prev => prev - 1)
      setHasLiked(false)
    }
    // In a real app, you would also make an API call to update the like count on the server
  }

  // Handle share functionality
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      }).catch(err => {
        console.error('Error sharing:', err)
      })
    } else {
      // Fallback - copy URL to clipboard
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          alert('Link copied to clipboard!')
        })
        .catch(err => {
          console.error('Failed to copy:', err)
        })
    }
  }

  return (
    <>
      {/* Actions */}
      <div className={cn(
        "mb-10 p-4",
        "bg-blue-100",
        NEOBRUTALISM.borders.normal,
        "flex items-center justify-between"
      )}>
        <div className="flex gap-4">
          <Button
            className={cn(
              "flex items-center gap-2",
              hasLiked ? "bg-pink-300" : "bg-white",
              "text-black font-bold",
              NEOBRUTALISM.borders.normal,
              "hover:bg-gray-100"
            )}
            onClick={handleLike}
          >
            <Heart className={cn("h-4 w-4", hasLiked && "fill-black")} />
            <span>Like ({likeCount})</span>
          </Button>
          <Button
            className={cn(
              "flex items-center gap-2",
              "bg-white text-black font-bold",
              NEOBRUTALISM.borders.normal,
              "hover:bg-gray-100"
            )}
            onClick={() => document.getElementById('comments-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <MessageCircle className="h-4 w-4" />
            <span>Comment ({commentCount})</span>
          </Button>
        </div>
        <Button
          className={cn(
            "flex items-center gap-2",
            "bg-white text-black font-bold",
            NEOBRUTALISM.borders.normal,
            "hover:bg-gray-100"
          )}
          onClick={handleShare}
        >
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </div>

      {/* Back to Blog Button */}
      <div className="mb-12">
        <Link href="/blog">
          <Button
            className={cn(
              "flex items-center gap-2",
              "bg-yellow-300 text-black font-bold",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.small,
              "transform transition hover:-translate-y-1"
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Posts
          </Button>
        </Link>
      </div>

      {/* Comments Section */}
      <div
        id="comments-section"
        className={cn(
          "p-6",
          "bg-white",
          NEOBRUTALISM.borders.normal,
          NEOBRUTALISM.shadows.medium
        )}
      >
        <h2 className="text-2xl font-black uppercase mb-6">Comments ({comments.length})</h2>
        <BlogCommentList comments={comments} />
      </div>
    </>
  )
}