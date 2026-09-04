import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'أنا مين' },
  { href: '#services', label: 'بعمل إيه' },
  { href: '#portfolio', label: 'نتائج وأرقام' },
  { href: '#testimonials', label: 'عملائي قالو عني' },
  { href: '#contact', label: 'يلا نبدأ' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-primary/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-3 sm:py-4">
        <div className="flex justify-between items-center gap-3">
          <a
            href="#"
            className="fluid-h3 font-extrabold text-primary tracking-wide hover:text-accent transition-colors truncate min-w-0"
          >
            Ahmed Abdel Moati
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 lg:gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-foreground font-semibold hover:text-primary transition-colors text-sm lg:text-base relative group"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden shrink-0 grid h-11 w-11 place-items-center text-foreground hover:text-primary transition-colors"
            aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile side panel (slides in from the left) */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <button
          type="button"
          aria-label="إغلاق القائمة"
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        <nav
          className={`absolute left-0 top-0 h-full w-[78%] max-w-xs border-e border-primary/25 bg-card/95 px-5 pt-6 pb-10 shadow-2xl transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          aria-label="قائمة الأقسام"
        >
          <p className="fluid-label mb-4 font-bold text-primary">الأقسام</p>
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setIsMenuOpen(false)}
                className="block border-b border-border/60 py-3.5 fluid-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
