import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const steps = [
  {
    number: "01",
    title: "Connect Your Data Sources",
    description: "Plug in your existing databases, queues, or cloud storage folders using our instant secure connector APIs.",
    badge: "Ingestion"
  },
  {
    number: "02",
    title: "Define Logical Branch Flows",
    description: "Map out decision workflows using our intuitive low-code interface or direct model inference steps.",
    badge: "Configuration"
  },
  {
    number: "03",
    title: "Run and Automate at Scale",
    description: "AutoFlow triggers pipelines automatically, scaling CPU/GPU workloads to match your active logical traffic.",
    badge: "Automation"
  }
];

const borderActiveColors = [
  'border-accent-blue/50 dark:border-accent-blue/40 shadow-lg shadow-accent-blue/5 bg-accent-blue/[0.01] dark:bg-accent-blue/[0.01]',
  'border-accent-purple/50 dark:border-accent-purple/40 shadow-lg shadow-accent-purple/5 bg-accent-purple/[0.01] dark:bg-accent-purple/[0.01]',
  'border-accent-emerald/50 dark:border-accent-emerald/40 shadow-lg shadow-accent-emerald/5 bg-accent-emerald/[0.01] dark:bg-accent-emerald/[0.01]'
];

const textActiveColors = [
  'text-accent-blue',
  'text-accent-purple',
  'text-accent-emerald'
];

