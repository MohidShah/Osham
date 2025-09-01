import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Osham: Simplifying Medical Billing. Maximizing Revenue.',
  description:
    'Osham is your expert partner for medical billing, coding, and RCM solutions. We offer HIPAA-compliant services to maximize your revenue and streamline operations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Osham',
              url: 'https://www.osham.com',
              logo: 'https://www.osham.com/logo.png',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={cn('font-sans antialiased', inter.variable)}>
        <div className="flex min-h-screen flex-col bg-background">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
