import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import SectionWrapper from "../components/SectionWrapper";

const teamMembers = [
  {
    name: "Leadership Team",
    role: "Visionary Direction",
    description: "Combining decades of agricultural and sustainability expertise",
  },
  {
    name: "Technical Excellence",
    role: "Operations",
    description: "Modern processing infrastructure with continuous improvement focus",
  },
  {
    name: "Community Partnership",
    role: "Farmer Relations",
    description: "Direct engagement with farming communities for mutual growth",
  },
];

const values = [
  {
    icon: "🌍",
    title: "Sustainability",
    description: "Environmental stewardship in every business decision and operational process.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    description: "Collaborative approach with farmers, customers, and communities for shared prosperity.",
  },
  {
    icon: "📈",
    title: "Innovation",
    description: "Continuous improvement in processing technology and product development.",
  },
  {
    icon: "✅",
    title: "Quality",
    description: "Uncompromising standards in product quality and service delivery.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="About Freeway Agro Limited"
        subtitle="Building sustainable cassava processing with purpose, precision, and partnership"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80"
        primaryCTA={{ label: "Our Products", href: "/products" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />

      {/* Company Overview */}
      <SectionWrapper
        eyebrow="Our Story"
        title="Transforming Agriculture Through Innovation"
        description="Freeway Agro Limited bridges agriculture, technology, and sustainability to deliver reliable outcomes for farmers, customers, and communities."
      >
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Founded with a vision to revolutionize cassava processing in Africa, Freeway Agro Limited combines modern technology with sustainable practices. We work with smallholder farmers, technical experts, and distribution partners to improve processing quality and reduce waste.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Our state-of-the-art facility and commitment to farmer partnerships ensure we deliver consistent, high-quality products while contributing positively to local communities and the environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">
                View Products
              </Link>
              <Link href="/environment" className="btn-secondary">
                Environmental Focus
              </Link>
            </div>
          </div>
          <div className="premium-card p-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1200&q=80"
              alt="Freeway Agro facility and team"
              width={640}
              height={480}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper
        eyebrow="Core Values"
        title="What Drives Our Operations"
        description="These principles guide every decision and action across our organization."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="premium-card p-8">
              <span className="text-5xl block mb-4">{value.icon}</span>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="bg-gradient-to-b from-slate-50 to-white">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="premium-card p-8 border-l-4 border-[var(--secondary)]">
            <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Our Mission</h3>
            <p className="text-lg text-slate-600">
              To deliver high-quality cassava products and sustainable agricultural solutions that improve farmer livelihoods, meet market demands, and contribute to environmental preservation.
            </p>
          </div>
          <div className="premium-card p-8 border-l-4 border-[var(--accent)]">
            <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">Our Vision</h3>
            <p className="text-lg text-slate-600">
              To become a regional leader in sustainable agro-processing, setting industry standards for environmental responsibility, product quality, and community impact.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Team Overview */}
      <SectionWrapper
        eyebrow="Our Team"
        title="Expertise Across Every Function"
        description="We bring together talented individuals committed to excellence and sustainability."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="premium-card p-8 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--primary)]/10">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">{member.name}</h3>
              <p className="text-sm font-semibold text-[var(--secondary)] uppercase mb-2">{member.role}</p>
              <p className="text-slate-600">{member.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Key Statistics */}
      <SectionWrapper className="bg-[var(--primary)] text-white" tone="dark">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { number: "500+", label: "Farmer Partners" },
            { number: "2000+", label: "Tonnes/Year Capacity" },
            { number: "4", label: "Product Lines" },
            { number: "15+", label: "Years Combined Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-[var(--secondary)]">{stat.number}</p>
              <p className="mt-3 text-lg text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Partner With Us */}
      <SectionWrapper
        eyebrow="Partnership Value"
        title="Why Choose Freeway Agro"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Consistent Quality",
              description: "Strict quality control and modern processing ensure reliable products that meet international standards.",
            },
            {
              title: "Sustainability Certified",
              description: "Committed to environmentally responsible practices with measurable impact on emissions and waste reduction.",
            },
            {
              title: "Farmer-Centric Approach",
              description: "Direct farmer partnerships ensure fair pricing, technical support, and long-term relationship building.",
            },
            {
              title: "Flexible Solutions",
              description: "Custom product formulations and packaging options to meet diverse customer requirements.",
            },
          ].map((item) => (
            <div key={item.title} className="premium-card p-8">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white" tone="dark">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Build the Future Together</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a farmer, distributor, or corporate partner, we&apos;re excited to collaborate and create shared value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-outline">
              Connect With Us
            </Link>
            <Link href="/products" className="btn-primary bg-white text-[var(--primary)] hover:bg-slate-100">
              Explore Products
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
