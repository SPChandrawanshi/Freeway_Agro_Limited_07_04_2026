import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import SectionWrapper from "../components/SectionWrapper";

const productList = [
  {
    icon: "🌱",
    id: "cassava-chips",
    title: "Cassava Chips",
    shortDescription: "Premium processed cassava chips for diverse applications",
    fullDescription: "Our cassava chips are processed to consistent quality standards using modern techniques. Perfect for food manufacturers and industrial applications with high starch content and superior texture.",
    specs: [
      "Starch content: 32-35%",
      "Moisture: < 12%",
      "Purity: > 95%",
      "Packaging: 25kg/50kg bags",
      "Certifications: Food-grade quality",
    ],
    applications: [
      "Food industry (starch extraction)",
      "Animal feed supplement",
      "Industrial starch processing",
      "Ethanol production",
    ],
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "🐄",
    id: "animal-feed",
    title: "Animal Feed",
    shortDescription: "Nutrient-rich cassava-based livestock feed",
    fullDescription: "Formulated from cassava residues and complementary ingredients for optimal livestock nutrition. Cost-effective and sustainable alternative to conventional feed with proven results.",
    specs: [
      "Protein: 8-12%",
      "Energy: 2.8-3.2 Mcal/kg",
      "Fiber: < 8%",
      "Moisture: < 12%",
      "Bulk packaging available",
    ],
    applications: [
      "Cattle feed",
      "Pig feed",
      "Poultry supplement",
      "Small ruminant feed",
    ],
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: "♻️",
    id: "fibres",
    title: "Bio-Fibres",
    shortDescription: "Eco-friendly agro-fibres for sustainable packaging",
    fullDescription: "Premium quality fibres extracted from cassava plants for sustainable applications. Supporting circular economy with environmentally responsible, biodegradable solutions.",
    specs: [
      "Length: Customizable",
      "Strength: High tensile strength",
      "Color: Natural/bleached options",
      "Moisture: < 13%",
      "100% biodegradable",
    ],
    applications: [
      "Sustainable packaging",
      "Composite materials",
      "Erosion control",
      "Agricultural mulch",
    ],
    image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b1?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ProductsPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Our Products"
        subtitle="High-impact products derived from sustainable cassava processing"
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1800&q=80"
        primaryCTA={{ label: "Contact Sales", href: "/contact" }}
        secondaryCTA={{ label: "About Us", href: "/about" }}
      />

      {/* Product Overview */}
      <SectionWrapper
        eyebrow="Our Portfolio"
        title="Reliable products built on sustainable processing"
        description="Every product line is optimized for quality, traceability, and environmental responsibility. We serve food manufacturers, animal feed producers, and sustainable packaging companies."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productList.map((product) => (
            <ProductCard 
              key={product.title} 
              {...product}
              link={`#${product.id}`}
              description={product.shortDescription}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Detailed Product Sections */}
      {productList.map((product, idx) => (
        <SectionWrapper
          key={product.id}
          id={product.id}
          className={idx % 2 === 0 ? "bg-white" : "bg-gradient-to-b from-slate-50 to-white"}
        >
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {idx % 2 === 0 ? (
              <>
                <div>
                  <span className="text-5xl block mb-4">{product.icon}</span>
                  <h2 className="text-4xl font-bold text-[var(--primary)] mb-4">{product.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">{product.fullDescription}</p>

                  {/* Specs */}
                  <div className="mb-8">
                    <h4 className="font-bold text-[var(--primary)] mb-4">Specifications:</h4>
                    <ul className="space-y-2">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-[var(--secondary)] font-bold">✓</span>
                          <span className="text-slate-600">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="font-bold text-[var(--primary)] mb-4">Applications:</h4>
                    <ul className="space-y-2">
                      {product.applications.map((app, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-[var(--accent)]">•</span>
                          <span className="text-slate-600">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className="btn-primary mt-8">
                    Request Information
                  </Link>
                </div>
                <div className="premium-card p-0 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="premium-card p-0 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <span className="text-5xl block mb-4">{product.icon}</span>
                  <h2 className="text-4xl font-bold text-[var(--primary)] mb-4">{product.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">{product.fullDescription}</p>

                  {/* Specs */}
                  <div className="mb-8">
                    <h4 className="font-bold text-[var(--primary)] mb-4">Specifications:</h4>
                    <ul className="space-y-2">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-[var(--secondary)] font-bold">✓</span>
                          <span className="text-slate-600">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="font-bold text-[var(--primary)] mb-4">Applications:</h4>
                    <ul className="space-y-2">
                      {product.applications.map((app, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-[var(--accent)]">•</span>
                          <span className="text-slate-600">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className="btn-primary mt-8">
                    Request Information
                  </Link>
                </div>
              </>
            )}
          </div>
        </SectionWrapper>
      ))}

      {/* Quality Assurance */}
      <SectionWrapper
        eyebrow="Quality Commitment"
        title="Stringent Quality Control at Every Stage"
        description="We maintain ISO standards and undergo regular third-party testing to ensure consistent excellence."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Raw Material Selection",
              description: "Sourced from verified farmer partners with quality certification",
            },
            {
              title: "Processing Standards",
              description: "Modern equipment with real-time monitoring and quality checkpoints",
            },
            {
              title: "Final Testing",
              description: "Comprehensive lab testing for safety, purity, and nutritional content",
            },
          ].map((item) => (
            <div key={item.title} className="premium-card p-8">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Ordering Information */}
      <SectionWrapper className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white" tone="dark">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our sales team for customized quotes, bulk pricing, and delivery arrangements.
          </p>
          <Link href="/contact" className="btn-outline">
            Contact Sales Team
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
