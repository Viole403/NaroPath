import { format } from "date-fns";
import { MoreHorizontal, ThumbsUp, MessageCircle } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";

import { Comment } from "@/src/lib/blog-data";
import { cn } from "@/src/lib/utils";

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

// Random background color for comment cards
const getCommentColor = (index: number) => {
  const colors = [
    "bg-blue-50",
    "bg-yellow-50",
    "bg-green-50",
    "bg-purple-50",
    "bg-pink-50"
  ]
  return colors[index % colors.length]
}

interface BlogCommentListProps {
  comments: Comment[];
}

export function BlogCommentList({ comments }: BlogCommentListProps) {
  return (
    <div className="space-y-6">
      {comments.length > 0 ? (
        <>
          {comments.map((comment, index) => (
            <div
              key={comment.id}
              className={cn(
                "p-4",
                getCommentColor(index),
                NEOBRUTALISM.borders.normal,
                "transform transition-all hover:-translate-y-1"
              )}
            >
              <div className="flex space-x-4">
                <Avatar className={cn(
                  "h-12 w-12",
                  "border-2 border-black"
                )}>
                  <AvatarImage
                    src={comment.author.avatar}
                    alt={comment.author.name}
                  />
                  <AvatarFallback>
                    {comment.author.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold">
                        {comment.author.name}
                      </span>
                      <span className="text-muted-foreground ml-2 text-xs">
                        {format(new Date(comment.createdAt), "MMMM d, yyyy 'at' h:mm a")}
                        {comment.isEdited && <span className="ml-1 italic">(edited)</span>}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn(
                        "h-8 w-8",
                        "border border-black",
                        "hover:bg-gray-200"
                      )}
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm font-medium">{comment.content}</p>
                  <div className="flex items-center space-x-2 pt-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "flex items-center",
                        "bg-white border-2 border-black",
                        "text-xs font-bold",
                        "hover:bg-gray-100"
                      )}
                    >
                      <ThumbsUp className="mr-1 h-3 w-3" />
                      <span>{comment.likes}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "flex items-center",
                        "bg-white border-2 border-black",
                        "text-xs font-bold",
                        "hover:bg-gray-100"
                      )}
                    >
                      <MessageCircle className="mr-1 h-3 w-3" />
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className={cn(
            "mt-8 text-center p-4",
            "bg-yellow-100",
            NEOBRUTALISM.borders.normal
          )}>
            <Button className={cn(
              "bg-blue-300 text-black font-bold",
              NEOBRUTALISM.borders.normal,
              "transform transition hover:-translate-y-1"
            )}>
              Load More Comments
            </Button>
          </div>
        </>
      ) : (
        <div className={cn(
          "p-8 text-center",
          "bg-gray-50",
          NEOBRUTALISM.borders.normal
        )}>
          <p className="font-bold mb-4">No comments yet. Be the first to comment!</p>
          <Button className={cn(
            "bg-blue-300 text-black font-bold",
            NEOBRUTALISM.borders.normal,
            "transform transition hover:-translate-y-1"
          )}>
            Add Comment
          </Button>
        </div>
      )}
    </div>
  );
}