import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import SectionWrapper from "./components/SectionWrapper";

const products = [
  { 
    icon: "🌱", 
    title: "Cassava Chips", 
    description: "Premium quality cassava chips for food processing and industrial applications. High starch content, nutritious, and versatile.",
    link: "/products#cassava-chips"
  },
  { 
    icon: "🐄", 
    title: "Animal Feed", 
    description: "Nutrient-rich cassava-based feed formulations for sustainable livestock production. Cost-effective and eco-friendly solution.",
    link: "/products#animal-feed"
  },
  { 
    icon: "♻️", 
    title: "Bio-Fibres", 
    description: "Agro-fibres processed for sustainable packaging and bio-based products. Supporting circular economy principles.",
    link: "/products#fibres"
  },
];

const valueChainSteps = [
  { 
    icon: "👨‍🌾", 
    title: "Farmer Networks", 
    detail: "Direct partnerships with smallholder farmers for sustainable cassava sourcing" 
  },
  { 
    icon: "🏭", 
    title: "Processing", 
    detail: "State-of-the-art equipment for efficient and clean processing operations" 
  },
  { 
    icon: "⚡", 
    title: "Clean Energy", 
    detail: "Renewable energy integration to minimize carbon footprint and operational costs" 
  },
  { 
    icon: "📦", 
    title: "Quality Output", 
    detail: "Premium products ready for domestic and international markets" 
  },
];

const impactAreas = [
  { 
    title: "SDG 2: Zero Hunger", 
    description: "Enhanced food security through improved agricultural productivity and value addition" 
  },
  { 
    title: "SDG 7: Clean Energy", 
    description: "Integration of renewable energy in processing to reduce emissions" 
  },
  { 
    title: "SDG 12: Responsible Consumption", 
    description: "Sustainable production practices with minimal waste and maximum resource efficiency" 
  },
  { 
    title: "SDG 13: Climate Action", 
    description: "Carbon-neutral operations through energy optimization and bio-product development" 
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        tagline="Freeway Agro Limited"
        title="Sustainable Cassava Processing for a Better Future"
        subtitle="We transform cassava into high-value products through responsible processing, clean energy integration, and farmer-first partnerships."
        image="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1800&q=80"
        primaryCTA={{ label: "Explore Products", href: "/products" }}
        secondaryCTA={{ label: "Learn More", href: "/about" }}
      />

      {/* About Preview Section */}
      <SectionWrapper
        eyebrow="Who We Are"
        title="Building a cleaner and stronger agro value chain"
        description="Freeway Agro Limited combines modern processing with sustainability to create quality outputs and positive community impact."
      >
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-base text-slate-600 leading-relaxed mb-3">
              Our mission is to deliver reliable cassava processing while reducing waste, optimizing energy, and improving farmer livelihoods. We design each stage for scalability and long-term environmental benefit.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-5">
              With modern infrastructure and a commitment to sustainability, we&apos;re positioned to become a regional leader in value-added agricultural products.
            </p>
            <Link href="/about" className="btn-primary">
              Discover Our Complete Story
            </Link>
          </div>
          <div className="premium-card p-5">
            <h3 className="text-lg font-bold text-[var(--primary)]">Operational Snapshot</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { label: "Farmer Partners", value: "500+" },
                { label: "Processing Capacity", value: "2000+ t/y" },
                { label: "Product Lines", value: "4" },
                { label: "Waste Utilization", value: "90%" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">{item.label}</p>
                  <p className="mt-1 text-lg font-bold text-[var(--primary)]">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-600">
              High-efficiency cassava processing with strong community impact and reliable product quality.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Products Section */}
      <SectionWrapper 
        eyebrow="Our Products" 
        title="High-impact products from cassava"
        description="Each product is designed for maximum value, sustainability, and market relevance."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </SectionWrapper>

      {/* Sustainability Vision Section */}
      <SectionWrapper
        className="bg-[var(--primary)] text-white"
        eyebrow="Our Vision"
        title="Sustainability is our operating system"
        tone="dark"
      >
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-base text-white/90 leading-relaxed mb-3">
              We aim to minimize emissions, maximize resource efficiency, and build a resilient agricultural ecosystem for future generations.
            </p>
            <p className="text-base text-white/90 leading-relaxed mb-5">
              Every decision—from equipment selection to energy sourcing—is made with environmental stewardship in mind.
            </p>
            <Link href="/environment" className="btn-outline">
              Explore Our Environmental Impact
            </Link>
          </div>
          <div className="premium-card-dark p-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80"
              alt="Sustainable agriculture and environment"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Value Chain Section */}
      <SectionWrapper 
        eyebrow="Process Flow" 
        title="From farm to future-ready products"
        description="Our integrated value chain ensures quality, sustainability, and farmer prosperity at every stage."
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueChainSteps.map((step, idx) => (
            <div key={step.title} className="relative">
              <div className="premium-card p-6 text-center h-full hover:shadow-xl transition-all">
                <span className="text-4xl block mb-3">{step.icon}</span>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">Step {idx + 1}</p>
                <h3 className="mt-2 text-lg font-bold text-[var(--primary)]">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.detail}</p>
              </div>
              {idx < valueChainSteps.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden lg:block">
                  <div className="text-[var(--accent)] text-2xl">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Impact Section - SDGs */}
      <SectionWrapper
        eyebrow="Our Impact"
        title="Creating measurable change through sustainable practices"
        description="Our commitment to the UN Sustainable Development Goals drives every aspect of our operations."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {impactAreas.map((item) => (
            <div
              key={item.title}
              className="premium-card p-6 hover:shadow-xl transition-all group"
            >
              <h3 className="text-lg font-bold text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white" tone="dark">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to partner with us?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re interested in our products, environmental initiatives, or business partnerships, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
            <Link href="/products" className="btn-primary bg-white text-[var(--primary)] hover:bg-slate-100">
              View Our Products
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
