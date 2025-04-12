import { Button } from "@workspace/ui/components/button"
import { cn } from "@/src/lib/utils"
import { ArrowLeft, MessageSquare, ThumbsUp, Share2 } from "lucide-react"
import Link from "next/link"
import { getArticleBySlug } from "@/src/lib/support-data"
import { SupportArticle } from "@/src/lib/support-data"

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

type SupportArticlePageProps = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function SupportArticlePage({
  params,
  searchParams,
}: SupportArticlePageProps) {
  // Await the params to get the slug
  const { slug } = await params;
  await searchParams; // Await searchParams to satisfy the type

  // Get the article by slug
  const article: SupportArticle | undefined = await getArticleBySlug(slug)

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <div className="container mx-auto px-4 py-16">
            <div className={cn(
              "p-8 text-center",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.medium
            )}>
              <h1 className="text-3xl font-black mb-4">Article Not Found</h1>
              <p className="text-muted-foreground mb-6">
                The article you're looking for doesn't exist or has been moved.
              </p>
              <Link
                href="/support"
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2",
                  "bg-primary text-primary-foreground",
                  NEOBRUTALISM.borders.normal,
                  NEOBRUTALISM.shadows.small,
                  NEOBRUTALISM.hover.transform
                )}
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Support
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/support"
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.small,
              NEOBRUTALISM.hover.transform
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Support
          </Link>
        </div>

        {/* Article Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className={cn(
              "p-6",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.large
            )}>
              {/* Article Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className={cn(
                    "px-3 py-1 text-sm font-bold",
                    "bg-primary/10",
                    NEOBRUTALISM.borders.normal
                  )}>
                    {article.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Last updated: {new Date(article.lastUpdated).toLocaleDateString()}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black mb-4">{article.title}</h1>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {article.author.avatar ? (
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-lg font-bold">{article.author.name[0]}</span>
                    )}
                  </div>
                  <div>
                    <p className="font-bold">{article.author.name}</p>
                    <p className="text-sm text-muted-foreground">{article.author.role}</p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Article Actions */}
              <div className="flex items-center gap-4 mb-8">
                <Button
                  variant="outline"
                  className={cn(
                    "gap-2",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.small,
                    NEOBRUTALISM.hover.transform
                  )}
                >
                  <ThumbsUp className="h-4 w-4" />
                  Helpful ({article.helpfulCount})
                </Button>
                <Button
                  variant="outline"
                  className={cn(
                    "gap-2",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.small,
                    NEOBRUTALISM.hover.transform
                  )}
                >
                  <MessageSquare className="h-4 w-4" />
                  Comment ({article.commentCount})
                </Button>
                <Button
                  variant="outline"
                  className={cn(
                    "gap-2",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.small,
                    NEOBRUTALISM.hover.transform
                  )}
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>

              {/* Related Articles */}
              <div className="border-t border-border pt-8">
                <h2 className="text-2xl font-black mb-4">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {article.relatedArticles.map((related) => (
                    <Link
                      key={related.id}
                      href={`/support/${related.slug}`}
                      className={cn(
                        "p-4",
                        "bg-white",
                        NEOBRUTALISM.borders.normal,
                        NEOBRUTALISM.shadows.small,
                        NEOBRUTALISM.hover.transform,
                        NEOBRUTALISM.hover.shadow
                      )}
                    >
                      <span className={cn(
                        "inline-block px-2 py-1 text-xs font-bold mb-2",
                        "bg-primary/10",
                        NEOBRUTALISM.borders.normal
                      )}>
                        {related.category}
                      </span>
                      <h3 className="font-bold">{related.title}</h3>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
