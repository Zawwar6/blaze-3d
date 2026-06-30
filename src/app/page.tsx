"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import Navbar from "@/components/sections/navbar";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import PricingSection from "@/components/sections/pricing";
import ContactSection from "@/components/sections/contact";
import AboutSection from "@/components/sections/about";
import HeroSection from "@/components/sections/hero";
import AgeVerification from "@/components/age-verify/AgeVerification";

function MainPage() {
  return (
    <>
    <AgeVerification/>
     <Navbar/>
      
        <main >
          <HeroSection />
          {/* <AboutSection/> */}
          {/* <SkillsSection /> */}
          {/* <ProjectsSection /> */}
          {/* <PricingSection /> */}
          {/* <ContactSection /> */}
        </main>
    
    </>
  );
}

export default MainPage;
