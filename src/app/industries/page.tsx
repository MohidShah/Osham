
import { PageHeader } from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { INDUSTRIES_WE_SERVE_TILES } from '@/lib/constants';
import type { Metadata } from 'next';
import { HeartPulse, Bone, Baby, BrainCircuit, Video, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Industries We Serve | Osham',
    description: 'We provide specialized medical billing services for clinics, hospitals, private practices, and healthcare networks.',
};

const specialties = [
    { name: 'Family Medicine', icon: Users },
    { name: 'Cardiology', icon: HeartPulse },
    { name: 'Orthopedics', icon: Bone },
    { name: 'Pediatrics', icon: Baby },
    { name: 'Psychiatry', icon: BrainCircuit },
    { name: 'Telehealth', icon: Video },
];


export default function IndustriesPage() {
  return (
    <div className="bg-background animate-fade-in">
      <PageHeader
        title="Industries We Serve"
        description="We tailor our expert billing and coding services to meet the unique needs of a diverse range of healthcare providers."
      />

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES_WE_SERVE_TILES.map((industry) => {
            const IndustryIcon = industry.icon;
            return (
            <Card key={industry.name} className="group flex flex-col items-center justify-center p-8 text-center rounded-lg bg-card border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <IndustryIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{industry.name}</h3>
            </Card>
          )})}
        </div>

        <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Supporting a Wide Range of Specialties
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Beyond these primary settings, our expertise extends to various medical specialties, ensuring compliant and efficient billing no matter the complexity.
            </p>
             <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 gap-8 sm:grid-cols-3">
                {specialties.map((specialty) => {
                    const SpecialtyIcon = specialty.icon;
                    return (
                    <div key={specialty.name} className="group flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-card text-primary border-2 border-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                            <SpecialtyIcon className="h-8 w-8" />
                        </div>
                        <span className="font-medium text-muted-foreground">{specialty.name}</span>
                    </div>
                )})}
            </div>
        </div>

      </div>
    </div>
  );
}
