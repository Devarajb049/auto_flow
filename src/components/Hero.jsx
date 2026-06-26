import React from 'react';

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:py-32 flex flex-col items-center justify-center min-h-[90vh] transition-colors duration-300">
      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 dark:bg-accent-blue/15 border border-accent-blue/20 dark:border-accent-blue/30 mb-6 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-wider uppercase text-accent-blue">Introducing AutoFlow 2.0</span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl leading-[1.1] mb-6 animate-fade-in animation-delay-100">
              Accelerate Your
              <br />
              <span className="bg-gradient-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">
                Business Growth
              </span>
              <br />
              with <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">AutoFlow Platform</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-text-secondary dark:text-slate-300 max-w-lg leading-relaxed mb-10 animate-fade-in animation-delay-200">
              AutoFlow automates your logical branch tasks, model tuning, and data ingestion processes with bank-grade encryption and isolated VPC boundaries.
            </p>

            {/* Buttons Panel */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10 animate-fade-in animation-delay-300">
              {/* Blue Primary Button with Chevron */}
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-lg bg-accent-blue px-8 text-xs font-bold tracking-wider text-white shadow-md shadow-accent-blue/20 hover:bg-accent-blue/90 hover:shadow-lg hover:shadow-accent-blue/35 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 gap-2"
              >
                GET IN TOUCH
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>

              {/* Ghost Secondary Button */}
              <a
                href="#features"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-8 text-xs font-bold tracking-wider text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:-translate-y-0.5 hover:shadow-sm active:scale-[0.98] transition-all duration-300"
              >
                OUR SERVICES
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Mockup Dashboard */}
          <div className="lg:col-span-6 w-full relative flex items-center justify-center">
            {/* Subtle Gradient Backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent-blue/10 to-accent-purple/15 dark:from-accent-blue/5 dark:to-accent-purple/10 rounded-3xl blur-2xl opacity-75 dark:opacity-45 -z-10 animate-pulse-slow"></div>

            {/* Tilted Dashboard Wrapper */}
            <div className="w-full max-w-2xl [perspective:1000px] animate-fade-in animation-delay-400">
              <div className="w-full rounded-2xl border border-slate-200/50 dark:border-white/10 bg-slate-50/20 dark:bg-slate-card/25 p-2 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-accent-blue/40 hover:shadow-[0_20px_50px_rgba(0,102,255,0.15)] dark:hover:shadow-[0_20px_50px_rgba(0,102,255,0.3)] lg:hover:[transform:rotateX(0deg)_rotateY(0deg)_skewY(0deg)] lg:[transform:rotateX(6deg)_rotateY(-10deg)_skewY(2deg)] hover:scale-[1.02] group">
                <div className="rounded-xl overflow-hidden border border-slate-200/60 dark:border-white/5 bg-white dark:bg-slate-dark/95 shadow-inner aspect-[16/9.5] flex flex-col">
                  {/* Mock Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-card/30">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                    </div>
                    <div className="text-[10px] font-mono text-text-secondary dark:text-slate-500">autoflow.ai/dashboard/workflows</div>
                    <div className="w-12"></div>
                  </div>
                  {/* Mock Layout */}
                  <div className="flex-1 flex text-left text-[11px] font-sans">
                    {/* Sidebar */}
                    <div className="w-32 sm:w-40 border-r border-slate-200 dark:border-white/5 p-3 sm:p-4 flex flex-col gap-3 bg-slate-50/50 dark:bg-slate-card/10">
                      <div className="h-6 bg-accent-blue/10 rounded w-3/4 flex items-center px-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-blue mr-1.5"></span><span className="text-[9px] font-bold text-accent-blue">Workflows</span></div>
                      <div className="h-5 rounded w-5/6 flex items-center px-2 text-text-secondary"><span className="text-[9px]">Data Sources</span></div>
                      <div className="h-5 rounded w-2/3 flex items-center px-2 text-text-secondary"><span className="text-[9px]">Model Tuning</span></div>
                      <div className="h-5 rounded w-3/4 flex items-center px-2 text-text-secondary"><span className="text-[9px]">API Settings</span></div>
                    </div>
                    {/* Main Workspace */}
                    <div className="flex-1 p-4 sm:p-5 flex flex-col gap-5 overflow-hidden">
                      <div className="flex justify-between items-center">
                        <div className="space-y-1">
                          <div className="h-5 bg-slate-300 dark:bg-white/10 rounded w-28 sm:w-40"></div>
                          <div className="h-3 bg-slate-200 dark:bg-white/5 rounded w-20 sm:w-24"></div>
                        </div>
                        <div className="h-7 bg-accent-blue rounded-lg w-16 sm:w-20 flex items-center justify-center text-[10px] text-white font-bold cursor-pointer hover:bg-accent-blue/90 hover:scale-105 active:scale-95 transition-all">Run Flow</div>
                      </div>
                      {/* Node Graph Mock */}
                      <div className="flex-1 p-4 flex items-center justify-center relative overflow-hidden">
                        <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg relative z-10">
                          <div className="bg-white dark:bg-slate-card border border-slate-200/80 dark:border-white/10 p-2.5 sm:p-3 rounded-lg shadow-sm hover:scale-105 hover:-translate-y-0.5 hover:border-accent-blue/40 hover:shadow-md hover:shadow-accent-blue/5 transition-all duration-300 cursor-pointer">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[8px] font-bold text-accent-blue uppercase tracking-wider">Source</span>
                              <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald animate-pulse"></span>
                            </div>
                            <div className="font-bold text-[9px] sm:text-[10px] mb-0.5 text-slate-800 dark:text-slate-200">Webhook Ingestion</div>
                            <div className="text-[7px] sm:text-[8px] text-text-secondary">stripe.charge_succeeded</div>
                          </div>
                          <div className="bg-white dark:bg-slate-card border border-slate-200/80 dark:border-white/10 p-2.5 sm:p-3 rounded-lg shadow-sm hover:scale-105 hover:-translate-y-0.5 hover:border-accent-purple/40 hover:shadow-md hover:shadow-accent-purple/5 transition-all duration-300 cursor-pointer">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[8px] font-bold text-accent-purple uppercase tracking-wider">Process</span>
                            </div>
                            <div className="font-bold text-[9px] sm:text-[10px] mb-0.5 text-slate-800 dark:text-slate-200">AI Classification</div>
                            <div className="text-[7px] sm:text-[8px] text-text-secondary">Tune LLaMA 3 weights</div>
                          </div>
                          <div className="bg-white dark:bg-slate-card border border-slate-200/80 dark:border-white/10 p-2.5 sm:p-3 rounded-lg shadow-sm hover:scale-105 hover:-translate-y-0.5 hover:border-accent-emerald/40 hover:shadow-md hover:shadow-accent-emerald/5 transition-all duration-300 cursor-pointer">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[8px] font-bold text-accent-emerald uppercase tracking-wider">Action</span>
                            </div>
                            <div className="font-bold text-[9px] sm:text-[10px] mb-0.5 text-slate-800 dark:text-slate-200">Database Upsert</div>
                          </div>
                        </div>
                        {/* Connection lines */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <line x1="33%" y1="50%" x2="40%" y2="50%" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" />
                            <line x1="60%" y1="50%" x2="67%" y2="50%" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
