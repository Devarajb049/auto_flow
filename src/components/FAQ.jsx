import React, { useState } from 'react';

const faqs = [
  {
    question: "What is AutoFlow?",
    answer: "AutoFlow is a next-generation AI data automation platform that allows engineering and data teams to ingest large datasets, train small language models securely, and automate logical decision-making workflows without infrastructure overhead."
  },
  {
    question: "How does private model tuning keep our data secure?",
    answer: "When you fine-tune a model on AutoFlow, the training process occurs in an isolated network container within your virtual private cloud (VPC). We are SOC 2 Type II certified and ensure your datasets are never shared with public model providers or external CDNs."
  },
  {
    question: "How is the 20% annual discount applied?",
    answer: "Our pricing matrix automatically factors in a flat 20% discount when you switch the billing cycle from Monthly to Annual. The calculated rate shown in your selected currency reflects this discount immediately."
  },
  {
    question: "Can I migrate custom models from Hugging Face?",
    answer: "Yes, our Pro and Enterprise tiers support importing weights from standard model structures (such as LLaMA-based or Mistral-based weights) to tune and run on our high-performance inference servers."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" aria-label="Frequently Asked Questions" className="py-20 md:py-28 bg-white dark:bg-slate-card/5 border-t border-slate-100 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary dark:text-slate-400">
            Everything you need to know about the platform's features, security, and matrices.
          </p>
        </div>

        {/* Collapsible Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-card/30 transition-all duration-300 ${isOpen ? 'border-accent-blue/30 dark:border-accent-blue/20 bg-slate-100/50 dark:bg-slate-card/55' : ''}`}
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-display font-semibold text-slate-900 dark:text-white text-base md:text-lg">{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 text-text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180 text-slate-900 dark:text-white' : ''}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Accordion Panel Body */}
                <div
                  className="accordion-content transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? '160px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="px-6 pb-6 pt-1 text-sm md:text-base text-text-secondary dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-white/5 mt-1">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
