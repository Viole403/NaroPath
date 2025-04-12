// Define our own UserRole enum to avoid auth dependency
export enum UserRole {
  ADMIN = "admin",
  EDITOR = "editor",
  USER = "user",
  GUEST = "guest"
}

// Blog post model types
export interface Author {
  id: string
  name: string
  avatar: string
  email: string
  role: UserRole
  bio: string
  expertise: string[]
  socialMedia?: {
    twitter?: string
    github?: string
    linkedin?: string
  }
}

export interface Comment {
  id: string
  authorId: string
  author: Author
  content: string
  createdAt: string
  updatedAt: string
  likes: number
  isEdited?: boolean
}

export interface BlogPostTag {
  id: string
  name: string
  slug: string
  color?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  coverImage: string
  authorId: string
  author: Author
  tags: BlogPostTag[]
  publishedAt: string
  updatedAt: string
  viewCount: number
  likeCount: number
  commentCount: number
  comments: Comment[]
  featuredOrder?: number
  requiredRole: UserRole
  readingTime?: number
  relatedResources?: {
    title: string
    url: string
    type: 'article' | 'video' | 'book' | 'course'
  }[]
  tableOfContents?: {
    id: string
    title: string
    level: number
  }[]
}

// Mock authors with extended information
const authorAdmin: Author = {
  id: "1234567890",
  name: "Admin User",
  avatar: "https://picsum.photos/seed/admin/200",
  email: "admin@bloggerup.com",
  role: UserRole.ADMIN,
  bio: "Lead content strategist and site administrator with expertise in tech and business writing. 10+ years in the industry working with startups and enterprise companies.",
  expertise: ["Content Strategy", "SEO", "Technical Writing", "Management"],
  socialMedia: {
    twitter: "adminuser",
    github: "adminuser",
    linkedin: "adminuser"
  }
}

const authorEditor: Author = {
  id: "2345678901",
  name: "Editor User",
  avatar: "https://picsum.photos/seed/editor/200",
  email: "editor@bloggerup.com",
  role: UserRole.EDITOR,
  bio: "Senior editor with a background in journalism and content curation. Specializes in making complex topics accessible to all readers.",
  expertise: ["Editing", "Content Curation", "Journalism", "Storytelling"],
  socialMedia: {
    twitter: "editoruser",
    linkedin: "editoruser"
  }
}

const authorUser: Author = {
  id: "3456789012",
  name: "Regular User",
  avatar: "https://picsum.photos/seed/user/200",
  email: "user@bloggerup.com",
  role: UserRole.USER,
  bio: "Tech enthusiast and regular contributor to the blog. Currently working as a software developer with a passion for React and TypeScript.",
  expertise: ["React", "TypeScript", "Frontend Development"]
}

// Additional authors
const authorDeveloper: Author = {
  id: "4567890123",
  name: "Dev Expert",
  avatar: "https://picsum.photos/seed/dev/200",
  email: "dev@bloggerup.com",
  role: UserRole.EDITOR,
  bio: "Full-stack developer with 8+ years of experience building web applications. Passionate about teaching and sharing knowledge.",
  expertise: ["JavaScript", "Node.js", "React", "GraphQL", "AWS"]
}

const authorDesigner: Author = {
  id: "5678901234",
  name: "Design Guru",
  avatar: "https://picsum.photos/seed/design/200",
  email: "design@bloggerup.com",
  role: UserRole.EDITOR,
  bio: "UI/UX designer focused on creating intuitive and accessible user experiences. Previously worked at major tech companies.",
  expertise: ["UI Design", "UX Research", "Accessibility", "Design Systems"]
}

// Export authors array after defining individual authors
export const authors: Author[] = [authorAdmin, authorEditor, authorUser, authorDeveloper, authorDesigner]

