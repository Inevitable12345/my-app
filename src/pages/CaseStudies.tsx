import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../components/SectionLabel';
import { TrendingUp, ArrowRight, Filter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const categories = ['All', 'E-commerce', 'SaaS', 'Consumer App', 'Fintech', 'Retail', 'Healthcare'];

const allCaseStudies = [
  {
    id: 1,
    category: 'E-commerce',
    title: 'DTC brand achieved 340% ROAS during Q4 product launch',
    metrics: [
      { value: '340%', label: 'ROAS' },
      { value: '2.4M', label: 'Reach' },
      { value: '12x', label: 'Engagement' },
    ],
    color: '#00E676',
    desc: 'A direct-to-consumer lifestyle brand partnered with Sway for their biggest product launch of the year. Through a combination of viral content systems and precision paid social, we delivered their highest-performing campaign ever.',
  },
  {
    id: 2,
    category: 'SaaS',
    title: 'B2B SaaS startup grew organic signups by 800% in 90 days',
    metrics: [
      { value: '800%', label: 'Signup Growth' },
      { value: '45K', label: 'New Users' },
      { value: '3.2x', label: 'Conversion' },
    ],
    color: '#2962FF',
    desc: 'An emerging SaaS platform in the productivity space needed to break through a crowded market. Our research-driven content strategy turned their blog and social channels into signup engines.',
  },
  {
    id: 3,
    category: 'Consumer App',
    title: 'Viral loop strategy drove 1M downloads in 6 weeks',
    metrics: [
      { value: '1M+', label: 'Downloads' },
      { value: '28%', label: 'Retention' },
      { value: '5.1x', label: 'K-Factor' },
    ],
    color: '#FFD600',
    desc: 'A social fitness app needed explosive growth to hit their Series A milestone. We engineered a viral referral loop combined with creator partnerships that turned users into advocates.',
  },
  {
    id: 4,
    category: 'Fintech',
    title: 'Fintech app reduced CAC by 60% with creator-led campaigns',
    metrics: [
      { value: '-60%', label: 'Customer Acquisition Cost' },
      { value: '180K', label: 'New Accounts' },
      { value: '4.5x', label: 'ROAS' },
    ],
    color: '#FF3D00',
    desc: 'A neobank struggling with high acquisition costs turned to Sway for a creator-first strategy. By matching the right financial creators with targeted content, we slashed CAC while growing the user base.',
  },
  {
    id: 5,
    category: 'Retail',
    title: 'Retail chain generated $2.3M in attributed revenue from social',
    metrics: [
      { value: '$2.3M', label: 'Revenue' },
      { value: '890K', label: 'Store Visits' },
      { value: '15x', label: 'ROI' },
    ],
    color: '#00E676',
    desc: 'A national retail brand wanted to connect their social presence to in-store foot traffic. Our location-based content strategy and offer campaigns bridged the digital-physical gap.',
  },
  {
    id: 6,
    category: 'Healthcare',
    title: 'Health brand built a 500K-member community in 4 months',
    metrics: [
      { value: '500K', label: 'Community Members' },
      { value: '42%', label: 'Engagement Rate' },
      { value: '12x', label: 'Organic Reach' },
    ],
    color: '#2962FF',
    desc: 'A wellness startup needed to build trust and community before launching their product. We created a content ecosystem that positioned them as thought leaders and gathered a highly engaged audience.',
  },
  {
    id: 7,
    category: 'E-commerce',
    title: 'Fashion brand sold out $500K inventory in 72 hours via TikTok',
    metrics: [
      { value: '$500K', label: 'Sales' },
      { value: '72hrs', label: 'Sellout Time' },
      { value: '35M', label: 'Views' },
    ],
    color: '#FFD600',
    desc: 'A sustainable fashion brand launched a limited collection exclusively through TikTok. Our creator seeding strategy and FOMO-driven content created a buying frenzy.',
  },
  {
    id: 8,
    category: 'SaaS',
    title: 'AI tool reached 100K waitlist signups with zero ad spend',
    metrics: [
      { value: '100K', label: 'Waitlist' },
      { value: '$0', label: 'Ad Spend' },
      { value: '8.2x', label: 'Viral Coefficient' },
    ],
    color: '#FF3D00',
    desc: 'An AI productivity tool needed pre-launch buzz. We designed a referral program and content strategy so compelling that the waitlist grew entirely through organic sharing.',
  },
  {
    id: 9,
    category: 'Consumer App',
    title: 'Gaming app achieved 4M MAU with region-specific content',
    metrics: [
      { value: '4M', label: 'Monthly Active Users' },
      { value: '65%', label: 'Day-7 Retention' },
      { value: '22x', label: 'Content ROI' },
    ],
    color: '#00E676',
    desc: 'A mobile gaming company launching in 12 markets needed localized content at scale. Our regional creator network and culturally-adapted campaigns drove massive adoption.',
  },
];

export default function CaseStudies() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const indicatorRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const filteredStudies = activeCategory === 'All'
    ? allCaseStudies
    : allCaseStudies.filter((s) => s.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cs-hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });

      gsap.fromTo('.cs-study-card', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.cs-grid', start: 'top 85%', once: true },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  // Animate tab indicator
  useEffect(() => {
    if (!tabsRef.current || !indicatorRef.current) return;
    const activeTab = tabsRef.current.querySelector(`[data-category="${activeCategory}"]`) as HTMLElement;
    if (activeTab) {
      gsap.to(indicatorRef.current, {
        x: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [activeCategory]);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-black overflow-hidden pt-20">
        <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-green/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <SectionLabel text="Case Studies" />
          <h1
            className="cs-hero-title mt-6 font-display font-bold text-offwhite leading-[0.95]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
          >
            Growth stories <span className="text-green">backed by data</span>
          </h1>
          <p className="mt-6 text-lg text-offwhite/60 max-w-2xl leading-relaxed">
            Real results from real campaigns. Every case study shows how Sway's 
            research-driven approach delivers measurable business outcomes across industries.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Filter tabs */}
          <div className="relative flex items-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-2">
            <Filter className="w-4 h-4 text-gray mr-2 flex-shrink-0" />
            <div ref={tabsRef} className="relative flex gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  data-category={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                    activeCategory === cat ? 'text-charcoal' : 'text-offwhite/60 hover:text-offwhite'
                  }`}
                >
                  {cat}
                </button>
              ))}
              {/* Sliding indicator */}
              <div
                ref={indicatorRef}
                className="absolute top-0 left-0 h-full rounded-full bg-green -z-0"
                style={{ transition: 'none' }}
              />
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="cs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="cs-study-card group rounded-2xl overflow-hidden bg-black border border-white/10 hover:border-green/30 transition-all duration-300 hover:shadow-glow-green"
              >
                {/* Color bar */}
                <div className="h-2" style={{ backgroundColor: study.color }} />

                <div className="p-6">
                  {/* Category */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-mono mb-4"
                    style={{ backgroundColor: `${study.color}15`, color: study.color }}
                  >
                    {study.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-offwhite group-hover:text-green transition-colors duration-300 leading-snug">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-gray leading-relaxed line-clamp-3">
                    {study.desc}
                  </p>

                  {/* Metrics */}
                  <div className="mt-6 flex flex-wrap gap-6">
                    {study.metrics.map((metric, j) => (
                      <div key={j}>
                        <p className="font-mono text-xl font-bold" style={{ color: study.color }}>
                          {metric.value}
                        </p>
                        <p className="text-xs text-gray mt-0.5">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-sm text-gray group-hover:text-green transition-colors duration-300 flex items-center gap-1">
                      View Details
                      <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="flex gap-1">
                      {study.metrics.length > 0 && <TrendingUp className="w-4 h-4 text-gray" />}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray text-lg">No case studies in this category yet.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-green hover:text-offwhite transition-colors text-sm"
              >
                View all case studies
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-black border-y border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-mono text-3xl md:text-4xl font-bold text-green">$50M+</p>
              <p className="mt-1 text-sm text-gray">Revenue Generated</p>
            </div>
            <div>
              <p className="font-mono text-3xl md:text-4xl font-bold text-blue">200+</p>
              <p className="mt-1 text-sm text-gray">Campaigns Launched</p>
            </div>
            <div>
              <p className="font-mono text-3xl md:text-4xl font-bold text-yellow">15M+</p>
              <p className="mt-1 text-sm text-gray">Leads Generated</p>
            </div>
            <div>
              <p className="font-mono text-3xl md:text-4xl font-bold text-red">4.8x</p>
              <p className="mt-1 text-sm text-gray">Avg. ROAS</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-offwhite">
            Want to be our <span className="text-green">next success story?</span>
          </h2>
          <p className="mt-4 text-lg text-offwhite/50 max-w-xl mx-auto">
            Every great result starts with a conversation. Let's discuss how Sway can 
            drive measurable growth for your brand.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="magnetic-btn magnetic-btn-primary px-10 py-4">
              Start a Project
            </Link>
            <Link to="/world-cup" className="magnetic-btn magnetic-btn-secondary px-10 py-4">
              World Cup Campaign
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
