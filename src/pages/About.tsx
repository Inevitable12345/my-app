import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../components/SectionLabel';
import {
  Target,
  Eye,
  Heart,
  Zap,
  Brain,
  TrendingUp,
  Users,
  Award,
  Globe,
  Lightbulb,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Brain,
    title: 'Research First',
    desc: 'Every decision is backed by data. We study before we create, analyze before we execute, and measure everything.',
  },
  {
    icon: Zap,
    title: 'Speed & Agility',
    desc: 'Markets move fast. We move faster. Our processes are designed for rapid iteration and real-time optimization.',
  },
  {
    icon: Target,
    title: 'Results Obsessed',
    desc: 'Vanity metrics don\'t pay bills. We focus on the numbers that matter: revenue, conversions, and business growth.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    desc: 'We don\'t work for clients — we work with them. True collaboration produces the best outcomes.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Courage',
    desc: 'Safe ideas don\'t go viral. We push boundaries, challenge conventions, and create work that stands out.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    desc: 'We never settle. Every campaign teaches us something new that makes the next one even better.',
  },
];

const milestones = [
  { year: '2019', event: 'Sway founded with a research-first philosophy' },
  { year: '2020', event: 'First viral campaign — 10M organic views in 48 hours' },
  { year: '2021', event: 'Expanded to 15-person team, first $1M revenue month' },
  { year: '2022', event: 'Launched proprietary growth analytics platform' },
  { year: '2023', event: '50th client milestone, expanded to 3 countries' },
  { year: '2024', event: 'Named top growth agency by industry publication' },
  { year: '2025', event: '100+ campaigns delivered, $50M+ revenue generated for clients' },
];

const team = [
  { role: 'Founder & CEO', name: 'Leading Growth Strategy', initial: 'S' },
  { role: 'Head of Research', name: 'Data & Insights Lead', initial: 'R' },
  { role: 'Creative Director', name: 'Content & Creative Vision', initial: 'C' },
  { role: 'Head of Paid Media', name: 'Performance Marketing', initial: 'P' },
  { role: 'Head of Creator', name: 'Influencer & Creator Strategy', initial: 'K' },
  { role: 'Head of Analytics', name: 'Measurement & Optimization', initial: 'A' },
];

export default function About() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ab-hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
      gsap.fromTo('.ab-hero-sub', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.4 });

      gsap.fromTo('.ab-value-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.ab-values-grid', start: 'top 85%', once: true },
      });

      gsap.fromTo('.ab-milestone', { opacity: 0, x: -20 }, {
        opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.ab-timeline', start: 'top 85%', once: true },
      });

      gsap.fromTo('.ab-team-card', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.ab-team-grid', start: 'top 85%', once: true },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-black overflow-hidden pt-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <SectionLabel text="About Sway" className="!text-blue !before:bg-blue" />
          <h1
            className="ab-hero-title mt-6 font-display font-bold text-offwhite leading-[0.95]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.02em' }}
          >
            We are a <span className="text-green">research-driven</span> growth agency
          </h1>
          <p className="ab-hero-sub mt-6 text-lg md:text-xl text-offwhite/60 max-w-2xl leading-relaxed">
            Sway was built on a simple belief: growth is not an art, it's a science. 
            We combine deep audience research, creative excellence, and data-driven 
            execution to help brands turn attention into measurable business results.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="magnetic-btn magnetic-btn-primary">
              Work With Us
            </Link>
            <Link to="/case-studies" className="magnetic-btn magnetic-btn-secondary">
              See Our Results
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel text="Our Mission" />
              <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl text-offwhite leading-tight">
                Convert viewers and followers into <span className="text-green">customers</span>
              </h2>
              <p className="mt-6 text-offwhite/60 leading-relaxed">
                In a world where attention is the most valuable currency, most brands struggle 
                to turn views into value. Sway exists to bridge that gap. We don't just grow 
                your following — we engineer the path from first impression to purchase decision.
              </p>
              <p className="mt-4 text-offwhite/60 leading-relaxed">
                Our methodology combines cultural research, behavioral psychology, platform 
                expertise, and creative excellence to create campaigns that don't just get 
                seen — they get results.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <Eye className="w-8 h-8 text-green mx-auto mb-3" />
                  <p className="font-mono text-3xl font-bold text-offwhite">5B+</p>
                  <p className="text-xs text-gray mt-1">Impressions Generated</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <Heart className="w-8 h-8 text-red mx-auto mb-3" />
                  <p className="font-mono text-3xl font-bold text-offwhite">100+</p>
                  <p className="text-xs text-gray mt-1">Brands Grown</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <Award className="w-8 h-8 text-yellow mx-auto mb-3" />
                  <p className="font-mono text-3xl font-bold text-offwhite">50M+</p>
                  <p className="text-xs text-gray mt-1">Revenue Driven</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <Globe className="w-8 h-8 text-blue mx-auto mb-3" />
                  <p className="font-mono text-3xl font-bold text-offwhite">12</p>
                  <p className="text-xs text-gray mt-1">Countries Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionLabel text="Our Values" />
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl text-offwhite">
            What drives everything we do
          </h2>
          <div className="ab-values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {values.map((value, i) => (
              <div
                key={i}
                className="ab-value-card p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green/30 hover:bg-green/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <value.icon className="w-5 h-5 text-green" />
                </div>
                <h3 className="font-display font-bold text-lg text-offwhite mb-2">{value.title}</h3>
                <p className="text-sm text-gray leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionLabel text="Our Journey" />
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl text-offwhite mb-12">
            Milestones that matter
          </h2>
          <div className="ab-timeline relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="ab-milestone flex items-start gap-6 relative">
                  <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full bg-green/20 border-2 border-green flex items-center justify-center z-10">
                    <span className="font-mono text-xs md:text-sm font-bold text-green">{m.year.slice(2)}</span>
                  </div>
                  <div className="pt-1">
                    <span className="font-mono text-xs text-gray">{m.year}</span>
                    <p className="text-offwhite/80 mt-1">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionLabel text="The Team" />
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl text-offwhite">
            Growth experts, <span className="text-green">not generalists</span>
          </h2>
          <p className="mt-4 text-offwhite/50 max-w-xl">
            Every team member is a specialist in their domain. No generalists — 
            just experts who know their craft inside and out.
          </p>
          <div className="ab-team-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {team.map((member, i) => (
              <div
                key={i}
                className="ab-team-card p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-green/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-green/20 to-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="font-display text-2xl font-bold text-green">{member.initial}</span>
                </div>
                <p className="font-mono text-xs text-green uppercase tracking-wider">{member.role}</p>
                <p className="mt-1 text-sm text-offwhite/60">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-offwhite">
            Ready to <span className="text-green">grow</span> with us?
          </h2>
          <p className="mt-4 text-lg text-offwhite/50 max-w-xl mx-auto">
            Join the brands that trust Sway to turn their social presence into a growth engine.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="magnetic-btn magnetic-btn-primary px-10 py-4">
              Start a Conversation
            </Link>
            <Link to="/case-studies" className="magnetic-btn magnetic-btn-secondary px-10 py-4">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
