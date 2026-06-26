import React, { useState, useEffect, useRef } from 'react';

const features = [
  {
    title: "Instant Ingestion",
    description: "Connect to databases, message queues, and cloud files with a single click. Extract, parse, and structure your data automatically.",
    icon: (className) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    details: "Supports PostgreSQL, MongoDB, Kafka, AWS S3, and 50+ other integrations. Zero setup time required."
  },
  {
    title: "AI Model Tuning",
    description: "Tune custom small language models on your private data. Maximize performance while maintaining strict data governance.",
    icon: (className) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 21l8.982-1.185a2.693 2.693 0 001.661-1.077L19.75 12.24m-9.937 3.664L19.75 12.24m-9.937 3.664L3 14.25M19.75 12.24l-3.83-3.83M19.75 12.24L21.75 10a2.692 2.692 0 00-3.79-3.79L15.9 8.16m-2.98 2.98L3 14.25" />
      </svg>
    ),
    details: "Deploy secure training containers inside your virtual private cloud. Your training data never leaves your network boundary."
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption for all workloads. SOC 2 Type II compliant with comprehensive audit logging and access controls.",
    icon: (className) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    details: "End-to-end TLS 1.3 encryption, static analysis on active datasets, and role-based directory mapping integrations."
  },
  {
    title: "Predictive Flows",
    description: "Automate complex logical branch tasks. Create workflows that dynamically adjust based on database events.",
    icon: (className) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 6.562M5.618 11.15A11.95 11.95 0 003 12c0 2.21.79 4.23 2.12 5.83M12 8V4l3 3" />
      </svg>
    ),
    details: "Visual low-code designer lets you map dependencies. Webhooks trigger model executions with sub-second latency."
  }
];

export default function Features() {
  const [activeBentoIndex, setActiveBentoIndex] = useState(0);
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);
  const activeBentoIndexRef = useRef(0);

  // ResizeObserver / matchMedia context lock
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    
    const handleBreakpointChange = (e) => {
      if (e.matches) {
        // Sync the index value from the desktop ref over to the mobile state
        setActiveAccordionIndex(activeBentoIndexRef.current);
      }
    };

    // Attach event listener
    mediaQuery.addEventListener('change', handleBreakpointChange);

    // Initial check on load
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

        {/* Desktop Bento Grid (hidden below 768px) */}
        <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Card 1: Ingestion */}
          <div
            onMouseEnter={() => handleBentoHover(0)}
            className={`col-span-2 row-span-1 border aurora-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] group cursor-pointer ${
              activeBentoIndex === 0
                ? 'border-accent-blue/50 dark:border-accent-blue/40 shadow-md shadow-accent-blue/5 bg-accent-blue/[0.02] dark:bg-accent-blue/[0.02]'
                : 'border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-card/25 hover:border-accent-blue/40 dark:hover:border-accent-blue/30 hover:shadow-accent-blue/5'
            }`}
          >
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

          {/* Card 2: Model Tuning */}
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
            <div className="text-xs font-mono text-accent-purple mt-6">{features[1].details}</div>
          </div>

          {/* Card 3: Security */}
          <div
            onMouseEnter={() => handleBentoHover(2)}
            className={`col-span-1 row-span-1 border aurora-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] group cursor-pointer ${
              activeBentoIndex === 2
                ? 'border-accent-emerald/50 dark:border-accent-emerald/40 shadow-md shadow-accent-emerald/5 bg-accent-emerald/[0.02] dark:bg-accent-emerald/[0.02]'
                : 'border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-card/25 hover:border-accent-emerald/40 dark:hover:border-accent-emerald/30 hover:shadow-accent-emerald/5'
            }`}
          >
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-emerald/10 text-accent-emerald group-hover:scale-105 transition-all">
                {features[2].icon("w-6 h-6")}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{features[2].title}</h3>
                <p className="text-sm text-text-secondary dark:text-slate-400 leading-relaxed line-clamp-3">{features[2].description}</p>
              </div>
            </div>
            <div className="text-xs font-mono text-accent-emerald mt-2">{features[2].details}</div>
          </div>

          {/* Card 4: Flows */}
          <div
            onMouseEnter={() => handleBentoHover(3)}
            className={`col-span-1 row-span-1 border aurora-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] group cursor-pointer ${
              activeBentoIndex === 3
                ? 'border-accent-blue/50 dark:border-accent-blue/40 shadow-md shadow-accent-blue/5 bg-accent-blue/[0.02] dark:bg-accent-blue/[0.02]'
                : 'border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-card/25 hover:border-accent-blue/40 dark:hover:border-accent-blue/30 hover:shadow-accent-blue/5'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue group-hover:scale-105 transition-all">
                {features[3].icon("w-6 h-6")}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{features[3].title}</h3>
                <p className="text-sm text-text-secondary dark:text-slate-400 leading-relaxed">{features[3].description}</p>
              </div>
            </div>
            <div className="text-xs font-mono text-accent-blue mt-4">{features[3].details}</div>
          </div>
        </div>

        {/* Mobile Accordion Layout (visible only below 768px) */}
        <div className="md:hidden flex flex-col gap-4">
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
