export default function SectionWrapper({
  title,
  eyebrow,
  description,
  className = "",
  tone = "light",
  children,
  maxWidth = "3xl",
  spacing = "default",
  id,
}) {
  const isDark = tone === "dark";
  const maxWidthClass = {
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
  }[maxWidth] || "max-w-3xl";
  const spacingClass = spacing === "compact" ? "py-8 sm:py-10 lg:py-12" : "py-10 sm:py-12 lg:py-14";

  return (
    <section id={id} className={`${spacingClass} ${className}`}>
      <div className="container-wide">
        {(eyebrow || title || description) && (
          <div className={`mb-8 sm:mb-10 ${maxWidthClass}`}>
            {eyebrow && (
              <p
                className={`mb-3 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] ${
                  isDark ? "text-[var(--secondary)]" : "text-[var(--accent)]"
                }`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ${
                  isDark ? "text-white" : "text-[var(--primary)]"
                }`}
              >
                {title}
              </h2>
            )}
            {description && (
              <p className={`mt-4 text-base sm:text-lg leading-relaxed ${isDark ? "text-white/90" : "text-slate-600"}`}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
