'use client';

import Image from 'next/image';
import { useState } from 'react';
import Hero from '../components/Hero';
import SectionWrapper from '../components/SectionWrapper';

export default function BookTractor() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    startDate: '',
    duration: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send to WhatsApp
    const message = `*Tractor Booking Request*\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nStart Date: ${formData.startDate}\nDuration: ${formData.duration}\n\nNotes: ${formData.notes}`;
    const whatsappLink = `https://wa.me/+2349164091702?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', location: '', startDate: '', duration: '', notes: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <main className="bg-white">
      <Hero
        title="Book a Tractor"
        subtitle="Quality agricultural equipment deployed fast to your location. Fill in your details and we'll confirm within 24 hours."
        image="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1800&h=900&fit=crop"
        primaryCTA={{ label: "💬 Chat on WhatsApp", href: "https://wa.me/+2349164091702" }}
        secondaryCTA={{ label: "Booking Form", href: "#booking-form" }}
      />

      <SectionWrapper id="booking-form">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop"
              alt="Tractor Equipment"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Form */}
          <div>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-2">Get Your Equipment Today</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will contact you within 24 hours to confirm your booking.
            </p>

            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                ✓ Your booking request has been sent to WhatsApp. We&apos;ll contact you soon!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d8659]"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d8659]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d8659]"
                    placeholder="+234 xxx xxx xxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location/Address *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d8659]"
                  placeholder="Your location"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date *</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d8659]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration *</label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d8659]"
                  >
                    <option value="">Select duration</option>
                    <option value="1 day">1 Day</option>
                    <option value="3 days">3 Days</option>
                    <option value="1 week">1 Week</option>
                    <option value="2 weeks">2 Weeks</option>
                    <option value="1 month">1 Month</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2d8659]"
                  placeholder="Any special requirements or questions?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2d8659] hover:bg-[#1f5c3f] text-white font-bold py-3 rounded-lg transition-all"
              >
                Send Booking Request via WhatsApp
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              Or call us directly: <a href="tel:+2349164091702" className="text-[#2d8659] font-bold">+234 916 409 1702</a>
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Equipment Features */}
      <SectionWrapper
        className="bg-slate-50"
        eyebrow="Why Choose Us"
        title="Why Choose Our Equipment?"
        description="We provide well-maintained, reliable tractors for all your agricultural needs."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: '✓ Quality Equipment', desc: 'Well-maintained tractors in excellent condition' },
            { title: '✓ Affordable Rates', desc: 'Competitive pricing for all farm sizes' },
            { title: '✓ Fast Delivery', desc: 'Quick deployment to your location' },
            { title: '✓ 24/7 Support', desc: 'Customer support available round the clock' },
            { title: '✓ Trained Operators', desc: 'Professional operators can be provided' },
            { title: '✓ Flexible Terms', desc: 'Book for hours, days, weeks, or months' },
          ].map((item, i) => (
            <div key={i} className="premium-card p-6">
              <h3 className="text-lg font-bold text-[var(--secondary)] mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white" tone="dark">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
          <p className="mb-6 text-lg text-white/90">
            Contact us via WhatsApp for instant response
          </p>
          <a
            href="https://wa.me/+2349164091702"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1fad50] transition-all"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </SectionWrapper>
    </main>
  );
}
