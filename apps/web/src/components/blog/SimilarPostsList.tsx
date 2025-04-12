import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";

import { BlogPost } from "@/src/lib/blog-data";

interface SimilarPostsListProps {
  posts: BlogPost[];
}

export function SimilarPostsList({ posts }: SimilarPostsListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Similar Articles</CardTitle>
        <CardDescription>You might also like these</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.id} className="flex gap-4">
              <div className="w-16 h-16 relative rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <h4 className="font-medium line-clamp-2 text-sm">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {format(new Date(post.publishedAt), "MMM d, yyyy")}
                </p>
              </div>
            </div>
          ))}

          {posts.length === 0 && (
            <p className="text-muted-foreground text-sm">No similar articles found.</p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <Link href="/blog">View All Articles</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}