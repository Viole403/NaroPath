import { notFound } from "next/navigation"
import { format } from "date-fns"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "@workspace/ui/components/separator"
import { Button } from "@workspace/ui/components/button"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { ArrowLeft, Heart, MessageCircle, Share2, Clock, Calendar, Tag, User } from "lucide-react"

import { getPostBySlug, getSimilarPosts } from "@/src/lib/blog-data"
import { cn } from "@/src/lib/utils"
import { Mdx } from "@/src/components/mdx-components"
import { BlogLayout } from "@/src/components/blog/BlogLayout"
import { BlogPostContent } from "@/src/components/blog/BlogPostContent"
import { BlogSidebar } from "@/src/components/blog/BlogSidebar"

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

// Generate UI Avatar URL
const getAvatarUrl = (name: string) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=128`;
};

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Get the slug directly from params
  const slug = params?.slug;

  const post = await getPostBySlug(slug)

  if (!post) {
    return notFound()
  }

  const similarPosts = await getSimilarPosts(post.id, 3)

  // Format date for display
  const formattedDate = format(new Date(post.publishedAt), "MMMM d, yyyy")
  const readingTime = post.readingTime || Math.ceil(post.content.split(" ").length / 200) // Use provided reading time or estimate

  return (
    <BlogLayout>
      {/* Breadcrumbs */}
      <div className="border-y-2 border-black bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm font-bold">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span className="text-muted-foreground">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Article Content */}
          <article className="flex-1">
            <div className={cn(
              "mb-8",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.medium,
              "p-6 bg-white"
            )}>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <Link
                    href={`/blog?tag=${encodeURIComponent(tag.name)}`}
                    key={tag.id}
                    className={cn(
                      "px-3 py-1 inline-block",
                      getTagColor(index),
                      "border-2 border-black",
                      "text-xs font-bold uppercase"
                    )}
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>

              {/* Post Header */}
              <h1 className="text-3xl font-black uppercase mb-4">{post.title}</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
                <div className={cn(
                  "flex items-center gap-2 p-2",
                  "border-2 border-black",
                  "bg-blue-100"
                )}>
                  <Avatar className="h-10 w-10 border-2 border-black">
                    <AvatarImage
                      src={post.author.avatar || getAvatarUrl(post.author.name)}
                      alt={post.author.name}
                    />
                    <AvatarFallback>
                      {post.author.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold">{post.author.name}</div>
                    <div className="text-xs">{post.author.role}</div>
                  </div>
                </div>

                <div className={cn(
                  "flex items-center gap-4 p-2",
                  "border-2 border-black",
                  "bg-yellow-100"
                )}>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span className="font-bold">{formattedDate}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span className="font-bold">{readingTime} min read</span>
                  </div>
                </div>
              </div>

              {/* Cover Image */}
              <div className={cn(
                "relative aspect-video w-full overflow-hidden mb-8",
                NEOBRUTALISM.borders.normal
              )}>
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Excerpt */}
              <div className={cn(
                "p-4 mb-8",
                "bg-green-100",
                NEOBRUTALISM.borders.normal
              )}>
                <p className="font-bold italic">{post.excerpt}</p>
              </div>

              {/* Post Content */}
              <div className={cn(
                "prose dark:prose-invert max-w-none",
                "prose-headings:font-black prose-headings:uppercase",
                "prose-p:font-medium",
                "prose-code:bg-gray-100 prose-code:p-1 prose-code:rounded",
                "prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:bg-yellow-100 prose-blockquote:p-4 prose-blockquote:not-italic",
                "prose-img:border-2 prose-img:border-black prose-img:rounded-none",
              )}>
                {post.content && <Mdx code={post.content} />}
              </div>
            </div>

            {/* Post Meta */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Article Stats */}
              <div className={cn(
                "p-4",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.small
              )}>
                <h3 className="font-black uppercase mb-3">Article Stats</h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className={cn(
                    "p-2 text-center",
                    "bg-blue-100",
                    NEOBRUTALISM.borders.normal
                  )}>
                    <div className="text-2xl font-bold">{post.viewCount}</div>
                    <div className="text-xs font-bold uppercase">Views</div>
                  </div>
                  <div className={cn(
                    "p-2 text-center",
                    "bg-pink-100",
                    NEOBRUTALISM.borders.normal
                  )}>
                    <div className="text-2xl font-bold">{post.likeCount}</div>
                    <div className="text-xs font-bold uppercase">Likes</div>
                  </div>
                  <div className={cn(
                    "p-2 text-center",
                    "bg-yellow-100",
                    NEOBRUTALISM.borders.normal
                  )}>
                    <div className="text-2xl font-bold">{post.commentCount}</div>
                    <div className="text-xs font-bold uppercase">Comments</div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className={cn(
                "p-4",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.small
              )}>
                <h3 className="font-black uppercase mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link
                      key={tag.id}
                      href={`/blog?tag=${encodeURIComponent(tag.name)}`}
                      className={cn(
                        "px-3 py-1 font-bold",
                        getTagColor(index),
                        NEOBRUTALISM.borders.normal,
                        "transform transition-transform hover:-translate-y-1"
                      )}
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Resources */}
            {post.relatedResources && post.relatedResources.length > 0 && (
              <div className={cn(
                "p-4 mb-8",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.medium
              )}>
                <h3 className="font-black uppercase mb-3">Related Resources</h3>
                <div className="space-y-2">
                  {post.relatedResources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "block p-3 font-medium",
                        getTagColor(index),
                        NEOBRUTALISM.borders.normal,
                        "transform transition hover:-translate-y-1"
                      )}
                    >
                      <div className="font-bold">{resource.title}</div>
                      <div className="text-xs uppercase">{resource.type}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Client-side actions component for interactivity */}
            <BlogPostContent
              likeCount={post.likeCount}
              commentCount={post.commentCount}
              comments={post.comments}
            />
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3">
            <BlogSidebar
              author={post.author}
              similarPosts={similarPosts}
            />
          </aside>
        </div>
      </div>
    </BlogLayout>
  )
}