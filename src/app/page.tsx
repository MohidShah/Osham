import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { HOW_IT_WORKS, SERVICES, TESTIMONIALS, WHY_CHOOSE_US_ITEMS, PROBLEMS_WE_SOLVE } from '@/lib/constants';
import { ArrowRight, Star, ChevronRight, Stethoscope, HeartPulse, DollarSign, FileScan, ReceiptText } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';

export const metadata: Metadata = {
  title: 'Osham: Medical Billing',
  description:
    'Osham is your expert partner for medical billing, coding, and RCM solutions. We offer HIPAA-compliant services to maximize your revenue and streamline operations.',
    icons: {
    icon: "/favicon.ico",  // ✅ looks in /public automatically
  },
};

export default function Home() {
  const featuredServices = [
    SERVICES[0], // Medical Billing
    SERVICES[2], // Revenue Cycle Management
    SERVICES[3], // Claim Denial Management
    SERVICES[4], // Credentialing Services
  ];
  return (
    <div className="flex flex-col bg-background animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-100/30 via-background to-background py-16 md:py-20">
         <Stethoscope className="absolute -left-12 top-1/4 h-64 w-64 text-primary/10 opacity-50 animate-spin-slow" />
         <HeartPulse className="absolute -right-16 bottom-0 h-72 w-72 text-primary/20 opacity-60 animate-pulse-subtle" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <TypewriterEffect text="TURNING DENIALS INTO DOLLARS" />
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              Osham provides comprehensive medical billing, coding, and RCM solutions designed to increase revenue and reduce administrative burdens.
            </p>
             <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                    <Link href="/contact">Request a Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="#how-it-works">See How It Works</Link>
                </Button>
            </div>
             <div className="relative mt-12 h-16 w-full max-w-lg mx-auto overflow-hidden">
                <div className="absolute flex items-center justify-around w-full h-full">
                    <FileScan className="w-8 h-8 text-primary/30 animate-billing-flow-item-1" />
                    <ChevronRight className="w-8 h-8 text-primary/20 animate-billing-flow-item-2" />
                    <ReceiptText className="w-8 h-8 text-primary/40 animate-billing-flow-item-2" />
                    <ChevronRight className="w-8 h-8 text-primary/20 animate-billing-flow-item-3" />
                    <DollarSign className="w-8 h-8 text-primary/50 animate-billing-flow-item-3" />
                </div>
            </div>
          </div>
        </div>
      </section>

       {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
                <div className="relative h-24 mb-4">
                    <DollarSign className="absolute left-1/4 top-0 h-10 w-10 animate-float text-primary/30" style={{ animationDelay: '0s' }} />
                    <DollarSign className="absolute left-1/3 top-8 h-6 w-6 animate-float-delay-1 text-primary/20" style={{ animationDelay: '1s' }} />
                    <DollarSign className="absolute left-1/2 top-2 h-8 w-8 animate-float text-primary/40" style={{ animationDelay: '0.5s' }} />
                    <DollarSign className="absolute right-1/3 top-6 h-10 w-10 animate-float-delay-2 text-primary/30" style={{ animationDelay: '1.5s' }} />
                    <DollarSign className="absolute right-1/4 top-1 h-7 w-7 animate-float text-primary/20" style={{ animationDelay: '0.2s' }} />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    How It Works
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our process is designed for simplicity and maximum efficiency, ensuring a seamless experience from start to finish.
                </p>
            </div>
            <div className="mt-16">
                <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-0">
                    {HOW_IT_WORKS.map((step, index) => {
                        const StepIcon = step.icon;
                        return (
                        <React.Fragment key={step.step}>
                            <div className="flex flex-col items-center text-center animate-fade-in-up md:flex-1" style={{ animationDelay: `${index * 200}ms`}}>
                                <div className="group">
                                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg transition-all duration-300 group-hover:scale-110">
                                        <StepIcon className="h-10 w-10" />
                                    </div>
                                </div>
                                <h3 className="mt-6 text-2xl font-semibold text-foreground">{step.title}</h3>
                                <p className="mt-2 max-w-xs text-muted-foreground">{step.description}</p>
                            </div>
                            {index < HOW_IT_WORKS.length - 1 && (
                                <div className="hidden md:flex items-center h-full mt-10">
                                    <ChevronRight className="h-12 w-12 text-primary/30 mx-4 opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 200 + 100}ms`}}/>
                                </div>
                            )}
                        </React.Fragment>
                    )})}
                </div>
            </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section id="problems-we-solve" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Challenges Clinics Face Every Day
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Medical billing shouldn’t hold your practice back. Osham helps providers overcome the most common hurdles in revenue cycle management.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS_WE_SOLVE.map((problem, index) => {
              const ProblemIcon = problem.icon;
              return (
                <Card key={problem.title} className="flex flex-col items-start p-6 text-left rounded-lg bg-card border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <ProblemIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
                  <p className="mt-1 text-muted-foreground">{problem.description}</p>
                </Card>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="#services">See How Osham Solves These Challenges</Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Complete Suite of Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer a complete suite of services to streamline your revenue cycle and ensure financial
              success.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
            {featuredServices.map((service) => {
                const ServiceIcon = service.icon;
                return (
              <div key={service.title} className="flip-card h-[280px] rounded-lg">
                <div className="flip-card-inner rounded-lg">
                  {/* Front of the card */}
                  <div className="flip-card-front flex flex-col items-center justify-center rounded-lg border bg-card p-8 text-center shadow-lg">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ServiceIcon className="h-10 w-10" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                  {/* Back of the card */}
                  <div className="flip-card-back flex flex-col justify-center rounded-lg border bg-card p-8 text-center shadow-xl">
                    <p className="flex-grow text-base text-muted-foreground">
                      {service.description.substring(0, 120)}...
                    </p>
                    <Button asChild className="mt-6" variant="outline">
                      <Link href="/services">
                        Explore
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )})}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="relative h-96 w-full lg:h-[550px]">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&h=600&fit=crop"
                alt="Team of medical billing professionals in a meeting"
                fill
                className="rounded-lg object-cover shadow-xl"
                data-ai-hint="medical professionals discussion"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Partner with Osham?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We are more than a billing company; we are your strategic partner in achieving
                financial excellence and operational efficiency.
              </p>
              <ul className="mt-8 space-y-6">
                {WHY_CHOOSE_US_ITEMS.slice(0, 3).map((item) => {
                    const ItemIcon = item.icon;
                    return (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <ItemIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                )})}
              </ul>
              <Button asChild size="lg" className="mt-8">
                <Link href="/why-us">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover why healthcare providers trust Osham to manage their revenue cycle.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
              <Card
                key={index}
                className="flex flex-col rounded-lg border bg-card p-8 text-left shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="italic text-muted-foreground">“{testimonial.quote}”</p>
                <div className="mt-6 flex items-center gap-x-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      data-ai-hint="professional headshot"
                    />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
