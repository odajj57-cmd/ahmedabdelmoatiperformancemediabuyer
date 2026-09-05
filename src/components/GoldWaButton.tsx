import { FaWhatsapp } from "react-icons/fa";
import { ArrowUpLeft } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/links";

interface Props {
  children: React.ReactNode;
  href?: string;
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
  as?: "a" | "button";
  caption?: boolean;
}

/** Pill gold CTA with a translucent WhatsApp watermark behind the label. */
const GoldWaButton = ({
  children,
  href = WHATSAPP_URL,
  withArrow = false,
  className = "",
  onClick,
  as = "a",
  caption = true,
}: Props) => {
  const classes = `relative isolate inline-flex w-fit items-center justify-center gap-2 overflow-hidden rounded-full bg-gold-rich px-6 py-3 fluid-sm font-bold text-gold-rich-foreground shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-105 ${className}`;

  const inner = (
    <>
      <FaWhatsapp
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-[2.5em] text-gold-watermark opacity-[0.28]"
      />
      <span className="relative z-10">{children}</span>
      {withArrow && <ArrowUpLeft className="relative z-10 h-4 w-4" aria-hidden="true" />}
    </>
  );

  const bar =
    as === "button" ? (
      <button type="button" data-cta="wa" onClick={onClick} className={classes}>
        {inner}
      </button>
    ) : (
      <a href={href} data-cta="wa" target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );

  if (!caption) return bar;

  return (
    <span className="inline-flex w-fit flex-col items-center gap-1.5">
      {bar}
      <span className="fluid-label text-muted-foreground">*دوس على الشريط*</span>
    </span>
  );
};

export default GoldWaButton;
