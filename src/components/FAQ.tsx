import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "@/lib/nomotion";

const faqItems = [
  {
    question: "إيه اللي تقدر تضيفه للـTeam عشان تحقق هدف البزنس؟",
    answer:
      "بجمع بين فهم الـSocial Media والـContent وبين الـPerformance Media Buying، فمش بتعامل مع الإعلان بشكل منفصل عن الـCreative والـAudience.\nبقدر أقرأ الـData، أحدد فرص التحسين، وأحوّلها لـTests وInsights واضحة يقدر الـContent والـDesign Team يشتغل عليها.",
  },
  {
    question: "إيه حجم الـBudgets والـAccounts اللي اشتغلت عليها؟",
    answer:
      "خلال سنتين خبرة فعليه أدرت حملات بإجمالي ميزانيات تجاوزت 1M EGP في قطاعات مختلفة، منها E-commerce، Fashion، Furniture وInterior Finishing، مع اختلاف الـObjectives من Sales وMessages إلى Lead Generation.",
  },
  {
    question: "إزاي بتتعامل مع Account جديد؟",
    answer:
      "براجع الـBusiness Goal، الـOffer، الجمهور والمنافسين والـCreatives، الـHistorical Data والـFunnel، وبعدها أحدد المشاكل والفرص وأرتب الـTesting Priorities حسب تأثيرها المتوقع.",
  },
  {
    question: "هل دورك Media Buying فقط؟",
    answer:
      "الـPerformance Media Buying جزء أساسي من شغلي، لكن عندي خبرة في الـSocial Media وContent Strategy، بالإضافة لفهم عملي للـLanding Pages وBuyer Journey وCRO Fundamentals.\nده بيساعدني أربط بين Content → Ads → Conversion بدل ما كل جزء يشتغل بشكل منفصل.",
  },
  {
    question: "إزاي بتتعامل مع Campaign مش محققة الـKPIs؟",
    answer:
      "ببدأ بالتشخيص قبل تغيير كل حاجة مرة واحدة.\nبراجع الـCPM، CTR، CPC، Conversion Rate، CPA/Cost per Lead وجودة الـLeads، وبحدد هل المشكلة في الـAudience، Creative، Offer، Funnel أو Sales Process. بعدها ببني Tests محددة وأقارن النتائج.",
  },
  {
    question: "هل تقدر تشتغل داخل Agency Workflow ومع أكتر من Account؟",
    answer:
      "أيوه.\nبقدر أشتغل ضمن Workflow واضح مع الـContent، Design وAccount Management، مع تنظيم الأولويات والـTesting والـReporting لكل Account. وبفضّل يكون لكل Account أهداف وKPIs ومسؤوليات واضحة عشان القرارات تبقى مبنية على الـData.",
  },
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section
      id="faq"
      dir="rtl"
      className="bg-background py-12 sm:py-16"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="faq-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="fluid-h2 mb-8 text-center font-bold text-primary sm:mb-10"
        >
          أسئلة تهمك
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
                  className={`flex w-full items-center justify-between gap-4 py-4 text-right transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:py-5 ${isOpen ? "text-primary" : "text-foreground"}`}
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
                    <p className="fluid-body max-w-4xl whitespace-pre-line pb-6 text-right leading-loose text-foreground">
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
