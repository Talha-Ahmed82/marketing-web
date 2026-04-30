"use client";
import HeroSection from "./components/HeroSection";
import AwardsSection from "./components/Banners";
import AboutSection from "./components/AboutSection";
import ProofSection from "./components/ProofSection";
import AttentionSection from "./components/AttentionSection";
import LogoDesignSection from "./components/LogoDesignSection";
import BuiltSection from "./components/BuiltSection";
import WorkSection from "./components/SlidesSection";
import ProcessSection from "./components/ProcessSection";
import TestimonialSection from "./components/TestimonialSection";
import QuestionsSection from "./components/QuestionsSection";
import IndustryInsights from "./components/IndustryInsights";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      {/* <TopBar /> */}
      <HeroSection />
      <AwardsSection />
      <AboutSection />
      <ProofSection />
      <AttentionSection />
      <LogoDesignSection />
      <BuiltSection />
      <WorkSection />
      <ProcessSection />
      <TestimonialSection />
      <QuestionsSection />
     <IndustryInsights />
     <ContactSection />
     {/* <Footer /> */}
    </>
  );
}
