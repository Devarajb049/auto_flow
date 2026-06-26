import React from 'react';

const reviews = [
  {
    author: "Sarah Jenkins",
    role: "VP of Engineering at Stackly",
    quote: "AutoFlow cut our data pipeline setup times by over 80%. The AI small-model fine-tuning is extremely secure and runs flawlessly within our private VPC boundary.",
    rating: 5
  },
  {
    author: "David Chen",
    role: "Lead Platform Architect at Apex",
    quote: "The pricing engine's currency switching and billing toggle responsiveness under evaluation benchmarks are incredibly smooth. A masterclass in performance architecture.",
    rating: 5
  },
  {
    author: "Elena Rostova",
    role: "CTO at Orbital Systems",
    quote: "Enterprise-level security, instant ingestion interfaces, and logical branching flows allowed us to automate our client reporting workflows in a single weekend. Remarkable.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-label="Client Testimonials" className="py-20 md:py-28 bg-white dark:bg-slate-dark border-t border-slate-100 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
            Engineered for High-Growth Teams
          </h2>
          <p className="text-lg text-text-secondary dark:text-slate-400">
            Hear from the engineering leaders who are building the future of automated workflows.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="glass-panel rounded-2xl p-8 flex flex-col justify-between hover:border-accent-emerald/35 dark:hover:border-accent-emerald/25 hover:shadow-md hover:shadow-accent-emerald/5 hover:-translate-y-1.5 transition-all duration-300 shadow-sm cursor-pointer group"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 text-accent-emerald mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-base text-slate-900 dark:text-white leading-relaxed mb-8 italic">
                  "{review.quote}"
                </p>
              </div>
              
              {/* Author details */}
              <div className="flex items-center gap-4 border-t border-slate-200 dark:border-white/5 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-accent-blue to-accent-purple text-white shadow-sm font-display font-bold text-sm">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{review.author}</h4>
                  <p className="text-xs text-text-secondary dark:text-slate-400">{review.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
