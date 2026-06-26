import React from 'react';

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col items-center justify-center min-h-[90vh] text-center">
      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Decorative floating circle element from the screenshot */}
      <div className="absolute top-1/4 left-[38%] h-7 w-7 rounded-full border border-accent-blue/30 flex items-center justify-center animate-float">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-blue"></span>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
        {/* Main Header lines */}
        <div className="font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl max-w-4xl leading-[1.15] mb-6">
          <span className="bg-gradient-to-r from-accent-blue via-sky-400 to-accent-blue bg-clip-text text-transparent">
            Accelerate
          </span>{' '}
          Your Business
          <br />
          Growth with
        </div>

        {/* Highlighted Yellow Banner Box from the screenshot */}
        <div className="relative mb-8 inline-block transform -rotate-1">
          <span className="absolute inset-0 bg-accent-yellow -skew-y-1 transform rounded-md shadow-sm"></span>
          <h2 className="relative font-display text-3xl font-black text-slate-950 uppercase tracking-tight px-6 py-3.5 sm:text-5xl">
            GRADIX TECHNOLOGIES
          </h2>
        </div>

        {/* Subtitle Description */}
        <p className="text-sm md:text-base text-text-secondary dark:text-slate-300 max-w-2xl leading-relaxed mb-10">
          Gradix Technologies helps startups and businesses grow through reliable digital solutions, modern design, and performance-focused strategies.
        </p>

        {/* Buttons Panel */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          {/* Blue Primary Button with Chevron */}
          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-lg bg-accent-blue px-8 text-xs font-bold tracking-wider text-white shadow-md shadow-accent-blue/20 hover:bg-accent-blue/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 gap-2"
          >
            GET IN TOUCH
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>

          {/* Ghost Secondary Button */}
          <a
            href="#features"
            className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-8 text-xs font-bold tracking-wider text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            OUR SERVICES
          </a>
        </div>

        {/* Scroll Down Mouse Animation from the screenshot */}
        <div className="flex flex-col items-center gap-2 mt-8 animate-bounce">
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
            SCROLL DOWN
          </span>
          <div className="w-6 h-10 rounded-full border border-slate-300 dark:border-white/20 p-1 flex justify-center">
            <span className="w-1.5 h-3 rounded-full bg-accent-blue animate-float"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