// Enhanced mock tags with colors
const tagTechnology: BlogPostTag = { id: "1", name: "Technology", slug: "technology", color: "blue" }
const tagDesign: BlogPostTag = { id: "2", name: "Design", slug: "design", color: "purple" }
const tagBusiness: BlogPostTag = { id: "3", name: "Business", slug: "business", color: "green" }
const tagTutorials: BlogPostTag = { id: "4", name: "Tutorials", slug: "tutorials", color: "yellow" }
const tagNews: BlogPostTag = { id: "5", name: "News", slug: "news", color: "red" }
const tagPersonal: BlogPostTag = { id: "6", name: "Personal", slug: "personal", color: "pink" }
const tagPremium: BlogPostTag = { id: "7", name: "Premium", slug: "premium", color: "gold" }
const tagJavaScript: BlogPostTag = { id: "8", name: "JavaScript", slug: "javascript", color: "yellow" }
const tagReact: BlogPostTag = { id: "9", name: "React", slug: "react", color: "blue" }
const tagAccessibility: BlogPostTag = { id: "10", name: "Accessibility", slug: "accessibility", color: "green" }
const tagPerformance: BlogPostTag = { id: "11", name: "Performance", slug: "performance", color: "orange" }

// Export tags array after defining individual tags
export const tags: BlogPostTag[] = [
  tagTechnology,
  tagDesign,
  tagBusiness,
  tagTutorials,
  tagNews,
  tagPersonal,
  tagPremium,
  tagJavaScript,
  tagReact,
  tagAccessibility,
  tagPerformance
]

// Sample blog post content
const sampleContent = `
## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, justo vel ultricies tempor, sapien libero laoreet urna, at efficitur risus odio eget justo. Sed auctor, libero vitae sollicitudin tempus, enim leo tincidunt odio, a aliquam nisi libero eu urna.

## Main Section

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed auctor, libero vitae sollicitudin tempus, enim leo tincidunt odio, a aliquam nisi libero eu urna.

\`\`\`javascript
// Sample code
function greeting(name) {
  return \`Hello, \${name}!\`;
}

console.log(greeting('World'));
\`\`\`

### Subsection

Sed auctor, libero vitae sollicitudin tempus, enim leo tincidunt odio, a aliquam nisi libero eu urna.

- List item one
- List item two
- List item three

## Conclusion

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, justo vel ultricies tempor, sapien libero laoreet urna, at efficitur risus odio eget justo. Sed auctor, libero vitae sollicitudin tempus, enim leo tincidunt odio, a aliquam nisi libero eu urna.
`

const reactContent = `
## Getting Started with React

React has revolutionized how we build user interfaces. In this article, we'll explore the fundamental concepts that make React so powerful and how you can start using it in your projects.

## Why React?

React provides several key advantages:

1. **Component-Based Architecture**: Build encapsulated components that manage their own state
2. **Virtual DOM**: Efficiently update and render components when data changes
3. **Declarative Syntax**: Describe what your UI should look like, not how to achieve it
4. **Rich Ecosystem**: Benefit from a vast community and extensive libraries

## Creating Your First Component

Let's create a simple React component:

\`\`\`jsx
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
\`\`\`

### Using Props

Props are read-only data passed to components:

\`\`\`jsx
<Welcome name="Sara" />
\`\`\`

## Managing State in React

State allows React components to change their output over time in response to user actions, network responses, and anything else.

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Conclusion

React has transformed how developers build user interfaces, making it easier to create interactive, state-driven applications. Start with these concepts and gradually explore more advanced features as you grow comfortable with the React ecosystem.
`

const accessibilityContent = `
## Web Accessibility: Building Inclusive Experiences

Web accessibility is about creating websites that can be used by everyone, including people with disabilities. In this guide, we'll explore essential accessibility principles and practical implementation techniques.

## Why Accessibility Matters

Beyond legal requirements, accessibility:

- Improves user experience for **everyone**
- Expands your audience reach
- Enhances SEO performance
- Demonstrates social responsibility

## Core Accessibility Principles (POUR)

### Perceivable

Information must be presentable in ways all users can perceive.

\`\`\`html
<!-- Bad example -->
<img src="chart.png">

<!-- Good example -->
<img src="chart.png" alt="Chart showing quarterly sales growth of 15%">
\`\`\`

### Operable

Interface components must be operable by all users.

\`\`\`jsx
// Bad example
<div onClick={activateButton}>Click me</div>

// Good example
<button onClick={activateButton}>Click me</button>
\`\`\`

### Understandable

Information and operation must be understandable to all users.

\`\`\`html
<!-- Bad example -->
<label>i</label>
<input type="text">

<!-- Good example -->
<label for="first-name">First Name</label>
<input id="first-name" type="text">
\`\`\`

### Robust

Content must be robust enough to be interpreted by a variety of user agents, including assistive technologies.

\`\`\`html
<!-- Bad example -->
<div role="butotn">Submit</div>

<!-- Good example -->
<button type="submit">Submit</button>
\`\`\`

## Testing for Accessibility

Use tools like:
- WAVE Evaluation Tool
- axe DevTools
- Lighthouse
- Screen readers (NVDA, VoiceOver)

## Conclusion

Building accessible websites isn't just about compliance; it's about creating truly inclusive digital experiences. By implementing these principles from the start, you'll create better experiences for all users, regardless of their abilities or how they access the web.
`

