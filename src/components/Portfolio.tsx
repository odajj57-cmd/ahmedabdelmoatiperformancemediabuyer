import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpLeft } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/links';
import cover1 from '@/assets/covers/cover-1.png.asset.json';
import cover2 from '@/assets/covers/cover-2.png.asset.json';
import cover3 from '@/assets/covers/cover-3.png.asset.json';
import cover4 from '@/assets/covers/cover-4.png.asset.json';
import cover5 from '@/assets/covers/cover-5.png.asset.json';
import cover6 from '@/assets/covers/cover-6.png.asset.json';
import proof01 from '@/assets/proof/proof-01.jpeg.asset.json';
import proof03 from '@/assets/proof/proof-3.png.asset.json';
import proof04 from '@/assets/proof/proof-4.png.asset.json';
import proof05 from '@/assets/proof/proof-5.png.asset.json';
import proof06 from '@/assets/proof/proof-6.png.asset.json';
import proof07 from '@/assets/proof/proof-7.png.asset.json';

const CTA_TEXT =
  'جاهز تحول بيانات حملتك الإعلانية لقرارات مربحة تحقق هدف البراند؟ دوس هنا';

/** ترتيب عرض الكروت المطلوب: 1 6 4 2 5 3 */
const ORDER = [0, 5, 3, 1, 4, 2];

interface CaseStudy {
  id: string;
  name: string;
  cover: string;
  proof: string;
  short: string;
  details: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce',
    name: 'E-Commerce Performance',
    cover: cover1.url,
    proof: proof01.url,
    short: 'حققنا 4.56x ROAS ومبيعات بأكثر من 11 ألف جنيه في حملة واحدة',
    details:
      'في الحملة دي كان هدفنا نزود المبيعات مع الحفاظ على عائد (ROAS) قوي وفعّال للميزانية، وبالفعل حققنا 4.56x إجمالي العائد على الإنفاق بمبيعات قيمتها 11,187 جنيه من ميزانية 2,454.85 جنيه. لما حللنا الأداء لقينا إن فيه شريحة وصلت لـ 7.40x ROAS وشريحة تانية 3.89x، وأفضل نتيجة كانت رقم قياسي وصل لـ 14.32x ROAS بميزانية بسيطة (240 جنيه)، وده أثبت لنا إن الاختبار المستمر وتوزيع الميزانية حسب الأداء هو اللي بيوصلنا لأعلى كفاءة في الربح.',
  },
  {
    id: 'axis-design-pass',
    name: 'AXIS DESIGN PASS',
    cover: cover2.url,
    proof: proof04.url,
    short: 'أكتر من 60 ألف تفاعل بتكلفة 14 قرش بس للتفاعل الواحد',
    details:
      'ركزنا في الحملة دي إننا نوصل لأكبر عدد من الناس ونولد تفاعل ضخم جداً مع الحفاظ على أقل تكلفة ممكنة، ونجحنا إننا نجيب 60,259 تفاعل حقيقي (لايك، كومنت، شير) بتكلفة 0.14 جنيه بس للتفاعل الواحد، وبإجمالي ميزانية 8,396.18 جنيه. من خلال متابعة الحملة لحظة بلحظة وتحليل البيانات، قدرنا نثبت التكلفة القليلة دي مع زيادة حجم التفاعل، وده حقق انتشار واسع جداً وعزز تواجد البراند بشكل ممتاز.',
  },
  {
    id: 'axis-campaign',
    name: 'AXIS CAMPAIGN',
    cover: cover3.url,
    proof: proof03.url,
    short: '3,253 زيارة للبروفايل بتكلفة 2.28 جنيه للزيارة',
    details:
      'هدفنا كان زيادة عدد الناس اللي بتدخل تتفرج على الصفحة والبروفايل بتكلفة اقتصادية، وقدرنا نولد 3,253 زيارة حقيقية بتكلفة 2.28 جنيه للزيارة الواحدة من ميزانية إجمالية 7,430.18 جنيه. اشتغلنا على كفاءة الزيارات واختبرنا أكتر من نوع جمهور عشان نضمن إن اللي بيدخل الصفحة هو الشخص المهتم فعلاً باللي بنقدمه، والنتيجة كانت بناء قاعدة متابعين مهتمين بتكلفة بسيطة وفعّالة.',
  },
  {
    id: 'messaging',
    name: 'Messaging Campaign',
    cover: cover4.url,
    proof: proof05.url,
    short: '640 محادثة مباشرة مع عملاء مهتمين بتكلفة 1.60 جنيه للمحادثة',
    details:
      'الحملة دي كانت مبنية بالكامل على هدف "الرسائل" عشان نفتح محادثات مباشرة مع العملاء ونحولهم لطلبات شراء حقيقية، وحققنا 640 محادثة مباشرة بتكلفة 1.60 جنيه بس للمحادثة من ميزانية 1,023.18 جنيه. حللنا أداء الإعلانات بناءً على جودة المحادثات اللي بتتحول لطلبات، والنتيجة إننا وفرنا للبيزنس فرص بيع كتير جداً بتكلفة إعلانية قليلة جداً مقارنة بأي قناة تسويقية تانية.',
  },
  {
    id: 'eid-offers',
    name: 'Eid Offers',
    cover: cover5.url,
    proof: proof06.url,
    short: 'تفاعل استثنائي أكتر من 22 ألف تفاعل بتكلفة 6 قروش بس للتفاعل',
    details:
      'استغلينا موسم العيد عشان نحقق أعلى تفاعل ممكن بأقل ميزانية، وبالفعل وصلنا لـ 22,067 تفاعل خلال فترة العيد بتكلفة خيالية وهي 0.06 جنيه (6 قروش) بس للتفاعل الواحد، وبميزانية إجمالية 1,340.97 جنيه. الحملة دي أثبتت إن اختيار المحتوى الصح في التوقيت الصح هو اللي بيعمل نتائج مذهلة حتى لو الميزانية بسيطة، وطلعت رقم قياسي في كفاءة حملات التفاعل.',
  },
  {
    id: 'shopify',
    name: 'Shopify Performance',
    cover: cover6.url,
    proof: proof07.url,
    short: 'مبيعات بـ 809 ألف جنيه ونسبة نمو 47% في شهر واحد',
    details:
      'عملنا تحليل شامل لأداء المتجر في شهر مايو ولقينا نمو كبير جداً؛ إجمالي المبيعات وصل لـ 809.75 ألف جنيه بنسبة نمو +47%، مع أكتر من 1.75 ألف طلب مكتمل بنمو +38% ومعدل تحويل 2.12%. حتى بعد خصم المرتجعات والخصومات، صافي المبيعات وصل لـ 702.49 ألف جنيه بنمو +42%، والبيانات دي ساعدتنا نحدد نقط التطوير زي تحسين معدل التحويل وتقليل المرتجعات عشان نزود الربح الصافي للمتجر الفترة الجاية.',
  },
];

