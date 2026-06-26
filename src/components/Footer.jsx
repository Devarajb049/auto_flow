import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-dark border-t border-slate-100 dark:border-white/5 py-12 md:py-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2.5 group mb-4">
              <img src="/logo.svg" className="h-8 w-8 object-contain transition-all duration-300" alt="AutoFlow Logo" />
              <span className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                Auto<span className="text-accent-blue">Flow</span>
              </span>
            </a>
            <p className="text-sm text-text-secondary dark:text-slate-400 max-w-sm leading-relaxed">
              AutoFlow is an AI platform built for sub-second database logical branch automation. Keep your workloads secure and scaling dynamically.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Platform</h4>
            <nav aria-label="Footer Platform Navigation" className="flex flex-col gap-3">
              <a href="#features" className="text-sm text-text-secondary dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-sm text-text-secondary dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</a>
              <a href="#testimonials" className="text-sm text-text-secondary dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Testimonials</a>
            </nav>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Support</h4>
            <nav aria-label="Footer Support Navigation" className="flex flex-col gap-3">
              <a href="#faq" className="text-sm text-text-secondary dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">FAQ</a>
              <a href="mailto:support@autoflow.ai" className="text-sm text-text-secondary dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Contact Support</a>
              <a href="#" className="text-sm text-text-secondary dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-100 dark:border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary/70 dark:text-slate-500">
            &copy; {new Date().getFullYear()} AutoFlow AI Inc. All rights reserved. Made for the Next-Gen AI Speed Run.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-slate-400 dark:text-slate-500">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="X (formerly Twitter)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
