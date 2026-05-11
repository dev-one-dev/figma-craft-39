type Region = "ca" | "us";

const CA_FEATURES = [
  {
    Icon: MailIcon,
    title: "Email receipt forwarding",
    desc: "Forward digital receipts straight to your ReceiptOne inbox. Works with any email client — Gmail, Outlook, Apple Mail.",
  },
  {
    Icon: LayersIcon,
    title: "Bulk upload",
    desc: "Drop in a folder of receipts and let ReceiptOne sort them all. Perfect for catching up on a backlog in minutes, not hours.",
  },
  {
    Icon: DevicesIcon,
    title: "Multi-device sync",
    desc: "Start on your phone, review on your laptop. Everything synced in real time — pick up exactly where you left off.",
  },
  {
    Icon: TagIcon,
    title: "Reimbursable expenses",
    desc: "Tag client expenses separately and export a clean reimbursement report. Send it to your client or employer in one tap.",
  },
  {
    Icon: GlobeIcon,
    title: "Multi-currency support",
    desc: "Travel for work or invoice internationally? Expenses are logged in the original currency with automatic conversion.",
  },
  {
    Icon: ShareIcon,
    title: "Accountant sharing",
    desc: "Give your accountant read-only access or export and share a formatted report instantly — no email attachments, no confusion.",
  },
] as const;

const US_FEATURES = [
  {
    Icon: MailIcon,
    title: "Email receipt forwarding",
    desc: "Forward digital receipts straight to your ReceiptOne inbox. Works with any email client — Gmail, Outlook, Apple Mail.",
  },
  {
    Icon: LayersIcon,
    title: "Bulk upload",
    desc: "Drop in a folder of receipts and let ReceiptOne sort them all. Perfect for catching up on a backlog in minutes, not hours.",
  },
  {
    Icon: DevicesIcon,
    title: "Multi-device sync",
    desc: "Start on your phone, review on your laptop. Everything synced in real time — pick up exactly where you left off.",
  },
  {
    Icon: TagIcon,
    title: "Reimbursable expenses",
    desc: "Tag client expenses separately and export a clean reimbursement report. Send it to your client or employer in one tap.",
  },
  {
    Icon: GlobeIcon,
    title: "Multi-currency support",
    desc: "Travel for work or invoice internationally? Expenses are logged in the original currency with automatic conversion.",
  },
  {
    Icon: ShareIcon,
    title: "Accountant sharing",
    desc: "Give your accountant read-only access or export and share a formatted report instantly — no email attachments, no confusion.",
  },
] as const;

export function NotAll({ region = "ca" }: { region?: Region }) {
  const features = region === "us" ? US_FEATURES : CA_FEATURES;

  return (
    <section className="w-full px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">

        <div className="mb-12 text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-black/35">
            And this is not all
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-[2.75rem]">
            Everything your business needs
          </h2>
          <p className="mt-3 font-sans text-base leading-relaxed text-black/55 sm:text-lg">
            Built for freelancers who want less admin and more time doing actual work.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-4 rounded-3xl border border-black/[0.07] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] sm:p-7"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-[#f5f4f0]">
                <f.Icon />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-black">
                  {f.title}
                </h3>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-black/55">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function DevicesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}
