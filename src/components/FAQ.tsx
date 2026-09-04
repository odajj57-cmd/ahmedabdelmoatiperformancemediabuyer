import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "@/lib/nomotion";

const faqItems = [
  {
    question: "هل بتضمن نتيجة معينة عدد مبيعات أو ROAS محدد؟",
    answer:
      "في فرق بين ضمان النتيجة وتحديد الهدف. الضمان إن حد يوعدك قبل ما يبدأ الشغل إنك هتحقق رقم ثابت، زي 100 عملية بيع أو ROAS 5X، وده صعب ضمانه لأن النتيجة بتتأثر بالإعلانات والمنتج والسعر والـOffer والمحتوى والـWebsite والـSales Process والسوق.\nأما الهدف فهو رقم واقعي بنحدده بناءً على أرقام البيزنس والميزانية والبيانات المتاحة، ونبني خطة واختبارات للوصول له، مع متابعة الـKPIs وتطوير الأداء باستمرار.\nمش بوعدك برقم قبل ما نبدأ، لكن بنحدد إحنا عايزين نوصل لفين، وإزاي هنقيس إننا ماشيين في الاتجاه الصح.",
  },
  {
    question: "هل بتدير الإعلانات فقط ولا بتساعد في الاستراتيجية والمحتوى كمان؟",
    answer:
      "مش ببدأ بالإعلانات مباشرة، الأول بفهم البيزنس والمنتج والجمهور والـCustomer Journey، وبعدها بنحدد الاستراتيجية والرسائل التسويقية والـOffers والـContent Angles المناسبة لكل مرحلة من الـFunnel، ثم نستخدم الإعلانات للوصول للجمهور المناسب وقياس النتائج.",
  },
  {
    question:
      "هل بتساعد في تحسين طريقة الرد على الرسائل والـWebsite / Landing Page والـConversion Rate؟",
    answer:
      "نعم. دوري مش بيقف عند الإعلان، براجع رحلة العميل كاملة من أول ما يشوف الإعلان لحد ما يتحول لعميل سواء من خلال الرسائل أو الـWebsite. بساعد في تحسين وتسريع طريقة الرد والأسئلة التأهيلية والمتابعة مع الـLeads، وبراجع الـWebsite أو الـLanding Page لتحديد نقاط التسريب وتحسين الـOffer والـCTA وتجربة العميل بهدف رفع الـConversion Rate.",
  },
  {
    question: "إزاي بتقيس نجاح الحملات بعيدا عن ROAS فقط؟",
    answer:
      "الـROAS جزء من الصورة، عشان كده بتابع كل المؤشرات زي CPM وCTR وCPC وConversion Rate وCPA وجودة الـLeads، وبربطها بالمبيعات وتكلفة اكتساب العميل والربحية علشان نعرف تأثير الإعلانات الحقيقي على البيزنس.",
  },
  {
    question: "إيه اللي بيحصل في أول أسبوع من الشغل؟",
    answer:
      "الأسبوع الأول بيكون مرحلة Diagnosis & Setup: فهم البيزنس والأهداف، تحليل البيانات والحملات السابقة، مراجعة الجمهور والمنافسين والـOffer والـFunnel، التأكد من الـTracking، ثم تحديد الـKPIs وخطة الاختبارات قبل الـLaunch.",
  },
  {
    question: "إزاي بنتواصل ونتابع النتائج والقرارات؟",
    answer:
      "بيكون فيه تواصل ومتابعة مستمرة حسب احتياج المشروع، مع مشاركة أهم التطورات والنتائج والقرارات المطلوبة، بحيث يكون واضح إحنا فين وإيه اللي اتحسن وإيه الخطوة التالية.",
  },
  {
    question: "هل بتقدم تقارير دورية؟ وإيه الأرقام اللي بتكون موجودة فيها؟",
    answer:
      "أيوة، التقارير مش مجرد أرقام من Ads Manager، بتوضح الـKPIs الأساسية والإنفاق والنتائج، تكلفة الاكتساب والـConversion Rate، أداء الحملات والـCreatives، أهم الملاحظات والاختبارات، وإيه القرارات والخطوات المقترحة للفترة الجاية.",
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
