import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Journey from "@/components/Journey";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWa from "@/components/FloatingWa";

const title = "Ahmed Abdel Moati | Performance Marketer";
const description =
  "Performance Marketer | Web Conversion Specialist — بعائد مبيعات وصل 35 ضعف وتحسين معدل التحويل 10 أضعاف، بهتم برحلة العميل من الإعلان لشراء المنتج أو الخدمة";
const OG_IMAGE =
  "https://ahmedabdelmoati-performanmarkter.lovable.app/__l5e/assets-v1/8bccd553-9bca-4c8d-8610-e3a0ed3d8078/og-cover.jpg";



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
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },

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
        <About />
        <Services />
        <Journey />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWa />
    </div>
  );
}
