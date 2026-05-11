import { MessageCircle, Plus } from "lucide-react";
import { useState } from "react";

export type QA = { q: string; a: string };

/** Shared FAQ list (used both for UI rendering and FAQPage JSON-LD). */
export const faqItems: QA[] = [
  {
    q: "How does receipt scanning work?",
    a: "Open the app, point your camera at any receipt, and tap. ReceiptOne reads the merchant name, date, total, and tax amounts automatically — no typing required. Paper receipts, email receipts, and PDF invoices all work.",
  },
  {
    q: "Does ReceiptOne calculate my tax refund?",
    a: "No — and we're upfront about that. ReceiptOne captures the GST/HST and PST on your receipts so you have accurate records for your CRA return. Your actual refund depends on your full tax situation, which your accountant or tax software calculates.",
  },
  {
    q: 'What does "Estimated refundable taxes" mean?',
    a: "It's the running total of GST/HST shown on your receipts — the input tax credits (ITCs) a self-employed person or small business can typically claim back from the CRA. It's a reference figure, not a guaranteed refund amount.",
  },
  {
    q: "Why is PST marked as non-refundable?",
    a: "Provincial sales tax (PST — charged in BC, Saskatchewan, Manitoba, and Quebec's QST) is generally not recoverable as an input tax credit the way GST/HST is. We flag it separately so your records are accurate when you file.",
  },
  {
    q: "What if my receipt has no tax?",
    a: "No problem. The receipt is still stored, dated, and categorized correctly. Tax fields simply show empty in your reports — which is accurate, since not every purchase is taxable.",
  },
  {
    q: "Can I export my expense reports?",
    a: "Yes. Export as PDF or CSV any time — formatted for your accountant, bookkeeper, or your own CRA filing. Your data, your format, no lock-in.",
  },
  {
    q: 'What does "Reimbursable" mean?',
    a: "Tag any expense as reimbursable when a client or employer should pay you back. Filter your reimbursables into a separate report and send it directly — no more digging through receipts at billing time.",
  },
  {
    q: "What's included in the paid plan?",
    a: "Everything: unlimited receipt scanning, automatic GST/HST/PST extraction, mileage tracking, bulk upload, multi-device sync, PDF & CSV exports, email receipt forwarding, and 10+ years of secure cloud storage.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes — cancel in one tap from the app. No phone calls, no cancellation fees, no questions asked. Your data stays accessible until the end of your billing period.",
  },
  {
    q: "Is ReceiptOne a tax filing service?",
    a: "No. ReceiptOne organizes your receipts and expenses so that filing — whether you do it yourself or hand off to an accountant — is fast, accurate, and stress-free. We don't file taxes on your behalf.",
  },
];

export function Faq({ items = faqItems }: { items?: QA[] } = {}) {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section id="faq" className="mx-auto w-full max-w-[760px] scroll-mt-28 px-4 pt-4 pb-10 sm:px-6 md:pt-6 md:pb-14">
      {/* Pill */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-black px-4 py-2 font-display text-[12px] font-semibold text-white">
          <MessageCircle className="h-3.5 w-3.5" strokeWidth={2.5} />
          FAQ
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-5 px-1 text-center font-display text-[28px] font-bold leading-[1.08] tracking-[-0.02em] text-black sm:text-[40px] md:text-[56px]">
        Everything you need to know
      </h2>

      {/* List */}
      <ul className="mt-10 space-y-3">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <li
              key={it.q}
              className={`group rounded-[20px] bg-white px-5 py-4 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.12)] md:px-6 md:py-5 ${
                isOpen ? "shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)] ring-1 ring-black/5" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="font-display text-[15px] font-semibold text-black transition-colors duration-200 md:text-[16px]">
                  {it.q}
                </span>
                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-out ${
                    isOpen
                      ? "rotate-45 scale-110 bg-black text-white"
                      : "bg-black/10 text-black group-hover:bg-black/20"
                  }`}
                >
                  <Plus className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen
                    ? "mt-3 grid-rows-[1fr] opacity-100"
                    : "mt-0 grid-rows-[0fr] opacity-0"
                }`}
              >
                <p
                  className={`overflow-hidden font-display text-[14px] leading-[1.55] text-[#7e8890] md:text-[15px] ${
                    isOpen ? "translate-y-0" : "-translate-y-1"
                  } transition-transform duration-300 ease-out`}
                >
                  {it.a}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
