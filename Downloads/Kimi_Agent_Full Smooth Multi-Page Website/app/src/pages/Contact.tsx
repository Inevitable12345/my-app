import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../components/MagneticButton';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Instagram,
  Twitter,
  Linkedin,
  CheckCircle,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const budgetRanges = [
  'Under $10K',
  '$10K - $25K',
  '$25K - $50K',
  '$50K - $100K',
  '$100K+',
  'Not sure yet',
];

export default function Contact() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ct-hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
      gsap.fromTo('.ct-hero-sub', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.4 });

      gsap.fromTo('.ct-form-container', { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.ct-form-container', start: 'top 85%', once: true },
      });

      gsap.fromTo('.ct-info-card', { opacity: 0, x: 30 }, {
        opacity: 1, x: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.ct-info-cards', start: 'top 85%', once: true },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-black overflow-hidden pt-20">
        <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-green/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <span className="section-label !text-green !before:bg-green">Contact</span>
          <h1
            className="ct-hero-title mt-6 font-display font-bold text-offwhite leading-[0.95]"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
          >
            Let's start <span className="text-green">something</span>
          </h1>
          <p className="ct-hero-sub mt-6 text-lg text-offwhite/60 max-w-xl leading-relaxed">
            Tell us about your goals. We'll tell you how we can help. 
            No pressure, no pitch — just a real conversation about growth.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3 ct-form-container">
              {submitted ? (
                <div className="p-12 rounded-2xl bg-white/5 border border-green/30 text-center">
                  <CheckCircle className="w-16 h-16 text-green mx-auto mb-6" />
                  <h3 className="font-display font-bold text-2xl text-offwhite mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-offwhite/60">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-offwhite placeholder:text-offwhite/30 focus:border-green focus:ring-1 focus:ring-green/50 focus:outline-none transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-offwhite placeholder:text-offwhite/30 focus:border-green focus:ring-1 focus:ring-green/50 focus:outline-none transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-offwhite placeholder:text-offwhite/30 focus:border-green focus:ring-1 focus:ring-green/50 focus:outline-none transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-offwhite focus:border-green focus:ring-1 focus:ring-green/50 focus:outline-none transition-all duration-300 appearance-none"
                      >
                        <option value="" className="bg-charcoal">Select a range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-charcoal">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-offwhite placeholder:text-offwhite/30 focus:border-green focus:ring-1 focus:ring-green/50 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="What are your growth goals? What challenges are you facing?"
                    />
                  </div>

                  <MagneticButton type="submit" variant="primary" className="w-full sm:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </MagneticButton>
                </form>
              )}
            </div>

            {/* Info Cards */}
            <div className="lg:col-span-2 ct-info-cards space-y-4">
              <div className="ct-info-card p-6 rounded-2xl bg-white/5 border border-white/10">
                <Mail className="w-6 h-6 text-green mb-3" />
                <h4 className="font-display font-bold text-offwhite mb-1">Email Us</h4>
                <p className="text-sm text-gray">hello@swayagency.com</p>
              </div>

              <div className="ct-info-card p-6 rounded-2xl bg-white/5 border border-white/10">
                <Clock className="w-6 h-6 text-blue mb-3" />
                <h4 className="font-display font-bold text-offwhite mb-1">Response Time</h4>
                <p className="text-sm text-gray">Within 24 hours</p>
              </div>

              <div className="ct-info-card p-6 rounded-2xl bg-white/5 border border-white/10">
                <MapPin className="w-6 h-6 text-red mb-3" />
                <h4 className="font-display font-bold text-offwhite mb-1">Offices</h4>
                <p className="text-sm text-gray">New York, London, Dubai</p>
              </div>

              <div className="ct-info-card p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-display font-bold text-offwhite mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green/20 transition-colors duration-300">
                    <Instagram className="w-4 h-4 text-offwhite" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green/20 transition-colors duration-300">
                    <Twitter className="w-4 h-4 text-offwhite" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green/20 transition-colors duration-300">
                    <Linkedin className="w-4 h-4 text-offwhite" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Banner */}
      <section className="py-20 md:py-24 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-offwhite">
            Prefer to <span className="text-green">schedule</span> a call?
          </h2>
          <p className="mt-4 text-offwhite/50 max-w-lg mx-auto">
            Book a 30-minute discovery call with our growth team. We'll audit your 
            current strategy and share actionable insights — no commitment required.
          </p>
          <div className="mt-8">
            <button className="magnetic-btn magnetic-btn-primary px-10 py-4">
              Book a Free Strategy Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
