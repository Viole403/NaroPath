import Image from 'next/image';
import { CalendarIcon, ClockIcon, EyeIcon } from 'lucide-react';

interface BlogPostHeaderProps {
  title: string;
  excerpt: string;
  coverImage: string;
  publishedDate: string;
  readingTime: number;
  viewCount: number;
}

export function BlogPostHeader({
  title,
  excerpt,
  coverImage,
  publishedDate,
  readingTime,
  viewCount
}: BlogPostHeaderProps) {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      <Image
        src={coverImage}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg opacity-90 mb-6">{excerpt}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <CalendarIcon size={16} />
                <span>{publishedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <ClockIcon size={16} />
                <span>{readingTime} min read</span>
              </div>
              <div className="flex items-center gap-1">
                <EyeIcon size={16} />
                <span>{viewCount} views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}