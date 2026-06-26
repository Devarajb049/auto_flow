import React, { useState } from 'react';

export default function Navbar({ theme, onToggleTheme }) {
  const [activeTab, setActiveTab] = useState('Features');
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-6 lg:px-8">
      {/* Floating Pill Container */}
      <div className="mx-auto max-w-7xl rounded-full border border-slate-200/50 dark:border-white/10 bg-white/80 dark:bg-slate-card/85 px-6 py-2.5 shadow-lg shadow-slate-100/50 dark:shadow-black/30 backdrop-blur-md transition-all duration-300 flex items-center justify-between">
        
        {/* Brand Logo - AutoFlow */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img src="/logo.svg" className="h-8 w-8 object-contain transition-all duration-300 group-hover:scale-105" alt="AutoFlow Logo" />
          <span className="font-display text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
            Auto<span className="text-accent-blue group-hover:text-accent-purple transition-colors duration-300">Flow</span>
          </span>
        </a>

        {/* Desktop Nav Links (Centered Pills) */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeTab === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveTab(link.label)}
                className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? 'bg-accent-blue text-white shadow-sm shadow-accent-blue/15'
                    : 'text-text-secondary hover:text-accent-blue dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle + CTA */}
        <div className="flex items-center gap-3">
          {/* Light/Dark Toggle Button */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            className="flex h-8 w-14 items-center rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 p-1 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 relative"
          >
            {/* Sliding Dot */}
            <div className={`absolute top-[3px] h-5 w-5 rounded-full bg-white dark:bg-accent-blue shadow flex items-center justify-center transition-all duration-300 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}>
              {theme === 'dark' ? (
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464-4.95a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707zm-7.072 0l-.707-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414zm-.707 7.072a1 1 0 111.414-1.414l.707.707a1 1 0 11-1.414 1.414l-.707-.707zm7.072 0l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zM9 11l.26 2h1.48l.26-2h-2zm-7 0a1 1 0 100 2h1a1 1 0 100-2H2zm17 0a1 1 0 100 2h1a1 1 0 100-2h-1z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </button>

          {/* Black CTA Pill (hidden on small mobile) */}
          <a
            href="#pricing"
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-slate-950 dark:bg-white px-5 text-xs font-bold text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 shadow-sm"
          >
            Get Started
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white md:hidden hover:bg-slate-100 dark:hover:bg-white/5 active:scale-95 transition-all duration-150"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 rounded-2xl border border-slate-200/50 dark:border-white/10 bg-white/95 dark:bg-slate-dark/95 backdrop-blur-xl px-6 py-6 transition-all duration-300 ease-in-out shadow-lg animate-slide-down">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.label);
                  setIsOpen(false);
                }}
                className={`text-xs font-bold tracking-wider py-2 px-3 rounded-full transition-colors ${
                  activeTab === link.label
                    ? 'bg-accent-blue text-white'
                    : 'text-text-secondary hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="h-[1px] bg-slate-200 dark:bg-white/5 my-2"></div>
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-11 items-center justify-center rounded-full bg-slate-950 dark:bg-white px-5 text-xs font-bold text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
