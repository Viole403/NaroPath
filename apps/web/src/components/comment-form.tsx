"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"
import { UserData } from "@/src/lib/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"

interface CommentFormProps {
  postId: string
  postSlug: string
  currentUser: UserData
  onCommentAdded?: () => void
}

export function CommentForm({ postId, postSlug, currentUser, onCommentAdded }: CommentFormProps) {
  const router = useRouter()
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!content.trim()) {
      setError("Comment cannot be empty")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      // In a real app, this would submit to an API endpoint
      // For now, simulate a network request
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Reset form
      setContent("")

      // Refresh the page to show the new comment
      // In a real app, you might use server actions or API mutations
      if (onCommentAdded) {
        onCommentAdded()
      } else {
        router.refresh()
      }
    } catch (err) {
      setError("Failed to submit comment. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex space-x-4">
        <Avatar className="h-10 w-10">
          <AvatarImage
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.name)}&size=80`}
            alt={currentUser.name}
          />
          <AvatarFallback>{currentUser.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-2">
          <div className="flex items-center">
            <span className="font-medium">{currentUser.name}</span>
            <span className="ml-2 text-xs text-muted-foreground">
              Posting as {currentUser.role}
            </span>
          </div>

          <Textarea
            placeholder="Add a comment..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[100px] w-full"
          />

          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}

          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setContent("")}
              disabled={isSubmitting || !content.trim()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || !content.trim()}
            >
              {isSubmitting ? "Posting..." : "Post Comment"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}