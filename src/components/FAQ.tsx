import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "هل بتاخد نسبة من الميزانية ولا فيه باقات ثابتة؟",
    answer:
      "بيختلف حسب مجال البراند وطبيعة الشغل مثلا لو البراند شغال في التجارة الإلكترونية ممكن يكون الاتفاق بنسبة 25% وفي مجالات تانية بيكون الاتفاق بمرتب ثابت",
  },
  {
    question: "هتشتغل بأي ميزانية إعلانية؟ وفيه حد أدنى؟",
    answer:
      "الميزانية بتختلف بناء على عوامل مختلفة ومثلا ميزانية لبراند عقارات غير ميزانية لبراند ملابس لكن بشكل عام مش بشتغل بميزانية إعلانية أقل من 1000 دولار شهريا",
  },
  {
    question: "هل النتائج دي إلي في الكيس ستدي ممكن تتكرر في البراند بتاعي؟",
    answer:
      "مفيش نتيجة ثابتة أقدر أوعدك بيها لأن نجاح الحملة بيتأثر بعوامل كتير زي قوة العرض وطريقة البيع والسوق المستهدف ونوع المنتج والتسعير والميزانية علشان كده بنحدد أهداف واضحة للحملة من البداية وبنستخدم البيانات إلي بتظهر أثناء التشغيل علشان نعرف إيه اللي شغال وإيه اللي محتاج تحسين",
  },
  {
    question: "قد إيه هياخد وقت لحد ما أشوف نتائج؟",
    answer:
      "مفيش وقت ثابت أقدر أحدده لكن بشكل عام أول فترة بتكون مخصصة للاختبار وجمع البيانات وغالبا بتاخد من أسبوع لـ3 أسابيع بعدها بنبدأ نفهم إيه إلي شغال وإيه إلي محتاج تحسين والنتائج بتبدأ تستقر بشكل أوضح وطبعا المدة بتختلف من براند للتاني حسب الأرقام والميزانية وحالة الحساب وعوامل تانية",
  },
  {
    question: "إزاي بتقيس النجاح ROAS / CPA / إيه المعيار؟",
    answer:
      "قياس نجاح الحملة بيختلف حسب مجال البراند لأن كل مجال وله أهداف وأرقام مختفة ولكن بشكل عام بنحدد الـKPIs المناسبة حسب البراند وبنقيس عليها أداء الحملة",
  },
  {
    question: "بتشتغل على أنهي منصات؟",
    answer:
      "بشكل أساسي بشتغل على Meta Ads وTikTok Ads وبطور خبرتي في Google Ads لتقديم حلول إعلانية أوسع لبرندات المختلفة",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="faq"
      dir="rtl"
      className="bg-background py-20 sm:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="faq-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="fluid-h2 mb-10 text-center font-bold text-primary sm:mb-14"
        >
          أسئلة قبل ما نبدأ حملتك الإعلانية
        </motion.h2>

        <div className="border-t border-border">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-5 py-5 text-right text-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:py-6"
                >
                  <span className="fluid-body font-bold">{item.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="fluid-body max-w-4xl pb-6 text-right leading-loose text-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;