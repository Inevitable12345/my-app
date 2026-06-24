import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../components/SectionLabel';
import ServiceCard from '../components/ServiceCard';
import {
  TrendingUp,
  Flame,
  Search,
  Users,
  Megaphone,
  Funnel,
  BookOpen,
  Heart,
  Rocket,
  BarChart3,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: TrendingUp,
    title: 'Social Media Growth Strategy',
    description: 'Platform-specific strategies that grow your following with the right audience — not just numbers, but engaged communities ready to convert.',
  },
  {
    icon: Flame,
    title: 'Viral Content Systems',
    description: 'Engineered content frameworks designed to trigger sharing, engagement, and organic reach across every social platform.',
  },
  {
    icon: Search,
    title: 'Campaign Research',
    description: 'Deep research into market dynamics, competitor strategies, and audience insights that inform every creative decision.',
  },
  {
    icon: Users,
    title: 'Creator & Influencer Strategy',
    description: 'Identify, vet, and partner with creators who authentically amplify your brand message to their engaged audiences.',
  },
  {
    icon: Megaphone,
    title: 'Paid Social Creative Direction',
    description: 'Data-driven creative strategy for paid social campaigns that maximize ROAS and minimize acquisition costs.',
  },
  {
    icon: Funnel,
    title: 'Conversion Funnels',
    description: 'Design and optimize the complete customer journey from first touch to purchase, with A/B testing at every stage.',
  },
  {
    icon: BookOpen,
    title: 'Brand Storytelling',
    description: 'Craft compelling narratives that differentiate your brand and create emotional connections with your audience.',
  },
  {
    icon: Heart,
    title: 'Community Growth',
    description: 'Build thriving communities around your brand with engagement strategies that foster loyalty and advocacy.',
  },
  {
    icon: Rocket,
    title: 'Launch Campaigns',
    description: 'Full-stack launch strategies for products, features, and brand moments that generate maximum impact.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Performance',
    description: 'Comprehensive measurement frameworks that track what matters and provide actionable optimization insights.',
  },
];

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative py-24 md:py-32 bg-black">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionLabel text="Services" />

        <h2
          className="mt-6 font-display font-bold text-offwhite leading-tight max-w-3xl"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
        >
          Everything you need to <span className="text-green">sway</span> attention into growth
        </h2>

        <p className="mt-4 text-lg text-offwhite/50 max-w-2xl leading-relaxed">
          From strategy to execution, we provide end-to-end growth services powered by research 
          and designed for measurable business outcomes.
        </p>

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {services.map((service, i) => (
            <div key={i} className="service-card-item">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                variant="dark"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-blue/5 rounded-full blur-[80px] pointer-events-none" />
    </section>
  );
}
