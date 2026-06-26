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
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('autoflow-theme') || 'light';
    }
    return 'light';
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('autoflow-theme', next);
      return next;
    });
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
    const cursor = document.getElementById('custom-cursor-container');
    const ring = document.getElementById('custom-cursor-ring');
    const dot = document.getElementById('custom-cursor-dot');
    if (!cursor || !ring || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let dotX = 0;
    let dotY = 0;

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

    let hasMoved = false;
    let animationFrameId;
    const tick = () => {
      if (!hasMoved && mouseX !== 0 && mouseY !== 0) {
        ringX = mouseX;
        ringY = mouseY;
        dotX = mouseX;
        dotY = mouseY;
        hasMoved = true;
      }

      const dxRing = mouseX - ringX;
      const dyRing = mouseY - ringY;
      ringX += dxRing * 0.12;
      ringY += dyRing * 0.12;

      const dxDot = mouseX - dotX;
      const dyDot = mouseY - dotY;
      dotX += dxDot * 0.35;
      dotY += dyDot * 0.35;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;

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
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden -z-10">
        {/* Top Section Orbs */}
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-accent-blue/5 dark:bg-accent-blue/10 blur-[120px] animate-orb-1"></div>
        <div className="absolute top-[400px] right-[-100px] w-[500px] h-[500px] rounded-full bg-accent-purple/5 dark:bg-accent-purple/10 blur-[120px] animate-orb-2"></div>
        
        {/* Middle Section Orbs (Features/Pricing) */}
        <div className="absolute top-[1500px] left-[-150px] w-[600px] h-[600px] rounded-full bg-accent-emerald/5 dark:bg-accent-emerald/5 blur-[130px] animate-orb-1"></div>
        <div className="absolute top-[2600px] right-[-150px] w-[600px] h-[600px] rounded-full bg-accent-blue/5 dark:bg-accent-blue/10 blur-[130px] animate-orb-2"></div>

        {/* Bottom Section Orbs (FAQ/CTA) */}
        <div className="absolute bottom-[200px] left-[10%] w-[500px] h-[500px] rounded-full bg-accent-purple/5 dark:bg-accent-purple/5 blur-[120px] animate-orb-1"></div>
      </div>

      {/* Custom Cursor follower */}
      <div id="custom-cursor-container" className="hidden md:block">
        <div id="custom-cursor-ring" />
        <div id="custom-cursor-dot" />
      </div>

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
