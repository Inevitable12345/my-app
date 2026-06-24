import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../components/SectionLabel';

import {
  Calendar,
  MapPin,
  Trophy,
  Users,
  Globe,
  Zap,
  TrendingUp,
  Target,
  Clock,
  Star,
  ChevronRight,
  MessageCircle,
  ShoppingCart,
  Video,
  Share2,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tournamentFacts = [
  { icon: Calendar, label: 'Duration', value: 'June 11 - July 19, 2026', sub: '39 days of global attention' },
  { icon: MapPin, label: 'Hosts', value: 'USA, Canada, Mexico', sub: '3 nations, 16 host cities' },
  { icon: Globe, label: 'Teams', value: '48 nations', sub: 'Expanded format, more stories' },
  { icon: Trophy, label: 'Matches', value: '104 games', sub: 'More content moments than ever' },
  { icon: Users, label: 'Audience', value: '5B+ viewers', sub: 'Global reach across platforms' },
  { icon: Star, label: 'Final', value: 'July 19, 2026', sub: 'MetLife Stadium, New Jersey' },
];

const niches = [
  { icon: ShoppingCart, title: 'E-commerce', desc: 'Match-day flash sales, limited drops, fan merchandise' },
  { icon: Zap, title: 'Food & Beverage', desc: 'Game-day menus, delivery promos, themed products' },
  { icon: Video, title: 'Streaming & Entertainment', desc: 'Watch-party content, live reaction formats' },
  { icon: Target, title: 'Consumer Apps', desc: 'Prediction games, fantasy leagues, social features' },
  { icon: TrendingUp, title: 'Sportswear & Merch', desc: 'Jersey drops, fan collections, limited editions' },
  { icon: MessageCircle, title: 'Creator Communities', desc: 'Fan-led content, reaction channels, meme culture' },
  { icon: Globe, title: 'Travel & Hospitality', desc: 'Fan zone packages, watch-party venues, experiences' },
  { icon: Share2, title: 'Gaming & Fantasy', desc: 'Esports tie-ins, fantasy tournaments, prediction markets' },
  { icon: Clock, title: 'Local Businesses', desc: 'Fan zone activations, match-day specials, community events' },
  { icon: Users, title: 'Watch-Party Venues', desc: 'Bar activations, screen rentals, event programming' },
];

const phases = [
  {
    phase: 'Phase 1',
    title: 'Pre-Match Hype',
    desc: 'Build anticipation with countdown content, prediction posts, team spotlights, and early-bird promotions. Activate fan emotion before the first whistle.',
    tactics: ['Countdown content series', 'Prediction polls & contests', 'Team story features', 'Early-bird offer campaigns'],
    color: '#00E676',
  },
  {
    phase: 'Phase 2',
    title: 'Live-Match Content',
    desc: 'Real-time reactions, meme creation, and engagement hooks during live matches. Be part of the conversation as it happens.',
    tactics: ['Live reaction content', 'Real-time meme creation', 'Social listening & response', 'In-match engagement hooks'],
    color: '#2962FF',
  },
  {
    phase: 'Phase 3',
    title: 'Half-Time Offers',
    desc: 'Flash promotions and limited-time deals during match breaks. Capture attention when fans are most engaged.',
    tactics: ['Flash sales (15-min windows)', 'Half-time discount codes', 'Social-exclusive deals', 'Urgency-driven CTAs'],
    color: '#FFD600',
  },
  {
    phase: 'Phase 4',
    title: 'Post-Match Reactions',
    desc: 'Recap content, highlight storytelling, and emotional engagement while fan emotion peaks after the final whistle.',
    tactics: ['Match recap content', 'Player performance highlights', 'Fan reaction compilations', 'Emotional storytelling posts'],
    color: '#FF3D00',
  },
  {
    phase: 'Phase 5',
    title: 'Knockout Urgency',
    desc: 'Escalate intensity as the tournament progresses. Single-elimination means every match is do-or-die for fans.',
    tactics: ['Elimination drama content', 'Bracket challenge updates', 'Win-or-go-home narratives', 'Increasing offer urgency'],
    color: '#00E676',
  },
  {
    phase: 'Phase 6',
    title: 'Final-Week Push',
    desc: 'Maximum conversion drive during the semi-finals and final. The highest attention moment of the entire tournament.',
    tactics: ['Final-week mega campaigns', 'Championship storytelling', 'Victory/commiseration content', 'Legacy-building narratives'],
    color: '#2962FF',
  },
];

const tactics = [
  { title: 'Fan Emotion Mapping', desc: 'Track emotional highs and lows to time content and offers perfectly.' },
  { title: 'Creator Collaborations', desc: 'Partner with football creators, fan accounts, and cultural voices.' },
  { title: 'Meme & Short-Form Content', desc: 'Viral-ready content formats designed for rapid sharing.' },
  { title: 'Prediction Posts', desc: 'Interactive content that drives engagement through predictions.' },
  { title: 'Limited-Time Offers', desc: 'Time-bound promotions tied to match moments and outcomes.' },
  { title: 'Country Pride Campaigns', desc: 'National team storytelling that taps into patriotic emotion.' },
  { title: 'Match-Day Rituals', desc: 'Content around fan traditions, watch parties, and game-day habits.' },
  { title: 'Post-Match Recaps', desc: 'Quick-turn content that captures the story of each match.' },
];

export default function WorldCupPlaybook() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero heading
      gsap.fromTo(
        '.wc-hero-title span',
        { opacity: 0, y: 60, rotateX: -25 },
        {
          opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.08,
          ease: 'power3.out', delay: 0.2,
        }
      );

      gsap.fromTo('.wc-hero-sub', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.6 });
      gsap.fromTo('.wc-hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.8 });

      // Section reveals
      gsap.fromTo('.wc-fact-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.wc-facts-grid', start: 'top 85%', once: true },
      });

      gsap.fromTo('.wc-niche-card', { opacity: 0, scale: 0.95 }, {
        opacity: 1, scale: 1, duration: 0.4, stagger: 0.06, ease: 'power2.out',
        scrollTrigger: { trigger: '.wc-niches-grid', start: 'top 85%', once: true },
      });

      gsap.fromTo('.wc-phase-card', { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: '.wc-phases-grid', start: 'top 85%', once: true },
      });

      gsap.fromTo('.wc-tactic-card', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: 'power2.out',
        scrollTrigger: { trigger: '.wc-tactics-grid', start: 'top 85%', once: true },
      });

      // Parallax decoration
      gsap.to('.wc-parallax-orb', {
        y: -80,
        scrollTrigger: {
          trigger: pageRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-black overflow-hidden pt-20">
        <div className="wc-parallax-orb absolute top-20 right-10 w-[400px] h-[400px] bg-red/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-green/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <SectionLabel text="Campaign Playbook" className="!text-red !before:bg-red" />
          <h1
            className="wc-hero-title mt-6 font-display font-bold text-offwhite leading-[0.95]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.02em', perspective: '1000px' }}
          >
            <span className="inline-block">Ride</span>{' '}
            <span className="inline-block">the</span>{' '}
            <span className="inline-block text-red">Match-Day</span>{' '}
            <span className="inline-block text-red">Momentum</span>
          </h1>
          <p className="wc-hero-sub mt-6 text-lg md:text-xl text-offwhite/60 max-w-2xl leading-relaxed">
            A complete growth playbook for brands looking to capitalize on the biggest 
            sporting event of 2026 — the FIFA World Cup. Turn 30 days of global fan 
            emotion into leads, sales, and community growth.
          </p>
          <div className="wc-hero-cta mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="magnetic-btn magnetic-btn-primary bg-red hover:bg-red/90 text-white">
              Start Your World Cup Campaign
            </Link>
            <Link to="/marketing" className="magnetic-btn magnetic-btn-secondary">
              See Marketing Materials
            </Link>
          </div>
        </div>
      </section>

      {/* Tournament Facts */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionLabel text="Tournament Overview" />
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl text-offwhite">
            The Numbers Behind the Moment
          </h2>
          <div className="wc-facts-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {tournamentFacts.map((fact, i) => (
              <div key={i} className="wc-fact-card p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red/30 transition-all duration-300">
                <fact.icon className="w-6 h-6 text-red mb-3" />
                <p className="text-xs text-gray uppercase tracking-wider">{fact.label}</p>
                <p className="mt-1 font-display font-bold text-xl text-offwhite">{fact.value}</p>
                <p className="mt-1 text-sm text-offwhite/50">{fact.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Niches */}
      <section className="py-20 md:py-28 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionLabel text="Activation Niches" />
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl text-offwhite max-w-2xl">
            Who Can Activate Around the World Cup?
          </h2>
          <p className="mt-4 text-offwhite/50 max-w-xl">
            You don't need to be an official sponsor. Any brand that serves fans, viewers, 
            or the match-day experience can ride this wave.
          </p>
          <div className="wc-niches-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-10">
            {niches.map((niche, i) => (
              <div
                key={i}
                className="wc-niche-card p-5 rounded-xl bg-white/5 border border-white/10 hover:border-red/30 hover:bg-red/5 transition-all duration-300 group"
              >
                <niche.icon className="w-6 h-6 text-red mb-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-display font-bold text-offwhite text-sm">{niche.title}</h3>
                <p className="mt-1 text-xs text-gray leading-relaxed">{niche.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Phases */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionLabel text="Campaign Timeline" />
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl text-offwhite">
            Six Phases of Match-Day Momentum
          </h2>
          <div className="wc-phases-grid mt-10 space-y-6">
            {phases.map((phase, i) => (
              <div
                key={i}
                className="wc-phase-card relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Phase indicator */}
                  <div
                    className="lg:w-48 p-6 flex flex-col justify-center items-start lg:items-center border-b lg:border-b-0 lg:border-r border-white/10"
                    style={{ backgroundColor: `${phase.color}08` }}
                  >
                    <span className="font-mono text-xs uppercase tracking-wider" style={{ color: phase.color }}>
                      {phase.phase}
                    </span>
                    <h3 className="mt-2 font-display font-bold text-lg text-offwhite lg:text-center">
                      {phase.title}
                    </h3>
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-6">
                    <p className="text-offwhite/60 text-sm leading-relaxed">{phase.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {phase.tactics.map((tactic, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 rounded-full text-xs font-mono"
                          style={{ backgroundColor: `${phase.color}15`, color: phase.color }}
                        >
                          {tactic}
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

      {/* Tactics Grid */}
      <section className="py-20 md:py-28 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionLabel text="Growth Tactics" />
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl text-offwhite max-w-2xl">
            How We Turn Fan Attention Into Business Growth
          </h2>
          <div className="wc-tactics-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {tactics.map((tactic, i) => (
              <div
                key={i}
                className="wc-tactic-card p-6 rounded-xl bg-white/5 border border-white/10 hover:border-green/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center mb-4">
                  <ChevronRight className="w-5 h-5 text-green" />
                </div>
                <h3 className="font-display font-bold text-offwhite mb-2">{tactic.title}</h3>
                <p className="text-sm text-gray leading-relaxed">{tactic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-charcoal flex items-center justify-center">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-offwhite">
            Your World Cup <span className="text-red">growth campaign</span> starts now
          </h2>
          <p className="mt-4 text-lg text-offwhite/50 max-w-xl mx-auto">
            The brands that win during the World Cup start planning months in advance. 
            Let's build your playbook today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="magnetic-btn magnetic-btn-primary bg-red hover:bg-red/90 text-white px-10 py-4">
              Book Your Strategy Session
            </Link>
            <Link to="/marketing" className="magnetic-btn magnetic-btn-secondary px-10 py-4">
              Explore Marketing Materials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
