import Link from "next/link";

export default function ProductCard({ 
  icon, 
  title, 
  description,
  link = "/products",
}) {
  return (
    <article className="premium-card p-6 flex flex-col h-full hover:shadow-xl transition-all duration-300 group">
      {/* Icon */}
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--secondary)]/20 text-3xl transition-transform group-hover:scale-110">
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-[var(--primary)] mb-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>

      {/* CTA */}
      <Link
        href={link}
        className="mt-6 inline-flex items-center font-semibold text-[var(--accent)] transition-all hover:text-[var(--primary)] hover:translate-x-1 group/link"
      >
        <span>Learn more</span>
        <span className="ml-2 transition-transform group-hover/link:translate-x-1">→</span>
      </Link>
    </article>
  );
}
