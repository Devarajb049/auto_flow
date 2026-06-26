import React from 'react';

export default function Companies() {
  return (
    <section aria-label="Trusted Partners" className="border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-card/10 py-10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Trusted by engineering teams at the world's most innovative companies
        </p>
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3 md:grid-cols-5 lg:gap-x-12">
          {/* Logo 1 */}
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-display font-semibold tracking-tight text-lg opacity-50 dark:opacity-40 grayscale contrast-200 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-pointer">
            <svg className="w-6 h-6 text-accent-blue" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Stackly
          </div>
          {/* Logo 2 */}
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-display font-semibold tracking-tight text-lg opacity-50 dark:opacity-40 grayscale contrast-200 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-pointer">
            <svg className="w-6 h-6 text-accent-purple" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth={2} stroke="currentColor" fill="none" />
              <circle cx="12" cy="12" r="4" />
            </svg>
            Orbital
          </div>
          {/* Logo 3 */}
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-display font-semibold tracking-tight text-lg opacity-50 dark:opacity-40 grayscale contrast-200 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-pointer">
            <svg className="w-6 h-6 text-accent-emerald" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v18M3 12h18M12 3l9 9-9 9-9-9 9-9z" />
            </svg>
            Aether
          </div>
          {/* Logo 4 */}
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-display font-semibold tracking-tight text-lg opacity-50 dark:opacity-40 grayscale contrast-200 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-pointer">
            <svg className="w-6 h-6 text-accent-blue" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h16v16H4V4zm4 4v8h8V8H8z" />
            </svg>
            CoreNode
          </div>
          {/* Logo 5 */}
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-display font-semibold tracking-tight text-lg opacity-50 dark:opacity-40 grayscale contrast-200 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-pointer">
            <svg className="w-6 h-6 text-accent-yellow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 22h20L12 2zm0 5l6 11H6l6-11z" />
            </svg>
            Apex
          </div>
        </div>
      </div>
    </section>
  );
}
