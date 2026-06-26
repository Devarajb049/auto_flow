import React from 'react';

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

export default function HowItWorks() {
  return (
    <section id="process" aria-label="How it works" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-card/10 border-t border-slate-100 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
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

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-slate-200 dark:bg-white/5 -z-10"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-card border border-slate-200/60 dark:border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/10 shadow-sm transition-all duration-300 group"
            >
              <div>
                {/* Step Number */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-display text-4xl font-black text-accent-blue/20 dark:text-accent-blue/10 group-hover:text-accent-blue/30 transition-colors">
                    {step.number}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold text-accent-blue bg-accent-blue/5 border border-accent-blue/10">
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
          ))}
        </div>
      </div>
    </section>
  );
}
