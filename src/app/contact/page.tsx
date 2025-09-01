
'use client';

import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from '@/lib/constants';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { sendContactForm } from '@/ai/flows/contact-flow';
import { type ContactFormInput, ContactFormInputSchema } from '@/ai/schemas/contact-schema';
import { useState } from 'react';

// Metadata for this page should be handled in a parent layout or page component.
// For example, in 'src/app/contact/layout.tsx' if you create one, or in the main 'src/app/layout.tsx'.

export default function ContactPage() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<ContactFormInput>({
        resolver: zodResolver(ContactFormInputSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
    });

    const onSubmit: SubmitHandler<ContactFormInput> = async (data) => {
        setIsSubmitting(true);
        try {
            const result = await sendContactForm(data);
            if (result.success) {
                toast({
                    title: 'Message Sent!',
                    description: result.message,
                });
                form.reset();
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Something went wrong',
                description: 'There was an error sending your message. Please try again later.',
            });
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };


  return (
    <div className="bg-background animate-fade-in">
      <PageHeader
        title="Contact Us"
        description="We're here to answer your questions. Reach out to us for a free consultation."
      />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question or want to learn more about how we can help your practice? Fill out the form or use the contact details below.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <a href={`tel:${COMPANY_PHONE}`} className="text-muted-foreground hover:text-primary">{COMPANY_PHONE}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <a href={`mailto:${COMPANY_EMAIL}`} className="text-muted-foreground hover:text-primary">{COMPANY_EMAIL}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Address</h3>
                  <p className="text-muted-foreground">{COMPANY_ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg bg-card p-8 shadow-lg border">
             <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Full Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email address</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="Email Address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone number</FormLabel>
                                <FormControl>
                                    <Input type="tel" placeholder="Phone Number (Optional)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your message</FormLabel>
                                <FormControl>
                                    <Textarea rows={5} placeholder="How can we help you?" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <div>
                        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                             {isSubmitting && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </div>
                </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
