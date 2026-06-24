import HeroSection from '../sections/HeroSection';
import WhatSwayDoes from '../sections/WhatSwayDoes';
import GrowthSystem from '../sections/GrowthSystem';
import ServicesGrid from '../sections/ServicesGrid';
import FIFAWorldCup from '../sections/FIFAWorldCup';
import CaseStudiesPreview from '../sections/CaseStudiesPreview';
import WhyResearchWins from '../sections/WhyResearchWins';
import FinalCTA from '../sections/FinalCTA';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhatSwayDoes />
      <GrowthSystem />
      <ServicesGrid />
      <FIFAWorldCup />
      <CaseStudiesPreview />
      <WhyResearchWins />
      <FinalCTA />
    </main>
  );
}
