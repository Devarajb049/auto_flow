import React from 'react';

export default function CTA() {
  return (
    <section aria-label="Get Started Call to Action" className="py-16 md:py-24 bg-white dark:bg-slate-dark relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-accent-blue/10 blur-3xl"></div>
      
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-3xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-card/40 px-8 py-12 md:p-16 text-center backdrop-blur-sm overflow-hidden shadow-sm">
          {/* Top light beam */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent"></div>
          
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
            Ready to Automate Your Workloads?
          </h2>
          <p className="text-base md:text-lg text-text-secondary dark:text-slate-400 max-w-xl mx-auto mb-8">
            Deploy AutoFlow in minutes and watch your engineering productivity multiply. Set up your first model today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-lg bg-accent-blue px-6 text-sm font-semibold text-white shadow-lg shadow-accent-blue/20 hover:bg-accent-blue/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Start Free
            </a>
            <a
              href="mailto:sales@autoflow.ai?subject=Book Demo"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-6 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
