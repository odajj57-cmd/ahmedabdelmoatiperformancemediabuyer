import { PHONE_DISPLAY } from "@/lib/links";
import { WHATSAPP_URL } from "@/lib/links";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-6 sm:py-8 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 items-start">
          {/* Brand Section */}
          <div className="w-full text-center md:text-right md:justify-self-end">
            <h3 className="fluid-h3 font-bold text-primary mb-3 sm:mb-4">Performance Media Buyer Specialist</h3>
            <p className="fluid-sm text-foreground leading-loose">
              بساهم في تحسين أداء الحملات من خلال تحليل الـData وفهم الـAudience والـContent وتحويل
              الـInsights والTests لقرارات تساعد الـTeam على تحقيق نتائج أفضل
            </p>
          </div>

          {/* Services Section */}
          <div className="w-full text-center md:justify-self-center">
            <h3 className="fluid-h3 font-semibold text-primary mb-3 sm:mb-4">الخدمات إلي بعملها</h3>
            <p className="fluid-sm text-foreground">إدارة الحملات الإعلانية</p>
            <p className="fluid-sm text-foreground">فهم الـWeb &amp; Conversion</p>
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
              dir="ltr"
              aria-label={`تواصل عبر واتساب ${PHONE_DISPLAY}`}
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
