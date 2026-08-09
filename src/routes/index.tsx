import { createFileRoute } from "@tanstack/react-router";
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
    </div>
  );
}
