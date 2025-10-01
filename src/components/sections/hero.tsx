import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover -z-10 brightness-75"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="container px-4 md:px-6 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            CruiseCare
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-primary-foreground/90">
            Your Ultimate Guide to Safe & Serene Pregnancy Travel
          </p>
          <div className="mt-8 max-w-lg mx-auto flex gap-2">
            <Input
              type="search"
              placeholder="Search for articles, tips, or questions..."
              className="flex-1 text-base text-foreground"
            />
            <Button type="submit" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
