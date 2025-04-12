import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { Button } from "@workspace/ui/components/button"
import Link from "next/link"

import { getAllPosts, getAllTags } from "@/src/lib/blog-data"
import { BlogLayout } from "@/src/components/blog/BlogLayout"
import { BlogHeader } from "@/src/components/blog/BlogHeader"
import { BlogSidebar } from "@/src/components/blog/BlogSidebar"
import { BlogCard } from "@/src/components/blog/BlogCard"
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

interface BlogPageProps {
  params: Promise<{}>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function BlogPage({
  params,
  searchParams,
}: BlogPageProps) {
  // Await both params and searchParams
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  // Extract searchParams safely as a separate variable
  const tagFilter = resolvedSearchParams?.tag as string | undefined;

  // Get all posts, filtered by tag if provided
  const posts = await getAllPosts({
    tag: tagFilter,
  })

  // Get all tags for filter sidebar
  const tags = await getAllTags()

  return (
    <BlogLayout>
      {/* Blog Header */}
      <BlogHeader
        title="Blog"
        description="Explore our collection of articles, tutorials, and insights"
      />

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className={cn(
                "p-6 sticky top-20",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.medium
              )}>
                <h2 className="text-xl font-black uppercase mb-6">Filter by Tags</h2>
                <div className="space-y-2">
                  <Link
                    href="/blog"
                    className={cn(
                      "block px-4 py-2 font-bold",
                      !tagFilter ? "bg-blue-300 border-2 border-black" : "hover:bg-gray-100",
                      "transition-colors"
                    )}
                  >
                    All Tags
                  </Link>

                  {tags.map((tag, index) => (
                    <Link
                      key={tag.id}
                      href={`/blog?tag=${encodeURIComponent(tag.name)}`}
                      className={cn(
                        "block px-4 py-2 font-bold",
                        tagFilter === tag.name ?
                          "bg-yellow-300 border-2 border-black" :
                          "hover:bg-gray-100",
                        "transition-colors"
                      )}
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              <div className={cn(
                "p-6 mb-8",
                "bg-white",
                NEOBRUTALISM.borders.normal,
                NEOBRUTALISM.shadows.large
              )}>
                <Tabs defaultValue="all">
                  <TabsList className="w-full grid grid-cols-3 p-0 bg-transparent rounded-none h-auto mb-6">
                    {["all", "latest", "popular"].map((tab, index) => (
                      <TabsTrigger
                        key={tab}
                        value={tab}
                        className={cn(
                          "py-3 rounded-none font-bold uppercase text-black",
                          "border-b-4 border-black",
                          "data-[state=active]:bg-blue-300 data-[state=active]:shadow-none",
                          index > 0 && "border-l-4 border-l-black"
                        )}
                      >
                        {tab === "all" ? "All Posts" :
                         tab === "latest" ? "Latest" : "Popular"}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <TabsContent value="all" className="mt-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {posts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                      ))}
                    </div>

                    {/* Empty state */}
                    {posts.length === 0 && (
                      <div className={cn(
                        "py-12 text-center",
                        "border-2 border-black",
                        "bg-yellow-100"
                      )}>
                        <p className="text-black font-bold mb-4">No posts found matching your criteria.</p>
                        <Button
                          variant="outline"
                          asChild
                          className={cn(
                            NEOBRUTALISM.borders.normal,
                            NEOBRUTALISM.shadows.small,
                            "font-bold hover:bg-white hover:-translate-y-1"
                          )}
                        >
                          <Link href="/blog">View All Posts</Link>
                        </Button>
                      </div>
                    )}

                    {/* Pagination */}
                    {posts.length > 0 && (
                      <div className="flex justify-center mt-12">
                        <div className="flex items-center gap-1">
                          <Button
                            variant="outline"
                            size="icon"
                            disabled
                            className={cn(
                              NEOBRUTALISM.borders.normal,
                              "bg-white font-bold"
                            )}
                          >
                            <ChevronLeftIcon className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className={cn(
                              "bg-blue-300 text-black font-bold",
                              NEOBRUTALISM.borders.normal
                            )}
                          >
                            1
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className={cn(
                              "bg-white text-black font-bold",
                              NEOBRUTALISM.borders.normal
                            )}
                          >
                            2
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className={cn(
                              "bg-white text-black font-bold",
                              NEOBRUTALISM.borders.normal
                            )}
                          >
                            3
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className={cn(
                              NEOBRUTALISM.borders.normal,
                              "bg-white font-bold"
                            )}
                          >
                            <ChevronRightIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="latest">
                    <div className={cn(
                      "py-12 text-center",
                      "border-2 border-black",
                      "bg-blue-100"
                    )}>
                      <p className="text-black font-bold">Latest posts filter coming soon.</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="popular">
                    <div className={cn(
                      "py-12 text-center",
                      "border-2 border-black",
                      "bg-green-100"
                    )}>
                      <p className="text-black font-bold">Popular posts filter coming soon.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BlogLayout>
  )
}

// Icons
function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
