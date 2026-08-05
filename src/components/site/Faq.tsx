import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./Reveal";

const faqs = [
  {
    q: "Which package should I choose?",
    a: "Starter suits creators building consistency, Growth is ideal for creators and businesses that want full management plus lead generation, and Elite is for brands scaling with daily content and influencer outreach.",
  },
  {
    q: "How fast is delivery after onboarding?",
    a: "Onboarding takes 48 hours. Your content strategy and first monthly calendar are delivered within 3–5 working days, and posting begins immediately after your approval.",
  },
  {
    q: "How do brand collaborations work?",
    a: "We pitch your profile to relevant brands from our 500+ network for paid, barter, PR and UGC campaigns, then handle negotiation, deliverables and timelines end to end.",
  },
  {
    q: "What kind of support do I get?",
    a: "Every plan includes direct chat support on Instagram and email. Elite clients receive priority support with same-day turnarounds and a monthly growth consultation call.",
  },
  {
    q: "How do payments work?",
    a: "All plans are monthly retainers billed in advance via UPI or bank transfer. Meta Ads management is billed separately and the ad budget is paid directly by you.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="surface-hero py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Common <span className="italic">questions</span>.
            </>
          }
        />
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="glass-card mt-12 rounded-[2rem] px-6 py-2">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border/60">
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
