import { motion } from "framer-motion";
import GoldWaButton from "./GoldWaButton";

const paragraphs = [
  "دخلت مجال التسويق الرقمي من 2023 لكن الخبرة الفعلية سنتين، لأني زيي أي حد بيبدأ أول فترة كانت تعلم وتجربة وأخطاء.",
  "لكن من حوالي سنتين والصورة اتغيرت بشكل واضح — بدأت أشتغل بمنهجية أكتر انضباط وكل قرار في أي حملة بيبقى مبني على أرقام واختبار حقيقي مش تخمين أو حظ.",
  "خلال آخر سنة دي اشتغلت على حسابات إعلانية بميزانيات وصلت لأكتر من مليون جنيه في قطاعات مختلفة وحققت نتائج ملموسة في كل واحد منها:",
  "في قطاع الأثاث حققت عائد 35 ضعف الإنفاق الإعلاني خلال حملة Black Friday واحدة، من خلال استغلال ذكي لمتوسط سعر المنتج المرتفع في القطاع ده.",
  "في قطاع الفاشون بدأت مع براند من الصفر بدون أي بيانات سابقة ووصلت لعائد 9.5 أضعاف الإنفاق خلال أول 29 يوم من الإطلاق.",
  "اشتغلت كمان مع مشاريع كانت بتخسر عملاء مهتمين بسبب تسريب في الفانل، وبعد إعادة هيكلته لمسار شراء مباشر عبر الموقع اتحسن معدل التحويل من أقل من 1% لـ 3.46% خلال أول أسبوع بس — يعني أكتر من 10 أضعاف.",
  "وفي قطاع التصميم الداخلي والتشطيبات، اشتغلت على حملة بهدف مزدوج (وعي بالبراند + جمع عملاء محتملين) بميزانية محدودة نسبيًا ونجحت في الوصول لأكتر من 62 ألف شخص جديد مع جمع 42 High-quality potential client.",
  "اللي بيميزني مش إني بجيب أرقام كبيرة — أي حد ممكن يضخم رقم. اللي بيميزني إني بقدر أوضحلك ليه الرقم ده حصل والسياق اللي وراه عشان ناخد قرار صح مبني على فهم حقيقي.",
  "دلوقتي بشتغل على تطوير نفسي في GA4 وGoogle Tag Manager عشان الصورة اللي بقدمها لعملائي تكون أعمق وأدق كل يوم في التحليل.",
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

      <p className="fluid-lead mb-4 font-semibold text-primary max-w-3xl">
        متخصص في Performance Marketing وWeb Conversion
      </p>

      {paragraphs.map((text) => (
        <p key={text} className="fluid-body text-foreground mb-4 max-w-3xl leading-loose">
          {text}
        </p>
      ))}

      <p className="fluid-body font-semibold text-primary text-right mb-5 mt-6">
        جاهز نبني Funnel ونحول البيانات لقرارات ربحية في البراند؟
      </p>

      <div className="flex flex-wrap gap-3 justify-end">
        <GoldWaButton withArrow>يلا بينا نبني حملتك الإعلانية</GoldWaButton>
      </div>
    </motion.section>
  );
};

export default About;
