import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "Environment", href: "/environment" },
  ],
  Resources: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  Connect: [
    { label: "LinkedIn", href: "https://linkedin.com", icon: "🔗" },
    { label: "Instagram", href: "https://instagram.com", icon: "📸" },
    { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
    { label: "Email", href: "mailto:info@freewayagro.com", icon: "✉️" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="container-wide py-12 sm:py-14 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Freeway Agro Limited"
                width={200}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="max-w-sm text-sm text-slate-600 leading-relaxed">
              Sustainable cassava processing for cleaner agriculture, stronger value chains, and measurable impact on communities and the environment.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-[var(--primary)] mb-3">Get Updates</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm placeholder-slate-400 transition-colors focus:border-[var(--primary)] focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-primary px-4"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-[var(--primary)] mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-[var(--primary)] flex items-center gap-2"
                    >
                      {link.icon && <span>{link.icon}</span>}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Freeway Agro Limited. All rights reserved.
          </p>
          
          {/* Social Links Compact */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
              aria-label="LinkedIn"
            >
              🔗
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
              aria-label="Instagram"
            >
              📸
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
              aria-label="Twitter"
            >
              𝕏
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