const premiumSampleContent = `
## Premium Content Introduction

This is an exclusive article available only to premium users. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, justo vel ultricies tempor, sapien libero laoreet urna, at efficitur risus odio eget justo.

## Advanced Techniques

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed auctor, libero vitae sollicitudin tempus, enim leo tincidunt odio, a aliquam nisi libero eu urna.

\`\`\`javascript
// Advanced sample code
class AdvancedFeature {
  constructor(config) {
    this.config = config;
  }

  initialize() {
    console.log('Initializing with:', this.config);
    return this.process();
  }

  process() {
    // Advanced processing
    return {
      result: 'Success',
      timestamp: Date.now()
    };
  }
}
\`\`\`

### Premium Members Only

This section contains proprietary information that's valuable for your professional development.

1. First exclusive tip
2. Second exclusive tip
3. Third exclusive tip with detailed explanation

## Final Thoughts

Thank you for being a premium member. We value your support and commitment to quality content.
`

// Enhanced sample comments
const sampleComments: Comment[] = [
  {
    id: "comment1",
    authorId: authorUser.id,
    author: authorUser,
    content: "Great article! I learned a lot from this and will definitely be applying these principles in my next project.",
    createdAt: "2023-05-15T10:30:00Z",
    updatedAt: "2023-05-15T10:30:00Z",
    likes: 5
  },
  {
    id: "comment2",
    authorId: authorEditor.id,
    author: authorEditor,
    content: "I appreciate the clear explanations and examples. This article breaks down complex concepts in a very accessible way.",
    createdAt: "2023-05-16T14:20:00Z",
    updatedAt: "2023-05-16T14:20:00Z",
    likes: 3
  },
  {
    id: "comment3",
    authorId: authorDeveloper.id,
    author: authorDeveloper,
    content: "I've been working with this technology for years and still learned something new. The code examples are particularly helpful.",
    createdAt: "2023-05-17T09:45:00Z",
    updatedAt: "2023-05-17T10:15:00Z",
    likes: 8,
    isEdited: true
  },
  {
    id: "comment4",
    authorId: authorDesigner.id,
    author: authorDesigner,
    content: "From a design perspective, I think there are some interesting implications here. Would love to see a follow-up focusing on the UX aspects.",
    createdAt: "2023-05-18T16:30:00Z",
    updatedAt: "2023-05-18T16:30:00Z",
    likes: 4
  }
]

