import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { CheckCircle, XCircle, Waves, Film, CookingPot, Leaf, VenetianMask, Anchor, Footprints } from "lucide-react";

const activitiesByTrimester = {
  trimester1: {
    recommended: [
      { name: "Jalan Santai di Dek", icon: <Footprints className="h-5 w-5 text-green-500" /> },
      { name: "Kelas Yoga Prenatal", icon: <Leaf className="h-5 w-5 text-green-500" /> },
      { name: "Menonton Film di Tepi Kolam", icon: <Film className="h-5 w-5 text-green-500" /> },
    ],
    notRecommended: [
      { name: "Aktivitas berat atau berdampak tinggi", icon: <XCircle className="h-5 w-5 text-destructive" /> },
      { name: "Sauna atau Hot Tub", icon: <XCircle className="h-5 w-5 text-destructive" /> },
    ],
  },
  trimester2: {
    recommended: [
      { name: "Berenang di Kolam Renang", icon: <Waves className="h-5 w-5 text-green-500" /> },
      { name: "Kelas Memasak Makanan Sehat", icon: <CookingPot className="h-5 w-5 text-green-500" /> },
      { name: "Tur Kapal Melihat Lumba-lumba", icon: <Waves className="h-5 w-5 text-green-500" /> },
    ],
    notRecommended: [
      { name: "Seluncuran air berkecepatan tinggi", icon: <VenetianMask className="h-5 w-5 text-destructive" /> },
      { name: "Panjat tebing", icon: <Footprints className="h-5 w-5 text-destructive" /> },
    ],
  },
  trimester3: {
    recommended: [
      { name: "Perawatan Spa Prenatal", icon: <Leaf className="h-5 w-5 text-green-500" /> },
      { name: "Sesi Fotografi Kehamilan", icon: <Film className="h-5 w-5 text-green-500" /> },
      { name: "Menikmati musik live", icon: <Film className="h-5 w-5 text-green-500" /> },
    ],
    notRecommended: [
      { name: "Perjalanan jauh dari kapal", icon: <XCircle className="h-5 w-5 text-destructive" /> },
      { name: "Scuba diving", icon: <Anchor className="h-5 w-5 text-destructive" /> },
      { name: "Aktivitas yang membutuhkan keseimbangan tinggi", icon: <XCircle className="h-5 w-5 text-destructive" /> },
    ],
  },
};

export default function ActivityRecommendations() {
  return (
    <section
      id="activities"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground font-medium">
              Rekomendasi Kegiatan
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
              Aktivitas Aman & Menyenangkan
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Temukan kegiatan yang kami sarankan dan yang harus dihindari
              berdasarkan trimester kehamilan Anda untuk memastikan perjalanan
              yang nyaman.
            </p>
          </div>
        </div>

        <Tabs defaultValue="trimester1" className="mt-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="trimester1">Trimester 1 (1-13 Minggu)</TabsTrigger>
            <TabsTrigger value="trimester2">Trimester 2 (14-26 Minggu)</TabsTrigger>
            <TabsTrigger value="trimester3">Trimester 3 (27+ Minggu)</TabsTrigger>
          </TabsList>
          {Object.entries(activitiesByTrimester).map(([key, data]) => (
            <TabsContent key={key} value={key}>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8">
                <div>
                  <h3 className="text-2xl font-bold font-headline mb-4 flex items-center gap-2">
                    <CheckCircle className="h-7 w-7 text-green-500" />
                    Direkomendasikan
                  </h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Aktivitas</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.recommended.map((activity) => (
                        <TableRow key={activity.name}>
                          <TableCell className="flex items-center gap-3">
                            {activity.icon}
                            <span>{activity.name}</span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-headline mb-4 flex items-center gap-2">
                    <XCircle className="h-7 w-7 text-destructive" />
                    Tidak Direkomendasikan
                  </h3>
                   <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Aktivitas</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.notRecommended.map((activity) => (
                        <TableRow key={activity.name}>
                          <TableCell className="flex items-center gap-3">
                            {activity.icon}
                            <span>{activity.name}</span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
