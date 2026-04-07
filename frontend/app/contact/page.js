"use client";

import { useState } from "react";
import Link from "next/link";
import Hero from "../components/Hero";
import SectionWrapper from "../components/SectionWrapper";

const contactMethods = [
  {
    icon: "📧",
    title: "Email",
    value: "info@freewayagro.com",
    description: "General inquiries",
  },
  {
    icon: "📱",
    title: "Phone",
    value: "+234 800 000 0000",
    description: "Direct contact",
  },
  {
    icon: "📍",
    title: "Office",
    value: "Industrial Layout, Ogun State, Nigeria",
    description: "Visit us",
  },
  {
    icon: "🕒",
    title: "Hours",
    value: "Monday - Friday: 9AM - 5PM WAT",
    description: "Business hours",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Hero
        title="Get in Touch"
        subtitle="Let's build a sustainable future together. Reach out for partnerships, product inquiries, and strategic collaboration."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80"
        primaryCTA={{ label: "Contact Form", href: "#form" }}
        secondaryCTA={{ label: "Learn More", href: "/about" }}
      />

      <SectionWrapper
        eyebrow="How to Reach Us"
        title="Multiple ways to connect"
        description="Choose the method that works best for you. We're committed to responding promptly."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method) => (
            <div key={method.title} className="premium-card p-6 text-center h-full">
              <span className="text-5xl block mb-3">{method.icon}</span>
              <h3 className="font-bold text-[var(--primary)] mb-2">{method.title}</h3>
              <p className="font-semibold text-[var(--secondary)] text-sm mb-2">{method.value}</p>
              <p className="text-xs text-slate-600">{method.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="form"
        className="bg-gradient-to-b from-slate-50 to-white"
        eyebrow="Send us a Message"
        title="We'd love to hear from you"
        description="Fill out the form below and we'll get back to you promptly."
      >
        <div className="w-full">
          <form onSubmit={handleSubmit} className="premium-card p-6 md:p-8">
            <div className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-[var(--primary)] mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[var(--primary)] focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--primary)] mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[var(--primary)] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-[var(--primary)] mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[var(--primary)] focus:outline-none transition-colors"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--primary)] mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[var(--primary)] focus:outline-none transition-colors"
                    placeholder="Company name (optional)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--primary)] mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[var(--primary)] focus:outline-none transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--primary)] mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[var(--primary)] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>

              <p className="text-xs text-slate-500 text-center">
                We respect your privacy. Your information will be used only to respond to your inquiry.
              </p>
            </div>
          </form>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Partnership Opportunities"
        title="Explore collaboration possibilities"
        description="We welcome partnerships with farmers, distributors, retailers, and sustainability organizations."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "As a Farmer",
              description: "Join our farmer partnership program with fair pricing and technical support.",
              cta: "Learn More",
            },
            {
              title: "As a Distributor",
              description: "Become part of our supply chain with competitive margins and product support.",
              cta: "Inquire",
            },
            {
              title: "As a Corporate Partner",
              description: "Collaborate on sustainability initiatives and commercial partnerships.",
              cta: "Discuss",
            },
          ].map((partner) => (
            <div key={partner.title} className="premium-card p-8">
              <h3 className="text-2xl font-bold text-[var(--primary)] mb-4">{partner.title}</h3>
              <p className="text-slate-600 mb-6">{partner.description}</p>
              <Link href="#form" className="btn-primary w-full text-center block">
                {partner.cta}
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white" tone="dark">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Have a Quick Question?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Check out our FAQ for instant answers to common inquiries.
          </p>
          <Link href="/faq" className="btn-outline">
            Visit FAQ
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
