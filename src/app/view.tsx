"use client";

import HeroSection from "@/components/core/section/hero-section";
import IconsSection from "@/components/core/section/icon-section";
import SliderSection from "@/components/core/section/slider-section";
import ContentSection from "@/components/core/section/section-content";
import LandingSection from "@/components/core/section/landing-section";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SliderSection />
      <LandingSection />
      <ContentSection />
      <IconsSection />
    </>
  );
};

export default HomePage;
