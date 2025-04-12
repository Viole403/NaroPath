import Link from "next/link";
import { BlogPostTag } from "@/src/lib/blog-data";

interface BlogPostTagsProps {
  tags: BlogPostTag[];
}

export function BlogPostTags({ tags }: BlogPostTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <Link
          key={tag.id}
          href={`/blog/tag/${tag.slug}`}
          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-secondary/80 transition-colors"
        >
          {tag.name}
        </Link>
      ))}

      {tags.length === 0 && (
        <span className="text-sm text-muted-foreground">No tags</span>
      )}
    </div>
  );
}