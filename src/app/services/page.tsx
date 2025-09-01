
import { PageHeader } from '@/components/page-header';
import { SERVICES } from '@/lib/constants';
import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Our Services | Medical Billing, Coding, RCM & More | Osham',
    description: 'Detailed descriptions of our services: Medical Billing, Medical Coding, Revenue Cycle Management, Claim Denial Management, and Credentialing Services.',
};

export default function ServicesPage() {
  return (
    <div className="bg-background animate-fade-in">
      <PageHeader
        title="Our Services"
        description="Comprehensive solutions to optimize your practice's financial health and operational efficiency."
      />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
        <div className="space-y-24">
          {SERVICES.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
            <div key={service.title} className={`grid grid-cols-1 items-center gap-16 lg:grid-cols-2 ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`relative h-96 w-full lg:h-[450px] group overflow-hidden rounded-lg ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                 <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="rounded-lg object-cover shadow-lg transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={service.hint}
                />
              </div>
              <div className="flex flex-col justify-center">
                 <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary ring-2 ring-primary/20 mb-6">
                    <ServiceIcon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-4 text-lg text-muted-foreground">{service.description}</p>
                <ul className="mt-6 space-y-3">
                    {service.features.map(feature => (
                        <li key={feature} className="flex items-start gap-3">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 mt-0.5">
                               <Check className="h-4 w-4 text-green-600" />
                            </div>
                            <span className="text-muted-foreground">{feature}</span>
                        </li>
                    ))}
                </ul>
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
}
