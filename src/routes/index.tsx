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

const title = "Collab Connect Agency";
const description =
  "CollabConnect is an influencer marketing agency connecting brands with creators for impactful collaborations, campaigns, and organic growth.";

export const Route = createFileRoute("/")({
  head: () => ({
  meta: [
    {
      title: "CollabConnect — Where Creators & Brands Collab",
    },

    {
  name: "description",
  content:
    "CollabConnect is a social media management and influencer marketing agency connecting brands with creators for impactful collaborations, campaigns, content strategy, and organic growth.",
},

    {
  name: "keywords",
  content:
    "CollabConnect, social media management, SMM, social media marketing, influencer marketing agency, creator collaborations, brand collaborations, influencers, creators, influencer campaigns, content strategy, Instagram management, Creator growth, Paid collaboration, Barter collaboration, UGC, Reel growth, Websites development, QR menu, Agents, Follower growth",
},

    {
      name: "robots",
      content: "index, follow",
    },

    {
      property: "og:title",
      content: "CollabConnect — Where Creators & Brands Collab",
    },

    {
      property: "og:description",
      content:
        "Connect with creators, discover campaigns, collaborate with brands, and grow your online presence with CollabConnect.",
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
      property: "og:image",
      content: "https://www.collabconnect.co.in/og-image.PNG",
    },

    {
      property: "og:site_name",
      content: "CollabConnect",
    },

    {
      name: "twitter:card",
      content: "summary_large_image",
    },

    {
      name: "twitter:title",
      content: "CollabConnect — Where Creators & Brands Collab",
    },

    {
      name: "twitter:description",
      content:
        "Connect creators and brands through meaningful collaborations and influencer campaigns.",
    },

    {
      name: "twitter:image",
      content: "https://www.collabconnect.co.in/og-image.PNG",
    },

    {
      name: "theme-color",
      content: "#FDFBF6",
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
      type: "image/png",
      href: "/favicon.PNG",
    },

    {
      rel: "apple-touch-icon",
      href: "/favicon.PNG",
    },
  ],

  scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",

        name: "CollabConnect",

        slogan: "Creators • Brands • Growth",

        description:
          "CollabConnect is an influencer marketing agency connecting brands with creators for impactful collaborations, campaigns, and organic growth.",

        url: "https://www.collabconnect.co.in/",

        email: "veercollabs@gmail.com",

        sameAs: [
          "https://www.instagram.com/veer.collabs",
        ],

        areaServed: "IN",
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
