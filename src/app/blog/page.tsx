import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

const placeholderPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 16",
    excerpt: "Explore the latest features in Next.js 16 including React 19 support and improved server components.",
    date: "2026-02-18T21:57:31",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Building Modern UIs with shadcn/ui",
    excerpt: "Learn how to create beautiful, accessible interfaces using shadcn/ui components and Tailwind CSS.",
    date: "2026-02-18T21:57:31",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "TypeScript Best Practices for 2026",
    excerpt: "Stay up to date with the latest TypeScript patterns and type-safe development techniques.",
    date: "2026-02-18T21:57:31",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Optimizing React Performance",
    excerpt: "Tips and tricks to keep your React applications fast and responsive.",
    date: "2026-02-18T21:57:31",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "The Future of Web Development",
    excerpt: "An overview of emerging trends and technologies shaping the web development landscape.",
    date: "2026-02-18T21:57:31",
    readTime: "10 min read"
  },
  {
    id: 6,
    title: "Mastering Tailwind CSS",
    excerpt: "Advanced techniques for building custom designs with Tailwind CSS utility classes.",
    date: "2026-02-18T21:57:31",
    readTime: "9 min read"
  }
]

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest articles and tutorials.",
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Thoughts, tutorials, and updates from our team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholderPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <CardDescription className="flex items-center gap-2 mt-2">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="text-muted-foreground">• {post.readTime}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                Generated at 2/18/2026, 9:57:31 PM
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}