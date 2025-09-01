
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { NAV_MENU } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Logo } from './logo';

function NavMenuItem({ item, closeMenu }: { item: any; closeMenu?: () => void }) {
  const pathname = usePathname();
  const hasActiveChild = item.children && item.children.some((child: any) => child.href === pathname);
  const isActive = item.href ? pathname === item.href : hasActiveChild;

  if (item.children) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "group flex items-center gap-1 text-base font-medium text-foreground transition-colors hover:text-primary focus:text-primary focus-visible:ring-0 data-[state=open]:text-primary",
              isActive && 'text-primary'
              )}
          >
            {item.label}
            <ChevronDown className={cn("h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180", isActive && "text-primary")} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="w-56" 
          align="start"
        >
          {item.children.map((child: any) => (
            <DropdownMenuItem key={child.href} asChild>
              <Link
                href={child.href}
                className={cn(
                  'w-full cursor-pointer rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-accent focus:text-primary',
                  pathname === child.href ? 'bg-primary/10 text-primary font-semibold' : ''
                )}
                onClick={() => {
                  if (closeMenu) closeMenu();
                }}
              >
                {child.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button variant="ghost" asChild>
      <Link
        href={item.href}
        className={cn(
          'text-base font-medium transition-colors hover:text-primary',
          isActive ? 'text-primary' : 'text-foreground'
        )}
        onClick={closeMenu}
      >
        {item.label}
      </Link>
    </Button>
  );
}

function MobileNavMenuItem({ item, closeMenu }: { item: any; closeMenu: () => void }) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const hasActiveChild = item.children && item.children.some((child: any) => child.href === pathname);


  if (item.children) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={item.label} className="border-b-0">
          <AccordionTrigger className={cn("py-3 text-lg font-medium hover:no-underline [&[data-state=open]>svg]:text-primary", hasActiveChild && 'text-primary')}>
            {item.label}
          </AccordionTrigger>
          <AccordionContent className="pl-4">
            <div className="flex flex-col space-y-1">
              {item.children.map((child: any) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={closeMenu}
                  className={cn(
                    'rounded-md px-4 py-3 text-base font-medium transition-colors',
                    isActive(child.href)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-primary/10 hover:text-primary'
                  )}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={closeMenu}
      className={cn(
        'block rounded-md px-4 py-3 text-lg font-medium transition-colors',
        isActive(item.href)
          ? 'bg-primary/10 text-primary'
          : 'text-foreground hover:bg-primary/10 hover:text-primary'
      )}
    >
      {item.label}
    </Link>
  );
}


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        
        <nav className="hidden items-center justify-center gap-2 lg:flex lg:flex-1">
          {NAV_MENU.map((item) => (
            <NavMenuItem key={item.label} item={item} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild>
            <Link href="/contact">Request a Demo</Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Toggle menu">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm bg-background p-6">
              <div className="flex h-full flex-col">
                <div className="mb-8 flex items-center justify-between">
                   <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    <Logo />
                  </Link>
                </div>
                <nav className="flex flex-col space-y-1">
                  {NAV_MENU.map((item) => (
                    <MobileNavMenuItem key={item.label} item={item} closeMenu={() => setIsMenuOpen(false)} />
                  ))}
                </nav>
                 <Button asChild size="lg" className="mt-auto w-full">
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Request a Demo</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
