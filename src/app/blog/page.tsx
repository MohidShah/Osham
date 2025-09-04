import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Blog | Osham',
    description: 'Insights and articles on medical billing, coding, and practice management.',
};

export default function BlogPage() {
  return (
    <div className="bg-background animate-fade-in">
      <PageHeader
        title="Osham Insights"
        description="Your expert source for the latest in medical billing, coding, and healthcare finance. Stay informed and optimize your practice with our articles and analysis."
      />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Card key={post.slug} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-56 w-full">
                <Image
                  src={`https://picsum.photos/seed/${post.slug}/800/600`}
                  alt={post.title}
                  fill
                  className="object-cover"
                  data-ai-hint="medical abstract"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold leading-tight text-foreground hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                 <p className="pt-2 text-sm text-muted-foreground">
                    {post.date} &bull; by {post.author}
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{post.description}</CardDescription>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="link" className="px-0">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
