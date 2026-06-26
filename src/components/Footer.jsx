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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-all duration-200 hover:scale-110" aria-label="GitHub">
              <svg className="w-5 h-5 fill-current">
                <use href="/icons.svg#github-icon" />
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-all duration-200 hover:scale-110" aria-label="X (formerly Twitter)">
              <svg className="w-5 h-5 fill-current">
                <use href="/icons.svg#x-icon" />
              </svg>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-all duration-200 hover:scale-110" aria-label="Discord">
              <svg className="w-5 h-5 fill-current">
                <use href="/icons.svg#discord-icon" />
              </svg>
            </a>
            <a href="https://bsky.app" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-all duration-200 hover:scale-110" aria-label="Bluesky">
              <svg className="w-5 h-5 fill-current">
                <use href="/icons.svg#bluesky-icon" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
