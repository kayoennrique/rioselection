import Image from "next/image";
import dynamic from "next/dynamic";

const LoadingFallback = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
    <Image
      src="/logo-footer.png"
      alt="Carregando"
      className="max-w-[267px] max-h-[268px] animate-pulse"
      priority={true}
      width={160}
      height={53}
    />
  </div>
);

const HeroSection = dynamic(() => import("@/components/Hero/Hero"), {
  loading: () => <LoadingFallback />,
  ssr: false,
});

const AchievementsSection = dynamic(
  () => import("@/components/Conquest/Conquest"),
  {
    loading: () => <LoadingFallback />,
    ssr: false,
  }
);

const GallerySection = dynamic(() => import("@/components/Gallery/Gallery"), {
  loading: () => <LoadingFallback />,
  ssr: false,
});

const HistorySection = dynamic(
  () => import("@/components/HistorySection/HistorySection"),
  {
    loading: () => <LoadingFallback />,
    ssr: false,
  }
);

const TeamSection = dynamic(
  () => import("@/components/TeamSection/TeamSection"),
  {
    loading: () => <LoadingFallback />,
    ssr: false,
  }
);

const ThankYouSection = dynamic(
  () => import("@/components/ThankYouSection/ThankYouSection"),
  {
    loading: () => <LoadingFallback />,
    ssr: false,
  }
);

const RecruitmentSection = dynamic(
  () => import("@/components/RecruitmentSection/RecruitmentSection"),
  {
    loading: () => <LoadingFallback />,
    ssr: false,
  }
);

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
