import { Skeleton } from '@workspace/ui/components/skeleton';
import { CourseCardSkeleton } from './CourseCardSkeleton';

export function CoursePageSkeleton() {
  return (
    <div className="container py-8 space-y-8">
      {/* Header section skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-3/4 max-w-xl" />
        <div className="flex flex-wrap gap-4">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-32" />
        </div>
      </div>

      {/* Filters skeleton */}
      <div className="flex flex-wrap gap-4 py-4 border-y">
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-40" />
        <div className="ml-auto">
          <Skeleton className="h-10 w-40" />
        </div>
      </div>

      {/* Grid of course cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <CourseCardSkeleton key={index} />
        ))}
      </div>

      {/* Pagination skeleton */}
      <div className="flex justify-center pt-8">
        <div className="flex gap-2">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
}