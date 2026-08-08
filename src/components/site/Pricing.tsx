import {
  Check,
  ChevronDown,
  Crown,
  Globe,
  MessageCircle,
  QrCode,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Reveal, SectionHeading } from "./Reveal";

/* =========================================================
   TYPES
========================================================= */

type Plan = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  popular?: boolean;
  suffix?: string;
};

type GrowthItem = {
  label: string;
  price: string;
};

type PricingCategory = {
  id: string;
  name: string;
  description: string;
  icon: typeof Users;
  plans: Plan[];

  growthData?: {
    followers: GrowthItem[];
    views: GrowthItem[];
  };

  youtubeGrowthData?: {
    subscribers: GrowthItem[];
    likes: GrowthItem[];
  };
};

/* =========================================================
   PRICING DATA
========================================================= */

const pricingCategories: PricingCategory[] = [
  /* =======================================================
     SOCIAL MEDIA MANAGEMENT
  ======================================================= */

  {
    id: "social-media",
    name: "Social Media Management",
    description:
      "Manage, grow and build a consistent social presence.",
    icon: Users,

    plans: [
      {
        name: "Starter",
        price: "₹2,999",
        suffix: "/month",
        blurb:
          "For creators building their first serious presence.",

        features: [
          "10–12 Reels",
          "Profile Optimization",
          "Content Strategy",
          "Monthly Calendar",
          "Captions",
          "Analytics",
          "Brand Outreach",
        ],
      },

      {
        name: "Growth",
        price: "₹4,999",
        suffix: "/month",
        blurb:
          "Our most chosen plan for creators & growing businesses.",

        features: [
          "18–20 Reels",
          "Complete Instagram Management",
          "Story Management",
          "Lead Generation",
          "Brand Outreach",
          "Community Management",
          "DM Management",
          "Weekly Reports",
          "Competitor Analysis",
        ],

        popular: true,
      },

      {
        name: "Elite",
        price: "₹7,999",
        suffix: "/month",
        blurb:
          "Full-service partnership for brands scaling fast.",

        features: [
          "25–30 Reels",
          "Complete Account Management",
          "Daily Stories",
          "Lead Generation",
          "Influencer Outreach",
          "Advanced Analytics",
          "Growth Consultation",
          "Priority Support",
        ],
      },
    ],
  },

  /* =======================================================
     INSTAGRAM GROWTH
  ======================================================= */

  {
    id: "instagram-growth",
    name: "Instagram Growth",
    description:
      "Flexible packages for followers, views and engagement.",
    icon: TrendingUp,

    plans: [],

    growthData: {
      followers: [
        { label: "1K Followers", price: "₹139" },
        { label: "2K Followers", price: "₹269" },
        { label: "3K Followers", price: "₹410" },
        { label: "4K Followers", price: "₹549" },
        { label: "5K Followers", price: "₹689" },
        { label: "6K Followers", price: "₹825" },
        { label: "7K Followers", price: "₹965" },
        { label: "8K Followers", price: "₹1,100" },
        { label: "9K Followers", price: "₹1,240" },
        { label: "10K Followers", price: "₹1,360" },
      ],

      views: [
        { label: "10K Views", price: "₹40" },
        { label: "20K Views", price: "₹60" },
        { label: "30K Views", price: "₹80" },
        { label: "40K Views", price: "₹110" },
        { label: "50K Views", price: "₹140" },
      ],
    },
  },

  /* =======================================================
     YOUTUBE GROWTH
  ======================================================= */

  {
    id: "youtube-growth",
    name: "YouTube Growth",
    description:
      "Flexible packages for subscribers and likes to help grow your YouTube channel.",
    icon: TrendingUp,

    plans: [],

    youtubeGrowthData: {
      subscribers: [
        { label: "100 Subscribers", price: "₹129" },
        { label: "500 Subscribers", price: "₹549" },
        { label: "1K Subscribers", price: "₹999" },
        { label: "2K Subscribers", price: "₹1,899" },
        { label: "5K Subscribers", price: "₹4,499" },
        { label: "10K Subscribers", price: "₹8,999" },
      ],

      likes: [
        { label: "100 Likes", price: "₹59" },
        { label: "500 Likes", price: "₹249" },
        { label: "1K Likes", price: "₹449" },
        { label: "2K Likes", price: "₹849" },
      ],
    },
  },

  /* =======================================================
     WEBSITE DEVELOPMENT
  ======================================================= */

  {
    id: "website",
    name: "Website Development",
    description:
      "Modern websites designed to build trust and generate leads.",
    icon: Globe,

    plans: [
      {
        name: "Website Development",
        price: "₹3,999",
        suffix: " Starting From",
        blurb:
          "Launch your business with a modern, high-converting website.",

        features: [
          "Responsive Website",
          "Modern UI/UX",
          "WhatsApp Integration",
          "2 Days Delivery",
        ],
      },
    ],
  },

  /* =======================================================
     QR MENU
  ======================================================= */

  {
    id: "qr-menu",
    name: "QR Menu",
    description:
      "Digital menus that make it easier for customers to explore your offerings.",
    icon: QrCode,

    plans: [
      {
        name: "QR Menu",
        price: "₹999",
        blurb:
          "A clean, mobile-friendly digital menu for your business.",

        features: [
          "Digital QR Menu",
          "Mobile-Friendly Design",
          "Custom Branding",
          "Categories & Pricing",
          "Easy Menu Updates",
          "QR Code Generation",
        ],
      },
    ],
  },

  /* =======================================================
     WHATSAPP AUTOMATION & AI
  ======================================================= */

  {
    id: "whatsapp-ai",
    name: "WhatsApp Automation & AI",
    description:
      "Automate conversations, capture leads and assist customers 24/7.",
    icon: MessageCircle,

    plans: [
      {
        name: "WhatsApp Automation & AI",
        price: "₹2,499",
        blurb:
          "Automate customer conversations, capture leads and provide AI-powered assistance on WhatsApp.",

        features: [
          "Automated WhatsApp Replies",
          "AI-Powered Customer Support",
          "Lead Capture & Qualification",
          "Customer Follow-ups",
          "Order & Booking Automation",
          "FAQ & Smart Responses",
          "24/7 WhatsApp Assistance",
        ],
      },
    ],
  },
];

