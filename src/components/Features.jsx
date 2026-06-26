import React, { useState, useEffect, useRef } from 'react';

const features = [
  {
    title: "Instant Ingestion",
    description: "Connect to databases, message queues, and cloud files with a single click. Extract, parse, and structure your data automatically.",
    icon: (className) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        {/* Triple Database Cylinders with connection lines */}
        <path d="M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 6v4c0 1.66 3.58 3 8 3s8-1.34 8-3V6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 10v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 14v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" strokeLinecap="round" strokeLinejoin="round" />
        {/* Ingest Arrow */}
        <path d="M12 2v6m0 0l-2.5-2.5M12 8l2.5-2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue" strokeWidth={2} />
      </svg>
    ),
    details: "Supports PostgreSQL, MongoDB, Kafka, AWS S3, and 50+ other integrations. Zero setup time."
  },
  {
    title: "AI Model Tuning",
    description: "Tune custom small language models on your private data. Maximize performance while maintaining strict data governance.",
    icon: (className) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        {/* Brain network graph */}
        <circle cx="12" cy="5" r="2" fill="currentColor" />
        <circle cx="5" cy="12" r="2" fill="currentColor" />
        <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity={0.3} />
        <circle cx="19" cy="12" r="2" fill="currentColor" />
        <circle cx="12" cy="19" r="2" fill="currentColor" />
        <line x1="12" y1="7" x2="12" y2="9" />
        <line x1="12" y1="15" x2="12" y2="17" />
        <line x1="7" y1="12" x2="9" y2="12" />
        <line x1="15" y1="12" x2="17" y2="12" />
        <line x1="7.05" y1="7.05" x2="9.9" y2="9.9" strokeDasharray="1 1" />
        <line x1="16.95" y1="16.95" x2="14.1" y2="14.1" strokeDasharray="1 1" />
        <line x1="16.95" y1="7.05" x2="14.1" y2="9.9" strokeDasharray="1 1" />
        <line x1="7.05" y1="16.95" x2="9.9" y2="14.1" strokeDasharray="1 1" />
      </svg>
    ),
    details: "Deploy secure training containers inside your VPC. Your training data never leaves your network."
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption for all workloads. SOC 2 Type II compliant with comprehensive audit logging and access controls.",
    icon: (className) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        {/* Shield with locking core */}
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="11" width="6" height="5" rx="1" fill="currentColor" fillOpacity={0.25} />
        <path d="M10.5 11V9.5a1.5 1.5 0 113 0v1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    details: "End-to-end TLS 1.3 encryption, static analysis, and role-based directory mapping."
  },
  {
    title: "Predictive Flows",
    description: "Automate complex logical branch tasks. Create workflows that dynamically adjust based on database events.",
    icon: (className) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        {/* Decision nodes and branching flow lines */}
        <circle cx="5" cy="12" r="2.5" fill="currentColor" />
        <path d="M7.5 12h3.5c1 0 2-1 2-2V6.5c0-1 1-1.5 2-1.5h4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 12h3.5c1 0 2 1 2 2v3.5c0 1 1 1.5 2 1.5h4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 12h11.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
        <circle cx="20" cy="5" r="2" fill="currentColor" />
        <circle cx="20" cy="12" r="1.5" />
        <circle cx="20" cy="19" r="2" fill="currentColor" />
      </svg>
    ),
    details: "Visual low-code designer lets you map dependencies. Webhooks trigger model executions with sub-second latency."
  }
];

