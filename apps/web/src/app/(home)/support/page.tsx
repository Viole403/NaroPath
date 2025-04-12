import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { Button } from "@workspace/ui/components/button"
import { cn } from "@/src/lib/utils"
import { Search, MessageSquare, BookOpen, HelpCircle } from "lucide-react"
import { getAllCategories, getPopularArticles, getRecentArticles } from "@/src/lib/support-data"
import { SupportCategory, SupportArticle } from "@/src/lib/support-data"
import Link from "next/link"

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

export default async function SupportPage() {
  const categories = await getAllCategories()
  const popularArticles = await getPopularArticles(5)
  const recentArticles = await getRecentArticles(5)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className={cn(
              "max-w-3xl mx-auto text-center p-8",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.medium
            )}>
              <h1 className="text-4xl md:text-5xl font-black mb-4">Support Center</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Find answers to common questions and get help with your learning journey
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search for help..."
                  className={cn(
                    "w-full py-3 pl-10 pr-4",
                    "bg-white",
                    NEOBRUTALISM.borders.normal,
                    NEOBRUTALISM.shadows.small,
                    "focus:outline-none focus:ring-2 focus:ring-primary"
                  )}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className={cn(
              "p-6",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.large
            )}>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full grid grid-cols-4 p-0 bg-transparent rounded-none h-auto mb-6">
                  {["all", "popular", "recent", "categories"].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className={cn(
                        "py-3 rounded-none font-bold uppercase text-black",
                        "border-b-4 border-black",
                        "data-[state=active]:bg-blue-300 data-[state=active]:shadow-none"
                      )}
                    >
                      {tab === "all" ? "All Articles" :
                       tab === "popular" ? "Popular" :
                       tab === "recent" ? "Recent" : "Categories"}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className={cn(
                          "p-6",
                          "bg-white",
                          NEOBRUTALISM.borders.normal,
                          NEOBRUTALISM.shadows.small,
                          NEOBRUTALISM.hover.transform,
                          NEOBRUTALISM.hover.shadow
                        )}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className={cn(
                            "p-2 rounded-lg",
                            "bg-primary/10"
                          )}>
                            {category.icon === "book-open" ? <BookOpen className="h-6 w-6" /> :
                             category.icon === "help-circle" ? <HelpCircle className="h-6 w-6" /> :
                             <MessageSquare className="h-6 w-6" />}
                          </div>
                          <h3 className="text-xl font-bold">{category.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">{category.description}</p>
                        <ul className="space-y-2">
                          {category.articles.map((article) => (
                            <li key={article.id}>
                              <Link
                                href={`/support/${article.slug}`}
                                className="flex items-center justify-between group"
                              >
                                <span className="group-hover:text-primary transition-colors">
                                  {article.title}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                  {article.views} views
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="popular" className="mt-0">
                  <div className="grid grid-cols-1 gap-4">
                    {popularArticles.map((article) => (
                      <Link
                        key={article.id}
                        href={`/support/${article.slug}`}
                        className={cn(
                          "p-4",
                          "bg-white",
                          NEOBRUTALISM.borders.normal,
                          NEOBRUTALISM.shadows.small,
                          NEOBRUTALISM.hover.transform,
                          NEOBRUTALISM.hover.shadow
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold">{article.title}</h3>
                          <span className="text-sm text-muted-foreground">
                            {article.views} views
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {article.category} • {article.publishedAt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="recent" className="mt-0">
                  <div className="grid grid-cols-1 gap-4">
                    {recentArticles.map((article) => (
                      <Link
                        key={article.id}
                        href={`/support/${article.slug}`}
                        className={cn(
                          "p-4",
                          "bg-white",
                          NEOBRUTALISM.borders.normal,
                          NEOBRUTALISM.shadows.small,
                          NEOBRUTALISM.hover.transform,
                          NEOBRUTALISM.hover.shadow
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold">{article.title}</h3>
                          <span className="text-sm text-muted-foreground">
                            {article.views} views
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {article.category} • {article.publishedAt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="categories" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className={cn(
                          "p-6",
                          "bg-white",
                          NEOBRUTALISM.borders.normal,
                          NEOBRUTALISM.shadows.small,
                          NEOBRUTALISM.hover.transform,
                          NEOBRUTALISM.hover.shadow
                        )}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className={cn(
                            "p-2 rounded-lg",
                            "bg-primary/10"
                          )}>
                            {category.icon === "book-open" ? <BookOpen className="h-6 w-6" /> :
                             category.icon === "help-circle" ? <HelpCircle className="h-6 w-6" /> :
                             <MessageSquare className="h-6 w-6" />}
                          </div>
                          <h3 className="text-xl font-bold">{category.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">{category.description}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">
                            {category.articles.length} articles
                          </span>
                          <span className="text-sm text-muted-foreground">
                            • {category.articles.reduce((acc, article) => acc + article.views, 0)} total views
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className={cn(
              "max-w-3xl mx-auto text-center p-8",
              "bg-white",
              NEOBRUTALISM.borders.normal,
              NEOBRUTALISM.shadows.medium
            )}>
              <h2 className="text-2xl font-black mb-4">Still Need Help?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <Button
                className={cn(
                  "bg-primary text-primary-foreground",
                  NEOBRUTALISM.borders.normal,
                  NEOBRUTALISM.shadows.small,
                  NEOBRUTALISM.hover.transform
                )}
              >
                Contact Support
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
