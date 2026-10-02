import { CornerUpRight, Download } from "lucide-react";
import cvAsset from "@/assets/docs/cv.pdf.asset.json";
import portraitAsset from "@/assets/ahmed-hero-portrait.png.asset.json";

const Hero = () => {
  return (
    <section
      id="home"
      dir="rtl"
      className="relative overflow-hidden bg-background pt-10 pb-6 sm:pt-14 sm:pb-8"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={portraitAsset.url}
          alt=""
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background/80 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 id="hero-heading" className="fluid-h1 font-bold text-primary">
          Social Media Specialist And Performance Media Buyer
        </h1>

        <p className="fluid-lead mt-3 font-semibold text-foreground" dir="ltr">
          Content-Aware. Data-Driven. Performance-Focused.
        </p>

        <div className="mt-5">
          <a
            href={cvAsset.url}
            download="Ahmed_Abdel_Moati_CV.pdf"
            dir="ltr"
            className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary px-6 py-3 fluid-sm font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:brightness-110"
          >
            <span>View My CV</span>
            <Download className="h-4 w-4 text-primary-foreground" aria-hidden="true" />
          </a>
        </div>

        <p className="fluid-body mt-6 max-w-3xl leading-loose text-foreground">
          بخبرة سنتين في الـDigital Marketing بهتم برحلة العميل من الإعلان لشراء المنتج أو الخدمة.
        </p>

        <p className="fluid-sm mt-4 text-foreground">
          شوف الـCase Studies والـStrategy والنتائج وراء كل Campaign.
        </p>

        <div className="mt-5 text-left">
          <a
            href="#portfolio"
            dir="ltr"
            className="relative inline-flex w-fit items-center justify-center gap-2 rounded-full bg-gold-rich px-6 py-3 fluid-sm font-bold text-gold-rich-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110"
          >
            <span>View My Work</span>
            <CornerUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
