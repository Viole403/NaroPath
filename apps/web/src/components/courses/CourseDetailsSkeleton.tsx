import { Skeleton } from '@workspace/ui/components/skeleton';
import { Container } from '@/src/components/ui/container';

export function CourseDetailsSkeleton() {
  return (
    <Container className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-10 w-full" />

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-5 w-32" />
              </div>

              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-5 w-24" />
              </div>

              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-5 w-32" />
              </div>
            </div>
          </div>

          {/* Course image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Skeleton className="h-full w-full" />
          </div>

          {/* Description */}
          <div className="space-y-4">
            <Skeleton className="h-7 w-48" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-3/4" />
            </div>
          </div>

          {/* What you'll learn */}
          <div className="space-y-4">
            <Skeleton className="h-7 w-48" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex gap-2">
                  <Skeleton className="h-5 w-5 shrink-0" />
                  <Skeleton className="h-5 w-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div className="space-y-4">
            <Skeleton className="h-7 w-48" />
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, moduleIndex) => (
                <div key={moduleIndex} className="space-y-2">
                  <Skeleton className="h-10 w-full rounded-md" />
                  <div className="pl-4 space-y-2">
                    {Array.from({ length: 3 }).map((_, lectureIndex) => (
                      <Skeleton
                        key={`${moduleIndex}-${lectureIndex}`}
                        className="h-12 w-full rounded-md"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6 rounded-lg border p-6">
            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <div className="flex justify-between">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-24" />
              </div>
              <Skeleton className="h-5 w-full" />
            </div>

            <Skeleton className="h-12 w-full" />

            <div className="space-y-3">
              <Skeleton className="h-6 w-2/3" />

              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex gap-2">
                    <Skeleton className="h-5 w-5 shrink-0" />
                    <Skeleton className="h-5 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}