
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

const title = "Terms & Conditions — CollabConnect";
const description =
  "Terms governing CollabConnect's social media management, content creation, influencer marketing, website development and digital marketing services.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://www.collabconnect.co.in/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.collabconnect.co.in/terms",
      },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    h: "1. Introduction",
    p: [
      "Welcome to CollabConnect. These Terms & Conditions govern the services provided by CollabConnect, including social media management, content creation, influencer and UGC collaborations, digital marketing, Meta Ads management and website development.",
      "By purchasing a service, making a payment, or engaging with our team for a project, you agree to these terms. Any specific proposal, package description or written agreement shared with you will form part of the engagement.",
    ],
  },
  {
    h: "2. Services & Scope of Work",
    p: [
      "The services and deliverables included in your engagement will be based on the package, proposal or custom quotation selected by you.",
      "Additional work not included in the agreed scope may be quoted and charged separately. We will communicate the additional cost and obtain your approval before proceeding.",
      "We reserve the right to recommend reasonable changes to the content strategy or execution where necessary to support the agreed objectives.",
    ],
  },
  {
    h: "3. Pricing & Payments",
    p: [
      "All service fees will be communicated before the project or monthly engagement begins. Prices may vary depending on the selected package, scope and custom requirements.",
      "Monthly service packages are generally payable in advance unless a different payment schedule is agreed to in writing.",
      "We currently accept payments through UPI, bank transfer and PayPal, subject to the payment instructions shared for your engagement.",
      "Any instalment arrangement, introductory offer, discount or promotional price will apply only where specifically agreed. Subsequent billing will follow the regular agreed package price unless otherwise confirmed.",
      "Third-party expenses, including advertising budgets, influencer fees, stock assets, domain registration, hosting and paid software subscriptions, are not included unless expressly stated in the proposal.",
      "Work may be paused if a payment becomes overdue. Any resulting delay in delivery will be communicated to the client.",
    ],
  },
  {
    h: "4. Content Creation, Revisions & Approvals",
    p: [
      "Content deliverables, formats and posting frequency will follow the selected package or written project agreement.",
      "The number of revisions included will be communicated as part of the package or project scope. Requests beyond the included revisions, or substantial changes after approval, may involve additional charges.",
      "Clients are responsible for reviewing and approving content, captions, creatives and publishing schedules within a reasonable time.",
      "Once content is approved, changes requested later may be treated as additional work.",
      "Where raw footage, product information, brand guidelines or other materials are required, the client must share them within the agreed timeline. Delayed submissions or approvals may affect delivery and posting schedules.",
    ],
  },
  {
    h: "5. Client Responsibilities",
    p: [
      "Clients must provide accurate information, brand assets, content references, product details and other materials reasonably required to deliver the agreed services.",
      "Clients are responsible for ensuring that the materials, images, videos, music, trademarks and other content they provide are lawfully owned, licensed or authorised for use.",
      "Clients must provide the necessary account access and permissions for services that require social media, advertising or website access.",
      "Clients must review published content and promptly notify us of factual errors, concerns or requested corrections.",
      "Clients must not ask us to create or publish content that is unlawful, misleading, defamatory, infringing or otherwise prohibited by applicable platform policies or law.",
    ],
  },
  {
    h: "6. Social Media Account Access & Security",
    p: [
      "Where required, clients may provide access through platform-approved methods such as Meta Business Suite, partner access or other authorised permissions.",
      "Clients remain the owners of their social media accounts and are responsible for maintaining their account credentials, recovery methods and overall account security.",
      "We will use the access provided only to perform the agreed services. Clients should avoid sharing unnecessary personal passwords where safer access methods are available.",
      "We are not responsible for account restrictions, suspensions, hacking incidents or platform actions outside our reasonable control. We will, however, communicate relevant issues when they come to our attention.",
    ],
  },
  {
    h: "7. Growth, Reach & Results",
    p: [
      "We aim to provide strategic planning, consistent execution and quality content to support your digital presence.",
      "We do not guarantee specific follower counts, views, engagement rates, leads, sales, virality, rankings or revenue.",
      "Social media performance depends on several factors, including platform algorithms, audience behaviour, competition, content quality, account history and external market conditions.",
      "We are not responsible for changes to platform algorithms, features, policies, distribution or monetisation rules.",
    ],
  },
  {
    h: "8. Meta Ads & Advertising",
    p: [
      "Meta Ads management fees and advertising spend are separate unless explicitly included in your proposal.",
      "The client is responsible for funding the advertising account and paying Meta or other advertising platforms directly.",
      "Campaign performance, approvals, delivery and account eligibility are subject to the relevant advertising platform's policies and systems.",
      "We do not guarantee ad approvals, leads, conversions, sales or a particular return on advertising spend.",
      "Clients are responsible for the accuracy and legality of their offers, claims, landing pages, products and services advertised.",
    ],
  },
  {
    h: "9. Influencer & UGC Collaborations",
    p: [
      "Influencer, creator and UGC collaborations are subject to creator availability, brand approval, campaign requirements and mutual agreement.",
      "Deliverables, timelines, compensation, barter arrangements, usage rights and other campaign conditions must be confirmed before a collaboration is treated as final.",
      "A collaboration is not confirmed until the relevant parties agree to its terms.",
      "We are not responsible for a creator's independent conduct, delays or failure to perform beyond our reasonable control. We will make reasonable efforts to coordinate and communicate any issues.",
    ],
  },
  {
    h: "10. Website Development & Third-Party Services",
    p: [
      "Website development deliverables will be based on the agreed scope, features and project timeline.",
      "Domain names, hosting, third-party integrations, paid themes, plugins, APIs and external subscriptions may involve separate costs payable by the client.",
      "We are not responsible for outages, policy changes, pricing changes or technical failures caused by third-party platforms or service providers.",
      "Ongoing maintenance, updates, additional features and support after project completion are included only if specified in the agreement.",
    ],
  },
  {
    h: "11. Intellectual Property & Usage Rights",
    p: [
      "Clients retain ownership of their original brand assets, materials and content supplied to us.",
      "Ownership and permitted use of final deliverables will follow the applicable package, proposal or written agreement. Unless otherwise agreed, final approved deliverables created specifically for a fully paid project may be used by the client for its intended business purposes.",
      "Third-party assets, stock media, fonts, music, templates and software remain subject to their respective licences and usage restrictions.",
      "We will not claim ownership of a client's brand, social media account or original materials.",
      "We may display completed work in our portfolio or promotional materials only where the client has given permission or where the work is already publicly available and its use is otherwise lawful.",
    ],
  },
  {
    h: "12. Confidentiality",
    p: [
      "Both parties agree to take reasonable care to protect confidential business information, account access details, unpublished campaign materials and other non-public information shared during the engagement.",
      "We will not knowingly disclose confidential client information to unrelated third parties, except where necessary to provide the agreed services, where authorised by the client, or where disclosure is required by law.",
    ],
  },
  {
    h: "13. Cancellation, Termination & Refunds",
    p: [
      "Unless a different arrangement is agreed in writing, either party may end an ongoing monthly engagement by providing 15 days' written notice.",
      "Any work already completed, delivered or committed to third-party expenses may be considered when calculating outstanding amounts.",
      "Payments for work already performed, completed deliverables or non-recoverable third-party expenses are not refundable.",
      "Any refund request relating to services not yet performed will be reviewed based on the agreed scope, work completed, payment terms and applicable law.",
      "If a client fails to provide required materials, approvals, access or payments for an extended period, we may pause or terminate the engagement after communicating the issue.",
      "Termination does not remove either party's obligation to settle outstanding dues or comply with confidentiality and other terms that are intended to continue after termination.",
    ],
  },
  {
    h: "14. Limitation of Liability",
    p: [
      "We will make reasonable efforts to provide services professionally and in accordance with the agreed scope.",
      "To the extent permitted by applicable law, we are not liable for indirect, incidental or consequential losses, including loss of profits, revenue, business opportunities, data or expected social media performance.",
      "Nothing in these terms excludes liability that cannot legally be excluded or limited under applicable law.",
    ],
  },
  {
    h: "15. Changes to Services & Terms",
    p: [
      "We may update our service packages, pricing, processes or these Terms & Conditions from time to time.",
      "Changes to an existing client's agreed scope or pricing will be communicated before they are applied to that engagement, unless otherwise agreed.",
      "The latest version of these terms will be published on this page. Continued use of our services after applicable changes take effect constitutes acceptance of the updated terms, to the extent permitted by law.",
    ],
  },
  {
    h: "16. Governing Law & Disputes",
    p: [
      "These terms are governed by the laws of India.",
      "The parties will first attempt to resolve any dispute through good-faith discussion. If the dispute cannot be resolved amicably, it will be handled by the appropriate courts having jurisdiction under applicable Indian law.",
    ],
  },
  {
    h: "17. Contact Us",
    p: [
      "For questions, clarifications, service-related concerns or cancellation requests, you can contact our team using the details below.",
    ],
    contact: true,
  },
];

function TermsPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      <main className="surface-hero px-5 pt-36 pb-24">
        <article className="glass-card mx-auto max-w-3xl rounded-[2rem] p-8 sm:p-12">
          <p className="eyebrow">Legal</p>

          <h1 className="mt-4 text-4xl font-medium sm:text-5xl">
            Terms & Conditions
          </h1>

          <p className="text-muted-foreground mt-4 text-sm">
            Last updated: 13 November 2026
          </p>

          <div className="rose-rule mt-6" />

          <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
            Please read these terms carefully before purchasing or using
            CollabConnect services. These terms explain the responsibilities
            and expectations of both the client and our team.
          </p>

          {sections.map((section) => (
            <section key={section.h} className="mt-9">
              <h2 className="text-xl font-medium">{section.h}</h2>

              {section.p.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground mt-3 text-sm leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              {section.contact && (
                <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-5">
                  <p className="font-medium">CollabConnect</p>
                  <a
                    href="mailto:work.collabconnect@gmail.com"
                    className="mt-2 inline-block text-sm text-[var(--primary)] underline underline-offset-4"
                  >
                    work.collabconnect@gmail.com
                  </a>
                  <a
                    href="https://www.collabconnect.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-sm text-[var(--primary)] underline underline-offset-4"
                  >
                    www.collabconnect.co.in
                  </a>
                </div>
              )}
            </section>
          ))}

          <div className="rose-rule mt-10" />

          <p className="text-muted-foreground mt-6 text-xs leading-relaxed">
            These Terms & Conditions are intended to provide general
            information about our services and working arrangements. A
            separately signed agreement or written project confirmation may
            contain additional terms applicable to a particular engagement.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
