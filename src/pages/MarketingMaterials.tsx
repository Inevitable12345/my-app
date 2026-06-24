import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../components/SectionLabel';
import {
  Share2,
  Video,
  Layers,
  Presentation,
  Megaphone,
  FileText,
  Calendar,
  BarChart3,
  Globe,
  ShoppingCart,
  Palette,
  Sparkles,
  ArrowRight,
  Zap,
  Target,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const materials = [
  {
    icon: Share2,
    title: 'Social Media Post Templates',
    desc: 'Platform-optimized templates for Instagram, TikTok, Twitter/X, LinkedIn, and Facebook. Bold headlines, data callouts, and conversion-focused layouts.',
    tags: ['Instagram', 'TikTok', 'Twitter/X', 'LinkedIn'],
    color: '#00E676',
  },
  {
    icon: Video,
    title: 'Short-Form Video Frames',
    desc: 'Hook-optimized video frames and storyboards for Reels, Shorts, and TikTok. Designed for 3-second retention and maximum shareability.',
    tags: ['Reels', 'Shorts', 'TikTok', 'Stories'],
    color: '#2962FF',
  },
  {
    icon: Layers,
    title: 'Carousel Designs',
    desc: 'Multi-slide carousel templates that tell stories, share insights, and drive engagement. Built for saves and shares.',
    tags: ['Instagram', 'LinkedIn', 'Twitter/X'],
    color: '#FFD600',
  },
  {
    icon: Presentation,
    title: 'Pitch Decks',
    desc: 'Investor and client pitch decks with bold visual identity, data visualization, and narrative structure that closes deals.',
    tags: ['Keynote', 'PowerPoint', 'PDF'],
    color: '#FF3D00',
  },
  {
    icon: Megaphone,
    title: 'Ad Creatives',
    desc: 'Performance-optimized ad creative sets for Meta, TikTok, Google, and programmatic. A/B test ready with multiple variants.',
    tags: ['Meta Ads', 'TikTok Ads', 'Google Ads'],
    color: '#00E676',
  },
  {
    icon: FileText,
    title: 'Creator Briefs',
    desc: 'Structured briefs that give creators clear direction while preserving their authentic voice. Brand guidelines meets creative freedom.',
    tags: ['Influencer', 'Creator', 'UGC'],
    color: '#2962FF',
  },
  {
    icon: Calendar,
    title: 'Campaign Calendars',
    desc: 'Visual campaign timelines with content scheduling, milestone markers, and team coordination built in. Never miss a moment.',
    tags: ['Timeline', 'Gantt', 'Content Plan'],
    color: '#FFD600',
  },
  {
    icon: BarChart3,
    title: 'Analytics Snapshots',
    desc: 'Beautiful performance dashboards and report templates that turn data into stories stakeholders actually want to read.',
    tags: ['Dashboards', 'Reports', 'KPIs'],
    color: '#FF3D00',
  },
  {
    icon: Globe,
    title: 'Landing Page Modules',
    desc: 'Modular landing page sections — hero, social proof, features, pricing, CTA — designed for conversion and easy assembly.',
    tags: ['Web', 'Mobile', 'Responsive'],
    color: '#00E676',
  },
  {
    icon: ShoppingCart,
    title: 'Match-Day Offer Graphics',
    desc: 'Urgency-driven promotional graphics for flash sales, limited drops, and time-bound offers. Built to drive immediate action.',
    tags: ['E-commerce', 'Retail', 'F&B'],
    color: '#2962FF',
  },
];

const designPrinciples = [
  {
    icon: Palette,
    title: 'Bold Headlines',
    desc: 'Every piece starts with a headline that stops the scroll. Clear, confident, and impossible to ignore.',
  },
  {
    icon: Sparkles,
    title: 'Social Proof Integration',
    desc: 'Testimonials, metrics, and results woven into the design to build trust at every touchpoint.',
  },
  {
    icon: BarChart3,
    title: 'Research Insights',
    desc: 'Data and insights presented as visual stories that demonstrate expertise and authority.',
  },
  {
    icon: Zap,
    title: 'Energy & Motion',
    desc: 'Subtle animations, dynamic layouts, and visual rhythm that create momentum and engagement.',
  },
  {
    icon: Target,
    title: 'Conversion Focus',
    desc: 'Every element serves the goal. Clear CTAs, logical flow, and frictionless paths to action.',
  },
  {
    icon: Layers,
    title: 'Brand Consistency',
    desc: 'Modular systems that scale across every channel while maintaining a cohesive brand identity.',
  },
];

export default function MarketingMaterials() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.mk-hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
      gsap.fromTo('.mk-hero-sub', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.4 });

      gsap.fromTo('.mk-material-card', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: 'power2.out',
        scrollTrigger: { trigger: '.mk-materials-grid', start: 'top 85%', once: true },
      });

      gsap.fromTo('.mk-principle-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.mk-principles-grid', start: 'top 85%', once: true },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-black overflow-hidden pt-20">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <SectionLabel text="Marketing Materials" className="!text-blue !before:bg-blue" />
          <h1
            className="mk-hero-title mt-6 font-display font-bold text-offwhite leading-[0.95]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.02em' }}
          >
            From <span className="text-green">Attention</span> to <span className="text-blue">Action</span>
          </h1>
          <p className="mk-hero-sub mt-6 text-lg md:text-xl text-offwhite/60 max-w-2xl leading-relaxed">
            Every campaign needs powerful creative assets. We design marketing materials 
            that combine bold headlines, social proof, research insights, and conversion-focused 
            design to turn viewers into customers.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="magnetic-btn magnetic-btn-primary">
              Get Custom Materials
            </Link>
            <Link to="/case-studies" className="magnetic-btn magnetic-btn-secondary">
              See Results
            </Link>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionLabel text="What We Create" />
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl text-offwhite">
            10 Types of Marketing Materials
          </h2>
          <p className="mt-4 text-offwhite/50 max-w-xl">
            From social posts to pitch decks, we create every asset your campaign needs 
            to look professional and convert effectively.
          </p>

          <div className="mk-materials-grid grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {materials.map((mat, i) => (
              <div
                key={i}
                className="mk-material-card group p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${mat.color}15` }}
                  >
                    <mat.icon className="w-6 h-6" style={{ color: mat.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-offwhite group-hover:text-green transition-colors duration-300">
                      {mat.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray leading-relaxed">{mat.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {mat.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/5 text-offwhite/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20 md:py-28 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionLabel text="Design Direction" />
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl text-offwhite max-w-2xl">
            What Makes Our Materials Convert
          </h2>
          <div className="mk-principles-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {designPrinciples.map((principle, i) => (
              <div
                key={i}
                className="mk-principle-card p-6 rounded-xl bg-white/5 border border-white/10 hover:border-green/30 hover:bg-green/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <principle.icon className="w-5 h-5 text-green" />
                </div>
                <h3 className="font-display font-bold text-offwhite mb-2">{principle.title}</h3>
                <p className="text-sm text-gray leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-offwhite">
            Ready for <span className="text-green">materials</span> that <span className="text-blue">convert?</span>
          </h2>
          <p className="mt-4 text-lg text-offwhite/50 max-w-xl mx-auto">
            Let's create marketing materials that turn every impression into an opportunity.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="magnetic-btn magnetic-btn-primary px-10 py-4">
              Start Your Project
            </Link>
            <Link to="/world-cup" className="magnetic-btn magnetic-btn-secondary px-10 py-4">
              World Cup Materials
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
