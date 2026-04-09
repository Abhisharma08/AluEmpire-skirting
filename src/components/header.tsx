"use client";

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/logo';

const navLinks = [
  { href: '#solutions', label: 'Benefits' },
  { href: '#products', label: 'Products' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#applications', label: 'Applications' },
  { href: '#faq', label: 'FAQs' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      
      {/* Container */}
      <div className="site-container flex h-16 items-center justify-between">

        {/* LEFT - Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* CENTER - Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}

              {/* Hover underline effect */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* RIGHT - CTA */}
        <div className="hidden md:flex items-center">
          <Button asChild className="px-5">
            <a href="#lead-form">Get a Free Quote</a>
          </Button>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="p-4 flex flex-col h-full">

                <div className="mb-8">
                  <Logo />
                </div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                {/* Push CTA to bottom */}
                <div className="mt-auto pt-8">
                  <Button asChild className="w-full">
                    <a href="#lead-form" onClick={() => setIsOpen(false)}>
                      Get a Free Quote
                    </a>
                  </Button>
                </div>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
