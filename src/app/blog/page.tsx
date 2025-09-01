import { PageHeader } from '@/components/page-header';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blog | Osham',
    description: 'Insights and articles on medical billing, coding, and practice management.',
};

export default function BlogPage() {
  return (
    <div className="bg-background animate-fade-in">
      <PageHeader
        title="Our Blog"
        description="Insights and articles on medical billing, coding, and practice management. Coming soon!"
      />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-24 text-center">
        <h2 className="text-2xl font-semibold text-foreground">Content Under Construction</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          We are working hard to bring you valuable content. Please check back later.
        </p>
        <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
