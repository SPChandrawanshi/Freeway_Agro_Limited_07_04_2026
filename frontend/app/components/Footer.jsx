/**
 * Footer Component - Dark Theme with Green Accents
 */
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
    { label: "Terms", href: "#" },
  ],
  Connect: [
    { label: "WhatsApp", href: "https://wa.me/+2349164091702", icon: "💬" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "🔗" },
    { label: "Instagram", href: "https://instagram.com", icon: "📸" },
    { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white border-t border-[#2d2d2d]">
      <div className="container-wide py-12 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Freeway Agro"
                width={150}
                height={50}
                className="h-10 w-auto mb-4"
              />
            </Link>
            <p className="text-sm text-gray-300 mb-6">
              Sustainable cassava processing for cleaner agriculture and stronger communities.
            </p>
            <Link
              href="https://wa.me/+2349164091702"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1fad50] transition-all"
            >
              💬 WhatsApp
            </Link>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-[#7cb342] mb-4 text-sm uppercase">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      className="text-sm text-gray-300 hover:text-[#7cb342] transition-colors inline-flex gap-2"
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

        {/* Bottom */}
        <div className="border-t border-[#2d2d2d] mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {currentYear} Freeway Agro Limited. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a href="https://wa.me/+2349164091702" target="_blank" className="h-8 w-8 rounded border border-[#2d8659] flex items-center justify-center text-[#7cb342] hover:bg-[#2d8659]/20 transition-all">
              💬
            </a>
            <a href="https://linkedin.com" target="_blank" className="h-8 w-8 rounded border border-[#2d2d2d] flex items-center justify-center text-gray-300 hover:border-[#7cb342] hover:text-[#7cb342] transition-all">
              🔗
            </a>
            <a href="https://instagram.com" target="_blank" className="h-8 w-8 rounded border border-[#2d2d2d] flex items-center justify-center text-gray-300 hover:border-[#7cb342] hover:text-[#7cb342] transition-all">
              📸
            </a>
            <a href="https://twitter.com" target="_blank" className="h-8 w-8 rounded border border-[#2d2d2d] flex items-center justify-center text-gray-300 hover:border-[#7cb342] hover:text-[#7cb342] transition-all">
              𝕏
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
