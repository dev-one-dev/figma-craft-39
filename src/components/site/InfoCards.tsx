const BENEFITS = [
  {
    Icon: CameraIcon,
    title: "Snap. Done.",
    desc: "Any receipt, any format. Camera, email, or PDF — captured and filed in seconds. No manual entry ever.",
  },
  {
    Icon: FolderIcon,
    title: "Categories that make sense",
    desc: "Meals, mileage, home office, supplies — pre-built for CRA expense categories. Every dollar in the right place.",
  },
  {
    Icon: ReceiptIcon,
    title: "Every tax dollar tracked",
    desc: "GST, HST, and PST split automatically by province. Never leave an input tax credit on the table again.",
  },
  {
    Icon: CarIcon,
    title: "Mileage on autopilot",
    desc: "Log every business kilometre. The CRA per-kilometre rate is applied automatically — no calculator needed.",
  },
  {
    Icon: FileTextIcon,
    title: "Your accountant will love you",
    desc: "One-tap PDF and CSV export, formatted exactly how accountants want it. Hand it over and you're done.",
  },
  {
    Icon: ShieldIcon,
    title: "Ready when the CRA calls",
    desc: "10-year cloud storage. Every receipt timestamped, organized, and searchable. Audits become non-events.",
  },
] as const;

export function InfoCards() {
  return (
    <section id="benefits" className="w-full scroll-mt-28 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-black/35">
            Benefits
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-[2.75rem]">
            Turn receipt chaos into tax gold
          </h2>
          <p className="mt-3 font-sans text-base leading-relaxed text-black/55 sm:text-lg">
            Everything you need to capture, organize, and claim every business expense — without the Sunday-night spreadsheet session.
          </p>
        </div>

        {/* Benefit grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="flex flex-col gap-5 rounded-3xl border border-black/[0.07] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] sm:p-8"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#f5f4f0]">
                <b.Icon />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold leading-snug text-black">
                  {b.title}
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-black/55">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CameraIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="14" y2="14" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
      <rect x="7" y="14" width="10" height="6" rx="1" />
      <path d="M5 9V7l3-4h8l3 4v2" />
      <line x1="9" y1="11" x2="9.01" y2="11" />
      <line x1="15" y1="11" x2="15.01" y2="11" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
