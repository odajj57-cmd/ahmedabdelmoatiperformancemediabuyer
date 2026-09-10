import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowUpLeft } from "lucide-react";
import { FLOATING_WA_URL } from "@/lib/links";

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
    <div
      aria-hidden={!show}
      className={`fixed bottom-5 left-5 z-[90] flex flex-col items-center gap-1.5 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
      }`}
    >
      <a
        href={FLOATING_WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="يلا استشارة مجانية عبر واتساب"
        tabIndex={show ? 0 : -1}
        className="relative isolate inline-flex h-14 items-center gap-2 overflow-hidden rounded-full bg-gold-rich px-5 fluid-sm font-bold text-gold-rich-foreground shadow-[0_10px_30px_-8px_oklch(0.78_0.16_82_/_0.6)] transition-all duration-300 hover:brightness-110 hover:scale-105"
      >
        <FaWhatsapp
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-[2.5em] text-gold-watermark opacity-[0.28]"
        />
        <span className="relative z-10">يلا استشارة مجانية</span>
        <ArrowUpLeft className="relative z-10 h-4 w-4" aria-hidden="true" />
      </a>
      <span className="fluid-label text-gold-rich">*دوس على الشريط*</span>
    </div>
  );
};

export default FloatingWa;
