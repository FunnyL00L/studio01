import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { CheckCircle, XCircle } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Daftar aktivitas yang aman dan tidak aman untuk ibu hamil
const activities = {
  recommended: [
    // Aktivitas Aman
    { name: "Naik kapal dengan laut tenang", icon: <CheckCircle className="h-5 w-5 text-green-500" /> },
    { name: "Berenang ringan di laut atau pantai dengan ombak tenang", icon: <CheckCircle className="h-5 w-5 text-green-500" /> },
    { name: "Snorkeling ringan di perairan dangkal dan tenang (hanya trimester 2)", icon: <CheckCircle className="h-5 w-5 text-green-500" /> },
    { name: "Melihat pemandangan dari kapal tanpa aktivitas air", icon: <CheckCircle className="h-5 w-5 text-green-500" /> },
    { name: "Menikmati sunset dari atas kapal dengan duduk nyaman", icon: <CheckCircle className="h-5 w-5 text-green-500" /> },
  ],
  notRecommended: [
    // Aktivitas Dilarang
    { name: "Diving/scuba diving (perubahan tekanan berbahaya untuk janin)", icon: <XCircle className="h-5 w-5 text-destructive" /> },
    { name: "Snorkeling di area dengan arus kuat", icon: <XCircle className="h-5 w-5 text-destructive" /> },
    { name: "Jet ski, banana boat, atau watersport ekstrem", icon: <XCircle className="h-5 w-5 text-destructive" /> },
    { name: "Berenang di laut dengan ombak tinggi", icon: <XCircle className="h-5 w-5 text-destructive" /> },
    { name: "Melompat dari kapal atau dari ketinggian", icon: <XCircle className="h-5 w-5 text-destructive" /> },
    { name: "Aktivitas yang melibatkan benturan atau getaran kuat", icon: <XCircle className="h-5 w-5 text-destructive" /> },
    { name: "Berjemur terlalu lama di bawah terik matahari", icon: <XCircle className="h-5 w-5 text-destructive" /> },
  ],
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
              Temukan semua kegiatan yang kami sarankan dan yang harus dihindari untuk memastikan perjalanan yang nyaman.
            </p>
          </div>
        </div>

        <Tabs defaultValue="recommended" className="mt-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="recommended">Aktivitas Aman</TabsTrigger>
            <TabsTrigger value="notRecommended">Aktivitas Dilarang</TabsTrigger>
          </TabsList>

          {/* Recommended Activities */}
          <TabsContent value="recommended">
            <div className="grid grid-cols-1 gap-8 mt-8">
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
                  {activities.recommended.map((activity) => (
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
          </TabsContent>

          {/* Not Recommended Activities */}
          <TabsContent value="notRecommended">
            <div className="grid grid-cols-1 gap-8 mt-8">
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
                  {activities.notRecommended.map((activity) => (
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}