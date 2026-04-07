import Image from "next/image";
import Link from "next/link";

export default function Hero({
  tagline = "Freeway Agro Limited",
  title = "Sustainable Cassava Processing for a Better Future",
  subtitle = "We transform cassava into high-value products through responsible processing, clean energy integration, and farmer-first partnerships.",
  image = "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1800&q=80",
  primaryCTA = { label: "Explore Products", href: "/products" },
  secondaryCTA = { label: "Learn More", href: "/about" },
  overlayOpacity = "70",
  showLogo = false,
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-cover"
          priority
          quality={85}
        />
      </div>
      
      {/* Enhanced overlay with gradient */}
      <div className={`absolute inset-0 -z-10 bg-gradient-to-r from-[var(--primary)]/80 via-[var(--primary)]/75 to-[var(--primary)]/60`} />

      {showLogo && (
        <Link
          href="/"
          className="absolute left-4 top-4 z-20 rounded-2xl border border-white/40 bg-white/95 p-2 shadow-sm transition-all hover:border-white sm:left-5 sm:top-5 sm:p-3"
        >
          <Image
            src="/logo.png"
            alt="Freeway Agro Limited"
            width={568}
            height={572}
            priority
            className="h-24 w-auto object-contain sm:h-28 md:h-36 lg:h-44"
          />
        </Link>
      )}

      <div className="container-wide py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center animate-fade-in">
          {tagline && (
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-white animate-slide-in-left sm:text-lg drop-shadow-lg">
              {tagline}
            </p>
          )}
          
          <h1 className="mt-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl animate-slide-in-right animation-delay-100 drop-shadow-xl">
            {title}
          </h1>
          
          <p className="mx-auto mt-8 max-w-3xl text-xl text-white/95 sm:text-2xl lg:text-3xl font-medium animate-fade-in animation-delay-200 drop-shadow-lg leading-relaxed">
            {subtitle}
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-scale-in animation-delay-300">
            <Link
              href={primaryCTA.href}
              className="btn-primary bg-[var(--secondary)] text-[var(--primary)] hover:bg-white hover:text-[var(--primary)] text-lg font-bold px-8 py-4"
            >
              {primaryCTA.label}
            </Link>
            <Link
              href={secondaryCTA.href}
              className="btn-outline text-lg font-bold px-8 py-4"
            >
              {secondaryCTA.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
