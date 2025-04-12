import Image from 'next/image';
import Link from 'next/link';
import { Clock, Star, Users } from 'lucide-react';

import { formatPrice } from '@/src/lib/utils';
import { Badge } from '@workspace/ui/components/badge';
import { Course } from '@/src/types/course';

interface CourseCardProps {
  course: Course;
  className?: string;
}

export function CourseCard({ course, className = '' }: CourseCardProps) {
  const {
    title,
    slug,
    thumbnail,
    price,
    rating,
    instructor,
    enrollmentCount,
    duration,
    level,
  } = course;

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0
      ? `${hours}h ${mins > 0 ? `${mins}m` : ''}`
      : `${mins}m`;
  };

  // Generate UI Avatar URL
  const getAvatarUrl = (name: string) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=128&rounded=true&content-disposition=inline`;
  };

  return (
    <Link
      href={`/courses/${slug}`}
      className={`group flex flex-col overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md ${className}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {course.isFeatured && (
          <Badge variant="secondary" className="absolute left-2 top-2">
            Featured
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Badge variant="outline" className="capitalize">
            {level}
          </Badge>

          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{formatDuration(duration)}</span>
          </div>
        </div>

        <h3 className="mb-2 line-clamp-2 text-lg font-semibold leading-tight">{title}</h3>

        <div className="mt-auto space-y-3 pt-2">
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center">
              <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{rating.toFixed(1)}</span>
            </div>

            <div className="flex items-center">
              <Users className="mr-1 h-4 w-4 text-muted-foreground" />
              <span>{enrollmentCount} students</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <span className="text-muted-foreground">Instructor: </span>
              <span className="font-medium">{instructor.name}</span>
            </div>

            <div className="text-lg font-bold text-primary">
              {formatPrice(price)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}