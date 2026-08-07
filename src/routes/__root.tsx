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
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
  title:
    "CollabConnect | Influencer Marketing Platform for Brands & Creators",
},
      {
  name: "description",
  content:
    "CollabConnect helps brands connect with verified creators for influencer marketing, UGC content, paid collaborations, Instagram growth and social media campaigns across India.",
},
      { name: "author", content: "CollabConnect" },
      {
  name: "keywords",
  content:
    "Influencer Marketing India, Collab, Brand Deals, PR, Paid Collaboration, Barter Collaboration, Social Media Campaign, Social Media Manager, Social Media Agency, SMM, Brand Collaboration, UGC Creators, Instagram Influencers, Social Media Marketing, Creator Platform, Nano Influencers, Micro Influencers, CollabConnect",
},
      { property: "og:site_name", content: "CollabConnect" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "CollabConnect | Influencer Marketing Platform" },

{
  property: "og:description",
  content:
    "Connect brands with verified creators for influencer marketing, UGC content and paid collaborations.",
},

{ property: "og:url", content: "https://collabconnect.co.in" },

{
  property: "og:image",
  content: "https://collabconnect.co.in/og-image.png",
},

{ property: "og:image:width", content: "1200" },
{ property: "og:image:height", content: "630" },
      {
  property: "og:image:alt",
  content:
    "CollabConnect - Influencer Marketing Platform for Brands & Creators",
},

{ name: "twitter:title", content: "CollabConnect" },

{
  name: "twitter:description",
  content:
    "India's Influencer Marketing Platform",
},

{
  name: "twitter:image",
  content: "https://collabconnect.co.in/og-image.png",
},
      {
  name: "twitter:url",
  content: "https://collabconnect.co.in",
},
      { name: "twitter:card", content: "summary_large_image" },
      {
  name: "robots",
  content: "index, follow, max-image-preview:large",
},
      {
  name: "theme-color",
  content: "#E9C6A8",
},
    ],
    links: [
      {
  rel: "canonical",
  href: "https://collabconnect.co.in",
},
      {
  rel: "apple-touch-icon",
  href: "/favicon.png",
},
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Jost:wght@300;400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
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
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "CollabConnect",
      url: "https://collabconnect.co.in",
      logo: "https://collabconnect.co.in/logo.png",
      sameAs: [
        "https://www.instagram.com/veer.collabs",
        "https://www.threads.net/@veer.collabs"
      ]
    }),
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
