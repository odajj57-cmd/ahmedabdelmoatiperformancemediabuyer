import { useState } from 'react';
import { motion } from '@/lib/nomotion';
import { ChevronDown, CornerUpRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/links';

const services = [
  {
    title: 'إدارة الحملات الإعلانية',
    body:
      'بشتغل على إدارة وتحسين الحملات الإعلانية على Meta Ads وTikTok Ads بداية من فهم الـObjective والـAudience وبناء الـFunnel وتحليل الـData والـTests ثم اتخاذ قرار مبني على النتائج والأرقام وبتعاون بشكل مستمر مع الـContent والـDesign Team لربط الـCreative بأداء الحملات وتحويل الـData والـInsights إلى فرص واضحة لتطوير الـContent والـAds.',
    toolsLabel: 'مهارات وأدوات بستخدمها:',
    tools:
      'GA4 · Meta Pixel · Excel · Google Sheets · ChatGPT · Claude · استراتيجية المحتوى واختبار الحملات وإعادة الاستهداف والتحسين المستمر',
  },
  {
    title: 'فهم الـWeb & Conversion',
    body:
      'بفهم أساسيات الـLanding Pages وتجربة المستخدم وبحلل رحلة العميل من الـAd للـConversion لتحديد نقاط الاحتكاك وفرص تحسين معدل التحويل.',
    toolsLabel: 'المهارات والأدوات إلي بستخدمها:',
    tools: 'تحليل صفحات الهبوط والتصميم على Shopify · Easy Orders',
  },
];


const Services = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="services"
      dir="rtl"
      className="bg-background py-8 sm:py-10"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="services-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="fluid-h2 mb-8 text-right font-bold text-primary sm:mb-10"
        >
          الخدمات إلي بعملها
        </motion.h2>

        <div className="border-t border-border">
          {services.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.title} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`service-body-${index}`}
                  className={`flex w-full items-center justify-between gap-4 py-4 text-right transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:py-5 ${isOpen ? "text-primary" : "text-foreground"}`}
                >
                  <span className="fluid-body font-bold">{item.title}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                <div
                  id={`service-body-${index}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="fluid-body max-w-4xl text-right leading-loose text-foreground">
                      {item.body}
                    </p>
                    <p className="fluid-sm pt-4 text-right font-semibold text-primary">
                      {item.toolsLabel}
                    </p>
                    <p className="fluid-sm max-w-4xl pt-1 pb-6 text-right leading-loose text-foreground">
                      {item.tools}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-left">
          <span className="inline-flex w-fit flex-col items-center gap-1.5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative isolate inline-flex w-fit items-center justify-center gap-2 overflow-hidden rounded-full bg-gold-rich px-6 py-3 fluid-sm font-bold text-gold-rich-foreground shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-105"
            >
              <span className="relative z-10" dir="ltr">Get In Touch</span>
              <CornerUpRight className="relative z-10 h-4 w-4" aria-hidden="true" />
            </a>
            <span className="fluid-label text-gold-rich">*دوس على الشريط*</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
