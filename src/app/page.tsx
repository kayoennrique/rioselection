import AchievementsSection from "@/components/Conquest/Conquest";
import GallerySection from "@/components/Gallery/Gallery";
import HeroSection from "@/components/Hero/Hero";
import HistorySection from "@/components/HistorySection/HistorySection";
import RecruitmentSection from "@/components/RecruitmentSection/RecruitmentSection";
import TeamSection from "@/components/TeamSection/TeamSection";
import ThankYouSection from "@/components/ThankYouSection/ThankYouSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start overflow-hidden">
      <HeroSection />
      <AchievementsSection />
      <GallerySection />
      <HistorySection />
      <TeamSection />
      <ThankYouSection />
      <RecruitmentSection />
    </main>
  );
}
