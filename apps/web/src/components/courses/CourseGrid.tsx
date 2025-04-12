import { Course } from '@/src/types/course';
import { CourseCard } from './CourseCard';
import { Skeleton } from '@workspace/ui/components/skeleton';
import { CourseCardSkeleton } from './CourseCardSkeleton';

interface CourseGridProps {
  courses: Course[];
  isLoading: boolean;
}

export default function CourseGrid({ courses, isLoading }: CourseGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <CourseCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="text-center py-12 border border-border rounded-lg">
        <h3 className="text-xl font-medium mb-2">No courses found</h3>
        <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}