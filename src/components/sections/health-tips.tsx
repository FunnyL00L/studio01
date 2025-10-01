import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const healthTips = [
  {
    id: 1,
    title: "Managing Morning Sickness at Sea",
    excerpt: "Tips and tricks to keep nausea at bay while enjoying the waves.",
    image: PlaceHolderImages.find((img) => img.id === "health-tip-1"),
  },
  {
    id: 2,
    title: "Staying Active and Safe",
    excerpt: "Gentle exercises and activities to maintain your fitness onboard.",
    image: PlaceHolderImages.find((img) => img.id === "health-tip-2"),
  },
  {
    id: 3,
    title: "Nutrition on the High Seas",
    excerpt: "How to make healthy and safe food choices from the buffet and restaurants.",
    image: PlaceHolderImages.find((img) => img.id === "health-tip-3"),
  },
  {
    id: 4,
    title: "What to Pack: Health Edition",
    excerpt: "A checklist of essential health items for your cruise.",
    image: PlaceHolderImages.find((img) => img.id === "health-tip-1"),
  },
];

export default function HealthTips() {
  return (
    <section id="health" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-start space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground font-medium">
              Health Tips
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              Your Health, Our Priority
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Essential advice to ensure a healthy and comfortable journey for
              you and your baby.
            </p>
          </div>
        </div>
        <div className="mt-8">
            <div className="flex w-full space-x-6 overflow-x-auto pb-4">
                {healthTips.map((tip) => (
                    <div key={tip.id} className="min-w-[300px] flex-shrink-0 snap-start">
                        <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                            {tip.image && (
                            <CardHeader className="p-0">
                                <div className="aspect-video relative">
                                <Image
                                    src={tip.image.imageUrl}
                                    alt={tip.title}
                                    fill
                                    className="object-cover rounded-t-lg"
                                    data-ai-hint={tip.image.imageHint}
                                />
                                </div>
                            </CardHeader>
                            )}
                            <CardContent className="p-4">
                            <CardTitle className="font-headline text-lg leading-snug">{tip.title}</CardTitle>
                            <p className="mt-2 text-sm text-muted-foreground">{tip.excerpt}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
