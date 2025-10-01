"use client";

import Link from "next/link";
import { Menu, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#safety", label: "Safety Guides" },
  { href: "#health", label: "Health Tips" },
  { href: "#activities", label: "Activities" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQs" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Ship className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline text-foreground">
            CruiseCare
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex h-full flex-col p-6">
                <Link href="/" className="mb-8 flex items-center gap-2">
                   <Ship className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold font-headline text-foreground">
                    CruiseCare
                  </span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="rounded-md p-2 text-lg font-medium text-foreground hover:bg-secondary"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