export default function Features() {
  const [activeBentoIndex, setActiveBentoIndex] = useState(0);
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);
  const activeBentoIndexRef = useRef(0);

  // Sync index from desktop to mobile on breakpoint crossover
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');
    
    const handleBreakpointChange = (e) => {
      if (e.matches) {
        setActiveAccordionIndex(activeBentoIndexRef.current);
      }
    };

    mediaQuery.addEventListener('change', handleBreakpointChange);

    if (mediaQuery.matches) {
      setActiveAccordionIndex(activeBentoIndexRef.current);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleBreakpointChange);
    };
  }, []);

  const handleBentoHover = (index) => {
    activeBentoIndexRef.current = index;
    setActiveBentoIndex(index);
  };

  return (
    <section id="features" aria-label="Platform Features" className="py-20 md:py-28 bg-white dark:bg-slate-dark text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24 text-center md:text-left md:mx-0 mx-auto">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
            Built for Extreme Engineering Velocities
          </h2>
          <p className="text-lg text-text-secondary dark:text-slate-400">
            Everything you need to connect your datasets, train secure models, and build robust workflows in minutes.
          </p>
        </div>

        {/* Desktop Bento Grid (hidden below 1024px) */}
        {/* Changed auto-rows from 250px to 280px to provide a spacious layout and prevent text clipping */}
        <div className="hidden lg:grid grid-cols-3 gap-6 auto-rows-[280px]">
          
          {/* Card 1: Instant Ingestion (col-span-2) */}
          <div
            onMouseEnter={() => handleBentoHover(0)}
            className={`col-span-2 row-span-1 border aurora-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] group cursor-pointer ${
              activeBentoIndex === 0
                ? 'border-accent-blue/50 dark:border-accent-blue/40 shadow-md shadow-accent-blue/5 bg-accent-blue/[0.02] dark:bg-accent-blue/[0.02]'
                : 'border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-card/25 hover:border-accent-blue/40 dark:hover:border-accent-blue/30 hover:shadow-accent-blue/5'
            }`}
          >
            <div className="grid grid-cols-5 gap-8 h-full items-center">
              {/* Text Content */}
              <div className="col-span-3 flex flex-col justify-between h-full">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue group-hover:scale-105 transition-all">
                    {features[0].icon("w-6 h-6")}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{features[0].title}</h3>
                    <p className="text-sm text-text-secondary dark:text-slate-400 leading-relaxed">{features[0].description}</p>
                  </div>
                </div>
                <div className="text-xs font-mono text-accent-blue mt-4">{features[0].details}</div>
              </div>

              {/* Animated Ingestion Pipeline Mockup */}
              <div className="col-span-2 relative hidden md:flex items-center justify-center border border-slate-200/40 dark:border-white/5 rounded-xl bg-slate-50/50 dark:bg-slate-dark/30 overflow-hidden p-3 h-full">
                <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
                  {/* Sources */}
                  <g transform="translate(10, 15)">
                    <rect width="50" height="20" rx="4" className="fill-white dark:fill-slate-card stroke-slate-200 dark:stroke-white/10" strokeWidth="1" />
                    <circle cx="8" cy="10" r="3" className="fill-accent-blue" />
                    <text x="16" y="13" className="font-sans text-[8px] font-semibold fill-slate-700 dark:fill-slate-300">Postgres</text>
                  </g>
                  <g transform="translate(10, 50)">
                    <rect width="50" height="20" rx="4" className="fill-white dark:fill-slate-card stroke-slate-200 dark:stroke-white/10" strokeWidth="1" />
                    <circle cx="8" cy="10" r="3" className="fill-accent-emerald" />
                    <text x="16" y="13" className="font-sans text-[8px] font-semibold fill-slate-700 dark:fill-slate-300">AWS S3</text>
                  </g>
                  <g transform="translate(10, 85)">
                    <rect width="50" height="20" rx="4" className="fill-white dark:fill-slate-card stroke-slate-200 dark:stroke-white/10" strokeWidth="1" />
                    <circle cx="8" cy="10" r="3" className="fill-accent-purple" />
                    <text x="16" y="13" className="font-sans text-[8px] font-semibold fill-slate-700 dark:fill-slate-300">Kafka</text>
                  </g>

                  {/* Destination */}
                  <g transform="translate(140, 45)">
                    <rect width="50" height="30" rx="6" className="fill-accent-blue/10 stroke-accent-blue/30" strokeWidth="1.5" />
                    <text x="8" y="18" className="font-display text-[9px] font-bold fill-accent-blue">AutoFlow</text>
                  </g>

                  {/* Connection Lines */}
                  <path d="M60 25 C100 25, 100 58, 140 58" className="stroke-slate-200 dark:stroke-white/5" strokeWidth="1" fill="none" />
                  <path d="M60 60 L140 60" className="stroke-slate-200 dark:stroke-white/5" strokeWidth="1" fill="none" />
                  <path d="M60 95 C100 95, 100 62, 140 62" className="stroke-slate-200 dark:stroke-white/5" strokeWidth="1" fill="none" />

                  {/* Animated Flowing Dots */}
                  <path d="M60 25 C100 25, 100 58, 140 58" className="stroke-accent-blue animate-flow-line" strokeWidth="1.5" fill="none" strokeDasharray="5 15" />
                  <path d="M60 60 L140 60" className="stroke-accent-emerald animate-flow-line" strokeWidth="1.5" fill="none" strokeDasharray="5 15" style={{ animationDelay: '300ms' }} />
                  <path d="M60 95 C100 95, 100 62, 140 62" className="stroke-accent-purple animate-flow-line" strokeWidth="1.5" fill="none" strokeDasharray="5 15" style={{ animationDelay: '600ms' }} />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2: AI Model Tuning (col-span-1, row-span-2 - Tall Card) */}
          <div
            onMouseEnter={() => handleBentoHover(1)}
            className={`col-span-1 row-span-2 border aurora-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] group cursor-pointer ${
              activeBentoIndex === 1
                ? 'border-accent-purple/50 dark:border-accent-purple/40 shadow-md shadow-accent-purple/5 bg-accent-purple/[0.02] dark:bg-accent-purple/[0.02]'
                : 'border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-card/25 hover:border-accent-purple/40 dark:hover:border-accent-purple/30 hover:shadow-accent-purple/5'
            }`}
          >
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-purple/10 text-accent-purple group-hover:scale-105 transition-all">
                {features[1].icon("w-6 h-6")}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{features[1].title}</h3>
                <p className="text-sm text-text-secondary dark:text-slate-400 leading-relaxed">{features[1].description}</p>
              </div>
            </div>

            {/* Parameter Tuning Panel Widget (Fills middle gap elegantly) */}
            <div className="my-6 border border-slate-200/40 dark:border-white/5 rounded-xl bg-slate-50/60 dark:bg-slate-dark/40 p-4 flex flex-col gap-3.5 shadow-inner">
              <div className="text-[10px] font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                Hyperparameters
              </div>
              
              {/* Slider 1 */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-600 dark:text-slate-400">Temperature</span>
                  <span className="text-accent-purple font-semibold">0.72</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-purple rounded-full" style={{ width: '72%' }} />
                </div>
              </div>

              {/* Slider 2 */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-600 dark:text-slate-400">Top P</span>
                  <span className="text-accent-purple font-semibold">0.90</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-purple rounded-full" style={{ width: '90%' }} />
                </div>
              </div>

              {/* Mock system prompt terminal line */}
              <div className="mt-1.5 rounded bg-slate-100 dark:bg-slate-card/60 p-2 font-mono text-[9px] text-slate-600 dark:text-slate-400 border border-slate-200/40 dark:border-white/5">
                <span className="text-accent-blue">&gt;</span> optimize_branches: <span className="text-accent-emerald">true</span>
              </div>
            </div>

            <div className="text-xs font-mono text-accent-purple">{features[1].details}</div>
          </div>

          {/* Card 3: Enterprise Security (col-span-1, row-span-1) */}
          <div
            onMouseEnter={() => handleBentoHover(2)}
            className={`col-span-1 row-span-1 border aurora-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] group cursor-pointer relative overflow-hidden ${
              activeBentoIndex === 2
                ? 'border-accent-emerald/50 dark:border-accent-emerald/40 shadow-md shadow-accent-emerald/5 bg-accent-emerald/[0.02] dark:bg-accent-emerald/[0.02]'
                : 'border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-card/25 hover:border-accent-emerald/40 dark:hover:border-accent-emerald/30 hover:shadow-accent-emerald/5'
            }`}
          >
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-emerald/10 text-accent-emerald group-hover:scale-105 transition-all">
                {features[2].icon("w-6 h-6")}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{features[2].title}</h3>
                <p className="text-sm text-text-secondary dark:text-slate-400 leading-relaxed pr-8">{features[2].description}</p>
              </div>
            </div>
            <div className="text-xs font-mono text-accent-emerald relative z-10 mt-2">{features[2].details}</div>

            {/* Glowing Security Shield Radar Background Decor */}
            <div className="absolute bottom-2 right-2 opacity-5 dark:opacity-[0.08] pointer-events-none group-hover:scale-105 transition-transform duration-300">
              <svg width="90" height="90" viewBox="0 0 100 100" fill="none" className="text-accent-emerald">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" />
                <path d="M50 38 L60 48 L50 58 L40 48 Z" fill="currentColor" fillOpacity="0.2" />
              </svg>
            </div>
          </div>

          {/* Card 4: Predictive Flows (col-span-1, row-span-1) */}
          <div
            onMouseEnter={() => handleBentoHover(3)}
            className={`col-span-1 row-span-1 border aurora-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] group cursor-pointer relative overflow-hidden ${
              activeBentoIndex === 3
                ? 'border-accent-blue/50 dark:border-accent-blue/40 shadow-md shadow-accent-blue/5 bg-accent-blue/[0.02] dark:bg-accent-blue/[0.02]'
                : 'border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-card/25 hover:border-accent-blue/40 dark:hover:border-accent-blue/30 hover:shadow-accent-blue/5'
            }`}
          >
            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue group-hover:scale-105 transition-all">
                {features[3].icon("w-6 h-6")}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{features[3].title}</h3>
                <p className="text-sm text-text-secondary dark:text-slate-400 leading-relaxed pr-8">{features[3].description}</p>
              </div>
            </div>
            <div className="text-xs font-mono text-accent-blue relative z-10 mt-2">{features[3].details}</div>

            {/* Glowing Branching Flowchart Background Decor */}
            <div className="absolute bottom-4 right-4 opacity-5 dark:opacity-[0.08] pointer-events-none group-hover:scale-105 transition-transform duration-300">
              <svg width="85" height="85" viewBox="0 0 100 100" fill="none" className="text-accent-blue">
                <path d="M15 50 H40 C45 50, 48 35, 55 35 H80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M15 50 H40 C45 50, 48 65, 55 65 H80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M15 50 H80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="15" cy="50" r="5" fill="currentColor" />
                <circle cx="80" cy="35" r="5" fill="currentColor" />
                <circle cx="80" cy="50" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="80" cy="65" r="5" fill="currentColor" />
              </svg>
            </div>
          </div>

        </div>

        {/* Mobile Accordion Layout (visible only below 1024px) */}
        <div className="lg:hidden flex flex-col gap-4">
          {features.map((feature, index) => {
            const isActive = activeAccordionIndex === index;
            return (
              <div
                key={index}
                className={`accordion-item rounded-xl glass-panel transition-all duration-300 ${isActive ? 'active border-accent-blue/30 dark:border-accent-blue/20 bg-slate-100/50 dark:bg-slate-card/60' : ''}`}
              >
                {/* Header */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveAccordionIndex(index);
                    activeBentoIndexRef.current = index;
                  }}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200/50 dark:bg-white/5 text-slate-900 dark:text-white ${isActive ? 'text-accent-blue bg-accent-blue/10' : ''}`}>
                      {feature.icon("w-5 h-5")}
                    </div>
                    <span className="font-display font-semibold text-slate-900 dark:text-white">{feature.title}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 text-text-secondary transition-transform duration-300 ${isActive ? 'rotate-180 text-slate-900 dark:text-white' : ''}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Content */}
                <div
                  className="accordion-content transition-all duration-300"
                  style={{
                    maxHeight: isActive ? '300px' : '0px',
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <div className="px-5 pb-5 pt-1 text-sm text-text-secondary dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-white/5 mt-1">
                    <p className="mb-3">{feature.description}</p>
                    <p className="text-xs font-mono text-accent-blue">{feature.details}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

