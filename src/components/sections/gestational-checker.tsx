"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertTriangle, VenetianMask, Anchor, Footprints } from "lucide-react";

const formSchema = z.object({
  travelers: z.coerce
    .number()
    .min(1, { message: "Harus ada setidaknya 1 pelancong." }),
  weeks: z.coerce
    .number()
    .min(1, { message: "Usia kehamilan harus lebih dari 0." })
    .max(42, { message: "Usia kehamilan tidak valid." }),
});

type FormValues = z.infer<typeof formSchema>;

const BANNED_ACTIVITIES = [
    { icon: <VenetianMask />, name: "Seluncuran air berkecepatan tinggi" },
    { icon: <Anchor />, name: "Menyelam scuba" },
    { icon: <Footprints />, name: "Panjat tebing atau aktivitas berat lainnya" },
];

export default function GestationalChecker() {
  const [recommendation, setRecommendation] = React.useState<"safe" | "warning" | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      travelers: 1,
      weeks: 12,
    },
  });

  function onSubmit(values: FormValues) {
    if (values.weeks > 24) {
      setRecommendation("warning");
    } else {
      setRecommendation("safe");
    }
  }

  return (
    <section id="checker" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
             <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent-foreground font-medium">
              Pemeriksa Kehamilan
            </div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              Periksa Rekomendasi Perjalanan Anda
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Masukkan detail perjalanan Anda untuk melihat rekomendasi keselamatan dan aktivitas yang disarankan untuk ibu hamil. Sebagian besar jalur pelayaran tidak mengizinkan perjalanan setelah 24 minggu.
            </p>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Detail Pelancong</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="travelers"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Jumlah Ibu Hamil</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="weeks"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Usia Kehamilan (Minggu)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                           <FormDescription>
                             Masukkan usia kehamilan saat ini.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Periksa Rekomendasi</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          <div className="flex items-center justify-center">
            {recommendation === 'safe' && (
                <Alert className="border-green-500 bg-green-50 text-green-900">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <AlertTitle className="font-bold">Aman untuk Bepergian!</AlertTitle>
                    <AlertDescription>
                        Berdasarkan usia kehamilan yang Anda berikan, bepergian dengan kapal pesiar umumnya dianggap aman. Nikmati perjalanan Anda dan pastikan untuk memeriksa daftar aktivitas yang kami sarankan. Selalu konsultasikan dengan dokter Anda sebelum bepergian.
                    </AlertDescription>
                </Alert>
            )}
             {recommendation === 'warning' && (
                <Alert variant="destructive">
                    <AlertTriangle className="h-5 w-5" />
                    <AlertTitle className="font-bold">Perhatian Diperlukan</AlertTitle>
                    <AlertDescription>
                        <p className="mb-4">Perjalanan pesiar tidak direkomendasikan untuk kehamilan di atas 24 minggu karena risiko komplikasi dan ketersediaan fasilitas medis yang terbatas di laut. Mohon konsultasikan dengan dokter Anda segera.</p>
                        <h4 className="font-semibold mb-2">Aktivitas yang Tidak Direkomendasikan:</h4>
                        <ul className="space-y-2">
                           {BANNED_ACTIVITIES.map(activity => (
                             <li key={activity.name} className="flex items-center gap-2">
                               {activity.icon}
                               <span>{activity.name}</span>
                             </li>
                           ))}
                        </ul>
                    </AlertDescription>
                </Alert>
            )}
             {recommendation === null && (
                 <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                    <p>Hasil rekomendasi Anda akan ditampilkan di sini.</p>
                </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
}
