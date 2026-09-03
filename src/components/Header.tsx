import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-primary/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="fluid-h3 font-extrabold text-primary tracking-wide hover:text-accent transition-colors truncate min-w-0"
          >
            Ahmed Abdel Moati
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 lg:gap-6">
            <a 
              href="#about" 
              className="text-foreground font-semibold hover:text-primary transition-colors text-sm lg:text-base relative group"
            >
              أنا مين
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#services" 
              className="text-foreground font-semibold hover:text-primary transition-colors text-sm lg:text-base relative group"
            >
              بعمل إيه
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#portfolio" 
              className="text-foreground font-semibold hover:text-primary transition-colors text-sm lg:text-base relative group"
            >
              نتائج وأرقام
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground font-semibold hover:text-primary transition-colors text-sm lg:text-base relative group"
            >
              عملائي قالو عني
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact" 
              className="text-foreground font-semibold hover:text-primary transition-colors text-sm lg:text-base relative group"
            >
              يلا نبدأ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden shrink-0 p-2 -m-2 text-foreground hover:text-primary transition-colors"
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3">
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-foreground font-semibold hover:text-primary transition-colors fluid-sm py-2.5"
            >
              أنا مين
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-foreground font-semibold hover:text-primary transition-colors fluid-sm py-2.5"
            >
              بعمل إيه
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-foreground font-semibold hover:text-primary transition-colors fluid-sm py-2.5"
            >
              نتائج وأرقام
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-foreground font-semibold hover:text-primary transition-colors fluid-sm py-2.5"
            >
              عملائي قالو عني
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-foreground font-semibold hover:text-primary transition-colors fluid-sm py-2.5"
            >
              يلا نبدأ
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
