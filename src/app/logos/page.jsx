"use client";
import HeroSection from "../components/logos/HeroSection";
import AwardsSection from "../components/Banners";
import IndustryInsights from "../components/IndustryInsights";
import ContactSection from "../components/ContactSection";
import BuildSection from "../components/logos/BuildSection";
import Apologies from "../components/logos/Apologies";
import PurposeSection from "../components/logos/PurposeSection";
import WorkSection from "../components/logos/Work";
import Holds from "../components/logos/Holds";
import TestimonialSection from "../components/TestimonialSection";
import PricingSection from "../components/logos/Pricing";
import DirectionSection from "../components/logos/Direction";

export default function About() {
  return (
    <>
     <HeroSection />
     <AwardsSection />
     <BuildSection />
     <Apologies />
     <PurposeSection />
     <WorkSection />
     <DirectionSection />
     <Holds />
     <TestimonialSection />
     <PricingSection />
     <IndustryInsights />
     <ContactSection />
    </>
  );
}
