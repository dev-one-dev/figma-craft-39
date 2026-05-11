const ADVANTAGES = [
  {
    Icon: ClockIcon,
    title: "Save 10+ hours every month",
    desc: "No more end-of-month receipt hunting. Capture expenses as you go and let ReceiptOne do the rest.",
  },
  {
    Icon: RouteIcon,
    title: "Never miss a mileage deduction",
    desc: "Every business trip logged and the CRA per-kilometre rate applied automatically. Every kilometre claimed.",
  },
  {
    Icon: BriefcaseIcon,
    title: "Accountant-ready from day one",
    desc: "Reports formatted for accountants before you hand anything over. No reformatting, no back-and-forth.",
  },
  {
    Icon: FolderCheckIcon,
    title: "CRA-ready documentation, always",
    desc: "Every receipt timestamped and organized the moment you snap it. If the CRA ever asks, you're ready.",
  },
  {
    Icon: RefreshIcon,
    title: "Mobile and web in sync",
    desc: "Capture on your phone, review and export on desktop. Real-time sync — no delays, no duplicates.",
  },
] as const;

function scrollToApps(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("apps")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Advantages() {
  return (
    <section id="advantages" className="w-full scroll-mt-28 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">

          {/* Left — headline + CTA */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-32">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-black/35">
                Why ReceiptOne
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-[2.75rem]">
                Less admin.<br className="hidden sm:block" /> More money in your pocket.
              </h2>
              <p className="mt-4 font-sans text-base leading-relaxed text-black/55 sm:text-lg">
                Built for Canadian freelancers who want to stop losing money to missed deductions and wasted hours.
              </p>
            </div>
            <a
              href="#apps"
              onClick={scrollToApps}
              className="inline-flex w-fit items-center justify-center rounded-full bg-black px-7 py-3.5 font-display text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-all hover:scale-[1.02] hover:opacity-90"
            >
              Claim your free trial
            </a>
          </div>

          {/* Right — advantage list */}
          <ul className="flex flex-col gap-5">
            {ADVANTAGES.map((adv, i) => (
              <li
                key={adv.title}
                className="flex gap-4 rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.09)]"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#f5f4f0]">
                  <adv.Icon />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-black">
                    {adv.title}
                  </h3>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-black/55">
                    {adv.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12" />
      <path d="M2 12h20" />
    </svg>
  );
}

function FolderCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}
