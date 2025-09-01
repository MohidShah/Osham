import Link from 'next/link';
import { NAV_MENU, SOCIAL_LINKS, COMPANY_EMAIL, COMPANY_PHONE } from '@/lib/constants';
import { Logo } from './logo';
import { Mail, Phone, Copyright } from 'lucide-react';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          <div className="lg:col-span-4">
            <Logo />
            <p className='mt-4 text-muted-foreground max-w-sm'>
              Osham is your expert partner for comprehensive medical billing solutions, dedicated to maximizing your revenue and streamlining your operations.
            </p>
             <div className="mt-6 flex space-x-4">
               {SOCIAL_LINKS.map((social) => (
                <a key={social.name} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {NAV_MENU.map((menuItem) => (
                  <div key={menuItem.label}>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                      {menuItem.label}
                    </h3>
                    <ul role="list" className="mt-4 space-y-3">
                      {menuItem.children ? (
                        menuItem.children.map((link) => (
                           <li key={link.label}>
                            <Link
                              href={link.href}
                              className="text-base text-muted-foreground hover:text-primary transition-colors"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))
                      ) : (
                         menuItem.href && (
                           <li>
                             <Link href={menuItem.href} className="text-base text-muted-foreground hover:text-primary transition-colors">
                              {menuItem.label}
                             </Link>
                           </li>
                         )
                      )}
                    </ul>
                  </div>
              ))}
               <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Contact
                </h3>
                <ul className="mt-4 space-y-3 text-base text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <a href={`tel:${COMPANY_PHONE}`} className="hover:text-primary transition-colors">{COMPANY_PHONE}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-primary transition-colors break-all">{COMPANY_EMAIL}</a>
                  </li>
                </ul>
                <Button asChild className="mt-4" variant="outline">
                    <Link href="/contact">Request a Demo</Link>
                </Button>
              </div>
          </div>

        </div>
      </div>
      <div className="border-t bg-background py-6">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
                <Copyright className="h-4 w-4" /> {new Date().getFullYear()} <Link href="/" className="font-semibold text-primary hover:underline">Osham</Link>. All Rights Reserved.
            </p>
         </div>
      </div>
    </footer>
  );
}
