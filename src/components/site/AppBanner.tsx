import appBannerSvg from "@/assets/figma/app-banner.svg";
import appBannerUsSvg from "@/assets/figma/app-banner-us.svg";

export function AppBanner({ region = "ca" }: { region?: "ca" | "us" }) {
  const src = region === "us" ? appBannerUsSvg : appBannerSvg;
  return (
    <section id="apps" className="w-full scroll-mt-28">
      <div
        className="relative mx-auto block"
        style={{ width: "fit-content", maxWidth: "100%", containerType: "inline-size" }}
      >
        <img
          src={src}
          alt="Get your personal receipt manager in your phone — download on the App Store or Google Play"
          className="block h-auto max-w-full"
        />
        {/* Overlay the iPhone emoji on top of the placeholder square baked into the SVG.
            The placeholder square is centered roughly at (608, 365) in the 1440x560 viewBox. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute select-none leading-none"
          style={{
            left: `${(608 / 1440) * 100}%`,
            top: `${(365 / 560) * 100}%`,
            transform: "translate(-50%, -50%)",
            fontSize: "5cqw",
            fontFamily:
              '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',
          }}
        >
          📱
        </span>
      </div>
    </section>
  );
}
