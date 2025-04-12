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

// Mock data for courses
const coursesData: Course[] = [
  {
    id: "1",
    slug: "web-development-fundamentals",
    title: "Web Development Fundamentals",
    description: "Learn the fundamentals of web development, including HTML, CSS, and JavaScript. This course is perfect for beginners who want to start their web development journey.",
    thumbnail: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&h=450&fit=crop",
    price: 49.99,
    rating: 4.8,
    enrollmentCount: 1253,
    duration: 720, // minutes
    level: "Beginner",
    categories: ["Development", "Web Development", "Frontend"],
    instructor: {
      id: "1",
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop"
    },
    isFeatured: true,
    isNew: false
  },
  {
    id: "2",
    slug: "react-for-beginners",
    title: "React for Beginners: Building Modern Web Applications",
    description: "Learn modern React including hooks, context API, and how to build real-world applications. This course covers everything you need to know to become a React developer.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    price: 59.99,
    rating: 4.9,
    enrollmentCount: 3427,
    duration: 840, // minutes
    level: "Intermediate",
    categories: ["Development", "Web Development", "React"],
    instructor: {
      id: "2",
      name: "John Johnson",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=128&h=128&fit=crop"
    },
    isFeatured: true,
    isNew: true
  },
  {
    id: "3",
    slug: "python-data-science",
    title: "Python for Data Science and Machine Learning",
    description: "Master Python for data science, machine learning, and data analysis. Learn numpy, pandas, matplotlib, seaborn, scikit-learn, and more.",
    thumbnail: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?w=800&h=450&fit=crop",
    price: 79.99,
    rating: 4.7,
    enrollmentCount: 2876,
    duration: 1020, // minutes
    level: "Advanced",
    categories: ["Development", "Data Science", "Python"],
    instructor: {
      id: "3",
      name: "Sarah Williams",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=128&h=128&fit=crop"
    },
    isFeatured: false,
    isNew: false
  },
  {
    id: "4",
    slug: "ui-ux-design-principles",
    title: "UI/UX Design Principles and Best Practices",
    description: "Learn UI/UX design principles from scratch. Understand user research, wireframing, prototyping, and designing effective user interfaces.",
    thumbnail: "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?w=800&h=450&fit=crop",
    price: 69.99,
    rating: 4.6,
    enrollmentCount: 1532,
    duration: 660, // minutes
    level: "Beginner",
    categories: ["Design", "UI/UX", "User Research"],
    instructor: {
      id: "4",
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=128&h=128&fit=crop"
    },
    isFeatured: true,
    isNew: false
  },
  {
    id: "5",
    slug: "node-js-backend-development",
    title: "Node.js Backend Development",
    description: "Build scalable backend services with Node.js, Express, and MongoDB. Learn authentication, authorization, APIs, and deployment.",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=450&fit=crop",
    price: 69.99,
    rating: 4.8,
    enrollmentCount: 1876,
    duration: 780, // minutes
    level: "Intermediate",
    categories: ["Development", "Backend", "Node.js"],
    instructor: {
      id: "2",
      name: "John Johnson",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=128&h=128&fit=crop"
    },
    isFeatured: false,
    isNew: true
  },
  {
    id: "6",
    slug: "advanced-javascript-concepts",
    title: "Advanced JavaScript Concepts",
    description: "Take your JavaScript skills to the next level. Learn closures, prototypes, async patterns, performance optimization, and functional programming.",
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=450&fit=crop",
    price: 89.99,
    rating: 4.9,
    enrollmentCount: 2143,
    duration: 900, // minutes
    level: "Advanced",
    categories: ["Development", "JavaScript", "Frontend"],
    instructor: {
      id: "1",
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop"
    },
    isFeatured: true,
    isNew: false
  },
  {
    id: "7",
    slug: "mobile-app-development-with-flutter",
    title: "Mobile App Development with Flutter",
    description: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase with Flutter and Dart.",
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=450&fit=crop",
    price: 74.99,
    rating: 4.7,
    enrollmentCount: 1432,
    duration: 840, // minutes
    level: "Intermediate",
    categories: ["Development", "Mobile Development", "Flutter"],
    instructor: {
      id: "5",
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop"
    },
    isFeatured: false,
    isNew: true
  },
  {
    id: "8",
    slug: "docker-and-kubernetes-essentials",
    title: "Docker and Kubernetes Essentials",
    description: "Master containerization with Docker and orchestration with Kubernetes. Learn to deploy, scale, and manage containerized applications.",
    thumbnail: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=450&fit=crop",
    price: 79.99,
    rating: 4.8,
    enrollmentCount: 987,
    duration: 720, // minutes
    level: "Advanced",
    categories: ["Development", "DevOps", "Cloud"],
    instructor: {
      id: "6",
      name: "Lisa Rodriguez",
      avatar: "https://images.unsplash.com/photo-1553514029-1318c9127859?w=128&h=128&fit=crop"
    },
    isFeatured: false,
    isNew: false
  },
  {
    id: "9",
    slug: "graphic-design-masterclass",
    title: "Graphic Design Masterclass",
    description: "Learn graphic design from the ground up. Master Adobe Photoshop, Illustrator, and InDesign. Create stunning graphics, illustrations, and layouts.",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=450&fit=crop",
    price: 59.99,
    rating: 4.6,
    enrollmentCount: 2345,
    duration: 960, // minutes
    level: "Beginner",
    categories: ["Design", "Graphic Design", "Adobe"],
    instructor: {
      id: "7",
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=128&h=128&fit=crop"
    },
    isFeatured: true,
    isNew: false
  },
  {
    id: "10",
    slug: "aws-certified-solutions-architect",
    title: "AWS Certified Solutions Architect",
    description: "Prepare for the AWS Solutions Architect Associate certification. Learn to design distributed systems and implement AWS solutions.",
    thumbnail: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&h=450&fit=crop",
    price: 99.99,
    rating: 4.9,
    enrollmentCount: 1765,
    duration: 1080, // minutes
    level: "Advanced",
    categories: ["Development", "Cloud", "AWS"],
    instructor: {
      id: "8",
      name: "Robert Taylor",
      avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=128&h=128&fit=crop"
    },
    isFeatured: false,
    isNew: true
  },
  {
    id: "11",
    slug: "digital-marketing-fundamentals",
    title: "Digital Marketing Fundamentals",
    description: "Learn digital marketing essentials including SEO, social media marketing, email campaigns, analytics, and content marketing strategies.",
    thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=450&fit=crop",
    price: 49.99,
    rating: 4.5,
    enrollmentCount: 3214,
    duration: 600, // minutes
    level: "Beginner",
    categories: ["Marketing", "Digital Marketing", "SEO"],
    instructor: {
      id: "9",
      name: "Olivia Martinez",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=128&h=128&fit=crop"
    },
    isFeatured: false,
    isNew: false
  },
  {
    id: "12",
    slug: "blockchain-development",
    title: "Blockchain Development with Ethereum and Solidity",
    description: "Dive into blockchain development with Ethereum. Learn to create smart contracts, tokens, and decentralized applications (DApps).",
    thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&h=450&fit=crop",
    price: 89.99,
    rating: 4.7,
    enrollmentCount: 876,
    duration: 840, // minutes
    level: "Advanced",
    categories: ["Development", "Blockchain", "Web3"],
    instructor: {
      id: "10",
      name: "Thomas Brown",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop"
    },
    isFeatured: true,
    isNew: true
  }
];