const badgeActiveColors = [
  'text-accent-blue bg-accent-blue/5 border-accent-blue/20 dark:border-accent-blue/30',
  'text-accent-purple bg-accent-purple/5 border-accent-purple/20 dark:border-accent-purple/30',
  'text-accent-emerald bg-accent-emerald/5 border-accent-emerald/20 dark:border-accent-emerald/30'
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const prevStepRef = useRef(0);

  // Track the previous step to detect loop resets
  useEffect(() => {
    prevStepRef.current = activeStep;
  }, [activeStep]);

  // Cycle through steps automatically every 2 seconds, unless user is hovering
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const isReset = activeStep < prevStepRef.current;

  return (
    <ScrollReveal id="process" aria-label="How it works" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-card/10 border-t border-slate-100 dark:border-white/5 relative overflow-hidden transition-colors duration-300" animation="fade-up">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
            How AutoFlow Works
          </h2>
          <p className="text-lg text-text-secondary dark:text-slate-400">
            Three simple steps to transform your raw datasets into structured, real-time automated workflows.
          </p>
        </div>

        {/* Steps Timeline (Vertical Alternating on Desktop / Left Aligned on Mobile) */}
        <div className="relative pl-12 md:pl-0 max-w-5xl mx-auto mt-16 md:mt-24">
          
          {/* Responsive Vertical Progress Flow Line */}
          <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 top-1/6 bottom-1/6 w-8 z-10 pointer-events-none">
            {/* Static Background Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200/50 dark:bg-white/5 rounded-full"></div>
            
            {/* Active Flowing Line */}
            <div 
              className="absolute inset-0 overflow-hidden rounded-full"
              style={{
                clipPath: `inset(0 0 ${100 - activeStep * 50}% 0)`,
                transition: isReset ? 'none' : 'clip-path 350ms ease-in-out'
              }}
            >
              <svg className="w-full h-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#stepper-gradient-vertical)" strokeWidth="8" className="opacity-40 blur-[4px]" />
                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#stepper-gradient-vertical)" strokeWidth="3.5" strokeDasharray="12 8" className="animate-flow-line" />
                <defs>
                  <linearGradient id="stepper-gradient-vertical" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0066ff" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Step Nodes */}
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isPassed = activeStep >= index;
              
              let nodeColorClass = 'border-slate-200 dark:border-white/10 text-slate-300 dark:text-slate-700 bg-white dark:bg-slate-card hover:border-slate-300 dark:hover:border-white/20';
              if (isActive) {
                if (index === 0) nodeColorClass = 'border-accent-blue text-accent-blue bg-white dark:bg-slate-card shadow-[0_0_15px_rgba(0,102,255,0.45)] scale-110 z-20';
                else if (index === 1) nodeColorClass = 'border-accent-purple text-accent-purple bg-white dark:bg-slate-card shadow-[0_0_15px_rgba(99,102,241,0.45)] scale-110 z-20';
                else nodeColorClass = 'border-accent-emerald text-accent-emerald bg-white dark:bg-slate-card shadow-[0_0_15px_rgba(16,185,129,0.45)] scale-110 z-20';
              } else if (isPassed) {
                if (index === 0) nodeColorClass = 'border-accent-blue/70 text-accent-blue/80 bg-white dark:bg-slate-card shadow-[0_0_8px_rgba(0,102,255,0.2)]';
                else if (index === 1) nodeColorClass = 'border-accent-purple/70 text-accent-purple/80 bg-white dark:bg-slate-card shadow-[0_0_8px_rgba(99,102,241,0.2)]';
                else nodeColorClass = 'border-accent-emerald/70 text-accent-emerald/80 bg-white dark:bg-slate-card shadow-[0_0_8px_rgba(16,185,129,0.2)]';
              }

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setActiveStep(index);
                    setIsHovered(true);
                  }}
                  onMouseEnter={() => {
                    setActiveStep(index);
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border flex items-center justify-center font-display text-xs font-bold transition-all duration-500 pointer-events-auto focus:outline-none cursor-pointer ${nodeColorClass}`}
                  style={{ top: `${index * 50}%` }}
                  title={`Go to Step ${step.number}: ${step.title}`}
                >
                  {isActive && (
                    <span className={`absolute -inset-1 rounded-full animate-ping opacity-20 ${
                      index === 0 ? 'bg-accent-blue' : index === 1 ? 'bg-accent-purple' : 'bg-accent-emerald'
                    }`} />
                  )}
                  {step.number}
                </button>
              );
            })}


          </div>

          {/* Alternating Timeline Rows */}
          <div className="flex flex-col gap-16 md:gap-24 relative">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="flex flex-col md:flex-row items-center justify-between w-full min-h-[160px]">
                  
                  {/* Left Side: Card (Even indices) or Spacer (Odd indices) */}
                  <div className="w-full md:w-[42%] flex justify-end">
                    {isEven ? (
                      <div
                        onMouseEnter={() => {
                          setActiveStep(index);
                          setIsHovered(true);
                        }}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`w-full bg-white dark:bg-slate-card border aurora-card rounded-2xl p-8 flex flex-col justify-between hover:shadow-md hover:-translate-y-1.5 shadow-sm transition-all duration-300 group cursor-pointer ${
                          isActive
                            ? borderActiveColors[index]
                            : 'border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-card/25 hover:border-slate-300 dark:hover:border-white/15'
                        }`}
                      >
                        <div>
                          {/* Step Number & Badge */}
                          <div className={`flex justify-between items-center mb-6 md:flex-row-reverse`}>
                            <span className={`font-display text-4xl font-black transition-all duration-300 inline-block ${
                              isActive ? textActiveColors[index] + ' scale-105' : 'text-slate-300/40 dark:text-slate-700/30'
                            }`}>
                              {step.number}
                            </span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border transition-all duration-300 ${
                              isActive 
                                ? badgeActiveColors[index]
                                : 'text-text-secondary bg-slate-100/50 dark:bg-white/5 border-slate-200/60 dark:border-white/5'
                            }`}>
                              {step.badge}
                            </span>
                          </div>
                          {/* Step Title */}
                          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-3">
                            {step.title}
                          </h3>
                          {/* Step Description */}
                          <p className="text-sm text-text-secondary dark:text-slate-400 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="hidden md:block w-full"></div>
                    )}
                  </div>

                  {/* Middle Gutter (Desktop timeline spacing) */}
                  <div className="hidden md:block w-[16%]"></div>

                  {/* Right Side: Card (Odd indices) or Spacer (Even indices) */}
                  <div className="w-full md:w-[42%] flex justify-start">
                    {!isEven ? (
                      <div
                        onMouseEnter={() => {
                          setActiveStep(index);
                          setIsHovered(true);
                        }}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`w-full bg-white dark:bg-slate-card border aurora-card rounded-2xl p-8 flex flex-col justify-between hover:shadow-md hover:-translate-y-1.5 shadow-sm transition-all duration-300 group cursor-pointer ${
                          isActive
                            ? borderActiveColors[index]
                            : 'border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-card/25 hover:border-slate-300 dark:hover:border-white/15'
                        }`}
                      >
                        <div>
                          {/* Step Number & Badge */}
                          <div className={`flex justify-between items-center mb-6`}>
                            <span className={`font-display text-4xl font-black transition-all duration-300 inline-block ${
                              isActive ? textActiveColors[index] + ' scale-105' : 'text-slate-300/40 dark:text-slate-700/30'
                            }`}>
                              {step.number}
                            </span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border transition-all duration-300 ${
                              isActive 
                                ? badgeActiveColors[index]
                                : 'text-text-secondary bg-slate-100/50 dark:bg-white/5 border-slate-200/60 dark:border-white/5'
                            }`}>
                              {step.badge}
                            </span>
                          </div>
                          {/* Step Title */}
                          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-3">
                            {step.title}
                          </h3>
                          {/* Step Description */}
                          <p className="text-sm text-text-secondary dark:text-slate-400 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="hidden md:block w-full"></div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </ScrollReveal>
  );
}
