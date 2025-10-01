import Link from "next/link";

const navLinks = [
  { href: "#safety", label: "Safety Guides" },
  { href: "#health", label: "Health Tips" },
  { href: "#activities", label: "Activities" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQs" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <Link href="/" className="text-xl font-bold font-headline text-foreground">
              CruiseCare
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Your guide to a safe and happy cruise.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CruiseCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
