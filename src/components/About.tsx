import { motion } from "@/lib/nomotion";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/links";

const paragraphs = [
  "بخبرة سنتين في الـDigital Marketing بهتم برحلة العميل من الإعلان لشراء المنتج أو الخدمة.",
  "اشتغلت على إدارة وتحسين الحملات الإعلانية وتطوير الـContent Strategy لقطاعات مختلفة منها E-commerce · Fashion · Furniture · Interior Finishing، وأدرت حملات بإجمالي ميزانيات تجاوزت 1M EGP.",
  "شغلي بيجمع بين فهم الـAudience والـContent وبين قراءة الـData وإدارة الـPaid Media، وده بيساعدني أشوف الصورة بشكل أوسع من مجرد أرقام الـAds Manager.",
  "طريقتي مبنية على Diagnosis First: أفهم الـObjective، أحلل الـAudience والـContent والـFunnel، أحدد المشكلة وفرص التحسين، وبعدها أبني Tests واضحة وأطوّر الأداء بناءً على النتائج.",
  "Analyze → Test → Learn → Optimize → Scale",
];

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-10"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="sr-only">أنا مين</h2>

      {paragraphs.map((text) => (
        <p key={text} className="fluid-body text-foreground mb-4 max-w-3xl leading-loose">
          {text}
        </p>
      ))}

      <p className="fluid-body font-semibold text-primary text-right mb-5 mt-6">
        جاهز نبني Funnel ونحول البيانات لقرارات ربحية في البراند؟
      </p>

      <div className="flex flex-wrap gap-3 justify-end items-center">
        <span className="inline-flex w-fit flex-col items-center gap-1.5">
          <a
            href={WHATSAPP_URL}
            data-cta="wa"
            target="_blank"
            rel="noopener noreferrer"
            dir="ltr"
            className="relative isolate inline-flex w-fit items-center justify-center gap-2 overflow-hidden rounded-full bg-gold-rich px-6 py-3 fluid-sm font-bold text-gold-rich-foreground shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-105"
          >
            <FaWhatsapp
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-[2.5em] text-gold-watermark opacity-[0.28]"
            />
            <span className="relative z-10">Let’s Talk About The Role</span>
            <ArrowRight className="relative z-10 h-4 w-4" aria-hidden="true" />
          </a>
          <span className="fluid-label text-gold-rich">*دوس على الشريط*</span>
        </span>
      </div>
    </motion.section>
  );
};

export default About;
