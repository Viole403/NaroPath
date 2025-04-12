import { Skeleton } from '@workspace/ui/components/skeleton';

export function CourseCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-card">
      {/* Thumbnail skeleton */}
      <div className="relative aspect-video overflow-hidden">
        <Skeleton className="h-full w-full" />
      </div>

      <div className="flex flex-1 flex-col p-4">
        {/* Badge and duration skeleton */}
        <div className="mb-2 flex items-center gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-20" />
        </div>

        {/* Title skeleton */}
        <Skeleton className="mb-2 h-6 w-full" />
        <Skeleton className="mb-2 h-6 w-3/4" />

        <div className="mt-auto space-y-3 pt-2">
          {/* Rating and students skeleton */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-24" />
          </div>

          {/* Instructor and price skeleton */}
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-6 w-20" />
          </div>
        </div>
      </div>
    </div>
  );
}