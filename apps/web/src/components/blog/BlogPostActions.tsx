import { ThumbsUp, MessageSquare } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

interface BlogPostActionsProps {
  likeCount: number;
  commentCount: number;
}

export function BlogPostActions({ likeCount, commentCount }: BlogPostActionsProps) {
  return (
    <div className="flex gap-4">
      <Button variant="outline" size="sm" className="gap-2">
        <ThumbsUp size={16} />
        <span>{likeCount} Likes</span>
      </Button>
      <Button variant="outline" size="sm" className="gap-2">
        <MessageSquare size={16} />
        <span>{commentCount} Comments</span>
      </Button>
      <Button variant="outline" size="sm">Share</Button>
    </div>
  );
}