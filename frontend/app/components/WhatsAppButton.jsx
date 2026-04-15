"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const whatsappNumber = "+2349164091702";
  const message = "Hi! I'm interested in booking a tractor or learning more about Freeway Agro services.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodedMessage}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <span className="text-3xl animate-bounce">💬</span>
      <span className="absolute -top-12 right-0 bg-[#1a1a1a] text-white px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
        Chat on WhatsApp
      </span>
    </Link>
  );
}
