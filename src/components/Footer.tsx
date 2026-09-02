import { FaWhatsapp } from "react-icons/fa";
import { ArrowUpLeft } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/links";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-12 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-10 items-start">
          {/* Brand Section */}
          <div className="w-full text-center md:text-right md:justify-self-end">
            <h3 className="fluid-h3 font-bold text-primary mb-3 sm:mb-4">Performance Marketer</h3>
            <p className="fluid-sm text-foreground">
              من الإعلان لشراء المنتج بحول البيانات لقرارات ربحية في البراند
            </p>
          </div>

          {/* Services Section */}
          <div className="w-full text-center md:justify-self-center">
            <h3 className="fluid-h3 font-semibold text-primary mb-3 sm:mb-4">الخدمات إلي بعملها</h3>
            <p className="fluid-sm text-foreground">إدارة الحملات الإعلانية</p>
            <p className="fluid-sm text-foreground">تصميم المواقع وتحسين معدل التحويل</p>
          </div>

          {/* Contact Section */}
          <div className="w-full flex flex-col justify-start items-center md:items-start text-center md:text-left md:justify-self-start">
            <h3 className="fluid-h3 font-semibold text-primary mb-3 sm:mb-4">
              يلا نكبر البراند بالأرقام والبيانات
            </h3>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل عبر واتساب"
              className="relative isolate inline-flex w-fit items-center justify-center gap-2 overflow-hidden rounded-full bg-gold-rich px-8 py-3.5 fluid-label font-bold text-gold-rich-foreground shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
            >
              <FaWhatsapp
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-[2.5em] text-gold-watermark opacity-[0.28]"
              />
              <ArrowUpLeft className="relative z-10 h-5 w-5" aria-hidden="true" />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
