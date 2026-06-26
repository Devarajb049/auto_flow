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

  // Cursor follower mouse listener (direct DOM style update for peak performance)
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isHoverable = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer') ||
        target.getAttribute('role') === 'button';

      if (isHoverable) {
        cursor.classList.add('cursor-hover');
      } else {
        cursor.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    let animationFrameId;
    const tick = () => {
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      currentX += dx * 0.15;
      currentY += dy * 0.15;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative min-h-screen bg-white dark:bg-slate-dark text-slate-900 dark:text-text-primary transition-colors duration-300 selection:bg-accent-blue/30 selection:text-white overflow-x-hidden ${theme}`}>
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-blue/5 dark:bg-accent-blue/10 blur-[120px] animate-orb-1"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-purple/5 dark:bg-accent-purple/10 blur-[120px] animate-orb-2"></div>
      </div>

      {/* Custom Cursor follower */}
      <div id="custom-cursor" className="hidden md:block" />

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
