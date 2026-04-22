import { Link, createFileRoute } from "@tanstack/react-router";

const scopeItems = [
  "Create an account",
  "Upload receipts, invoices, or other documents",
  "Use reporting, analytics, or tax configuration features",
  "Contact support",
  "Otherwise interact with the Services",
];

const directInformation = [
  "Name",
  "Email address",
  "Account credentials",
  "Subscription and billing status information received from app store platforms (Apple App Store, Google Play Store)",
  "App preferences and settings",
  "Country, province/state, and other configuration data relevant to tax logic and reporting",
  "Support requests and communications you send to us",
];

const taxData = [
  "Images of receipts and documents uploaded by you",
  "Data extracted from receipts or documents using OCR, such as merchant name, transaction date, amount, taxes, and currency",
  "Manually entered expenses and related notes",
  "Mileage and trip records",
  "Home office information, such as square footage, allocation percentages, and related expense inputs",
  "Tax-related forms, reports, or documents that you upload or generate through the Services",
];

const autoCollected = [
  "Device type, operating system, and app version",
  "IP address and approximate location derived from IP address",
  "Usage, interaction, and feature activity data",
  "Crash reports, diagnostics, and performance information",
  "Security and log information necessary to detect misuse, fraud, or service errors",
];

const devicePermissions = [
  ["Camera", "Capture receipt or document images when you initiate a scan", "Yes"],
  ["Photo Library / Storage", "Select files or images that you choose to upload", "Yes"],
  ["Push Notifications", "Send service-related reminders, alerts, and updates", "Yes"],
];

const californiaCategories = [
  ["Identifiers", "Name, email address, account identifiers, device-related identifiers"],
  ["Customer records", "Subscription status, service history"],
  ["Commercial information", "Transaction metadata, subscription plan details"],
  ["Internet activity", "App usage, diagnostics, interaction data"],
  ["Approximate geolocation", "Derived from IP address"],
  [
    "Sensitive personal information",
    "Financial or expense-related information contained in receipts, reports, and uploaded documents",
  ],
];

const usageItems = [
  "To create, administer, and secure your account",
  "To provide, operate, maintain, and improve the Services",
  "To process receipt images and documents using OCR and AI-assisted tools",
  "To organize, classify, and summarize expenses and tax-related records",
  "To generate reports, exports, and user-requested outputs",
  "To sync data across devices and supported platforms",
  "To communicate with you about service-related notices, support, updates, and security matters",
  "To detect, investigate, prevent, or respond to fraud, abuse, security incidents, or technical issues",
  "To comply with legal obligations, enforce agreements, and protect rights, safety, and property",
];

const aiItems = [
  "Extract structured data from receipt and document images",
  "Suggest merchant or expense categories",
  "Apply country-specific tax logic rules and calculation support",
  "Assist with recognition, normalization, and organization of uploaded content",
];

const aiLimitations = [
  "These processes do not make legal, credit, employment, insurance, or similarly significant decisions about individuals",
  "Users may review, edit, override, or delete resulting records within the Services at any time",
  "AI suggestions are for informational purposes only and should not be relied upon as definitive tax or financial advice",
];

const sharingRecipients = [
  "Cloud hosting and infrastructure providers",
  "Authentication, storage, database, messaging, and platform service providers",
  "OCR, document analysis, and AI service providers",
  "Analytics, diagnostics, logging, and crash reporting providers",
  "Email and customer communication providers",
  "Professional advisors, auditors, insurers, and legal compliance providers where reasonably necessary",
  "Government authorities, courts, regulators, law enforcement, or other third parties where required by law or legal process",
];

const providers = [
  ["Firebase / Google Cloud", "Authentication, storage, database, cloud functions, messaging, remote config"],
  ["Google Cloud Vision API", "OCR processing of receipt images"],
  ["Google Cloud Vertex AI / Gemini", "AI-assisted analysis and processing"],
  ["OpenAI, LLC", "AI-assisted merchant categorization and extraction support"],
  ["Logo.dev (Simple Casual, LLC)", "Retrieval of merchant logo assets based on merchant domain information"],
];

const countries = ["Canada", "The United States", "Other jurisdictions where we or our service providers operate"];

