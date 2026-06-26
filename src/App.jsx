import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Sync theme class with the document HTML element for global Tailwind variant scoping
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className={`min-h-screen bg-white dark:bg-slate-dark text-slate-900 dark:text-text-primary transition-colors duration-300 selection:bg-accent-blue/30 selection:text-white ${theme}`}>
      {/* Navigation Header */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Social Proof / Trusted Companies */}
        <div id="clients">
          <Companies />
        </div>

        {/* Features Bento to Accordion Layout */}
        <Features />

        {/* How It Works Workflow Steps */}
        <HowItWorks />

        {/* Isolated Pricing Matrix */}
        <Pricing />

        {/* Client Testimonials */}
        <Testimonials />

        {/* FAQ Accordion Section */}
        <FAQ />

        {/* Bottom CTA Block */}
        <CTA />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
