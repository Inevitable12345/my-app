import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../components/SectionLabel';
import StatCounter from '../components/StatCounter';
import { Calendar, MapPin, Trophy, Users, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const niches = [
  'Food & Beverage',
  'Sportswear & Merch',
  'Travel & Hospitality',
  'Watch-Party Venues',
  'Consumer Apps',
  'Streaming Platforms',
  'Creator Communities',
  'E-commerce Brands',
  'Local Businesses',
  'Gaming & Fantasy',
];

const phases = [
  { title: 'Pre-Match Hype', desc: 'Build anticipation with countdown content, predictions, and early-bird offers.' },
  { title: 'Live-Match Content', desc: 'Real-time reactions, memes, and engagement hooks during the action.' },
  { title: 'Half-Time Offers', desc: 'Flash promotions and limited-time deals during match breaks.' },
  { title: 'Post-Match Reactions', desc: 'Recap content, highlight reels, and emotional storytelling.' },
  { title: 'Knockout Urgency', desc: 'Escalating intensity as tournament progresses to elimination rounds.' },
  { title: 'Final-Week Push', desc: 'Maximum conversion drive during the tournament climax.' },
];

export default function FIFAWorldCup() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.fifa-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.fifa-stats', start: 'top 85%', once: true },
        }
      );

      gsap.fromTo(
        '.fifa-niche',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.fifa-niches', start: 'top 85%', once: true },
        }
      );

      gsap.fromTo(
        '.fifa-phase',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.fifa-phases', start: 'top 85%', once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      {/* Alert red accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionLabel text="FIFA World Cup 2026" className="!text-red !before:bg-red" />

        <h2
          className="mt-6 font-display font-bold text-offwhite leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
        >
          Ride the <span className="text-red">Match-Day Momentum</span>
        </h2>

        <p className="mt-4 text-lg text-offwhite/60 max-w-2xl leading-relaxed">
          The 2026 FIFA World Cup is the biggest marketing moment of the decade. 
          We help brands turn 30 days of global fan emotion into measurable growth 
          — without needing an official FIFA partnership.
        </p>

        {/* Tournament Facts */}
        <div className="fifa-stats grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="fifa-card bg-white/5 rounded-2xl p-6 border border-white/10">
            <Calendar className="w-6 h-6 text-red mb-3" />
            <StatCounter target={30} suffix=" days" label="June 11 - July 19" variant="green" />
          </div>
          <div className="fifa-card bg-white/5 rounded-2xl p-6 border border-white/10">
            <MapPin className="w-6 h-6 text-red mb-3" />
            <StatCounter target={16} label="Host Cities" variant="green" />
          </div>
          <div className="fifa-card bg-white/5 rounded-2xl p-6 border border-white/10">
            <Users className="w-6 h-6 text-red mb-3" />
            <StatCounter target={48} label="Teams Competing" variant="green" />
          </div>
          <div className="fifa-card bg-white/5 rounded-2xl p-6 border border-white/10">
            <Trophy className="w-6 h-6 text-red mb-3" />
            <StatCounter target={104} label="Total Matches" variant="green" />
          </div>
        </div>

        {/* Campaign Niches */}
        <div className="mt-16">
          <h3 className="font-display font-bold text-2xl text-offwhite mb-6">
            Who This Campaign Is For
          </h3>
          <div className="fifa-niches flex flex-wrap gap-3">
            {niches.map((niche, i) => (
              <span
                key={i}
                className="fifa-niche px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-offwhite/80 hover:bg-red/10 hover:border-red/30 hover:text-red transition-all duration-300"
              >
                {niche}
              </span>
            ))}
          </div>
        </div>

        {/* Campaign Phases */}
        <div className="mt-16">
          <h3 className="font-display font-bold text-2xl text-offwhite mb-8">
            Campaign Phases
          </h3>
          <div className="fifa-phases grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phases.map((phase, i) => (
              <div
                key={i}
                className="fifa-phase group flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-red/30 hover:bg-red/5"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red/20 flex items-center justify-center font-mono text-xs text-red font-bold">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-display font-bold text-offwhite group-hover:text-red transition-colors">
                    {phase.title}
                  </h4>
                  <p className="mt-1 text-sm text-gray leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/world-cup"
            className="magnetic-btn magnetic-btn-primary bg-red hover:bg-red/90 text-white"
          >
            Explore Full Playbook
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link to="/contact" className="magnetic-btn magnetic-btn-secondary">
            Start Your Campaign
          </Link>
        </div>
      </div>
    </section>
  );
}
