import { Link, createFileRoute } from "@tanstack/react-router";
import logoMark from "@/assets/figma/logo-mark.svg";
import logoWordmark from "@/assets/figma/logo-wordmark.svg";
import { pageSEO } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";

export const Route = createFileRoute("/login")({
  head: () => {
    const seo = pageSEO({
      path: "/login",
      title: "Log in | ReceiptOne",
      description: "Sign in to your ReceiptOne account.",
      noIndex: true,
    });
    return { meta: seo.meta, links: seo.links };
  },
  component: LoginPage,
});

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" />
      <path fill="#FBBC05" d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" />
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.96L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 814 1000" fill="currentColor" aria-hidden>
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.3-155.8-113.4C115 370.1 105 235 105 199.1c0-154.2 100.7-235.9 197-235.9 52.6 0 96.3 34.5 129.5 34.5 31.8 0 81.5-36.5 143.3-36.5 22.1 0 108.2 1.9 161.4 86.1zm-197 56.3c-3.9-22.7-16.5-69.7-47.3-107.9-28.6-35.5-72.7-61.2-116.2-61.2 3.2 24.6 12.3 72 44.2 112 29.9 38.2 76.7 65.4 119.3 57.1z" />
    </svg>
  );
}

function LoginPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-md flex-col gap-8">
        <Link to="/ca" className="mx-auto flex items-center gap-2">
          <img src={logoMark} alt="" aria-hidden className="block size-10" />
          <img src={logoWordmark} alt="ReceiptOne" className="block h-6 w-auto" />
        </Link>

        <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="space-y-2 text-center">
            <p className="text-sm text-muted-foreground">Personal cabinet</p>
            <h1 className="font-display text-3xl font-semibold tracking-normal">Log in</h1>
            <p className="text-sm leading-6 text-muted-foreground">Enter your account to manage receipts, reports, and tax-ready documents.</p>
          </div>

          <form className="mt-8 space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
              <input id="email" type="email" placeholder="you@example.com" className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary" />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-foreground">Password</label>
              <input id="password" type="password" placeholder="••••••••" className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary" />
            </div>

            <button type="button" className="inline-flex h-11 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              Continue
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-medium text-muted-foreground">Or</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Social auth */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              aria-label="Continue with Google"
              className="flex h-11 items-center justify-center gap-2.5 rounded-xl border border-border bg-white text-sm font-medium text-foreground shadow-sm transition-all hover:bg-black/[0.02] hover:shadow-md"
            >
              <GoogleIcon />
              Google
            </button>
            <button
              type="button"
              aria-label="Continue with Apple"
              className="flex h-11 items-center justify-center gap-2.5 rounded-xl border border-border bg-white text-sm font-medium text-foreground shadow-sm transition-all hover:bg-black/[0.02] hover:shadow-md"
            >
              <AppleIcon />
              Apple
            </button>
          </div>

          {/* Legal */}
          <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">
            By signing in, you accept our{" "}
            <Link to={ROUTES.terms} className="underline underline-offset-4 transition-colors hover:text-foreground">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link to={ROUTES.privacy} className="underline underline-offset-4 transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
          </p>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="font-medium text-foreground underline underline-offset-4">
              Join now
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}