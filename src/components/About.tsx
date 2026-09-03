import { motion } from "framer-motion";
import { Download } from "lucide-react";
import GoldWaButton from "./GoldWaButton";
import cvAsset from "@/assets/docs/cv.docx.asset.json";

const paragraphs = [
  "في خلال آخر سنة اشتغلت على حسابات إعلانية بميزانيات وصلت لأكتر من مليون جنيه في قطاعات مختلفة وحققت نتائج ملموسة زي:",
  "عائد 35 ضعف الإنفاق الإعلاني في قطاع الأثاث خلال حملة Black Friday واحدة",
  "عائد 9.5 أضعاف الإنفاق في قطاع الفاشون خلال أول 29 يوم من إطلاق براند من الصفر بدون أي بيانات سابقة",
  "معدل تحويل من أقل من 1% لـ3.46% خلال أسبوع واحد بس بعد إعادة هيكلة فانل مشروع كان بيسرب عملاء مهتمين",
  "62 ألف شخص جديد و42 عميل محتمل عالي الجودة في قطاع التصميم الداخلي والتشطيبات بميزانية محدودة نسبيا وهدف مزدوج (وعي بالبراند + جمع عملاء)",
  "إلي بيميزني مش إني بجيب أرقام كبيرة وبس بل إني بقدر أوضحلك ليه الرقم ده حصل والسياق اللي وراه عشان ناخد قرار صح مبني على فهم حقيقي مش مجرد تخمين عشوائي",
  "دخلت مجال التسويق الرقمي من 2023 لكن زيي أي حد بيبدأ أول فترة كانت تعلم وتجربة وأخطاء، ومن حوالي سنتين اتغيرت الصورة بشكل واضح وبقيت بشتغل بمنهجية أكتر انضباط وكل قرار في أي حملة بيبقى مبني على أرقام واختبار حقيقي",
  "دلوقتي بطور نفسي في GA4 وGoogle Tag Manager عشان الصورة اللي بقدملها لعملائي تكون أعمق وأدق كل يوم في التحليل",
];

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

      <p className="fluid-lead mb-1 font-semibold text-primary max-w-3xl">متخصص في</p>
      <p className="fluid-lead mb-1 font-semibold text-primary max-w-3xl">Performance Marketing</p>
      <p className="fluid-lead mb-4 font-semibold text-primary max-w-3xl">Web Conversion</p>

      {paragraphs.map((text) => (
        <p key={text} className="fluid-body text-foreground mb-4 max-w-3xl leading-loose">
          {text}
        </p>
      ))}

      <p className="fluid-body font-semibold text-primary text-right mb-5 mt-6">
        جاهز نبني Funnel ونحول البيانات لقرارات ربحية في البراند؟
      </p>

      <div className="flex flex-wrap gap-3 justify-end items-center">
        <a
          href={cvAsset.url}
          download="Ahmed_Abdel_Moati_CV.docx"
          className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-card px-6 py-3 fluid-sm font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          <span>تحميل الـCV</span>
        </a>
        <GoldWaButton withArrow>لو جاهز يلا بينا نبني حملتك الإعلانية من هنا</GoldWaButton>
      </div>
    </motion.section>
  );
};

export default About;
