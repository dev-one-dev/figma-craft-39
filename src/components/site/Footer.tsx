import { useCallback } from "react";
import { Link } from "@tanstack/react-router";
import footerSvg from "@/assets/figma/footer.webp";
import footerUsSvg from "@/assets/figma/footer-us.webp";
import { ROUTES } from "@/lib/routes";

type FooterProps = {
  region?: "ca" | "us";
};

export function Footer({ region = "ca" }: FooterProps) {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

const footerAsset = region === "us" ? footerUsSvg : footerSvg;
  const hotspotClassName =
    "absolute z-10 block rounded-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-white";

  return (
    <footer className="relative w-full overflow-hidden">
      <img
        src={footerAsset}
        alt="Claim your free trial now — ReceiptOne"
        className="relative z-[1] block h-auto w-full"
        loading="lazy"
        decoding="async"
        width={1440}
        height={772}
      />

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute left-[16%] top-[86%] z-10 h-[10%] w-[19%] cursor-pointer rounded-[20px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-white"
      />

      <Link
        to={ROUTES.terms}
        aria-label="Terms of Use"
        className="absolute left-[42.5%] top-[88.5%] z-10 h-[5%] w-[8%] rounded-md transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:hover:scale-100"
      />

      <Link
        to={ROUTES.login}
        aria-label="Log in"
        className={`${hotspotClassName} left-[38%] top-[64%] h-[10%] w-[11.5%]`}
      />

      <Link
        to={ROUTES.signup}
        aria-label="Join now"
        className={`${hotspotClassName} left-[50.5%] top-[64%] h-[10%] w-[11.5%]`}
      />

      <Link
        to={ROUTES.privacy}
        aria-label="Privacy Policy"
        className="absolute left-[51%] top-[88.5%] z-10 h-[5%] w-[9%] rounded-md transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary motion-reduce:hover:scale-100"
      />
    </footer>
  );
}
