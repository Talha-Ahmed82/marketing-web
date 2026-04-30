"use client";
import HeroSection from "../components/about/HeroSection";
import AwardsSection from "../components/Banners";
import AboutSection from "../components/AboutSection";
import BuiltSection from "../components/BuiltSection";
import ProcessSection from "../components/ProcessSection";
import IndustryInsights from "../components/IndustryInsights";
import ContactSection from "../components/ContactSection";
import BrandsSection from "../components/about/BrandsSection";
import FAQSection from "../components/about/FAQSection";

export default function About() {
  return (
    <>
     <HeroSection />
     <AwardsSection />
     <AboutSection />
     <BrandsSection />
     <BuiltSection />
     <FAQSection />
     <ProcessSection />
     <IndustryInsights />
     <ContactSection />
    </>
  );
}
