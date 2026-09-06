import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/links";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-8 sm:py-10 w-full">
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
              href={PHONE_TEL}
              dir="ltr"
              aria-label={`اتصل على ${PHONE_DISPLAY}`}
              className="fluid-h3 font-extrabold tracking-widest text-primary transition-colors hover:text-accent"
            >
              {PHONE_DISPLAY}
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
