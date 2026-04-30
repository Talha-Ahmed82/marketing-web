"use client";
import HeroSection from "../components/logos/HeroSection";
import AwardsSection from "../components/Banners";
import AboutSection from "../components/AboutSection";
import BuiltSection from "../components/BuiltSection";
import ProcessSection from "../components/ProcessSection";
import IndustryInsights from "../components/IndustryInsights";
import ContactSection from "../components/ContactSection";
import BrandsSection from "../components/about/BrandsSection";
import FAQSection from "../components/about/FAQSection";
import BuildSection from "../components/logos/BuildSection";
import Apologies from "../components/logos/Apologies";
import PurposeSection from "../components/logos/PurposeSection";
import WorkSection from "../components/logos/Work";
import DirectionSection from "../components/logos/Direction";
import Holds from "../components/logos/Holds";
import TestimonialSection from "../components/TestimonialSection";
import PricingSection from "../components/logos/Pricing";

export default function About() {
  return (
    <>
     <HeroSection />
     <AwardsSection />
     <BuildSection />
     <Apologies />
     <PurposeSection />
     <WorkSection />
     <Holds />
     <TestimonialSection />
     <PricingSection />
     <IndustryInsights />
     <ContactSection />
    </>
  );
}
