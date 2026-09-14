import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";

import Portfolio from "@/components/Portfolio";
import BrandExperience from "@/components/BrandExperience";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWa from "@/components/FloatingWa";

const title = "Ahmed Abdel Moati | Performance Media Buyer Specialist";
const description =
  "ببني رحلة العميل من الإعلان لشراء المنتج أو الخدمة وبحول البيانات لقرارات واضحة تساعد الـTeam على تحسين الأداء وتحقق الـBusiness Goals.";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content: "performance marketing, media buying, web conversion, تسويق رقمي, حملات إعلانية",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_EG" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },

      { name: "theme-color", content: "#0A7AFF" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        
        <Portfolio />
        <BrandExperience />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWa />
    </div>
  );
}
