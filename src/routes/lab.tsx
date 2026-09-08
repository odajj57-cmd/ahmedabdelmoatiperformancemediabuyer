import { createFileRoute } from "@tanstack/react-router";
import LabExperience from "@/components/lab/LabExperience";

const title = "Ahmed Abdel Moati — Performance Media Buyer Specialist";
const description =
  "A standalone motion lab: premium loading screen and smooth progressive scroll reveals.";

export const Route = createFileRoute("/lab")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LabExperience,
});
