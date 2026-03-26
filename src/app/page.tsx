import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ResumeSection } from "@/components/ResumeSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col items-center overflow-x-hidden pt-12 md:pt-0">
        <HeroSection />
        <ExpertiseSection />
        <PortfolioSection />
        <ResumeSection />
        <footer className="w-full text-center py-12 text-zinc-600 font-medium text-sm border-t border-zinc-800/50 mt-12 bg-zinc-950">
          © {new Date().getFullYear()} Sarah Iniobong Uko. All rights reserved.
        </footer>
      </main>
    </>
  );
}
