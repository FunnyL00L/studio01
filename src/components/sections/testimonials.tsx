import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jessica M.",
    location: "Sailed at 20 weeks",
    quote:
      "I was so nervous about cruising while pregnant, but CruiseCare's guides put me at ease. The trip was wonderful, and I felt completely safe and prepared. The tip about managing morning sickness was a lifesaver!",
    avatar: PlaceHolderImages.find((img) => img.id === "testimonial-1"),
  },
  {
    id: 2,
    name: "Sarah and Tom P.",
    location: "Sailed at 18 weeks",
    quote:
      "Our babymoon cruise was perfect. We used the activity guide to find relaxing things to do together. It was the perfect way to connect before our little one arrives. Highly recommend!",
    avatar: PlaceHolderImages.find((img) => img.id === "testimonial-2"),
  },
  {
    id: 3,
    name: "Emily R.",
    location: "Sailed at 22 weeks",
    quote:
      "The FAQ section answered all my specific questions that I couldn't find answers to elsewhere. The attention to detail made me feel confident in my decision to travel. It was an amazing experience.",
    avatar: PlaceHolderImages.find((img) => img.id === "testimonial-3"),
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground font-medium">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              Stories from the Sea
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from other expectant mothers who have enjoyed a wonderful
              cruise experience with a little help from CruiseCare.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col">
                      <CardContent className="flex flex-1 flex-col justify-between p-6">
                        <div>
                          <Quote className="h-8 w-8 text-primary mb-4" />
                          <blockquote className="text-muted-foreground">
                            {testimonial.quote}
                          </blockquote>
                        </div>
                        <div className="mt-6 flex items-center gap-4">
                          {testimonial.avatar && (
                             <Avatar>
                                <AvatarImage
                                  src={testimonial.avatar.imageUrl}
                                  alt={testimonial.name}
                                  data-ai-hint={testimonial.avatar.imageHint}
                                />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                             </Avatar>
                          )}
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
