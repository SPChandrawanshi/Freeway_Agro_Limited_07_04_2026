import Link from "next/link";
import Hero from "../components/Hero";
import SectionWrapper from "../components/SectionWrapper";

const posts = [
  {
    id: 1,
    title: "How cassava value chains can drive rural growth",
    category: "Agriculture",
    date: "November 2024",
    excerpt: "A practical look at market linkages, farmer inclusion, and long-term agricultural resilience.",
  },
  {
    id: 2,
    title: "Designing low-waste processing systems",
    category: "Sustainability",
    date: "October 2024",
    excerpt: "Steps we follow to convert by-products into meaningful and profitable outputs.",
  },
  {
    id: 3,
    title: "Sustainability metrics that actually matter",
    category: "Impact",
    date: "September 2024",
    excerpt: "The indicators we track to ensure environmental impact is measurable and transparent.",
  },
  {
    id: 4,
    title: "Climate-smart agriculture for smallholder farmers",
    category: "Farming",
    date: "August 2024",
    excerpt: "Practical techniques for cassava farmers to improve yields while adapting to climate change.",
  },
  {
    id: 5,
    title: "The future of agro-processing in Africa",
    category: "Industry",
    date: "July 2024",
    excerpt: "Trends, opportunities, and innovations shaping the next generation of agricultural processing.",
  },
  {
    id: 6,
    title: "Building resilient food systems",
    category: "Food Security",
    date: "June 2024",
    excerpt: "How sustainable cassava processing contributes to food security and community prosperity.",
  },
];

export default function BlogPage() {
  return (
    <div>
      <Hero
        title="Our Blog"
        subtitle="Insights on sustainable agriculture, agro-processing innovation, and community impact"
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1800&q=80"
        primaryCTA={{ label: "Latest Articles", href: "#articles" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />

      <SectionWrapper
        id="articles"
        eyebrow="All Articles"
        title="Stories, Updates & Insights"
        description="Explore our thoughts on agriculture innovation, sustainability, and responsible growth."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="premium-card p-6 flex flex-col h-full hover:shadow-xl transition-all">
              <div className="mb-4">
                <div className="inline-block px-3 py-1 rounded-full bg-[var(--secondary)]/20 mb-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--secondary)]">
                    {post.category}
                  </p>
                </div>
                <p className="text-xs text-slate-500">{post.date}</p>
              </div>
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3 flex-1">{post.title}</h3>
              <p className="text-slate-600 mb-6 flex-1">{post.excerpt}</p>
              <Link
                href="#"
                className="inline-flex items-center font-semibold text-[var(--accent)] hover:text-[var(--primary)] transition-colors"
              >
                <span>Read article →</span>
              </Link>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white" tone="dark">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated with Our Latest Insights</h2>
          <p className="text-lg text-white/90 mb-8">
            Subscribe to our newsletter for regular updates on agriculture and sustainability.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-full px-6 py-3 text-[var(--primary)] placeholder-slate-400 focus:outline-none"
            />
            <button type="submit" className="btn-outline">
              Subscribe
            </button>
          </form>
          <p className="text-sm text-white/80">No spam, just valuable insights.</p>
        </div>
      </SectionWrapper>
    </div>
  );
}
