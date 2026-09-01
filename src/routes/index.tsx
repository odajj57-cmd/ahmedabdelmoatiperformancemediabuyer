import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Journey from "@/components/Journey";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ogCover from "@/assets/og-cover.png.asset.json";

const ogImage = `https://mohamedabdelkader-performancmarketer.lovable.app${ogCover.url}`;

const title = "Mohamed Abdelkader| PerformanceMarketer";
const description =
  "ببني وأدير الحملات الإعلانية وبحول البيانات لقرارات مربحة لتحقيق هدف البراند";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content: "performance marketing, media buying, digital marketing, تسويق رقمي, حملات إعلانية",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_EG" },
      { property: "og:image", content: ogImage },
      { property: "og:url", content: "https://mohamedabdelkader-performancmarketer.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "theme-color", content: "#0A7AFF" },
    ],
    links: [{ rel: "canonical", href: "https://mohamedabdelkader-performancmarketer.lovable.app/" }],
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
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
