import Link from "next/link";
import Hero from "../components/Hero";
import SectionWrapper from "../components/SectionWrapper";

const faqs = [
  {
    category: "About Us",
    questions: [
      {
        q: "What does Freeway Agro Limited specialize in?",
        a: "We specialize in sustainable cassava processing with three main product lines: cassava chips, animal feed, and bio-fibres. Our operations combine modern technology with environmental responsibility.",
      },
      {
        q: "What is your company experience?",
        a: "We bring 15+ years of combined agricultural expertise, focused on building a leading, sustainable cassava processing facility.",
      },
    ],
  },
  {
    category: "Products & Quality",
    questions: [
      {
        q: "What are your main products?",
        a: "Cassava Chips (for food and industrial uses), Animal Feed (from cassava residues), and Bio-Fibres (for sustainable packaging).",
      },
      {
        q: "How do you maintain quality standards?",
        a: "We follow strict processing protocols, implement real-time quality checks, and conduct regular lab testing. Our products meet international quality standards.",
      },
      {
        q: "Can you customize products?",
        a: "Yes, we offer customized specifications, packaging options, and formulations. Contact our sales team to discuss your needs.",
      },
    ],
  },
  {
    category: "Farmer Partnerships",
    questions: [
      {
        q: "Do you work directly with farmers?",
        a: "Yes, we have direct partnerships with 500+ smallholder farmers. We provide fair pricing, technical support, and sustainability training.",
      },
      {
        q: "How do you support farmers?",
        a: "We offer training in improved farming techniques, soil health, water conservation, and climate-resilient varieties.",
      },
    ],
  },
  {
    category: "Sustainability",
    questions: [
      {
        q: "Is your operation environmentally focused?",
        a: "Yes, we actively reduce waste (90% material utilization), use 30% renewable energy, conserve water, and implement farmer sustainability programs.",
      },
      {
        q: "What are your carbon reduction goals?",
        a: "We target 50% renewable energy by 2025, carbon neutrality by 2027, and complete supply chain regeneration by 2030.",
      },
    ],
  },
  {
    category: "Ordering & Logistics",
    questions: [
      {
        q: "What is the minimum order quantity?",
        a: "Minimum orders vary by product. Contact us to discuss your specific needs.",
      },
      {
        q: "Do you offer bulk pricing?",
        a: "Yes, we provide competitive bulk pricing. Request a quote for your volume requirements.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div>
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our products, partnerships, and sustainability"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80"
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "Our Products", href: "/products" }}
      />

      {faqs.map((section) => (
        <SectionWrapper key={section.category} eyebrow={section.category.toUpperCase()} title={section.category}>
          <div className="space-y-4">
            {section.questions.map((item) => (
              <details key={item.q} className="premium-card p-6 cursor-pointer group">
                <summary className="flex items-start justify-between text-lg font-semibold text-[var(--primary)] cursor-pointer list-none">
                  <span className="text-left pr-4">{item.q}</span>
                  <span className="flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[var(--accent)] transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </SectionWrapper>
      ))}

      <SectionWrapper className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white" tone="dark">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We&apos;re here to help. Reach out to our team for personalized answers.
          </p>
          <Link href="/contact" className="btn-outline">
            Contact Our Team
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
