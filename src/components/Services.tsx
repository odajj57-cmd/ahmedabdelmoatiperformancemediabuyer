import { motion } from 'framer-motion';
import GoldWaButton from './GoldWaButton';

const ease = [0.22, 1, 0.36, 1] as const;

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

        {/* Single service */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="border-y border-primary/15 py-7 sm:py-8 text-right"
        >
          <h3 className="fluid-h3 font-bold text-primary">بناء وإدارة الحملات الإعلانية</h3>
          <p className="pt-3 fluid-body text-foreground max-w-3xl">
            ببني الحملة الإعلانية من الصفر بداية من تحديد الهدف والجمهور وببدأ أتابع أدائها بشكل
            مستمر وبحلل النتائج وبحدد إيه إلي بيحقق نتائج فعلية وإيه إلي محتاج أغيره وأحسنه لتحقيق
            هدف البراند
          </p>
        </motion.div>

        {/* Section CTA */}
        <div className="mt-6 sm:mt-8 text-left">
          <GoldWaButton withArrow>يلا نبني حملتك الإعلانية</GoldWaButton>
        </div>
      </div>
    </section>
  );
};

export default Services;