// Enhanced mock blog posts with additional fields
export const blogPosts: BlogPost[] = [
  {
    id: "post1",
    title: "Getting Started with Next.js and TypeScript",
    slug: "getting-started-with-nextjs-and-typescript",
    content: sampleContent,
    excerpt: "Learn how to build modern web applications with Next.js and TypeScript in this comprehensive guide for beginners and experienced developers alike.",
    coverImage: "https://picsum.photos/seed/nextjs/1200/630",
    authorId: authorEditor.id,
    author: authorEditor,
    tags: [tagTechnology, tagTutorials, tagJavaScript],
    publishedAt: "2023-05-10T08:00:00Z",
    updatedAt: "2023-05-12T14:30:00Z",
    viewCount: 1250,
    likeCount: 87,
    commentCount: 12,
    comments: sampleComments,
    featuredOrder: 1,
    requiredRole: UserRole.GUEST,
    readingTime: 8,
    relatedResources: [
      {
        title: "Official Next.js Documentation",
        url: "https://nextjs.org/docs",
        type: "article"
      },
      {
        title: "TypeScript Handbook",
        url: "https://www.typescriptlang.org/docs/handbook/",
        type: "article"
      }
    ],
    tableOfContents: [
      { id: "intro", title: "Introduction", level: 1 },
      { id: "setup", title: "Setting up your project", level: 1 },
      { id: "typescript", title: "Adding TypeScript", level: 2 },
      { id: "components", title: "Creating Components", level: 1 },
      { id: "routing", title: "Next.js Routing", level: 1 },
      { id: "conclusion", title: "Conclusion", level: 1 },
    ]
  },
  {
    id: "post2",
    title: "Advanced State Management in React Applications",
    slug: "advanced-state-management-in-react-applications",
    content: reactContent,
    excerpt: "Explore advanced state management techniques for complex React applications using Context API, hooks, and other modern approaches.",
    coverImage: "https://picsum.photos/seed/react/1200/630",
    authorId: authorAdmin.id,
    author: authorAdmin,
    tags: [tagTechnology, tagTutorials, tagReact],
    publishedAt: "2023-05-15T10:00:00Z",
    updatedAt: "2023-05-15T10:00:00Z",
    viewCount: 842,
    likeCount: 56,
    commentCount: 8,
    comments: sampleComments.slice(0, 2),
    featuredOrder: 2,
    requiredRole: UserRole.GUEST,
    readingTime: 12,
    relatedResources: [
      {
        title: "React State Management Libraries Comparison",
        url: "https://example.com/react-state-libs",
        type: "article"
      },
      {
        title: "Advanced React Patterns",
        url: "https://example.com/advanced-react",
        type: "course"
      }
    ]
  },
  {
    id: "post3",
    title: "Designing Accessible Web Interfaces",
    slug: "designing-accessible-web-interfaces",
    content: accessibilityContent,
    excerpt: "Learn the principles of accessible UI design and how to apply them to create web experiences that work for everyone, regardless of ability.",
    coverImage: "https://picsum.photos/seed/accessibility/1200/630",
    authorId: authorDesigner.id,
    author: authorDesigner,
    tags: [tagDesign, tagAccessibility],
    publishedAt: "2023-06-02T09:15:00Z",
    updatedAt: "2023-06-05T11:30:00Z",
    viewCount: 723,
    likeCount: 92,
    commentCount: 15,
    comments: sampleComments.slice(1, 4),
    featuredOrder: undefined,
    requiredRole: UserRole.GUEST,
    readingTime: 10,
    relatedResources: [
      {
        title: "Web Content Accessibility Guidelines (WCAG)",
        url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
        type: "article"
      },
      {
        title: "Inclusive Design Patterns",
        url: "https://example.com/inclusive-design",
        type: "book"
      }
    ]
  },
  {
    id: "post4",
    title: "Building Performant Web Applications",
    slug: "building-performant-web-applications",
    content: sampleContent,
    excerpt: "Optimize your web applications for speed and performance with these practical techniques and best practices.",
    coverImage: "https://picsum.photos/seed/performance/1200/630",
    authorId: authorDeveloper.id,
    author: authorDeveloper,
    tags: [tagTechnology, tagPerformance],
    publishedAt: "2023-06-10T14:30:00Z",
    updatedAt: "2023-06-12T09:45:00Z",
    viewCount: 612,
    likeCount: 48,
    commentCount: 7,
    comments: sampleComments.slice(0, 3),
    featuredOrder: undefined,
    requiredRole: UserRole.GUEST,
    readingTime: 15
  },
  {
    id: "post5",
    title: "The Future of Frontend Development",
    slug: "the-future-of-frontend-development",
    content: sampleContent,
    excerpt: "Explore emerging trends and technologies that will shape the future of frontend development in the coming years.",
    coverImage: "https://picsum.photos/seed/future/1200/630",
    authorId: authorAdmin.id,
    author: authorAdmin,
    tags: [tagTechnology, tagNews],
    publishedAt: "2023-06-18T11:00:00Z",
    updatedAt: "2023-06-18T11:00:00Z",
    viewCount: 945,
    likeCount: 76,
    commentCount: 11,
    comments: sampleComments.slice(1, 3),
    featuredOrder: 3,
    requiredRole: UserRole.GUEST,
    readingTime: 9
  },
  {
    id: "post6",
    title: "Advanced TypeScript Patterns for Enterprise Applications",
    slug: "advanced-typescript-patterns-for-enterprise-applications",
    content: premiumSampleContent,
    excerpt: "Learn advanced TypeScript patterns and techniques that can help you build more robust and maintainable enterprise-scale applications.",
    coverImage: "https://picsum.photos/seed/typescript/1200/630",
    authorId: authorDeveloper.id,
    author: authorDeveloper,
    tags: [tagTechnology, tagTutorials, tagPremium],
    publishedAt: "2023-06-25T08:30:00Z",
    updatedAt: "2023-06-27T15:45:00Z",
    viewCount: 356,
    likeCount: 42,
    commentCount: 5,
    comments: sampleComments.slice(2, 4),
    featuredOrder: undefined,
    requiredRole: UserRole.EDITOR,
    readingTime: 20
  }
]

