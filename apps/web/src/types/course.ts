export interface Instructor {
  id: string;
  name: string;
  avatar: string;
}

export interface CourseTag {
  id: string;
  name: string;
  slug: string;
}

export interface CourseCategory {
  id: string;
  name: string;
  slug: string;
}

export interface CourseLesson {
  id: string;
  title: string;
  duration: number; // in minutes
  isPreview: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: CourseLesson[];
}

export type CourseLevel = "beginner" | "intermediate" | "advanced" | "all-levels";

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  rating: number;
  enrollmentCount: number;
  duration: number // in minutes
  level: string;
  categories: string[];
  instructor: Instructor;
  isFeatured: boolean;
  isNew: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}