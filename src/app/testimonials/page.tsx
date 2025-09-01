import { PageHeader } from '@/components/page-header';
import { Card } from '@/components/ui/card';
import { TESTIMONIALS } from '@/lib/constants';
import type { Metadata } from 'next';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const metadata: Metadata = {
    title: 'Testimonials | Osham',
    description: 'See what our clients are saying about our expert medical billing and coding services.',
};

export default function TestimonialsPage() {
  return (
    <div className="bg-background animate-fade-in">
      <PageHeader
        title="What Our Clients Say"
        description="We are proud to partner with healthcare providers to achieve their financial goals. Here's what they have to say about their experience with Osham."
      />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <Card key={index} className="p-8 rounded-lg bg-card text-left shadow-lg flex flex-col border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
                 <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-muted-foreground italic flex-grow">“{testimonial.quote}”</p>
                <div className="mt-6 flex items-center gap-x-4">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="professional headshot" />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.title}</div>
                    </div>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