const Portfolio = () => {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="fluid-h2 font-bold text-primary">
            حملات إعلانية لبراندات إشتغلت عليها
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ORDER.map((i) => caseStudies[i]!).map((cs) => (
            <motion.article
              key={cs.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-colors duration-500 hover:border-gold/40"
            >
              <div className="overflow-hidden bg-background">
                <img
                  src={cs.cover}
                  alt={`غلاف حملة ${cs.name}`}
                  loading="lazy"
                  className="w-full h-40 sm:h-44 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6 text-right">
                <p className="fluid-body text-foreground mb-6">{cs.short}</p>

                <button
                  type="button"
                  onClick={() => setActive(cs)}
                  className="mt-auto inline-flex w-fit items-center justify-start gap-1.5 self-start rounded-full bg-gold-rich px-4 py-2.5 fluid-label font-bold text-gold-rich-foreground transition-all hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ms-4"
                >
                  <span>شوف أرقام الحملة وطريقة التنفيذ</span>
                  <ArrowUpLeft className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/85 p-4 sm:p-8"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-3xl border border-gold/30 bg-card/95 backdrop-blur-xl p-5 sm:p-10 shadow-[0_25px_80px_-25px_oklch(0.78_0.16_82_/_0.5)]"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="إغلاق"
                className="absolute top-4 right-4 rounded-full bg-background/80 p-2 text-destructive transition-transform hover:scale-110"
              >
                <X className="h-8 w-8" strokeWidth={3} />
              </button>

              <h3 className="fluid-h3 font-bold text-primary mb-4 text-right ps-16">
                {active.name}
              </h3>

              <p className="fluid-body text-foreground leading-loose text-right mb-6">
                {active.details}
              </p>

              <img
                src={active.proof}
                alt={`Proof screenshot — ${active.name}`}
                loading="lazy"
                className="w-full rounded-2xl border border-primary/25 mb-5"
              />

              <div className="text-right">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fluid-sm font-semibold text-gold-rich underline-offset-4 hover:underline"
                >
                  {CTA_TEXT}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
