import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import EmergencySop from "@/components/sections/emergency-sop";
import SafetyGuides from "@/components/sections/safety-guides";
import HealthTips from "@/components/sections/health-tips";
import ActivityGallery from "@/components/sections/activity-gallery";
import Testimonials from "@/components/sections/testimonials";
import Faq from "@/components/sections/faq";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <Hero />
        <EmergencySop />
        <SafetyGuides />
        <HealthTips />
        <ActivityGallery />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
