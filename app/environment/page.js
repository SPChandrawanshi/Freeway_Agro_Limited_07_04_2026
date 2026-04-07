import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import SectionWrapper from "../components/SectionWrapper";

const initiatives = [
  {
    icon: "⚡",
    title: "Renewable Energy Integration",
    description: "30% of processing energy from solar and biogas sources. Target: 50% by 2027.",
    impact: "-500 tonnes CO2/year",
  },
  {
    icon: "♻️",
    title: "Zero-Waste Processing",
    description: "100% of cassava residues utilized for feed, fibre, or energy generation.",
    impact: "-1000 tonnes waste/year",
  },
  {
    icon: "💧",
    title: "Water Conservation",
    description: "Recycled water treatment system reduces fresh water usage by 40%.",
    impact: "-2M litres/year",
  },
  {
    icon: "🌱",
    title: "Soil Health Program",
    description: "Educational initiative with 500+ farmers on regenerative agriculture practices.",
    impact: "15% yield improvement",
  },
];

export default function EnvironmentPage() {
  return (
    <div>
      <Hero
        title="Environmental Sustainability"
        subtitle="Making measurable impact through responsible processing and farmer partnerships"
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1800&q=80"
        primaryCTA={{ label: "Our Initiatives", href: "#initiatives" }}
        secondaryCTA={{ label: "Learn More", href: "#impact" }}
      />

      <SectionWrapper
        eyebrow="Our Commitment"
        title="Building Sustainable Cassava Processing Systems"
        description="Environmental stewardship is embedded in our operations, not an afterthought."
      >
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Freeway Agro Limited is committed to producing high-value cassava products with minimal environmental impact. Our integrated approach combines renewable energy, waste reduction, and farmer support to create sustainable value chains.
            </p>
            <Link href="/contact" className="btn-primary">
              Partner With Us
            </Link>
          </div>
          <div className="premium-card p-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
              alt="Sustainable agriculture"
              width={600}
              height={480}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="initiatives"
        eyebrow="Environmental Initiatives"
        title="Concrete Actions, Measurable Results"
        description="We're implementing specific environmental programs across operations."
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {initiatives.map((initiative) => (
            <div key={initiative.title} className="premium-card p-8">
              <span className="text-5xl block mb-4">{initiative.icon}</span>
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-3">{initiative.title}</h3>
              <p className="text-slate-600 mb-6">{initiative.description}</p>
              <div className="inline-block bg-[var(--secondary)]/10 px-4 py-2 rounded-full">
                <p className="font-bold text-[var(--secondary)] text-sm">{initiative.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="impact" eyebrow="Progress" title="Annual Environmental Metrics">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { metric: "500+ tonnes", label: "CO2 Reduction/Year" },
            { metric: "1000+ tonnes", label: "Waste Reused" },
            { metric: "2M litres", label: "Water Saved" },
            { metric: "30%", label: "Renewable Energy Use" },
          ].map((item) => (
            <div key={item.label} className="premium-card p-8 text-center">
              <p className="text-4xl font-bold text-[var(--secondary)] mb-2">{item.metric}</p>
              <p className="font-semibold text-[var(--primary)]">{item.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] text-white" tone="dark">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Sustainability Journey</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us to create measurable environmental impact.
          </p>
          <Link href="/contact" className="btn-outline">
            Get Involved
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
