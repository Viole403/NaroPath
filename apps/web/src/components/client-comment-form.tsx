"use client"

import { UserData } from "@/src/lib/auth"
import { CommentForm } from "@/src/components/comment-form"

interface ClientCommentFormProps {
  postId: string
  postSlug: string
  currentUser: UserData
}

export function ClientCommentForm({ postId, postSlug, currentUser }: ClientCommentFormProps) {
  return (
    <CommentForm
      postId={postId}
      postSlug={postSlug}
      currentUser={currentUser}
      onCommentAdded={() => {
        // Force a refresh of the page to show the new comment
        window.location.reload()
      }}
    />
  )
}