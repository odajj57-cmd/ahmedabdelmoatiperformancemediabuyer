import { motion } from "framer-motion";
import GoldWaButton from "./GoldWaButton";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-12 sm:my-16 md:my-20"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="sr-only">أنا مين</h2>

      <p className="fluid-lead mb-4 font-semibold text-primary max-w-3xl">
        أنا Performance Marketer ببني حملات إعلانية على منصات Meta وTikTok Ads وبعتمد في شغلي على
        البيانات وتحويلها لقرارات مربحة لتحقيق هدف البراند
      </p>

      <p className="fluid-body text-foreground mb-4 max-w-3xl">
        ببدأ بفهم هدف البراند والجمهور المستهدف وبعدها بحط خطة لحملاتك الإعلانية وبجهز المحتوى إلي
        هنستخدمة لتحقيق الهدف إلي حطناه
      </p>

      <p className="fluid-body text-foreground mb-4 max-w-3xl">
        براقب النتائج بشكل مستمر عشان أعرف إيه إلي بيجيب نتيجة فعلا وإيه إلي محتاج يتغير أو
        يتحسن
      </p>

      <p className="fluid-body text-foreground mb-4 max-w-3xl">
        تركيزي الأساسي على التجارة الإلكترونية وإشتغلت على حملات إعلانية بأهداف مختلفة زي زيادة
        المبيعات والرسايل
      </p>

      <p className="fluid-body text-primary mb-6 max-w-3xl">
        هدفي مش مجرد تشغيل لحملتك الإعلانية بل إني أحقق نتائج تقدر تشوفها وتقيسها بالأرقام
      </p>

      <p className="fluid-body font-semibold text-primary text-right mb-5">
        #محمد_عبدالقادر_بيرفورمنس_ماركتير
      </p>

      <div className="flex flex-wrap gap-3 justify-end">
        <GoldWaButton withArrow>يلا بينا نبني حملتك الإعلانية</GoldWaButton>
      </div>
    </motion.section>
  );
};

export default About;
