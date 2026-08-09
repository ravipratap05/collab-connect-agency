import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },

      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      {
        title:
          "CollabConnect | Influencer Marketing & Social Media Management",
      },

      {
        name: "description",
        content:
          "CollabConnect is an influencer marketing and social media management agency connecting brands with verified creators for UGC content, paid collaborations, brand campaigns and social media growth across India.",
      },

      {
        name: "author",
        content: "CollabConnect",
      },

      {
        name: "keywords",
        content:
          "CollabConnect, Influencer Marketing India, Influencer Marketing Agency, Social Media Management, Social Media Marketing, SMM, Social Media Agency, Brand Collaboration, Creator Collaboration, UGC Creators, Instagram Influencers, Paid Collaboration, Barter Collaboration, Brand Deals, PR Campaigns, Social Media Campaign, Content Creation, Nano Influencers, Micro Influencers, Creator Platform",
      },

      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },

      {
        name: "theme-color",
        content: "#E9C6A8",
      },

      {
        name: "application-name",
        content: "CollabConnect",
      },

      // Open Graph
      {
        property: "og:site_name",
        content: "CollabConnect",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:title",
        content:
          "CollabConnect | Influencer Marketing & Social Media Management",
      },

      {
        property: "og:description",
        content:
          "Connect brands with verified creators for influencer marketing, UGC content, paid collaborations and social media campaigns across India.",
      },

      {
        property: "og:url",
        content: "https://www.collabconnect.co.in/",
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
          "CollabConnect - Influencer Marketing Platform for Brands and Creators",
      },

      // Twitter / X
      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content:
          "CollabConnect | Influencer Marketing & Social Media Management",
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
    ],

    links: [
      {
        rel: "canonical",
        href: "https://www.collabconnect.co.in/",
      },

      {
        rel: "icon",
        href: "/favicon.jpg",
        type: "image/jpeg",
      },

      {
        rel: "apple-touch-icon",
        href: "/favicon.jpg",
      },

      {
        rel: "stylesheet",
        href: appCss,
      },

      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },

      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },

      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Jost:wght@300;400;500;600&display=swap",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "CollabConnect",
                url: "https://www.collabconnect.co.in/",
                logo: "https://www.collabconnect.co.in/logo.jpg",
                sameAs: [
                  "https://www.instagram.com/veer.collabs",
                  "https://www.threads.net/@veer.collabs",
                ],
              },

              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "CollabConnect",
                alternateName: "CollabConnect",
                url: "https://www.collabconnect.co.in/",
              },
            ]),
          }}
        />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
