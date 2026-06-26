import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function CTA() {
  return (
    <ScrollReveal aria-label="Get Started Call to Action" className="py-16 md:py-24 bg-white dark:bg-slate-dark relative overflow-hidden transition-colors duration-300" animation="fade-up">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-accent-blue/10 blur-3xl"></div>
      
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-3xl border border-slate-200/60 dark:border-white/5 aurora-card bg-gradient-to-b from-slate-50/80 to-slate-50/30 dark:from-slate-card/60 dark:to-slate-card/20 px-8 py-12 md:p-16 text-center backdrop-blur-sm overflow-hidden shadow-sm hover:border-accent-blue/30 dark:hover:border-accent-blue/20 hover:shadow-lg hover:shadow-accent-blue/5 transition-all duration-500 group">

          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
            Ready to Automate Your Workloads?
          </h2>
          <p className="text-base md:text-lg text-text-secondary dark:text-slate-400 max-w-xl mx-auto mb-8">
            Deploy AutoFlow in minutes and watch your engineering productivity multiply. Set up your first model today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-lg bg-accent-blue px-6 text-sm font-semibold text-white shadow-lg shadow-accent-blue/20 hover:bg-accent-blue/90 hover:shadow-xl hover:shadow-accent-blue/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
            >
              Start Free
            </a>
            <a
              href="mailto:sales@autoflow.ai?subject=Book Demo"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-6 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 hover:border-accent-blue/40 dark:hover:border-accent-blue/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
