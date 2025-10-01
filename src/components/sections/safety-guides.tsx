import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeartPulse, ShieldCheck, UtensilsCrossed, Sun, Waves } from "lucide-react";

const guides = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Pre-Travel Checkup",
    description: "Consult your doctor for clearance and travel recommendations.",
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    title: "Onboard Medical",
    description: "Familiarize yourself with the ship's medical facilities upon boarding.",
  },
  {
    icon: <UtensilsCrossed className="h-10 w-10 text-primary" />,
    title: "Hydration & Diet",
    description: "Stay hydrated and choose safe, well-cooked food options.",
  },
  {
    icon: <Sun className="h-10 w-10 text-primary" />,
    title: "Sun Protection",
    description: "Use high-SPF sunscreen and stay in the shade to avoid overheating.",
  },
  {
    icon: <Waves className="h-10 w-10 text-primary" />,
    title: "Activity Precautions",
    description: "Opt for gentle activities and avoid anything strenuous or risky.",
  },
];

export default function SafetyGuides() {
  return (
    <section id="safety" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground font-medium">
            Safety Guides
          </div>
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Safety First on Your Voyage
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Traveling while pregnant requires a little extra care. Follow these
            essential guidelines to ensure a safe and comfortable journey.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <Card key={index} className="flex flex-col items-center justify-center p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="p-0">
                {guide.icon}
                <CardTitle className="mt-4 font-headline">{guide.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-sm">{guide.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
