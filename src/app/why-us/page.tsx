
import { PageHeader } from '@/components/page-header';
import { WHY_CHOOSE_US_ITEMS } from '@/lib/constants';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Why Choose Us | Osham',
    description: 'Discover the advantages of partnering with Osham for your medical billing needs. We offer accuracy, HIPAA compliance, cost savings, and fast turnaround.',
};

export default function WhyChooseUsPage() {
  return (
    <div className="bg-background animate-fade-in">
      <PageHeader
        title="Why Choose Osham?"
        description="We combine technology, expertise, and a client-first approach to deliver unparalleled results for your practice."
      />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative order-last lg:order-first">
                 <Image 
                    src="https://images.unsplash.com/photo-1576670160060-c4e874631c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNHx8bWVkaWNhbCUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzU1NzkwNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="A team of smiling, diverse medical professionals"
                    width={600}
                    height={700}
                    className="rounded-xl shadow-lg object-cover"
                    data-ai-hint="medical professionals"
                    />
            </div>
            <div className="order-first lg:order-last">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    Your Partner in Financial Health
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Partnering with us means you get a dedicated team of experts committed to your financial success. We go above and beyond to ensure your billing process is seamless, compliant, and efficient, so you can focus on what matters most: patient care.
                </p>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {WHY_CHOOSE_US_ITEMS.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                        <div key={item.title} className="flex items-start gap-4">
                             <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <ItemIcon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div>
                               <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                               <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    )})}
                </div>
                 <Button asChild size="lg" className="mt-10">
                    <Link href="/contact">Book a Consultation</Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
