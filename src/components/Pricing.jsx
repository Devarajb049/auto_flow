import React, { useEffect, useRef, useState } from 'react';

// Pricing config matrix
const regionalTariff = {
  USD: 1.0,
  INR: 83.5,
  EUR: 0.92
};

const billingMultiplier = {
  monthly: 1.0,
  annual: 0.80
};

const pricingMatrix = {
  starter: {
    USD: { baseMonthlyRate: 29.00 },
    INR: { baseMonthlyRate: 29.00 },
    EUR: { baseMonthlyRate: 29.00 }
  },
  pro: {
    USD: { baseMonthlyRate: 79.00 },
    INR: { baseMonthlyRate: 79.00 },
    EUR: { baseMonthlyRate: 79.00 }
  },
  enterprise: {
    USD: { baseMonthlyRate: 149.00 },
    INR: { baseMonthlyRate: 149.00 },
    EUR: { baseMonthlyRate: 149.00 }
  }
};

const currencySymbols = {
  USD: '$',
  INR: '₹',
  EUR: '€'
};

// Isolated Billing Toggle Component to contain local state changes
function BillingToggle({ currentCycle, onChange }) {
  const [cycle, setCycle] = useState(currentCycle);

  const handleToggle = (newCycle) => {
    setCycle(newCycle);
    onChange(newCycle);
  };

  return (
    <div className="inline-flex items-center gap-1 rounded-xl bg-slate-100 dark:bg-slate-card/60 p-1 border border-slate-200 dark:border-white/5">
      <button
        type="button"
        onClick={() => handleToggle('monthly')}
        className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${cycle === 'monthly' ? 'bg-accent-blue text-white shadow-md shadow-accent-blue/15' : 'text-text-secondary dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={() => handleToggle('annual')}
        className={`relative px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${cycle === 'annual' ? 'bg-accent-blue text-white shadow-md shadow-accent-blue/15' : 'text-text-secondary dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
      >
        Annual
        <span className="absolute -top-2.5 -right-3 px-1.5 py-0.5 bg-accent-emerald text-[9px] font-bold text-white rounded-full uppercase tracking-wider scale-90 border border-white dark:border-slate-dark">
          -20%
        </span>
      </button>
    </div>
  );
}

// Isolated Currency Dropdown Component to contain local state changes
function CurrencySelector({ currentCurrency, onChange }) {
  const [currency, setCurrency] = useState(currentCurrency);

  const handleSelect = (e) => {
    const val = e.target.value;
    setCurrency(val);
    onChange(val);
  };

  return (
    <div className="relative inline-flex items-center">
      <select
        value={currency}
        onChange={handleSelect}
        aria-label="Select Currency"
        className="appearance-none bg-slate-100 dark:bg-slate-card/60 border border-slate-200 dark:border-white/5 rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-900 dark:text-white pr-9 cursor-pointer hover:bg-slate-200/50 dark:hover:bg-slate-card focus:outline-none focus:border-accent-blue/50 transition-all duration-150"
      >
        <option value="USD">USD ($)</option>
        <option value="INR">INR (₹)</option>
        <option value="EUR">EUR (€)</option>
      </select>
      <div className="absolute right-3 pointer-events-none text-text-secondary">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export default function Pricing() {
  // Store global pricing settings in mutable refs
  const currencyRef = useRef('USD');
  const cycleRef = useRef('monthly');

  // DOM node references for price values
  const starterPriceRef = useRef(null);
  const proPriceRef = useRef(null);
  const enterprisePriceRef = useRef(null);

  // DOM node references for subtext (e.g. total annual cost or payment period description)
  const starterSubtextRef = useRef(null);
  const proSubtextRef = useRef(null);
  const enterpriseSubtextRef = useRef(null);

  const calculatePrice = (tier, currency, cycle) => {
    const baseRate = pricingMatrix[tier][currency].baseMonthlyRate;
    const tariff = regionalTariff[currency];
    const multiplier = billingMultiplier[cycle];
    
    // Formula: baseMonthlyRate * billingMultiplier * regionalTariff
    const monthlyEquivalent = baseRate * multiplier * tariff;
    
    return Math.round(monthlyEquivalent);
  };

  const formatPrice = (value, currency) => {
    const symbol = currencySymbols[currency];
    // Formats value with commas if needed
    return `${symbol}${value.toLocaleString()}`;
  };

  const updateDOMPrices = () => {
    const currency = currencyRef.current;
    const cycle = cycleRef.current;

    // Starter
    const starterPrice = calculatePrice('starter', currency, cycle);
    if (starterPriceRef.current) {
      starterPriceRef.current.textContent = formatPrice(starterPrice, currency);
    }
    if (starterSubtextRef.current) {
      starterSubtextRef.current.textContent = cycle === 'annual' 
        ? `Billed annually at ${formatPrice(starterPrice * 12, currency)}/yr` 
        : 'Billed monthly';
    }

    // Pro
    const proPrice = calculatePrice('pro', currency, cycle);
    if (proPriceRef.current) {
      proPriceRef.current.textContent = formatPrice(proPrice, currency);
    }
    if (proSubtextRef.current) {
      proSubtextRef.current.textContent = cycle === 'annual' 
        ? `Billed annually at ${formatPrice(proPrice * 12, currency)}/yr` 
        : 'Billed monthly';
    }

    // Enterprise
    const enterprisePrice = calculatePrice('enterprise', currency, cycle);
    if (enterprisePriceRef.current) {
      enterprisePriceRef.current.textContent = formatPrice(enterprisePrice, currency);
    }
    if (enterpriseSubtextRef.current) {
      enterpriseSubtextRef.current.textContent = cycle === 'annual' 
        ? `Billed annually at ${formatPrice(enterprisePrice * 12, currency)}/yr` 
        : 'Billed monthly';
    }
  };

  // Perform initial DOM population on mount
  useEffect(() => {
    updateDOMPrices();
  }, []);

  const handleCycleChange = (newCycle) => {
    cycleRef.current = newCycle;
    updateDOMPrices();
  };

  const handleCurrencyChange = (newCurrency) => {
    currencyRef.current = newCurrency;
    updateDOMPrices();
  };

  return (
    <section id="pricing" aria-label="Pricing Packages" className="py-20 md:py-28 bg-white dark:bg-slate-card/5 border-t border-slate-100 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-accent-blue/5 blur-3xl animate-pulse-slow"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
            Predictable Pricing, Structured for Scale
          </h2>
          <p className="text-lg text-text-secondary dark:text-slate-400">
            Select your target billing currency and frequency. Upgrade, downgrade, or cancel at any time.
          </p>
        </div>

        {/* Switchers Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <BillingToggle currentCycle={cycleRef.current} onChange={handleCycleChange} />
          <CurrencySelector currentCurrency={currencyRef.current} onChange={handleCurrencyChange} />
        </div>

        {/* Pricing Matrix Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Starter */}
          <article className="glass-panel rounded-2xl p-8 flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">Starter</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold text-text-secondary bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/5">Testing</span>
              </div>
              <p className="text-sm text-text-secondary dark:text-slate-400 leading-relaxed mb-6">
                Perfect for developers building early-stage automation scripts.
              </p>
              
              {/* Dynamic Price Node */}
              <div className="flex items-baseline gap-2 mb-2">
                <span ref={starterPriceRef} className="font-display text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"></span>
                <span className="text-sm text-text-secondary dark:text-slate-400">/mo</span>
              </div>
              <div ref={starterSubtextRef} className="text-xs text-text-secondary/70 dark:text-slate-400/70 h-4 mb-8"></div>

              <div className="border-t border-slate-200 dark:border-white/5 pt-6">
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3 text-sm text-text-secondary dark:text-slate-400">
                    <svg className="w-4 h-4 text-accent-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Ingest up to 50 GB / month
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-secondary dark:text-slate-400">
                    <svg className="w-4 h-4 text-accent-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    3 active pipelines
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-secondary dark:text-slate-400">
                    <svg className="w-4 h-4 text-accent-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Community support channels
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="#pricing"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200"
            >
              Get Started
            </a>
          </article>

          {/* Card 2: Pro */}
          <article className="glass-panel border-accent-blue/30 dark:border-accent-blue/40 rounded-2xl p-8 flex flex-col justify-between hover:border-accent-blue/40 shadow-xl shadow-accent-blue/5 relative overflow-hidden transition-all duration-300">
            <div className="absolute top-0 right-0 px-3 py-1 bg-accent-blue text-[9px] font-bold text-white rounded-bl-lg uppercase tracking-wider">
              Most Popular
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">Pro</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold text-accent-blue bg-accent-blue/10 border border-accent-blue/10">Growth</span>
              </div>
              <p className="text-sm text-text-secondary dark:text-slate-400 leading-relaxed mb-6">
                Designed for expanding teams needing heavy inference scale.
              </p>
              
              {/* Dynamic Price Node */}
              <div className="flex items-baseline gap-2 mb-2">
                <span ref={proPriceRef} className="font-display text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"></span>
                <span className="text-sm text-text-secondary dark:text-slate-400">/mo</span>
              </div>
              <div ref={proSubtextRef} className="text-xs text-text-secondary/70 dark:text-slate-400/70 h-4 mb-8"></div>

              <div className="border-t border-slate-200 dark:border-white/5 pt-6">
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3 text-sm text-text-secondary dark:text-slate-400">
                    <svg className="w-4 h-4 text-accent-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Ingest up to 500 GB / month
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-secondary dark:text-slate-400">
                    <svg className="w-4 h-4 text-accent-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    25 active pipelines
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-secondary dark:text-slate-400">
                    <svg className="w-4 h-4 text-accent-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Dedicated Slack + Email support
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-secondary dark:text-slate-400">
                    <svg className="w-4 h-4 text-accent-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Custom logic branch steps
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="#pricing"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-accent-blue text-sm font-semibold text-white shadow-md shadow-accent-blue/15 hover:bg-accent-blue/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Get Started
            </a>
          </article>

          {/* Card 3: Enterprise */}
          <article className="glass-panel rounded-2xl p-8 flex flex-col justify-between hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300 shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">Enterprise</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold text-text-secondary bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/5">Scale</span>
              </div>
              <p className="text-sm text-text-secondary dark:text-slate-400 leading-relaxed mb-6">
                Custom capacities and SLA parameters for enterprise networks.
              </p>
              
              {/* Dynamic Price Node */}
              <div className="flex items-baseline gap-2 mb-2">
                <span ref={enterprisePriceRef} className="font-display text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight"></span>
                <span className="text-sm text-text-secondary dark:text-slate-400">/mo</span>
              </div>
              <div ref={enterpriseSubtextRef} className="text-xs text-text-secondary/70 dark:text-slate-400/70 h-4 mb-8"></div>

              <div className="border-t border-slate-200 dark:border-white/5 pt-6">
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3 text-sm text-text-secondary dark:text-slate-400">
                    <svg className="w-4 h-4 text-accent-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Unlimited ingestion & storage
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-secondary dark:text-slate-400">
                    <svg className="w-4 h-4 text-accent-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Unlimited active pipelines
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-secondary dark:text-slate-400">
                    <svg className="w-4 h-4 text-accent-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    24/7 dedicated phone support
                  </li>
                  <li className="flex items-center gap-3 text-sm text-text-secondary dark:text-slate-400">
                    <svg className="w-4 h-4 text-accent-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    SSO & Advanced VPC Governance
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="mailto:sales@autoflow.ai?subject=Enterprise Inquiry"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200"
            >
              Contact Sales
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
