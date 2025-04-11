
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SovereigntySection from "@/components/SovereigntySection";
import SubmissionForm from "@/components/SubmissionForm";
import TeamSection from "@/components/TeamSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <ProjectsSection />
        <SovereigntySection />
        <SubmissionForm />
        <TeamSection />
        <FaqSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
