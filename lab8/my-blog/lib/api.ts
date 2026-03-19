import { Post, Author } from "@/types";

const authors: Author[] = [
  { id: "1", name: "John Doe", bio: "Tech writer", avatar: "/avatars/john.jpg" },
  { id: "2", name: "Jane Smith", bio: "React expert", avatar: "/avatars/jane.jpg" },
];

const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content: "Next.js is a React framework...",
    author: "1",
    date: "2026-03-01",
    tags: ["nextjs", "react"],
    readTime: 5,
  },
  {
    id: "2",
    title: "SSR vs SSG",
    content: "Understanding rendering strategies...",
    author: "2",
    date: "2026-03-05",
    tags: ["ssr", "ssg"],
    readTime: 4,
  },
];

export async function getAllPosts(): Promise<Post[]> {
  return posts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
  return posts.find(p => p.id === id);
}

export async function getAuthorById(id: string): Promise<Author | undefined> {
  return authors.find(a => a.id === id);
}
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "admin" | "user";
}

export interface Notification {
  id: string;
  type: "info" | "warning" | "success";
  message: string;
  read: boolean;
  createdAt: string;
}

export function getCurrentUser(): User {
  return {
    id: "user-123",
    name: "Demo User",
    email: "demo@example.com",
    avatar: "/avatars/demo.jpg",
    role: "user",
  };
}

export async function getUserNotifications(userId: string) {
  await new Promise(resolve => setTimeout(resolve, 100));

  return [
    { id: "1", type: "info", message: "Welcome to dashboard", read: false, createdAt: "2026-03-01" },
    { id: "2", type: "success", message: "Profile updated", read: true, createdAt: "2026-02-28" },
  ];
}

export async function getUserAnalytics(userId: string) {
  await new Promise(resolve => setTimeout(resolve, 100));

  return {
    pageViews: Math.floor(Math.random() * 10000),
    sessions: Math.floor(Math.random() * 1000),
    bounceRate: Math.random() * 100,
  };
}