/**
 * Get all courses with optional filtering
 * @returns Promise<Course[]>
 */
export const getCourses = async (): Promise<Course[]> => {
  // In a real app, this would be a fetch to your API
  // For demo purposes, we're just returning the mock data with a delay
  await new Promise(resolve => setTimeout(resolve, 800)) // Simulate network request
  return coursesData
}

/**
 * Get a course by its slug
 * @param slug Course slug
 * @returns Promise<Course | undefined>
 */
export const getCourseBySlug = async (slug: string): Promise<Course | undefined> => {
  // In a real app, this would be a fetch to your API
  // For demo purposes, we're just filtering the mock data with a delay
  await new Promise(resolve => setTimeout(resolve, 600)) // Simulate network request
  return coursesData.find(course => course.slug === slug)
}

/**
 * Get similar courses based on category and excluding current course
 * @param courseId Course ID to exclude
 * @param category Category to match
 * @param limit Maximum number of courses to return
 * @returns Promise<Course[]>
 */
export const getSimilarCourses = async (
  courseId: string,
  category: string,
  limit: number = 3
): Promise<Course[]> => {
  // In a real app, this would be a fetch to your API
  // For demo purposes, we're just filtering the mock data with a delay
  await new Promise(resolve => setTimeout(resolve, 500)) // Simulate network request

  return coursesData
    .filter(course =>
      course.id !== courseId &&
      course.categories.includes(category)
    )
    .slice(0, limit)
}

/**
 * Get featured courses
 * @param limit Maximum number of courses to return
 * @returns Promise<Course[]>
 */
export const getFeaturedCourses = async (limit: number = 6): Promise<Course[]> => {
  // In a real app, this would be a fetch to your API
  // For demo purposes, we're just filtering the mock data with a delay
  await new Promise(resolve => setTimeout(resolve, 500)) // Simulate network request

  return coursesData
    .filter(course => course.isFeatured)
    .slice(0, limit)
}

/**
 * Get new courses
 * @param limit Maximum number of courses to return
 * @returns Promise<Course[]>
 */
export const getNewCourses = async (limit: number = 6): Promise<Course[]> => {
  // In a real app, this would be a fetch to your API
  // For demo purposes, we're just filtering the mock data with a delay
  await new Promise(resolve => setTimeout(resolve, 500)) // Simulate network request

  return coursesData
    .filter(course => course.isNew)
    .slice(0, limit)
}