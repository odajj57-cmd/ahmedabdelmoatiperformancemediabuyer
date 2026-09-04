import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/links";

/**
 * Floating gold WhatsApp button, bottom-left.
 * Appears after the user starts scrolling, and hides whenever another CTA
 * (services / about / portfolio buttons, contact section, footer) is on screen.
 */
const FloatingWa = () => {
  const [scrolled, setScrolled] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 350);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('#contact, footer, [data-cta="wa"]'),
    );
    if (!targets.length) return;
    const seen = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) seen.add(entry.target);
          else seen.delete(entry.target);
        }
        setCtaVisible(seen.size > 0);
      },
      { threshold: 0.15 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const show = scrolled && !ctaVisible;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-5 left-5 z-[90] grid h-14 w-14 place-items-center rounded-full bg-gold-rich text-gold-rich-foreground shadow-[0_10px_30px_-8px_oklch(0.78_0.16_82_/_0.6)] transition-all duration-300 hover:brightness-110 hover:scale-105 ${
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
      }`}
    >
      <FaWhatsapp className="h-7 w-7" aria-hidden="true" />
    </a>
  );
};

export default FloatingWa;
