import { PageHeader } from '@/components/page-header';
import { Users, Goal, Eye } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Osham',
    description: 'Learn about Osham\'s mission to streamline medical billing and empower healthcare providers.',
};

export default function AboutPage() {
  return (
    <div className="bg-background animate-fade-in">
      <PageHeader
        title="About Osham"
        description="Our mission is to empower healthcare providers by simplifying the complexities of medical billing with expertise and integrity."
      />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[500px] w-full order-last lg:order-first group overflow-hidden rounded-xl">
                 <Image
                    src="/About.png?q=80&w=800&h=600&fit=crop"
                    alt="Team of medical billing professionals in a meeting"
                    fill
                    className="rounded-xl shadow-lg object-covertransition-transform duration-500 group-hover:scale-110"
                    data-ai-hint="medical professionals discussion"
                />
            </div>

            <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                    Your Expert Partner in Medical Billing
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Osham is a dedicated team of certified billing and coding experts committed to optimizing the financial health of healthcare practices. We understand the challenges providers face, which is why we offer comprehensive solutions designed to increase revenue, ensure compliance, and reduce administrative burdens.
                </p>
                <div className="mt-12 space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Eye className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Our Vision</h3>
                            <p className="mt-1 text-muted-foreground">To be the most trusted and transparent medical billing partner for healthcare providers, enabling them to focus on exceptional patient care.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Goal className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Our Mission</h3>
                            <p className="mt-1 text-muted-foreground">To simplify the revenue cycle for healthcare providers through accurate, compliant, and efficient billing and coding solutions, maximizing their financial outcomes.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Users className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Our Team</h3>
                            <p className="mt-1 text-muted-foreground">Our success is driven by a team of highly professional and experienced billing experts who are dedicated to accuracy and client satisfaction.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
