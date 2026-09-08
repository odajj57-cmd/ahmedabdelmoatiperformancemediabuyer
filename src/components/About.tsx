import { motion } from "@/lib/nomotion";
import { Download } from "lucide-react";
import GoldWaButton from "./GoldWaButton";
import cvAsset from "@/assets/docs/cv.docx.asset.json";

const paragraphs = [
  "بخبرة سنتين في الـDigital Marketing.",
  "قومت بإدارة وتحسين الحملات الإعلانية وتطوير الـContent Strategy لقطاعات مختلفة منها E-commerce · Fashion · Furniture · Interior Finishing، وأدرت حملات بإجمالي ميزانيات تجاوزت 1M EGP.",
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

      <p className="fluid-lead mb-4 font-semibold text-primary max-w-3xl">About Me.</p>


      {paragraphs.map((text) => (
        <p key={text} className="fluid-body text-foreground mb-4 max-w-3xl leading-loose">
          {text}
        </p>
      ))}

      <p className="fluid-body font-semibold text-primary text-right mb-5 mt-6">
        جاهز نبني Funnel ونحول البيانات لقرارات ربحية في البراند؟
      </p>

      <div className="flex flex-wrap gap-3 justify-end items-center">
        <GoldWaButton withArrow>جاهز؟ خلينا نشتغل على البراند</GoldWaButton>
        <a
          href={cvAsset.url}
          download="Ahmed_Abdel_Moati_CV.docx"
          className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-card px-6 py-3 fluid-sm font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          <span>تحميل الـCV</span>
          <Download className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </motion.section>
  );
};

export default About;
