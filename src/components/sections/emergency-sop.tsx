import { Phone, AlertTriangle, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const sopSteps = [
  {
    icon: <AlertTriangle className="h-8 w-8 text-destructive" />,
    title: "Tetap Tenang & Menilai Situasi",
    description: "Ambil napas dalam-dalam. Jangan panik. Coba identifikasi apa yang salah dan tingkat urgensinya.",
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-blue-500" />,
    title: "Cari Bantuan Terdekat",
    description: "Beri tahu seseorang di sekitar Anda atau staf kapal terdekat. Jelaskan situasi Anda dengan jelas.",
  },
  {
    icon: <Phone className="h-8 w-8 text-green-500" />,
    title: "Hubungi Layanan Medis Kapal",
    description: "Gunakan telepon di kamar Anda atau minta staf untuk menghubungi pusat medis kapal untuk mendapatkan bantuan profesional.",
  },
];

export default function EmergencySop() {
  return (
    <section id="emergency-sop" className="w-full py-12 md:py-24 lg:py-32 bg-red-50 dark:bg-red-900/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-destructive/10 px-3 py-1 text-sm font-medium text-destructive">
              Prosedur Darurat
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-destructive">
              Tindakan Cepat Saat Darurat
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Jika Anda mengalami keadaan darurat medis, ikuti langkah-langkah sederhana ini untuk mendapatkan bantuan segera.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3 md:gap-12 lg:gap-16 mt-12">
          {sopSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold font-headline">{step.title}</h3>
              <p className="text-muted-foreground mt-2">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-center text-muted-foreground">Untuk situasi yang sangat mendesak, hubungi layanan darurat kapal secara langsung.</p>
            <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 animate-pulse">
                <Link href="tel:911">
                    <Phone className="mr-2 h-5 w-5" />
                    PANGGIL DARURAT (911)
                </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-2">(Catatan: Nomor ini adalah placeholder. Gunakan nomor darurat aktual yang disediakan oleh kapal pesiar Anda.)</p>
        </div>
      </div>
    </section>
  );
}
