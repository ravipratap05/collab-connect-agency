import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { WhyUs } from "@/components/site/WhyUs";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title =
  "CollabConnect | Influencer Marketing & Social Media Management Agency";

const description =
  "CollabConnect is an influencer marketing and social media management agency connecting brands with creators for UGC content, paid collaborations, brand campaigns, content strategy and social media growth across India.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title,
      },

      {
        name: "description",
        content: description,
      },

      {
        name: "keywords",
        content:
          "CollabConnect, influencer marketing agency, influencer marketing India, social media management, social media marketing, SMM, social media agency, brand collaboration, creator collaboration, UGC creators, Instagram influencers, paid collaboration, barter collaboration, brand deals, PR campaigns, social media campaigns, content strategy, Instagram management, creator growth, follower growth, reel growth, nano influencers, micro influencers",
      },

      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },

      {
        name: "author",
        content: "CollabConnect",
      },

      {
        name: "language",
        content: "English",
      },

      {
        name: "geo.region",
        content: "IN",
      },

      {
        name: "theme-color",
        content: "#FDFBF6",
      },

      // Open Graph
      {
        property: "og:title",
        content: title,
      },

      {
        property: "og:description",
        content:
          "Connect brands with creators for influencer marketing, UGC content, paid collaborations, social media management and impactful brand campaigns.",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:url",
        content: "https://www.collabconnect.co.in/",
      },

      {
        property: "og:site_name",
        content: "CollabConnect",
      },

      {
        property: "og:image",
        content: "https://www.collabconnect.co.in/og-image.jpg",
      },

      {
        property: "og:image:width",
        content: "1200",
      },

      {
        property: "og:image:height",
        content: "630",
      },

      {
        property: "og:image:alt",
        content:
          "CollabConnect - Influencer Marketing and Social Media Management Agency",
      },

      // Twitter / X
      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content: title,
      },

      {
        name: "twitter:description",
        content:
          "India's influencer marketing and social media management agency connecting brands with creators.",
      },

      {
        name: "twitter:image",
        content: "https://www.collabconnect.co.in/og-image.jpg",
      },

      {
        name: "twitter:url",
        content: "https://www.collabconnect.co.in/",
      },

      {
        name: "msapplication-TileColor",
        content: "#FDFBF6",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://www.collabconnect.co.in/",
      },

      {
        rel: "icon",
        type: "image/jpeg",
        href: "/favicon.jpg",
      },

      {
        rel: "apple-touch-icon",
        href: "/favicon.jpg",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",

          name: "CollabConnect",

          description,

          url: "https://www.collabconnect.co.in/",

          logo: "https://www.collabconnect.co.in/logo.jpg",

          image: "https://www.collabconnect.co.in/og-image.jpg",

          email: "veercollabs@gmail.com",

          areaServed: {
            "@type": "Country",
            name: "India",
          },

          serviceType: [
            "Influencer Marketing",
            "Social Media Management",
            "Social Media Marketing",
            "UGC Content",
            "Brand Collaborations",
            "Content Strategy",
          ],

          sameAs: [
            "https://www.instagram.com/veer.collabs",
            "https://www.threads.net/@veer.collabs",
          ],
        }),
      },

      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",

          name: "CollabConnect",

          url: "https://www.collabconnect.co.in/",
        }),
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
       {/* WhatsApp Floating Button */}

      <div className="fixed bottom-6 right-6 z-[9999]">

        {/* Chat Popup */}

        {isChatOpen && (

          <div className="absolute bottom-20 right-0 w-[320px] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">

            {/* Header */}

            <div className="bg-[#25D366] px-5 py-4 text-white">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-base font-semibold">Chat with us</p>

                  <p className="text-xs opacity-90">

                    We’re here to help you

                  </p>

                </div>

                <button

                  onClick={() => setIsChatOpen(false)}

                  className="text-2xl leading-none opacity-90 hover:opacity-100"

                  aria-label="Close chat"

                >

                  ×

                </button>

              </div>

            </div>

            {/* Message Area */}

            <div className="bg-[#f7f7f7] p-4">

              <div className="mb-4 rounded-xl bg-white p-3 text-sm text-gray-700 shadow-sm">

                Hi 👋

                <br />

                How can we help you today?

              </div>

              <textarea

                value={message}

                onChange={(e) => setMessage(e.target.value)}

                placeholder="Type your message..."

                rows={3}

                className="w-full resize-none rounded-xl border border-gray-200 bg-white p-3 text-sm outline-none focus:border-[#25D366]"

              />

              <button

                onClick={openWhatsApp}

                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#20bd5a]"

              >

                Start Chat

              </button>

            </div>

          </div>

        )}

        {/* Round WhatsApp Button */}

        <button

          onClick={() => setIsChatOpen(!isChatOpen)}

          aria-label="Open WhatsApp chat"

          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl"

        >

          <svg

            viewBox="0 0 24 24"

            className="h-7 w-7 fill-current"

            aria-hidden="true"

          >

            <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.24-1.64a11.93 11.93 0 005.81 1.5h.01c6.59 0 11.95-5.36 11.95-11.95a11.9 11.9 0 00-3.49-8.43zM12.06 21.85a9.88 9.88 0 01-5.04-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.9 9.9 0 01-1.52-5.3c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.16 1.04 7.04 2.92a9.9 9.9 0 012.91 7.05c0 5.48-4.46 9.94-9.94 9.94zm5.45-7.45c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" />

          </svg>

        </button>

      </div>
    </div>
  );
}
