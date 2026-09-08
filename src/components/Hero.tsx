import { ArrowUpLeft, Download } from "lucide-react";
import cvAsset from "@/assets/docs/cv.docx.asset.json";

const Hero = () => {
  return (
    <section
      id="home"
      dir="rtl"
      className="relative overflow-hidden bg-background py-14 sm:py-20"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-primary blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 h-72 w-72 rounded-full bg-accent blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 id="hero-heading" className="fluid-h1 font-bold text-primary">
          Social Media And Performance Media Buyer Specialist
        </h1>

        <p className="fluid-lead mt-3 font-semibold text-foreground" dir="ltr">
          Content-Aware. Data-Driven. Performance-Focused.
        </p>

        <p className="fluid-body mt-6 font-bold text-primary">
          خبرة سنتين في الـDigital Marketing
        </p>

        <p className="fluid-body mt-2 max-w-3xl leading-loose text-foreground">
          متخصص فى إدارة وتحسين الحملات الإعلانية تحليل أداء المحتوى والجمهور وبناء اختبارات تساعد
          الـBrands تحقق نتائج أفضل.
        </p>

        <div className="mt-8 flex flex-wrap items-start gap-4">
          <a
            href="#portfolio"
            className="relative inline-flex w-fit items-center justify-center gap-2 rounded-full bg-gold-rich px-6 py-3 fluid-sm font-bold text-gold-rich-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110"
          >
            <span>View My Work</span>
            <ArrowUpLeft className="h-4 w-4" aria-hidden="true" />
          </a>

          <a
            href={cvAsset.url}
            download="Ahmed_Abdel_Moati_CV.docx"
            className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-card px-6 py-3 fluid-sm font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span>View My CV</span>
          </a>
        </div>

        <p className="fluid-sm mt-4 text-muted-foreground">
          شوف الـCase Studies والـStrategy والنتائج وراء كل Campaign.
        </p>
      </div>
    </section>
  );
};

export default Hero;
