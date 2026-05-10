type Region = "ca" | "us";

interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  currency: string;
  badge?: string;
  popular?: boolean;
  features: string[];
}

const CA_PLANS: Plan[] = [
  {
    id: "week",
    name: "Weekly",
    price: "4.99",
    period: "/ week",
    currency: "CAD",
    features: [
      "Unlimited receipt scanning",
      "Expense & mileage tracking",
      "GST / HST / PST tracking",
      "CRA-ready expense reports",
      "iOS & Android apps",
    ],
  },
  {
    id: "month",
    name: "Monthly",
    price: "9.99",
    period: "/ month",
    currency: "CAD",
    popular: true,
    features: [
      "Everything in Weekly",
      "Unlimited cloud storage",
      "Multi-device sync",
      "Accountant report sharing",
      "Priority support",
    ],
  },
  {
    id: "year",
    name: "Annual",
    price: "99.99",
    period: "/ year",
    currency: "CAD",
    badge: "Save 18%",
    features: [
      "Everything in Monthly",
      "2 months free vs monthly",
      "Unlimited cloud storage",
      "Multi-device sync",
      "Priority support",
    ],
  },
];

const US_PLANS: Plan[] = [
  {
    id: "week",
    name: "Weekly",
    price: "3.99",
    period: "/ week",
    currency: "USD",
    features: [
      "Unlimited receipt scanning",
      "Expense & mileage tracking",
      "Sales tax tracking",
      "IRS-ready expense reports",
      "iOS & Android apps",
    ],
  },
  {
    id: "month",
    name: "Monthly",
    price: "7.99",
    period: "/ month",
    currency: "USD",
    popular: true,
    features: [
      "Everything in Weekly",
      "Unlimited cloud storage",
      "Multi-device sync",
      "Accountant report sharing",
      "Priority support",
    ],
  },
  {
    id: "year",
    name: "Annual",
    price: "79.99",
    period: "/ year",
    currency: "USD",
    badge: "Save 17%",
    features: [
      "Everything in Monthly",
      "2 months free vs monthly",
      "Unlimited cloud storage",
      "Multi-device sync",
      "Priority support",
    ],
  },
];

function scrollToApps(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("apps")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Pricing({ region = "ca" }: { region?: Region }) {
  const plans = region === "us" ? US_PLANS : CA_PLANS;

  return (
    <section
      id="pricing"
      className="w-full scroll-mt-28 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[1200px]">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-black/35">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-[2.75rem]">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-black/55 sm:text-lg">
            Start free for 7 days. No credit card required. Cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <p className="mt-8 text-center font-sans text-sm text-black/35">
          All plans include a 7-day free trial · Prices in {plans[0].currency}
        </p>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const isPopular = plan.popular === true;

  return (
    <div
      className={[
        "relative flex flex-col rounded-3xl p-7",
        isPopular
          ? "bg-black text-white ring-2 ring-black"
          : "border border-black/[0.07] bg-white text-black shadow-[0_2px_12px_rgba(0,0,0,0.06)]",
      ].join(" ")}
    >
      {/* Popular badge */}
      {isPopular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#f97316] px-4 py-1 font-sans text-xs font-semibold text-white shadow-[0_4px_12px_rgba(249,115,22,0.4)]">
          Most Popular
        </span>
      )}

      {/* Save badge */}
      {plan.badge && !isPopular && (
        <span className="mb-4 inline-flex self-start rounded-full bg-[#fed7aa] px-3 py-1 font-sans text-xs font-semibold text-black">
          {plan.badge}
        </span>
      )}

      {/* Plan name */}
      <p
        className={[
          "font-sans text-sm font-semibold uppercase tracking-widest",
          isPopular ? "text-white/50" : "text-black/40",
        ].join(" ")}
      >
        {plan.name}
      </p>

      {/* Price */}
      <div className="mt-3 flex items-baseline gap-1.5">
        <span
          className={[
            "font-display text-4xl font-bold tracking-tight",
            isPopular ? "text-white" : "text-black",
          ].join(" ")}
        >
          ${plan.price}
        </span>
        <span
          className={[
            "font-sans text-sm",
            isPopular ? "text-white/50" : "text-black/40",
          ].join(" ")}
        >
          {plan.period}
        </span>
      </div>

      {/* Divider */}
      <div
        className={[
          "my-6 h-px",
          isPopular ? "bg-white/10" : "bg-black/[0.07]",
        ].join(" ")}
      />

      {/* Features */}
      <ul className="flex flex-1 flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span
              className={[
                "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full",
                isPopular ? "bg-white/15" : "bg-black/[0.06]",
              ].join(" ")}
              aria-hidden
            >
              <CheckIcon isPopular={isPopular} />
            </span>
            <span
              className={[
                "font-sans text-sm leading-snug",
                isPopular ? "text-white/80" : "text-black/65",
              ].join(" ")}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#apps"
        onClick={scrollToApps}
        className={[
          "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 font-display text-sm font-semibold transition-all hover:scale-[1.02]",
          isPopular
            ? "bg-white text-black hover:opacity-90"
            : "bg-black text-white hover:opacity-90",
        ].join(" ")}
      >
        Start free trial
      </a>
    </div>
  );
}

function CheckIcon({ isPopular }: { isPopular: boolean }) {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 24 24"
      fill="none"
      stroke={isPopular ? "white" : "black"}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}
