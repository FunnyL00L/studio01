import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Waves, Film, CookingPot, Leaf } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Dolphin Watching",
    description: "Enjoy a calm boat tour to see dolphins in their natural habitat.",
    icon: <Waves className="h-8 w-8 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === "activity-1"),
  },
  {
    id: 2,
    title: "Onboard Movie Nights",
    description: "Relax with classic films under the stars on the main deck.",
    icon: <Film className="h-8 w-8 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === "activity-2"),
  },
  {
    id: 3,
    title: "Maternity Cooking Class",
    description: "Learn to prepare nutritious and delicious meals for you and your baby.",
    icon: <CookingPot className="h-8 w-8 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === "activity-3"),
  },
  {
    id: 4,
    title: "Prenatal Spa Treatments",
    description: "Indulge in spa treatments specifically designed for expectant mothers.",
    icon: <Leaf className="h-8 w-8 text-primary" />,
    image: PlaceHolderImages.find((img) => img.id === "activity-4"),
  },
];

export default function ActivityGallery() {
  return (
    <section id="activities" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground font-medium">
              Activities
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              Enjoy Every Moment
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We've curated a selection of safe and enjoyable activities for you
              to make the most of your cruise.
            </p>
          </div>
        </div>
        <div className="my-8 flex justify-center gap-2">
          <Button>All</Button>
          <Button variant="outline">Relaxation</Button>
          <Button variant="outline">Entertainment</Button>
          <Button variant="outline">Educational</Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              {activity.image && (
                <CardHeader className="p-0">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={activity.image.imageUrl}
                      alt={activity.title}
                      fill
                      className="object-cover"
                      data-ai-hint={activity.image.imageHint}
                    />
                  </div>
                </CardHeader>
              )}
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                    {activity.icon}
                  <CardTitle className="font-headline text-xl">{activity.title}</CardTitle>
                </div>
                <p className="mt-2 text-muted-foreground">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
