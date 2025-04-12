import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";

import { Author } from "@/src/lib/blog-data";

interface BlogAuthorCardProps {
  author: Author;
}

export function BlogAuthorCard({ author }: BlogAuthorCardProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>About the Author</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage
              src={author.avatar}
              alt={author.name}
            />
            <AvatarFallback>{author.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <h3 className="font-bold text-lg">{author.name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{author.role}</p>
          <p className="text-sm">{author.bio}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View All Posts by {author.name.split(" ")[0]}
        </Button>
      </CardFooter>
    </Card>
  );
}