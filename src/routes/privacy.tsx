
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Mail, ShieldCheck, ChevronRight, Globe } from "lucide-react";

const title = "Privacy Policy — CollabConnect Agency";
const description =
  "Learn how CollabConnect collects, uses, stores and protects personal information when you visit our website or use our digital services.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://www.collabconnect.co.in/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.collabconnect.co.in/privacy",
      },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    h: "1. Introduction",
    p: [
      'Welcome to CollabConnect,
      "CollabConnect provides digital marketing, social media management, content creation, influencer marketing, website development, QR digital menus, WhatsApp automation and related digital services.",
      "This Privacy Policy explains what personal information we collect, how we use it, when we share it and the choices available to you when you visit our website, contact us or use our services.",
    ],
  },
  {
    h: "2. Information We Collect",
    p: [
      "We may collect information that you voluntarily provide when you contact us, request a quotation, become a client or use our services.",
    ],
    subsections: [
      {
        h: "A. Information You Provide",
        items: [
          "Full name and email address.",
          "Mobile number and WhatsApp contact details.",
          "Instagram profile or social media username.",
          "Business or brand name and selected country or market.",
          "Services you are interested in, project requirements and budget.",
          "Messages, feedback and other information you choose to share.",
        ],
      },
      {
        h: "B. Client and Project Information",
        items: [
          "Social media account usernames and access permissions.",
          "Meta Business Suite or other platform access.",
          "Brand guidelines, logos, photographs, videos and raw footage.",
          "Campaign briefs, creator information and collaboration details.",
          "Content calendars, performance reports and campaign results.",
          "Website, advertising and project-related information.",
        ],
      },
      {
        h: "C. Payment and Billing Information",
        items: [
          "Client or billing name, payment amount and payment date.",
          "UPI transaction references and bank transfer confirmations.",
          "PayPal transaction details and payment confirmations.",
          "Invoices and relevant billing correspondence.",
        ],
      },
      {
        h: "D. Automatically Collected Information",
        items: [
          "IP address and approximate location information.",
          "Browser type, device and operating system information.",
          "Pages visited, website interactions and referring sources.",
          "Visit dates, duration and technical diagnostic information.",
        ],
      },
    ],
  },
  {
    h: "3. How We Use Your Information",
    p: [
      "We use collected information for relevant business, service and operational purposes, including:",
    ],
    items: [
      "Responding to enquiries and service requests.",
      "Preparing quotations, proposals and service agreements.",
      "Providing social media management and digital marketing services.",
      "Managing client projects, content and campaigns.",
      "Coordinating influencer and UGC collaborations.",
      "Communicating project updates and providing customer support.",
      "Processing payments and maintaining billing records.",
      "Improving our website and services using Google Analytics.",
      "Maintaining website security and preventing misuse.",
      "Meeting applicable legal, regulatory and accounting obligations.",
    ],
  },
  {
    h: "4. Social Media Account Access",
    p: [
      "As part of our services, clients may provide access to Instagram, Facebook, Meta Business Suite or other social media platforms.",
      "Such access may allow us to create, edit and schedule content, publish approved posts, manage comments, review account insights, coordinate campaigns and perform other activities agreed with the client.",
      "We use this access only for the agreed service purposes and within the permissions provided by the client.",
      "Clients should use secure access methods and avoid sharing unnecessary passwords or authentication information. Where supported, role-based access and platform permissions are preferred.",
      "When a service ends, we will stop using the relevant account access and take reasonable steps to relinquish access under our control, subject to outstanding obligations and applicable law.",
    ],
  },
  {
    h: "5. WhatsApp and Other Communications",
    p: [
      "You may contact us through WhatsApp, email, Instagram or other communication channels.",
      "We may process your name, contact details, messages, attachments, enquiry details and relevant correspondence to respond to enquiries, provide support, discuss projects and manage client relationships.",
      "Communications handled through WhatsApp, Instagram or other third-party platforms are also subject to the respective platform's privacy policies and terms.",
    ],
  },
  {
    h: "6. Cookies and Google Analytics",
    p: [
      "Our website may use cookies and similar technologies to support website functionality and understand how visitors use our services.",
      "We use Google Analytics to understand website traffic and visitor interactions. It may collect information such as pages visited, interaction events, browser and device information, approximate geographical information and traffic sources.",
      "We use these insights to evaluate website performance and improve the user experience. We do not intentionally configure Google Analytics to collect directly identifying information such as names, email addresses, phone numbers or payment credentials.",
      "Where consent is legally required, we will seek appropriate consent before using non-essential analytics or tracking technologies. You can also manage or delete cookies through your browser settings.",
    ],
    links: [
      {
        label: "Google Analytics data collection",
        url: "https://support.google.com/analytics/answer/6004245",
      },
    ],
  },
  {
    h: "7. Sharing of Information",
    p: [
      "We do not sell personal information to third parties.",
      "We may share relevant information with trusted service providers when necessary to operate our website or deliver our services. These may include:",
    ],
    items: [
      "Google – website analytics and related services.",
      "Meta – Instagram, Facebook and Meta Business Suite.",
      "WhatsApp – business communications and customer enquiries.",
      "PayPal – international payment processing.",
      "Banks and UPI providers – payment processing and verification.",
      "Vercel or other hosting providers – website hosting and infrastructure.",
      "Email and communication providers – business communications.",
      "Professional advisers – legal, accounting or compliance assistance where necessary.",
    ],
    footer:
      "We aim to share only information reasonably necessary for the relevant purpose. We may also disclose information when required by applicable law, a lawful government request or court order, or to protect our legal rights and service security.",
  },
  {
    h: "8. International Data Transfers",
    p: [
      "CollabConnect may work with clients and service providers located outside India. Some third-party services we use may process or store information on servers located in other countries.",
      "Where personal information is transferred internationally, we will take reasonable steps to ensure that such processing complies with applicable Indian data protection requirements and other relevant laws.",
    ],
  },
  {
    h: "9. Data Security",
    p: [
      "We take reasonable technical and organisational measures to protect personal information against unauthorised access, disclosure, alteration, loss or misuse.",
    ],
    items: [
      "Restricting access to information based on business requirements.",
      "Using appropriate account permissions.",
      "Maintaining secure website and hosting configurations.",
      "Avoiding unnecessary collection of sensitive information.",
      "Taking reasonable steps to protect client content and project materials.",
      "Reviewing access when client services end.",
    ],
    footer:
      "No website, online service or electronic storage method can be guaranteed to be completely secure. We cannot promise absolute security, but we aim to handle information responsibly and take reasonable precautions.",
  },
  {
    h: "10. Data Retention and Deletion",
    p: [
      "We retain personal information only for as long as reasonably necessary for the purposes described in this Policy, including responding to enquiries, delivering ongoing services, maintaining project records, resolving disputes and meeting applicable legal, tax and accounting obligations.",
      "When information is no longer required, we will take reasonable steps to delete it, anonymise it or securely dispose of it, subject to applicable retention requirements.",
      "If you request deletion of your information, we will review the request and explain any information that must be retained under applicable law or for legitimate legal purposes.",
      "Client-provided content and account access will be handled according to the relevant service agreement and applicable retention requirements.",
    ],
  },
  {
    h: "11. Your Privacy Rights and Choices",
    p: [
      "Subject to applicable law, you may have the right to:",
    ],
    items: [
      "Request information about personal data we process about you.",
      "Request correction of inaccurate or incomplete information.",
      "Request completion or updating of personal information.",
      "Request deletion of personal information where legally applicable.",
      "Withdraw consent where processing is based on consent.",
      "Raise a privacy concern or grievance.",
      "Exercise other rights available under applicable data protection laws.",
    ],
    footer:
      "To make a request, email work.collabconnect@gmail.com with the subject 'Privacy Request'. We may request reasonable verification before acting on a request. Withdrawing consent does not affect the lawfulness of processing carried out before withdrawal. Some information may need to be retained where required by law.",
  },
  {
    h: "12. Children's Privacy",
    p: [
      "Our website and services are intended for businesses, brands, creators and individuals who can legally engage with our services.",
      "We do not knowingly collect personal information directly from children in circumstances where parental consent or other legal safeguards are required.",
      "If you believe a child has provided personal information to us without the necessary authorisation, please contact us so that we can review the matter and take appropriate action.",
    ],
  },
  {
    h: "13. Third-Party Websites and Platforms",
    p: [
      "Our website may contain links to third-party websites, social media platforms and external services.",
      "We do not control the privacy practices, content or security of these third-party services. Visiting or interacting with an external website is subject to that website's own privacy policy and terms.",
      "We encourage users to review those policies before sharing personal information.",
    ],
  },
  {
    h: "14. Grievance Redressal and Privacy Contact",
    p: [
      "For privacy-related questions, requests, complaints or concerns, please contact us using the details below.",
    ],
    contact: true,
  },
  {
    h: "15. Changes to This Privacy Policy",
    p: [
      "We may update this Privacy Policy from time to time to reflect changes in our services, website functionality, business practices or applicable legal requirements.",
      "Any revised version will be published on this page with an updated 'Last Updated' date. We encourage visitors and clients to review this page periodically.",
    ],
  },
  {
    h: "16. Contact Us",
    p: [
      "If you have questions about this Privacy Policy or how CollabConnect handles your personal information, please contact us.",
    ],
    contact: true,
  },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      <main className="surface-hero px-5 pt-36 pb-24">
        <article className="mx-auto max-w-4xl">

          {/* HEADER */}
          <div className="glass-card rounded-[2rem] p-7 sm:p-12">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <ShieldCheck size={28} />
            </div>

            <p className="eyebrow mt-7">Legal & Transparency</p>

            <h1 className="mt-4 text-4xl font-medium sm:text-6xl">
              Privacy <span className="italic text-primary">Policy.</span>
            </h1>

            <p className="text-muted-foreground mt-5 max-w-2xl text-sm leading-7 sm:text-base">
              Transparency, trust and responsible handling of your information
              are important to us. Learn how CollabConnect collects, uses and
              protects your information.
            </p>

            <div className="rose-rule mt-8" />

            <div className="text-muted-foreground mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs">
              <span>Effective Date: 01 Jan 2026</span>
              <span>Last Updated: 01 Jan 2026</span>
            </div>
          </div>

          {/* PRIVACY SECTIONS */}
          <div className="mt-8 space-y-5">
            {sections.map((section, index) => (
              <section
                key={section.h}
                className="glass-card rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-medium sm:text-2xl">
                      {section.h}
                    </h2>

                    {section.p?.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-muted-foreground mt-4 text-sm leading-7 sm:text-[15px]"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.subsections?.map((sub) => (
                      <div key={sub.h} className="mt-6">
                        <h3 className="text-sm font-semibold sm:text-base">
                          {sub.h}
                        </h3>

                        <ul className="mt-3 space-y-2.5">
                          {sub.items.map((item) => (
                            <li
                              key={item}
                              className="text-muted-foreground flex gap-3 text-sm leading-6"
                            >
                              <ChevronRight className="mt-1 shrink-0 text-primary" size={15} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {section.items && (
                      <ul className="mt-4 space-y-2.5">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="text-muted-foreground flex gap-3 text-sm leading-6"
                          >
                            <ChevronRight className="mt-1 shrink-0 text-primary" size={15} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.links?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary underline underline-offset-4"
                      >
                        {link.label}
                        <Globe size={14} />
                      </a>
                    ))}

                    {section.footer && (
                      <p className="text-muted-foreground mt-4 text-sm leading-7">
                        {section.footer}
                      </p>
                    )}

                    {section.contact && (
                      <div className="mt-5 rounded-xl border border-border bg-background p-5">
                        <p className="font-semibold">CollabConnect</p>

                        <p className="text-muted-foreground mt-2 text-sm">
                          Website: www.collabconnect.co.in
                        </p>

                        <a
                          href="mailto:work.collabconnect@gmail.com"
                          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                        >
                          <Mail size={16} />
                          work.collabconnect@gmail.com
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div className="glass-card mt-8 rounded-3xl p-7 text-center sm:p-10">
            <h2 className="text-2xl font-medium sm:text-3xl">
              Your privacy matters to us.
            </h2>

            <p className="text-muted-foreground mt-3 text-sm leading-7">
              Have a question or privacy-related concern? Our team is here
              to help.
            </p>

            <a
              href="mailto:work.collabconnect@gmail.com?subject=Privacy%20Request"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Contact Us
              <Mail size={16} />
            </a>
          </div>

          <p className="text-muted-foreground mt-8 text-center text-xs">
            © {new Date().getFullYear()} CollabConnect. All rights reserved.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
