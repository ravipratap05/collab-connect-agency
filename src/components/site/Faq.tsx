
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./Reveal";

const faqs = [
  {
    q: "Which package is right for my business?",
    a: "It depends on your content requirements and goals. Starter is for building consistency, Growth offers more complete Instagram management, Pro adds deeper content and growth planning, and Premium is designed for brands that need a higher volume of content and more comprehensive management. If you're unsure, we'll help you choose.",
  },
  {
    q: "What exactly is included in your social media management?",
    a: "Depending on your selected package, services can include content planning, reels editing, static and carousel posts, stories, captions, SEO keywords, scheduling, profile optimization and performance reporting. Your selected package will clearly outline the deliverables.",
  },
  {
    q: "Do I need to provide photos and raw video footage?",
    a: "For most content creation and editing projects, yes. You share your raw footage, photos, product details or other required material with us. We take care of editing, creative direction, captions and content preparation according to your package. We'll inform you about content requirements in advance.",
  },
  {
    q: "How soon will my content start getting posted?",
    a: "Once onboarding, account access and the required content materials are completed, we'll prepare your content plan and share the proposed schedule. Posting begins after the required content and approvals are in place. The exact timeline depends on your project.",
  },
  {
    q: "Can you guarantee followers, views, leads or sales?",
    a: "No agency can honestly guarantee a specific number of followers, views, leads or sales. Our focus is on consistent content, relevant strategy, better brand communication and performance optimization. Actual results depend on your niche, audience, offer, budget and other factors.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We work with businesses and creators in India and international markets. You can select India or International pricing on our Pricing section. We'll discuss your project scope, communication, payment terms and timelines before starting.",
  },
  {
    q: "Do you manage paid advertisements? Is the ad budget included?",
    a: "Yes, we offer Meta Ads Management as an additional service. Our management fee covers the agreed advertising management scope, while the actual advertising budget is separate and paid by the client to the advertising platform.",
  },
  {
    q: "Can you help us find creators and brand collaborations?",
    a: "Yes. We offer UGC Creator Outreach and campaign management services. We can help identify relevant creators, coordinate outreach and manage campaign requirements. However, creator availability and brand collaboration confirmations depend on the respective parties.",
  },
  {
    q: "How do payments and project terms work?",
    a: "Pricing, payment schedule, deliverables and project terms are shared before onboarding. Monthly management services follow the agreed billing cycle, while website development and other project-based services are quoted according to their scope.",
  },
  {
    q: "Can I customise a package for my requirements?",
    a: "Absolutely. If you need a different number of reels, additional posts, creator outreach, website development or a combination of services, contact us. We'll understand your requirements and share a customised quotation.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-24 text-[#171717] sm:py-32"
    >
      {/* SUBTLE BACKGROUND ACCENTS */}

      <div className="pointer-events-none absolute -right-32 top-20 size-72 rounded-full bg-[#D52B32]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -left-32 bottom-10 size-72 rounded-full bg-black/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">

        {/* SECTION HEADER */}

        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title={
              <>
                A few things
                <br />
                worth <span className="italic text-[#D52B32]">knowing.</span>
              </>
            }
            subtitle="Have questions before getting started? Here are some answers to help you understand how working with CollabConnect works."
          />
        </div>

        {/* FAQ ACCORDION */}

        <Reveal delay={0.1}>
          <Accordion
            type="single"
            collapsible
            className="mt-12 overflow-hidden rounded-3xl border border-[#EAEAEA] bg-white px-5 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.025)] sm:px-8"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${index}`}
                className="border-b border-[#EEEEEE] last:border-b-0"
              >
                <AccordionTrigger className="gap-4 py-6 text-left text-sm font-semibold leading-relaxed text-[#171717] transition-colors hover:text-[#D52B32] hover:no-underline sm:text-base [&>svg]:shrink-0 [&>svg]:text-[#D52B32]">
                  {faq.q}
                </AccordionTrigger>

                <AccordionContent className="max-w-3xl pb-6 text-sm leading-7 text-[#707070]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        {/* BOTTOM CONTACT NOTE */}

        <Reveal delay={0.15}>
          <div className="mt-10 text-center">
            <p className="text-sm text-[#777]">
              Still have questions about your project?
            </p>

            <a
              href="#contact"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-[#171717] px-7 py-3 text-sm font-semibold text-[#171717] transition-all duration-300 hover:bg-[#171717] hover:text-white"
            >
              Talk to Our Team
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