/* =========================================================
   SOCIAL MEDIA ADD-ONS
========================================================= */

const addOns = [
  {
    title: "Meta Ads Management",
    price: "₹1,499/month",
    note: "Ad budget extra",
  },
  {
    title: "UGC Creator Outreach",
    price: "Starting ₹1,999",
    note: "Per campaign",
  },
  {
    title: "Campaign Management",
    price: "Starting ₹2,999",
    note: "Per campaign",
  },
];

/* =========================================================
   PRICING COMPONENT
========================================================= */

export function Pricing() {
  /*
   * Social Media Management is open initially.
   */
  const [openCategory, setOpenCategory] =
    useState("social-media");

  /*
   * Currently clicked category button.
   */
  const activeButtonRef =
    useRef<HTMLButtonElement | null>(null);

  /*
   * Exact viewport Y position of the clicked
   * category BEFORE accordion starts changing.
   */
  const targetTopRef = useRef<number | null>(null);

  /*
   * requestAnimationFrame ID.
   */
  const animationFrameRef =
    useRef<number | null>(null);

  /*
   * Used to identify a new accordion transition.
   */
  const animationStartRef =
    useRef<number>(0);

  /*
   * Accordion animation duration.
   *
   * Keep this exactly the same as the CSS duration.
   */
  const ACCORDION_DURATION = 350;

  /* =======================================================
     HANDLE CATEGORY CLICK
  ======================================================= */

  const handleCategory = (
    id: string,
    button: HTMLButtonElement,
  ) => {
    /*
     * Cancel previous correction animation.
     */
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(
        animationFrameRef.current,
      );

      animationFrameRef.current = null;
    }

    /*
     * Store the exact clicked button.
     */
    activeButtonRef.current = button;

    /*
     * Capture the button position BEFORE React changes
     * the accordion state.
     */
    targetTopRef.current =
      button.getBoundingClientRect().top;

    /*
     * Start timing immediately.
     */
    animationStartRef.current =
      performance.now();

    /*
     * Change accordion state.
     */
    setOpenCategory((current) =>
      current === id ? "" : id,
    );
  };

  /* =======================================================
     KEEP CLICKED HEADER IN SAME VIEWPORT POSITION
  ======================================================= */

  useLayoutEffect(() => {
    /*
     * No active click = nothing to correct.
     */
    if (
      !activeButtonRef.current ||
      targetTopRef.current === null
    ) {
      return;
    }

    const correctPosition = () => {
      const button =
        activeButtonRef.current;

      const targetTop =
        targetTopRef.current;

      if (
        !button ||
        targetTop === null
      ) {
        return;
      }

      /*
       * Current position of clicked header.
       */
      const currentTop =
        button.getBoundingClientRect().top;

      /*
       * How much the accordion pushed
       * the clicked header.
       */
      const difference =
        currentTop - targetTop;

      /*
       * Only correct meaningful movement.
       */
      if (Math.abs(difference) > 0.01) {
        window.scrollBy({
          top: difference,
          left: 0,
          behavior: "auto",
        });
      }
    };

    /*
     * FIRST correction happens immediately
     * after React updates the DOM.
     */
    correctPosition();

    /*
     * Continue correcting during the accordion animation.
     */
    const animate = (time: number) => {
      correctPosition();

      const elapsed =
        time - animationStartRef.current;

      if (elapsed < ACCORDION_DURATION) {
        animationFrameRef.current =
          requestAnimationFrame(animate);
      } else {
        /*
         * One final correction.
         */
        correctPosition();

        animationFrameRef.current =
          null;

        /*
         * Clear temporary references.
         */
        activeButtonRef.current = null;
        targetTopRef.current = null;
      }
    };

    animationFrameRef.current =
      requestAnimationFrame(animate);

    /*
     * Cleanup if another category is clicked.
     */
    return () => {
      if (
        animationFrameRef.current !== null
      ) {
        cancelAnimationFrame(
          animationFrameRef.current,
        );

        animationFrameRef.current = null;
      }
    };
  }, [openCategory]);

  /* =======================================================
     COMPONENT CLEANUP
  ======================================================= */

  useEffect(() => {
    return () => {
      if (
        animationFrameRef.current !== null
      ) {
        cancelAnimationFrame(
          animationFrameRef.current,
        );
      }
    };
  }, []);

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section
      id="pricing"
      className="surface-hero relative overflow-hidden py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-5">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Plans built around your{" "}
              <span className="italic">
                growth.
              </span>
            </>
          }
          subtitle="Choose the service that fits your business today. Scale, upgrade or customize as you grow."
        />

        {/* =================================================
            PRICING ACCORDION
        ================================================= */}

        <div className="mx-auto mt-14 max-w-5xl space-y-4">

          {pricingCategories.map(
            (category, categoryIndex) => {
              const isOpen =
                openCategory ===
                category.id;

              const Icon =
                category.icon;

              return (
                <Reveal
                  key={category.id}
                  delay={
                    categoryIndex * 0.05
                  }
                >
                  <div className="glass-card overflow-hidden rounded-[2rem]">

                    {/* =====================================
                        CATEGORY HEADER
                    ===================================== */}

                    <button
                      type="button"
                      onClick={(event) =>
                        handleCategory(
                          category.id,
                          event.currentTarget,
                        )
                      }
                      aria-expanded={
                        isOpen
                      }
                      className="flex w-full items-center gap-4 p-5 text-left transition-colors duration-200 hover:bg-primary/5 sm:p-6"
                    >

                      {/* ICON */}

                      <span
                        className="grid size-12 shrink-0 place-items-center rounded-2xl"
                        style={{
                          background:
                            "var(--gradient-rose)",
                        }}
                      >
                        <Icon
                          size={20}
                          className="text-primary-foreground"
                        />
                      </span>

                      {/* TEXT */}

                      <span className="min-w-0 flex-1">

                        <span className="block text-lg font-medium sm:text-xl">
                          {category.name}
                        </span>

                        <span className="text-muted-foreground mt-1 block text-xs sm:text-sm">
                          {
                            category.description
                          }
                        </span>

                      </span>

                      {/* ARROW */}

                      <ChevronDown
                        size={20}
                        className={`text-muted-foreground shrink-0 transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isOpen
                            ? "rotate-180"
                            : "rotate-0"
                        }`}
                      />

                    </button>

                    {/* =====================================
                        ACCORDION CONTENT
                    ===================================== */}

                    <div
                      className={`grid transition-[grid-template-rows] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                      aria-hidden={
                        !isOpen
                      }
                    >

                      <div className="min-h-0 overflow-hidden">

                        <div className="border-border/50 border-t px-5 pb-6 pt-6 sm:px-6 sm:pb-7">

                          {/* =================================
                              YOUTUBE GROWTH
                          ================================= */}

                          {category.youtubeGrowthData ? (
                            <div className="grid gap-5 lg:grid-cols-2">

                              {/* =================================
                                  SUBSCRIBERS
                              ================================= */}

                              <article className="glass-card lift rounded-[2rem] p-6 sm:p-7">

                                <div className="flex items-center justify-between gap-4">

                                  <div>

                                    <h3 className="text-2xl font-medium">
                                      Subscribers
                                    </h3>

                                    <p className="text-muted-foreground mt-1 text-sm">
                                      YouTube subscriber
                                      packages
                                    </p>

                                  </div>

                                  <span
                                    className="grid size-12 shrink-0 place-items-center rounded-2xl"
                                    style={{
                                      background:
                                        "var(--gradient-rose)",
                                    }}
                                  >
                                    <Users
                                      size={
                                        20
                                      }
                                      className="text-primary-foreground"
                                    />
                                  </span>

                                </div>

                                <div className="rose-rule mt-5" />

                                <div className="mt-3 divide-y divide-border/50">

                                  {category.youtubeGrowthData.subscribers.map(
                                    (
                                      item,
                                    ) => (
                                      <div
                                        key={
                                          item.label
                                        }
                                        className="flex items-center justify-between gap-4 py-3"
                                      >

                                        <span className="text-sm">
                                          {
                                            item.label
                                          }
                                        </span>

                                        <span className="text-primary text-sm font-medium">
                                          {
                                            item.price
                                          }
                                        </span>

                                      </div>
                                    ),
                                  )}

                                </div>

                                <a
                                  href="#contact"
                                  className="text-primary-foreground mt-6 flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-medium transition-transform duration-200 hover:scale-[1.03]"
                                  style={{
                                    background:
                                      "var(--gradient-rose)",
                                  }}
                                >
                                  Get Started
                                </a>

                              </article>

                              {/* =================================
                                  LIKES
                              ================================= */}

                              <article className="glass-card lift rounded-[2rem] p-6 sm:p-7">

                                <div className="flex items-center justify-between gap-4">

                                  <div>

                                    <h3 className="text-2xl font-medium">
                                      Likes
                                    </h3>

                                    <p className="text-muted-foreground mt-1 text-sm">
                                      YouTube likes
                                      packages
                                    </p>

                                  </div>

                                  <span
                                    className="grid size-12 shrink-0 place-items-center rounded-2xl"
                                    style={{
                                      background:
                                        "var(--gradient-rose)",
                                    }}
                                  >
                                    <TrendingUp
                                      size={
                                        20
                                      }
                                      className="text-primary-foreground"
                                    />
                                  </span>

                                </div>

                                <div className="rose-rule mt-5" />

                                <div className="mt-3 divide-y divide-border/50">

                                  {category.youtubeGrowthData.likes.map(
                                    (
                                      item,
                                    ) => (
                                      <div
                                        key={
                                          item.label
                                        }
                                        className="flex items-center justify-between gap-4 py-3"
                                      >

                                        <span className="text-sm">
                                          {
                                            item.label
                                          }
                                        </span>

                                        <span className="text-primary text-sm font-medium">
                                          {
                                            item.price
                                          }
                                        </span>

                                      </div>
                                    ),
                                  )}

                                </div>

                                <a
                                  href="#contact"
                                  className="text-primary-foreground mt-6 flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-medium transition-transform duration-200 hover:scale-[1.03]"
                                  style={{
                                    background:
                                      "var(--gradient-rose)",
                                  }}
                                >
                                  Get Started
                                </a>

                              </article>

                            </div>

                          ) : category.growthData ? (

                            /* =================================
                               INSTAGRAM GROWTH
                            ================================= */

                            <div className="grid gap-5 lg:grid-cols-2">

                              {/* =================================
                                  FOLLOWERS
                              ================================= */}

                              <article className="glass-card lift rounded-[2rem] p-6 sm:p-7">

                                <div className="flex items-center justify-between gap-4">

                                  <div>

                                    <h3 className="text-2xl font-medium">
                                      Followers
                                    </h3>

                                    <p className="text-muted-foreground mt-1 text-sm">
                                      Instagram follower
                                      packages
                                    </p>

                                  </div>

                                  <span
                                    className="grid size-12 shrink-0 place-items-center rounded-2xl"
                                    style={{
                                      background:
                                        "var(--gradient-rose)",
                                    }}
                                  >
                                    <Users
                                      size={
                                        20
                                      }
                                      className="text-primary-foreground"
                                    />
                                  </span>

                                </div>

                                <div className="rose-rule mt-5" />

                                <div className="mt-3 divide-y divide-border/50">

                                  {category.growthData.followers.map(
                                    (
                                      item,
                                    ) => (
                                      <div
                                        key={
                                          item.label
                                        }
                                        className="flex items-center justify-between gap-4 py-3"
                                      >

                                        <span className="text-sm">
                                          {
                                            item.label
                                          }
                                        </span>

                                        <span className="text-primary text-sm font-medium">
                                          {
                                            item.price
                                          }
                                        </span>

                                      </div>
                                    ),
                                  )}

                                </div>

                                <a
                                  href="#contact"
                                  className="text-primary-foreground mt-6 flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-medium transition-transform duration-200 hover:scale-[1.03]"
                                  style={{
                                    background:
                                      "var(--gradient-rose)",
                                  }}
                                >
                                  Get Started
                                </a>

                              </article>

                              {/* =================================
                                  VIEWS
                              ================================= */}

                              <article className="glass-card lift rounded-[2rem] p-6 sm:p-7">

                                <div className="flex items-center justify-between gap-4">

                                  <div>

                                    <h3 className="text-2xl font-medium">
                                      Views
                                    </h3>

                                    <p className="text-muted-foreground mt-1 text-sm">
                                      Instagram views
                                      packages
                                    </p>

                                  </div>

                                  <span
                                    className="grid size-12 shrink-0 place-items-center rounded-2xl"
                                    style={{
                                      background:
                                        "var(--gradient-rose)",
                                    }}
                                  >
                                    <TrendingUp
                                      size={
                                        20
                                      }
                                      className="text-primary-foreground"
                                    />
                                  </span>

                                </div>

                                <div className="rose-rule mt-5" />

                                <div className="mt-3 divide-y divide-border/50">

                                  {category.growthData.views.map(
                                    (
                                      item,
                                    ) => (
                                      <div
                                        key={
                                          item.label
                                        }
                                        className="flex items-center justify-between gap-4 py-3"
                                      >

                                        <span className="text-sm">
                                          {
                                            item.label
                                          }
                                        </span>

                                        <span className="text-primary text-sm font-medium">
                                          {
                                            item.price
                                          }
                                        </span>

                                      </div>
                                    ),
                                  )}

                                </div>

                                <p className="text-muted-foreground mt-4 text-xs">
                                  Views can be split
                                  across multiple posts.
                                </p>

                                <a
                                  href="#contact"
                                  className="text-primary-foreground mt-5 flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-medium transition-transform duration-200 hover:scale-[1.03]"
                                  style={{
                                    background:
                                      "var(--gradient-rose)",
                                  }}
                                >
                                  Get Started
                                </a>

                              </article>

                              {/* =================================
                                  LIKES & COMMENTS
                              ================================= */}

                              <article className="glass-card lift rounded-[2rem] p-6 text-center sm:p-7 lg:col-span-2">

                                <div className="mx-auto max-w-xl">

                                  <h3 className="text-xl font-medium">
                                    Likes &
                                    Comments
                                  </h3>

                                  <p className="text-muted-foreground mt-2 text-sm">
                                    Custom likes and
                                    comments packages
                                    are available.
                                  </p>

                                  <p className="text-primary mt-2 text-sm font-medium">
                                    DM us on Instagram
                                    for pricing.
                                  </p>

                                  <a
                                    href="https://www.instagram.com/veer.collabs"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-primary-foreground mt-5 inline-flex rounded-full px-6 py-3.5 text-sm font-medium transition-transform duration-200 hover:scale-[1.03]"
                                    style={{
                                      background:
                                        "var(--gradient-rose)",
                                    }}
                                  >
                                    DM on Instagram
                                  </a>

                                </div>

                              </article>

                            </div>

                          ) : (

                            /* =================================
                               NORMAL PLANS
                            ================================= */

                            <div
                              className={`grid gap-5 ${
                                category.plans.length ===
                                1
                                  ? "mx-auto max-w-md"
                                  : "lg:grid-cols-3"
                              }`}
                            >

                              {category.plans.map(
                                (plan) => (
                                  <article
                                    key={
                                      plan.name
                                    }
                                    className={`lift relative rounded-[2rem] p-7 ${
                                      plan.popular
                                        ? "glass-panel"
                                        : "glass-card"
                                    }`}
                                  >

                                    {/* POPULAR */}

                                    {plan.popular && (
                                      <span
                                        className="text-primary-foreground absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.65rem] tracking-[0.2em] uppercase"
                                        style={{
                                          background:
                                            "var(--gradient-rose)",
                                        }}
                                      >
                                        <Crown
                                          size={
                                            12
                                          }
                                        />
                                        Most Popular
                                      </span>
                                    )}

                                    <h3 className="text-2xl font-medium">
                                      {
                                        plan.name
                                      }
                                    </h3>

                                    <p className="text-muted-foreground mt-2 text-sm">
                                      {
                                        plan.blurb
                                      }
                                    </p>

                                    {/* PRICE */}

                                    <p className="mt-6 flex flex-wrap items-baseline gap-2">

                                      <span className="font-display text-4xl font-medium sm:text-5xl">
                                        {
                                          plan.price
                                        }
                                      </span>

                                      {plan.suffix && (
                                        <span className="text-muted-foreground text-sm">
                                          {
                                            plan.suffix
                                          }
                                        </span>
                                      )}

                                    </p>

                                    <div className="rose-rule mt-6" />

                                    {/* FEATURES */}

                                    <ul className="mt-6 grid gap-2.5">

                                      {plan.features.map(
                                        (
                                          feature,
                                        ) => (
                                          <li
                                            key={
                                              feature
                                            }
                                            className="flex items-start gap-2 text-sm"
                                          >

                                            <Check
                                              size={
                                                15
                                              }
                                              className="text-primary mt-0.5 shrink-0"
                                            />

                                            <span>
                                              {
                                                feature
                                              }
                                            </span>

                                          </li>
                                        ),
                                      )}

                                    </ul>

                                    {/* CTA */}

                                    <a
                                      href="#contact"
                                      className={`mt-8 flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-transform duration-200 hover:scale-[1.03] ${
                                        plan.popular
                                          ? "text-primary-foreground"
                                          : "text-foreground border"
                                      }`}
                                      style={
                                        plan.popular
                                          ? {
                                              background:
                                                "var(--gradient-rose)",
                                            }
                                          : undefined
                                      }
                                    >
                                      Get Started
                                    </a>

                                  </article>
                                ),
                              )}

                            </div>
                          )}

                          {/* =====================================
                              ADD-ONS
                          ===================================== */}

                          {category.id ===
                            "social-media" && (
                            <div className="mt-10">

                              <p className="eyebrow text-center">
                                Optional Add-ons
                              </p>

                              <div className="mt-5 grid gap-4 sm:grid-cols-3">

                                {addOns.map(
                                  (
                                    addon,
                                  ) => (
                                    <div
                                      key={
                                        addon.title
                                      }
                                      className="glass-card lift rounded-3xl p-5 text-center"
                                    >

                                      <h4 className="text-base font-medium">
                                        {
                                          addon.title
                                        }
                                      </h4>

                                      <p className="text-primary mt-2 text-sm font-medium">
                                        {
                                          addon.price
                                        }
                                      </p>

                                      <p className="text-muted-foreground mt-1 text-xs">
                                        {
                                          addon.note
                                        }
                                      </p>

                                    </div>
                                  ),
                                )}

                              </div>

                            </div>
                          )}

                        </div>

                      </div>

                    </div>

                  </div>
                </Reveal>
              );
            },
          )}

        </div>

      </div>
    </section>
  );
}
