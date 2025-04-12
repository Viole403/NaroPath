"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import Link from "next/link"
import { Separator } from "@workspace/ui/components/separator"
import { Button } from "@workspace/ui/components/button"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { ErrorBoundary } from "react-error-boundary"

import { BlogPost } from "@/src/lib/blog-data"
import { BlogPostHeader } from "@/src/components/blog/BlogPostHeader"
import { BlogAuthorCard } from "@/src/components/blog/BlogAuthorCard"
import { SimilarPostsList } from "@/src/components/blog/SimilarPostsList"
import { BlogPostTags } from "@/src/components/blog/BlogPostTags"
import { BlogPostActions } from "@/src/components/blog/BlogPostActions"
import { BlogLayout } from "@/src/components/blog/BlogLayout"
import { getAvatarUrl } from "@/src/lib/utils"

interface BlogPostClientProps {
  post: BlogPost;
  similarPosts: BlogPost[];
  mdxContent: React.ReactNode;
}

// Fallback component for error boundaries
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="text-red-500 p-4 border border-red-300 rounded bg-red-50 my-4">
      <h3 className="text-lg font-semibold mb-2">Something went wrong rendering this content:</h3>
      <p className="text-sm">{error.message || "Unknown error"}</p>
    </div>
  );
}

export function BlogPostClient({ post, similarPosts, mdxContent }: BlogPostClientProps) {
  // Check if required props are available
  if (!post) {
    return (
      <BlogLayout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Post Data Missing</h1>
            <Button asChild className="mt-4">
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </BlogLayout>
    );
  }

  // Use try-catch for date formatting to prevent runtime errors
  let formattedDate = "";
  let readingTime = 5; // Default reading time in minutes

  try {
    formattedDate = format(new Date(post.publishedAt), "MMMM d, yyyy");
    readingTime = Math.ceil((post.content?.split(" ")?.length || 1000) / 200); // Rough estimate: 200 words per minute
  } catch (error) {
    console.error("Error formatting date or calculating reading time:", error);
    formattedDate = "Publication date unavailable";
  }

  return (
    <BlogLayout>
      {/* Hero Section with Banner Image */}
      <BlogPostHeader
        title={post.title || "Untitled Post"}
        excerpt={post.excerpt || ""}
        coverImage={post.coverImage || "https://picsum.photos/1200/630"}
        publishedDate={formattedDate}
        readingTime={readingTime}
        viewCount={post.viewCount || 0}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Article Content */}
          <article className="flex-1">
            <div className="mb-8 flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src={getAvatarUrl(post.author?.name || "Anonymous")}
                  alt={post.author?.name || "Anonymous"}
                />
                <AvatarFallback>{(post.author?.name || "A").substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author?.name || "Anonymous"}</div>
                <div className="text-sm text-muted-foreground">{post.author?.role || ""}</div>
              </div>
            </div>

            <div className="mt-8">
              <div className="prose dark:prose-invert prose-img:rounded-lg prose-headings:font-medium prose-a:text-primary max-w-none">
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  {mdxContent || <p>Content unavailable</p>}
                </ErrorBoundary>
              </div>
            </div>

            <Separator className="my-10" />

            {/* Tags */}
            <div className="mb-10">
              <BlogPostTags tags={post.tags || []} />
            </div>

            {/* Actions */}
            <div className="mb-10">
              <BlogPostActions likeCount={post.likeCount || 0} commentCount={post.commentCount || 0} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3">
            <div className="sticky top-10">
              {/* Author Bio */}
              {post.author && <BlogAuthorCard author={post.author} />}

              {/* Similar Posts */}
              <SimilarPostsList posts={similarPosts || []} />
            </div>
          </aside>
        </div>
      </div>
    </BlogLayout>
  );
}