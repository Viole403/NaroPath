"use client"

import { format } from "date-fns"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Author, BlogPost } from "@/src/lib/blog-data"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@/src/lib/utils"

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

// Random background color for tags
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

// Generate UI Avatar URL
const getAvatarUrl = (name: string) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=128`;
};

interface BlogSidebarProps {
  author: Author
  similarPosts: BlogPost[]
}

export function BlogSidebar({ author, similarPosts }: BlogSidebarProps) {
  return (
    <div className="sticky top-10 space-y-8">
      {/* Author Bio */}
      <div className={cn(
        "p-6",
        "bg-white",
        NEOBRUTALISM.borders.normal,
        NEOBRUTALISM.shadows.medium
      )}>
        <h3 className="text-xl font-black uppercase mb-4">About the Author</h3>
        <div className="flex flex-col items-center text-center mb-4">
          <Avatar className={cn(
            "h-24 w-24 mb-2",
            NEOBRUTALISM.borders.normal
          )}>
            <AvatarImage
              src={author.avatar || getAvatarUrl(author.name)}
              alt={author.name}
            />
            <AvatarFallback className="text-xl">
              {author.name.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
          <h4 className="font-bold text-lg">{author.name}</h4>
          <p className="text-sm text-muted-foreground mb-2">{author.role}</p>
        </div>
        <p className="text-sm font-medium mb-4">{author.bio}</p>

        {author.expertise && author.expertise.length > 0 && (
          <div className="mt-3">
            <h4 className="font-bold text-sm mb-2">Expertise</h4>
            <div className="flex flex-wrap gap-1">
              {author.expertise.map((skill, i) => (
                <span
                  key={i}
                  className={cn(
                    "text-xs px-2 py-1",
                    getTagColor(i),
                    NEOBRUTALISM.borders.normal
                  )}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {author.socialMedia && (
          <div className="flex justify-center gap-3 mt-4">
            {author.socialMedia.twitter && (
              <a
                href={`https://twitter.com/${author.socialMedia.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-2 bg-blue-300 border-2 border-black"
              >
                Twitter
              </a>
            )}
            {author.socialMedia.github && (
              <a
                href={`https://github.com/${author.socialMedia.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-2 bg-gray-300 border-2 border-black"
              >
                GitHub
              </a>
            )}
            {author.socialMedia.linkedin && (
              <a
                href={`https://linkedin.com/in/${author.socialMedia.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-2 bg-blue-200 border-2 border-black"
              >
                LinkedIn
              </a>
            )}
          </div>
        )}
      </div>

      {/* Similar Posts */}
      <div className={cn(
        "p-6",
        "bg-white",
        NEOBRUTALISM.borders.normal,
        NEOBRUTALISM.shadows.medium
      )}>
        <h3 className="text-xl font-black uppercase mb-4">Similar Posts</h3>
        <div className="space-y-4">
          {similarPosts.length > 0 ? (
            similarPosts.map((similarPost) => (
              <Link
                key={similarPost.id}
                href={`/blog/${similarPost.slug}`}
                className={cn(
                  "block p-4",
                  "bg-blue-50",
                  NEOBRUTALISM.borders.normal,
                  "transform transition hover:-translate-y-1"
                )}
              >
                <h4 className="font-bold mb-1">{similarPost.title}</h4>
                <p className="text-xs text-muted-foreground mb-2">
                  {format(new Date(similarPost.publishedAt), "MMM d, yyyy")}
                </p>
                <div className="flex flex-wrap gap-1">
                  {similarPost.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={tag.id}
                      className={cn(
                        "text-xs px-2 py-0.5",
                        getTagColor(i),
                        "border border-black"
                      )}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-muted-foreground">No similar posts found</p>
          )}
        </div>
      </div>

      {/* Back to Blog */}
      <Link href="/blog">
        <Button className={cn(
          "w-full py-3 px-4",
          "bg-yellow-400 text-black font-black uppercase",
          NEOBRUTALISM.borders.normal,
          NEOBRUTALISM.shadows.medium,
          "transform transition-all",
          "hover:-translate-y-1 hover:shadow-[6px_12px_0px_0px_rgba(0,0,0,1)]"
        )}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Posts
        </Button>
      </Link>
    </div>
  )
}