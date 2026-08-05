import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

const title = "Privacy Policy — Collab Connect Agency";
const description =
  "How Collab Connect collects, uses and protects the information you share with our social media management agency.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    h: "Information We Collect",
    p: "We collect only what we need to deliver our services: your name, email address, Instagram handle, business details and any brief or brand assets you share with us.",
  },
  {
    h: "How We Use It",
    p: "Your information is used to prepare proposals, manage your social accounts, run campaigns, pitch brand collaborations on your behalf and send reports or invoices.",
  },
  {
    h: "Account Access",
    p: "Where account access is required for management, credentials are stored securely, used only for agreed work, and revoked immediately when an engagement ends.",
  },
  {
    h: "Sharing",
    p: "We never sell your data. Details are shared with brands or creators only when required for a collaboration you have approved, and with tools we use to schedule content and run ads.",
  },
  {
    h: "Your Choices",
    p: "You may request a copy or deletion of your data at any time by emailing veercollabs@gmail.com. We remove client data within 30 days of a deletion request unless required for tax records.",
  },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="surface-hero px-5 pt-36 pb-24">
        <article className="glass-card mx-auto max-w-3xl rounded-[2rem] p-8 sm:p-12">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 text-4xl font-medium sm:text-5xl">Privacy Policy</h1>
          <div className="rose-rule mt-6" />
          {sections.map((s) => (
            <section key={s.h} className="mt-8">
              <h2 className="text-xl font-medium">{s.h}</h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{s.p}</p>
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </div>
  );
}
