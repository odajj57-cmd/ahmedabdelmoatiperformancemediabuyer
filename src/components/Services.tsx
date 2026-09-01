import { motion } from 'framer-motion';
import { ArrowUpLeft } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    title: 'إدارة الحملات الإعلانية',
    body:
      'ببني وأدير الحملات الإعلانية على Meta Ads وTikTok Ads وبركز على تحليل وبناء رحلة العميل ومسار التحويل، مع التركيز على استراتيجية الـFunnel وتوليد العملاء وتحسين معدلات التحويل.',
    toolsLabel: 'مهارات وأدوات بستخدمها:',
    tools:
      'GA4 · Meta Pixel · Excel · Google Sheets · ChatGPT · Claude · استراتيجية المحتوى واختبار الحملات وإعادة الاستهداف والتحسين المستمر',
  },
  {
    title: 'تصميم المواقع وتحسين معدل التحويل',
    body:
      'بصمم مواقع وصفحات هبوط وبركز فيها على شراء العميل بشكل أسرع.',
    toolsLabel: 'المهارات والأدوات إلي بستخدمها:',
    tools: 'تحليل صفحات الهبوط والتصميم على Shopify · Easy Orders',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-background relative overflow-hidden">
      {/* إضاءة خلفية خفيفة جدًا */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-primary rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-right mb-10 sm:mb-14"
        >
          <h2 className="fluid-h2 font-bold text-primary mb-4">
            الخدمات إلي بعملها
          </h2>
        </motion.div>

        {services.map((s) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="border-t border-primary/15 last:border-b py-7 sm:py-8 text-right"
          >
            <h3 className="fluid-h3 font-bold text-primary">{s.title}</h3>
            <p className="pt-3 fluid-body text-foreground max-w-3xl leading-loose">{s.body}</p>
            <p className="pt-4 fluid-sm font-semibold text-primary">{s.toolsLabel}</p>
            <p className="pt-1 fluid-sm text-foreground max-w-3xl leading-loose">{s.tools}</p>
          </motion.div>
        ))}

        {/* Section CTA */}
        <div className="mt-6 sm:mt-8 text-left">
          <a
            href="#faq"
            className="relative isolate inline-flex w-fit items-center justify-center gap-2 overflow-hidden rounded-full bg-gold-rich px-6 py-3 fluid-sm font-bold text-gold-rich-foreground shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-105"
          >
            <span className="relative z-10">عندك أسئلة قبل ما نبني حملتك الإعلانية؟ إجابتها هنا</span>
            <ArrowUpLeft className="relative z-10 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