const retentionRows = [
  ["Account information", "While account is active + reasonable period thereafter for legal/security purposes"],
  [
    "Receipts, expenses, mileage, reports, uploaded documents",
    "Until you delete them, request deletion, or account is deleted (unless longer retention required by law)",
  ],
  ["Support communications", "Reasonable period to manage support history, disputes, and service quality"],
  [
    "Logs, security records, analytics, diagnostics",
    "Limited period necessary for troubleshooting, fraud prevention, security, and performance monitoring",
  ],
  ["Backup copies", "Limited period according to backup, disaster recovery, and record management processes"],
];

const canadaRights = [
  "Access personal information we hold about you",
  "Correct inaccurate or incomplete personal information",
  "Withdraw consent (subject to legal or contractual restrictions and reasonable notice)",
  "Delete your personal information (subject to legal exceptions)",
  "Complain to the Office of the Privacy Commissioner of Canada or, for Quebec residents, the Commission d'accès à l'information du Québec (CAI)",
];

const usRights = [
  "Know what categories of personal information we collect, use, disclose, and retain",
  "Access specific pieces of personal information",
  "Delete personal information",
  "Correct inaccurate personal information",
  "Opt out of the sale or sharing of personal information (ReceiptOne does not sell or share for cross-context behavioral advertising)",
  "Limit the use of sensitive personal information (ReceiptOne uses such information only for limited permitted purposes)",
  "Non-discrimination — you will not be discriminated against for exercising your privacy rights",
];

const requestItems = [
  "Your full name",
  "Email address associated with your account",
  "Specific details of your request",
  "Any supporting documentation (if applicable)",
];

const verificationItems = [
  "Confirming access to the email address associated with your account",
  "Requesting information that matches our records",
  "Using other reasonable authentication measures",
];

const consentActions = [
  "Check a box indicating your agreement during account creation",
  "Take an affirmative action (such as clicking “I Agree” or “Accept”) before using receipt scanning or expense tracking features",
];

const withdrawalItems = [
  "Deleting specific content (receipts, expenses, documents)",
  "Disabling optional device permissions",
  "Deleting your account",
  "Contacting us directly",
];

const securityRows = [
  ["Encryption in transit", "TLS or similar protocols for all data transmitted over networks"],
  ["Access controls", "Least-privilege access, role-based authentication"],
  ["Logging and monitoring", "Audit measures for security-sensitive activity"],
  ["Infrastructure security", "Reasonable steps to secure cloud environments (Firebase, Google Cloud)"],
];

const changeItems = ["Our practices or technologies", "Legal requirements", "The Services themselves"];

const notificationItems = [
  'We will revise the "Last updated" date at the top of this policy',
  "For material changes, we will provide additional notice through the Services (e.g., in-app notification or email)",
  "Continued use of the Services after changes constitutes acceptance of the updated policy, except where applicable law requires explicit re-consent",
];

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "ReceiptOne Privacy Policy" },
      {
        name: "description",
        content:
          "Read the ReceiptOne Privacy Policy covering data collection, use, retention, privacy rights, security, and contact details.",
      },
      { property: "og:title", content: "ReceiptOne Privacy Policy" },
      {
        property: "og:description",
        content:
          "ReceiptOne Privacy Policy for Canada and the United States, including privacy rights, security safeguards, and contact information.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="font-display text-lg font-semibold">ReceiptOne</p>
            <p className="text-sm text-muted-foreground">Privacy Policy</p>
          </div>
          <Link
            to="/ca"
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Back to site
          </Link>
        </div>
      </div>

      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <header className="border-b border-border pb-8">
          <p className="text-sm font-medium text-muted-foreground">Last updated: April 23, 2026</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-normal sm:text-5xl">ReceiptOne Privacy Policy</h1>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
            <p>
              This Privacy Policy explains how ReceiptOne (&quot;ReceiptOne,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects,
              uses, discloses, stores, and protects personal information when you use the ReceiptOne mobile
              applications (iOS and Android), the ReceiptOne web application, and related services (collectively, the
              &quot;Services&quot;).
            </p>
            <p>ReceiptOne is designed for self-employed individuals, contractors, and small businesses.</p>
            <p>
              This Privacy Policy is intended to comply with applicable privacy laws in Canada and the United States,
              including PIPEDA, Quebec&apos;s Law 25, the CCPA/CPRA, and other applicable U.S. state privacy laws.
            </p>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Privacy requests and questions:{