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

  // Payment Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [isCvvFocused, setIsCvvFocused] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

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

  // Payment Handlers
  const openPaymentModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && paymentStatus === 'idle') {
      setIsModalOpen(false);
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen && paymentStatus === 'idle') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, paymentStatus]);

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    value = value.substring(0, 16); // Cap at 16 digits

    // Add spaces every 4 digits
    let formatted = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += ' ';
      }
      formatted += value[i];
    }
    cardNumberRef.current = value; // keep a raw copy if needed
    setCardNumber(formatted);
  };

  const cardNumberRef = useRef('');

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    value = value.substring(0, 4); // Cap at 4 digits
    if (value.length > 2) {
      value = value.substring(0, 2) + '/' + value.substring(2);
    }
    setCardExpiry(value);
  };

  const handleCvvChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    value = value.substring(0, 3); // Cap at 3 digits
    setCardCvv(value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!cardName || !cardNumber || !cardExpiry || !cardCvv) {
      return;
    }

    setPaymentStatus('loading');
    setTimeout(() => {
      setPaymentStatus('success');
      setTimeout(() => {
        setIsModalOpen(false);
        // Reset form
        setCardName('');
        setCardNumber('');
        setCardExpiry('');
        setCardCvv('');
        setPaymentStatus('idle');
      }, 1500);
    }, 2000);
  };

  const getCardType = () => {
    const cleanNum = cardNumber.replace(/\s/g, '');
    if (cleanNum.startsWith('4')) return 'Visa';
    if (cleanNum.startsWith('5')) return 'Mastercard';
    return 'Card';
  };

  // Get dynamic values for modal pricing display
  const getSelectedPlanPrice = () => {
    if (!selectedPlan) return '';
    const price = calculatePrice(selectedPlan, currencyRef.current, cycleRef.current);
    return formatPrice(price, currencyRef.current);
  };

  const getSelectedPlanSubtext = () => {
    if (!selectedPlan) return '';
    const price = calculatePrice(selectedPlan, currencyRef.current, cycleRef.current);
    return cycleRef.current === 'annual'
      ? `Billed annually at ${formatPrice(price * 12, currencyRef.current)}/yr`
      : 'Billed monthly';
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
          <article className="glass-panel rounded-2xl p-8 flex flex-col justify-between hover:border-accent-blue/30 dark:hover:border-accent-blue/20 hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 shadow-sm cursor-pointer group">
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
            <button
              onClick={() => openPaymentModal('starter')}
              className="mt-8 inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 hover:border-accent-blue/40 dark:hover:border-accent-blue/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Get Started
            </button>
          </article>

          {/* Card 2: Pro */}
          <article className="glass-panel border-accent-blue/30 dark:border-accent-blue/45 rounded-2xl p-8 flex flex-col justify-between hover:border-accent-blue/55 hover:shadow-2xl hover:shadow-accent-blue/10 hover:-translate-y-2 relative overflow-hidden transition-all duration-300 cursor-pointer group">
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
            <button
              onClick={() => openPaymentModal('pro')}
              className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-accent-blue text-sm font-semibold text-white shadow-md shadow-accent-blue/20 hover:bg-accent-blue/90 hover:shadow-lg hover:shadow-accent-blue/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Get Started
            </button>
          </article>

          {/* Card 3: Enterprise */}
          <article className="glass-panel rounded-2xl p-8 flex flex-col justify-between hover:border-accent-blue/30 dark:hover:border-accent-blue/20 hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 shadow-sm cursor-pointer group">
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
              className="mt-8 inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 hover:border-accent-blue/40 dark:hover:border-accent-blue/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
            >
              Contact Sales
            </a>
          </article>
        </div>
      </div>

      {/* Payment Modal Overlay */}
      {isModalOpen && (
        <div
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-dark/60 backdrop-blur-md animate-fade-in cursor-pointer"
        >
          {/* Modal Card */}
          <div className="w-full max-w-md bg-white dark:bg-slate-card border border-slate-200/50 dark:border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden transition-all duration-300 transform scale-100 cursor-default animate-fade-in">
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded border ${selectedPlan === 'starter'
                    ? 'text-accent-blue bg-accent-blue/5 border-accent-blue/20'
                    : 'text-accent-purple bg-accent-purple/5 border-accent-purple/20'
                  }`}>
                  {selectedPlan === 'starter' ? 'Starter Plan' : 'Pro Plan'}
                </span>
                <h3 className="font-display text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1.5 flex items-baseline gap-1">
                  {getSelectedPlanPrice()}
                  <span className="text-xs font-normal text-text-secondary dark:text-slate-400">/mo</span>
                </h3>
                <span className="text-[10px] text-text-secondary dark:text-slate-400 block mt-0.5">
                  {getSelectedPlanSubtext()}
                </span>
              </div>

              {/* Close Button */}
              {paymentStatus === 'idle' && (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/5 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:scale-105 active:scale-95 cursor-pointer transition-all duration-200"
                  aria-label="Close Payment Modal"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* 3D Flipping Credit Card Visual */}
            <div className="w-full h-40 [perspective:1000px] mb-6 select-none">
              <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isCvvFocused ? '[transform:rotateY(180deg)]' : ''}`}>

                {/* Card Front */}
                <div className="absolute inset-0 w-full h-full rounded-2xl p-5 bg-gradient-to-tr from-accent-blue via-indigo-600 to-accent-purple text-white flex flex-col justify-between [backface-visibility:hidden] shadow-lg border border-white/15">
                  <div className="flex justify-between items-start">
                    {/* Card Chip & Type */}
                    <div className="w-9 h-7 bg-amber-400/20 border border-amber-400/30 rounded flex items-center justify-center">
                      <div className="w-5.5 h-4.5 border border-amber-400/40 rounded-sm bg-amber-400/10"></div>
                    </div>
                    {/* Brand logo / Card Network */}
                    <span className="font-display font-black text-xs italic tracking-wider opacity-90">AutoFlow Pay</span>
                  </div>

                  {/* Card Number */}
                  <div className="font-mono text-base tracking-widest text-center py-2 opacity-95">
                    {cardNumber || '•••• •••• •••• ••••'}
                  </div>

                  <div className="flex justify-between items-end">
                    {/* Cardholder Name */}
                    <div className="flex flex-col max-w-[70%]">
                      <span className="text-[8px] uppercase tracking-wider text-slate-300 font-semibold mb-0.5">Cardholder</span>
                      <span className="font-mono text-[11px] truncate uppercase tracking-wider font-semibold opacity-95">
                        {cardName || 'YOUR NAME'}
                      </span>
                    </div>
                    {/* Expiry */}
                    <div className="flex flex-col items-end">
                      <span className="text-[8px] uppercase tracking-wider text-slate-300 font-semibold mb-0.5">Expires</span>
                      <span className="font-mono text-[11px] font-semibold opacity-95">{cardExpiry || 'MM/YY'}</span>
                    </div>
                  </div>
                </div>

                {/* Card Back */}
                <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-950 to-slate-900 text-white flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] p-5 shadow-lg border border-white/10">
                  <div className="w-full h-8.5 bg-black/85 rounded-sm -mx-5 mt-1"></div>
                  <div className="flex flex-col mt-4">
                    <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold text-right pr-2 mb-1">CVV</span>
                    <div className="w-full h-7 bg-white/10 rounded border border-white/5 flex items-center justify-end pr-3">
                      <span className="font-mono text-[11px] tracking-widest text-slate-200 font-bold">
                        {isCvvFocused ? cardCvv || '•••' : '•••'}
                      </span>
                    </div>
                  </div>
                  <div className="text-[7px] text-slate-500 text-center leading-tight">
                    This is a simulated secure payment sandbox. No real transaction will occur.
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <form onSubmit={handlePaymentSubmit} className="flex flex-col gap-4">
              {/* Cardholder Name */}
              <div>
                <label htmlFor="card-name" className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 block">
                  Cardholder Name
                </label>
                <input
                  id="card-name"
                  type="text"
                  required
                  disabled={paymentStatus !== 'idle'}
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value.substring(0, 30))}
                  placeholder="e.g. JOHN DOE"
                  className="w-full h-10 px-3 text-sm border border-slate-200 dark:border-white/5 rounded-lg bg-slate-50/50 dark:bg-slate-card/40 text-slate-900 dark:text-white focus:outline-none focus:border-accent-blue/50 focus:bg-white dark:focus:bg-slate-card transition-all"
                />
              </div>

              {/* Card Number */}
              <div>
                <label htmlFor="card-number" className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 block">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    id="card-number"
                    type="text"
                    required
                    disabled={paymentStatus !== 'idle'}
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="4000 1234 5678 9010"
                    className="w-full h-10 pl-3 pr-10 text-sm border border-slate-200 dark:border-white/5 rounded-lg bg-slate-50/50 dark:bg-slate-card/40 text-slate-900 dark:text-white focus:outline-none focus:border-accent-blue/50 focus:bg-white dark:focus:bg-slate-card transition-all font-mono"
                  />
                  {/* Card brand icon display */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono font-bold text-slate-400 select-none">
                    {getCardType() === 'Visa' ? 'VISA' : getCardType() === 'Mastercard' ? 'MC' : 'CARD'}
                  </div>
                </div>
              </div>

              {/* Expiry & CVV Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="card-expiry" className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 block">
                    Expiration Date
                  </label>
                  <input
                    id="card-expiry"
                    type="text"
                    required
                    disabled={paymentStatus !== 'idle'}
                    value={cardExpiry}
                    onChange={handleExpiryChange}
                    placeholder="MM/YY"
                    className="w-full h-10 px-3 text-sm border border-slate-200 dark:border-white/5 rounded-lg bg-slate-50/50 dark:bg-slate-card/40 text-slate-900 dark:text-white focus:outline-none focus:border-accent-blue/50 focus:bg-white dark:focus:bg-slate-card transition-all font-mono text-center"
                  />
                </div>
                <div>
                  <label htmlFor="card-cvv" className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 block">
                    CVV
                  </label>
                  <input
                    id="card-cvv"
                    type="password"
                    required
                    disabled={paymentStatus !== 'idle'}
                    value={cardCvv}
                    onChange={handleCvvChange}
                    onFocus={() => setIsCvvFocused(true)}
                    onBlur={() => setIsCvvFocused(false)}
                    placeholder="•••"
                    className="w-full h-10 px-3 text-sm border border-slate-200 dark:border-white/5 rounded-lg bg-slate-50/50 dark:bg-slate-card/40 text-slate-900 dark:text-white focus:outline-none focus:border-accent-blue/50 focus:bg-white dark:focus:bg-slate-card transition-all font-mono text-center"
                  />
                </div>
              </div>

              {/* Submit / Pay Button */}
              <button
                type="submit"
                disabled={paymentStatus === 'loading' || paymentStatus === 'success'}
                className={`mt-4 w-full h-11 inline-flex items-center justify-center rounded-lg font-semibold text-white transition-all duration-300 cursor-pointer ${paymentStatus === 'success'
                    ? 'bg-accent-emerald shadow-lg shadow-accent-emerald/20'
                    : paymentStatus === 'loading'
                      ? 'bg-accent-blue/80 cursor-not-allowed'
                      : 'bg-accent-blue hover:bg-accent-blue/90 shadow-md shadow-accent-blue/20 hover:shadow-lg hover:shadow-accent-blue/30 active:scale-[0.98]'
                  }`}
              >
                {paymentStatus === 'success' ? (
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Payment Successful!</span>
                  </div>
                ) : paymentStatus === 'loading' ? (
                  <div className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Processing Payment...</span>
                  </div>
                ) : (
                  <span>Pay {getSelectedPlanPrice()}</span>
                )}
              </button>
            </form>

            {/* Security Badges */}
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-text-secondary dark:text-slate-500 mt-6 select-none border-t border-slate-100 dark:border-white/5 pt-4">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secure 256-bit SSL Encrypted Connection</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
