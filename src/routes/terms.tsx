import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

const title = "Terms & Conditions — Collab Connect";
const description =
  "Engagement terms for Collab Connect social media management, influencer marketing and Meta Ads services.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  {
    h: "Scope of Work",
    p: "Deliverables are defined by the package you select. Anything outside the listed scope is quoted separately as an add-on before work begins.",
  },
  {
    h: "Payments",
    p: "All plans are monthly retainers billed in advance. Meta Ads management fees are separate from ad spend, which is paid directly by the client.",
  },
  {
    h: "Timelines & Approvals",
    p: "Content calendars are shared for approval each month. Delays in feedback, assets or account access may shift the delivery schedule.",
  },
  {
    h: "Growth & Results",
    p: "We commit to strategy, consistency and quality execution. Platform reach, follower counts and campaign results depend on Instagram's algorithms and cannot be guaranteed.",
  },
  {
    h: "Collaborations",
    p: "Brand and UGC collaborations are subject to brand approval. Barter and paid deals are confirmed only once both parties agree on deliverables.",
  },
  {
    h: "Cancellation",
    p: "There are no lock-ins. Either party may end the engagement with 15 days' written notice. Fees already paid for the current month are non-refundable.",
  },
];

function TermsPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="surface-hero px-5 pt-36 pb-24">
        <article className="glass-card mx-auto max-w-3xl rounded-[2rem] p-8 sm:p-12">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 text-4xl font-medium sm:text-5xl">Terms & Conditions</h1>
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
