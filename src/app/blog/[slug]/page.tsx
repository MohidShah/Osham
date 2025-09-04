// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/constants";
import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// ✅ Generate static params for SSG
export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// ✅ Dynamic metadata per post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) return { title: "Blog Not Found" };

  return {
    title: `${post.title} | Osham Blog`,
    description: post.description,
  };
}

// ✅ Page component
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className="bg-background animate-fade-in">
      <PageHeader title={post.title} description={post.description} />

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
        <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-p:text-muted-foreground prose-strong:text-foreground">
          
          {/* Author + back button */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src={`https://i.pravatar.cc/150?u=${post.author}`}
                  alt={post.author}
                />
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{post.author}</p>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </div>
            </div>
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Blog image */}
          <div className="relative h-96 w-full mb-12 rounded-lg">
            <Image
              src={`https://picsum.photos/seed/${post.slug}/1200/800`}
              alt={post.title}
              fill
              className="rounded-lg object-cover shadow-lg"
              priority
            />
          </div>

          {/* Blog content */}
          {post.content ? (
            <div
              className="prose-p:text-lg prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <p className="text-center text-muted-foreground">
              🚧 This article is under construction. Please check back later.
            </p>
          )}
        </article>
      </div>
    </div>
  );
}
