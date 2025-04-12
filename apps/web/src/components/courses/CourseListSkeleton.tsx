import { Skeleton } from '@workspace/ui/components/skeleton';
import { CourseCardSkeleton } from './CourseCardSkeleton';
import { Container } from '@/src/components/ui/container';

export function CourseListSkeleton() {
  return (
    <>
      {/* Hero section skeleton */}
      <div className="bg-muted/40">
        <Container className="py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Skeleton className="h-10 w-3/4 mx-auto" />
            <Skeleton className="h-14 w-full mx-auto" />
            <Skeleton className="h-6 w-2/3 mx-auto" />

            <div className="flex justify-center pt-4">
              <Skeleton className="h-12 w-40" />
            </div>
          </div>
        </Container>
      </div>

      {/* Filters and courses section */}
      <Container className="py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <div className="w-full lg:w-64 shrink-0 space-y-6">
            {/* Category filter */}
            <div className="space-y-3">
              <Skeleton className="h-6 w-24" />
              <div className="space-y-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-5 w-28" />
                  </div>
                ))}
              </div>
            </div>

            {/* Level filter */}
            <div className="space-y-3">
              <Skeleton className="h-6 w-24" />
              <div className="space-y-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-5 w-20" />
                  </div>
                ))}
              </div>
            </div>

            {/* Price range filter */}
            <div className="space-y-3">
              <Skeleton className="h-6 w-24" />
              <div className="pt-2 px-2">
                <Skeleton className="h-4 w-full" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-5 w-16" />
              </div>
            </div>

            {/* Rating filter */}
            <div className="space-y-3">
              <Skeleton className="h-6 w-24" />
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4" />
                    <div className="flex items-center">
                      {Array.from({ length: 5 - i }).map((_, j) => (
                        <Skeleton key={j} className="h-4 w-4 mx-0.5" />
                      ))}
                      <Skeleton className="h-5 w-10 ml-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Search and sort */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Skeleton className="h-10 flex-1" />
              <Skeleton className="h-10 w-48" />
            </div>

            {/* Course grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <CourseCardSkeleton key={i} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex gap-2">
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-10" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}