/**
 * Get all blog posts with optional filtering
 */
export const getAllPosts = async ({
  tag,
  author,
  featured,
  limit
}: {
  tag?: string;
  author?: string;
  featured?: boolean;
  limit?: number;
} = {}): Promise<BlogPost[]> => {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 100));

  let filteredPosts = [...blogPosts];

  // Filter by tag
  if (tag) {
    filteredPosts = filteredPosts.filter(post =>
      post.tags.some(t => t.name.toLowerCase() === tag.toLowerCase() || t.slug.toLowerCase() === tag.toLowerCase())
    );
  }

  // Filter by author
  if (author) {
    filteredPosts = filteredPosts.filter(post =>
      post.author.id === author ||
      post.author.name.toLowerCase().includes(author.toLowerCase())
    );
  }

  // Filter by featured
  if (featured) {
    filteredPosts = filteredPosts.filter(post => post.featuredOrder !== null && post.featuredOrder !== undefined);
    // Sort by featuredOrder
    filteredPosts.sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99));
  } else {
    // Sort by publishedAt
    filteredPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  // Apply limit
  if (limit && limit > 0) {
    filteredPosts = filteredPosts.slice(0, limit);
  }

  return filteredPosts;
};

/**
 * Get a blog post by slug
 */
export const getPostBySlug = async (slug?: string): Promise<BlogPost | undefined> => {
  // Validate input
  if (!slug) {
    console.error('getPostBySlug called with empty slug');
    return undefined;
  }

  try {
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 150));

    return blogPosts.find(post => post.slug === slug);
  } catch (error) {
    console.error(`Error fetching post with slug '${slug}':`, error);
    return undefined;
  }
};

/**
 * Get similar posts based on tags and excluding the current post
 */
export const getSimilarPosts = async (
  postId: string,
  limit: number = 3
): Promise<BlogPost[]> => {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 120));

  const currentPost = blogPosts.find(post => post.id === postId);

  if (!currentPost) {
    return [];
  }

  // Get posts with similar tags
  const similarPosts = blogPosts
    .filter(post => post.id !== postId) // Exclude current post
    .map(post => {
      // Count matching tags
      const matchingTags = post.tags.filter(tag =>
        currentPost.tags.some(currentTag => currentTag.id === tag.id)
      ).length;

      return {
        post,
        matchingTags
      };
    })
    .filter(item => item.matchingTags > 0) // Only posts with at least one matching tag
    .sort((a, b) => b.matchingTags - a.matchingTags) // Sort by number of matching tags
    .map(item => item.post) // Get only the posts
    .slice(0, limit); // Apply limit

  return similarPosts;
};

/**
 * Get all unique tags
 */
export const getAllTags = async (): Promise<BlogPostTag[]> => {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 50));

  return tags;
};

/**
 * Get featured posts
 */
export const getFeaturedPosts = async (limit: number = 3): Promise<BlogPost[]> => {
  return getAllPosts({ featured: true, limit });
};

/**
 * Get posts by tag
 */
export const getPostsByTag = async (tag: string, limit?: number): Promise<BlogPost[]> => {
  return getAllPosts({ tag, limit });
};

/**
 * Get recent posts
 */
export const getRecentPosts = async (limit: number = 5): Promise<BlogPost[]> => {
  return getAllPosts({ limit });
};