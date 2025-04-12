// Define support article types
export interface SupportAuthor {
  id: string
  name: string
  role: string
  avatar?: string
}

export interface SupportArticle {
  id: string
  title: string
  slug: string
  content: string
  category: string
  author: SupportAuthor
  publishedAt: string
  lastUpdated: string
  views: number
  helpfulCount: number
  commentCount: number
  relatedArticles: {
    id: string
    title: string
    category: string
    slug: string
  }[]
}

export interface SupportCategory {
  id: string
  title: string
  description: string
  icon: string
  articles: {
    id: string
    title: string
    views: number
    slug: string
  }[]
}

// Mock authors
const supportAuthors: SupportAuthor[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Support Team Lead",
    avatar: "/avatars/sarah.jpg"
  },
  {
    id: "2",
    name: "Mike Chen",
    role: "Technical Support Specialist",
    avatar: "/avatars/mike.jpg"
  },
  {
    id: "3",
    name: "Emma Davis",
    role: "Customer Success Manager",
    avatar: "/avatars/emma.jpg"
  }
]

// Mock support categories
export const supportCategories: SupportCategory[] = [
  {
    id: "1",
    title: "Getting Started",
    description: "Learn the basics and get up to speed with NaroPath",
    icon: "book-open",
    articles: [
      { id: "1", title: "How to create your account", views: 1200, slug: "how-to-create-your-account" },
      { id: "2", title: "Navigating the dashboard", views: 850, slug: "navigating-the-dashboard" },
      { id: "3", title: "Setting up your profile", views: 650, slug: "setting-up-your-profile" }
    ]
  },
  {
    id: "2",
    title: "Courses & Learning",
    description: "Everything about our courses and learning experience",
    icon: "book-open",
    articles: [
      { id: "4", title: "How to enroll in a course", views: 1500, slug: "how-to-enroll-in-a-course" },
      { id: "5", title: "Course completion requirements", views: 920, slug: "course-completion-requirements" },
      { id: "6", title: "Accessing course materials", views: 780, slug: "accessing-course-materials" }
    ]
  },
  {
    id: "3",
    title: "Technical Support",
    description: "Technical issues and troubleshooting guides",
    icon: "help-circle",
    articles: [
      { id: "7", title: "Browser compatibility", views: 1100, slug: "browser-compatibility" },
      { id: "8", title: "Video playback issues", views: 750, slug: "video-playback-issues" },
      { id: "9", title: "Account recovery", views: 680, slug: "account-recovery" }
    ]
  },
  {
    id: "4",
    title: "Community & Support",
    description: "Connect with other learners and get help",
    icon: "message-square",
    articles: [
      { id: "10", title: "Joining study groups", views: 950, slug: "joining-study-groups" },
      { id: "11", title: "Using the discussion forums", views: 820, slug: "using-the-discussion-forums" },
      { id: "12", title: "Contacting support", views: 700, slug: "contacting-support" }
    ]
  }
]

// Mock support articles
const supportArticles: SupportArticle[] = [
  {
    id: "1",
    title: "How to create your account",
    slug: "how-to-create-your-account",
    content: `
      <h2>Introduction</h2>
      <p>Welcome to NaroPath! Creating an account is your first step towards unlocking a world of learning opportunities. This guide will walk you through the process step by step.</p>

      <h2>Step 1: Visit the Sign Up Page</h2>
      <p>Navigate to our homepage and click the "Sign Up" button in the top right corner. You can also access the sign-up page directly by visiting /signup.</p>

      <h2>Step 2: Fill in Your Information</h2>
      <p>You'll need to provide:</p>
      <ul>
        <li>Your full name</li>
        <li>Email address</li>
        <li>Password (minimum 8 characters)</li>
      </ul>

      <h2>Step 3: Verify Your Email</h2>
      <p>After submitting your information, you'll receive a verification email. Click the link in the email to activate your account.</p>

      <h2>Step 4: Complete Your Profile</h2>
      <p>Once verified, you can complete your profile by adding:</p>
      <ul>
        <li>Profile picture</li>
        <li>Professional background</li>
        <li>Learning goals</li>
      </ul>

      <h2>Need Help?</h2>
      <p>If you encounter any issues during the sign-up process, our support team is available 24/7 to assist you.</p>
    `,
    category: "Getting Started",
    author: supportAuthors[0]!,
    publishedAt: "2024-03-15",
    lastUpdated: "2024-03-20",
    views: 1200,
    helpfulCount: 45,
    commentCount: 12,
    relatedArticles: [
      {
        id: "2",
        title: "Navigating the dashboard",
        category: "Getting Started",
        slug: "navigating-the-dashboard"
      },
      {
        id: "3",
        title: "Setting up your profile",
        category: "Getting Started",
        slug: "setting-up-your-profile"
      }
    ]
  },
  {
    id: "4",
    title: "How to enroll in a course",
    slug: "how-to-enroll-in-a-course",
    content: `
      <h2>Introduction</h2>
      <p>Enrolling in a course on NaroPath is a straightforward process. This guide will help you get started with your learning journey.</p>

      <h2>Step 1: Browse Available Courses</h2>
      <p>Visit our courses page to explore the available options. You can filter courses by category, difficulty level, or duration.</p>

      <h2>Step 2: Select a Course</h2>
      <p>Click on a course to view its details, including:</p>
      <ul>
        <li>Course description</li>
        <li>Learning objectives</li>
        <li>Prerequisites</li>
        <li>Course duration</li>
        <li>Instructor information</li>
      </ul>

      <h2>Step 3: Enroll in the Course</h2>
      <p>Click the "Enroll Now" button and follow the prompts to complete your enrollment. You'll need to:</p>
      <ul>
        <li>Confirm your selection</li>
        <li>Choose your preferred learning schedule</li>
        <li>Set your learning goals</li>
      </ul>

      <h2>Step 4: Access Course Materials</h2>
      <p>Once enrolled, you can access all course materials through your dashboard. This includes:</p>
      <ul>
        <li>Video lectures</li>
        <li>Reading materials</li>
        <li>Practice exercises</li>
        <li>Discussion forums</li>
      </ul>
    `,
    category: "Courses & Learning",
    author: supportAuthors[1]!,
    publishedAt: "2024-03-10",
    lastUpdated: "2024-03-18",
    views: 1500,
    helpfulCount: 78,
    commentCount: 23,
    relatedArticles: [
      {
        id: "5",
        title: "Course completion requirements",
        category: "Courses & Learning",
        slug: "course-completion-requirements"
      },
      {
        id: "6",
        title: "Accessing course materials",
        category: "Courses & Learning",
        slug: "accessing-course-materials"
      }
    ]
  }
]

/**
 * Get all support categories
 */
export const getAllCategories = async (): Promise<SupportCategory[]> => {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return supportCategories;
}

/**
 * Get a support article by slug
 */
export const getArticleBySlug = async (slug: string): Promise<SupportArticle | undefined> => {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 150));
  return supportArticles.find(article => article.slug === slug);
}

/**
 * Get all articles in a category
 */
export const getArticlesByCategory = async (categoryId: string): Promise<SupportArticle[]> => {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 100));
  const category = supportCategories.find(cat => cat.id === categoryId);
  if (!category) return [];

  return supportArticles.filter(article =>
    article.category === category.title
  );
}

/**
 * Get popular articles
 */
export const getPopularArticles = async (limit: number = 5): Promise<SupportArticle[]> => {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return [...supportArticles]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

/**
 * Get recent articles
 */
export const getRecentArticles = async (limit: number = 5): Promise<SupportArticle[]> => {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return [...supportArticles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}
