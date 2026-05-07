import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { TopBanner } from "@/components/site/TopBanner";
import { Numbers } from "@/components/site/Numbers";
import { InfoCards } from "@/components/site/InfoCards";
import { NotAll } from "@/components/site/NotAll";
import { Advantages } from "@/components/site/Advantages";
import { AppBanner } from "@/components/site/AppBanner";
import { Pricing } from "@/components/site/Pricing";
import { Faq, faqItems } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { SuggestFeatureWidget } from "@/components/site/SuggestFeatureWidget";
import {
  pageSEO,
  HREFLANG_US_CA,
  softwareApplicationJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/seo";

export const Route = createFileRoute("/ca")({
  head: () => {
    const seo = pageSEO({
      path: "/ca",
      title:
        "ReceiptOne Canada | Receipt, Expense & Mileage Tracker for CRA Records",
      description:
        "Organize receipts, track expenses and mileage, and export tax-ready reports for Canadian freelancers, contractors, and small businesses.",
      ogTitle: "ReceiptOne Canada | Receipt, Expense & Mileage Tracker",
      ogDescription:
        "Organize receipts, mileage, expenses, and accountant-ready reports for Canadian freelancers and small businesses.",
      hreflang: HREFLANG_US_CA,
    });
    return {
      meta: seo.meta,
      links: seo.links,
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(softwareApplicationJsonLd("ca")) },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Canada", path: "/ca" },
            ]),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqItems)) },
      ],
    };
  },
  component: CanadaPage,
});

function CanadaPage() {
  return (
    <main
      data-interactive-page
      className="min-h-screen overflow-x-clip bg-[#f5f4f0] font-sans text-black antialiased"
    >
      <Header />
      <TopBanner />
      <Numbers />
      <InfoCards />
      <NotAll />
      <Advantages />
      <AppBanner />
      <Pricing />
      <Faq />
      <Footer />
      <SuggestFeatureWidget region="ca" />
    </main>
  );
}
