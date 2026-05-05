import advantagesSvg from "@/assets/figma/advantages.svg";

/** Tile rectangles in the SVG viewBox (1440×1056) */
const TILES = [
  { x: 240, y: 304, w: 304, h: 260, label: "Save 10+ hours every month" },
  { x: 568, y: 304, w: 304, h: 260, label: "Never miss a mileage deduction" },
  { x: 896, y: 304, w: 304, h: 260, label: "Accountant-ready reports in one click" },
  { x: 404, y: 596, w: 304, h: 260, label: "Documentation ready for any audit" },
  { x: 732, y: 596, w: 304, h: 260, label: "Mobile and web stay perfectly in sync" },
] as const;

const VB_W = 1440;
const VB_H = 1056;

function AdvantageTile({ tile }: { tile: (typeof TILES)[number] }) {
  return (
    <div
      aria-label={tile.label}
      className="absolute rounded-[32px]"
      style={{
        left: `${(tile.x / VB_W) * 100}%`,
        top: `${(tile.y / VB_H) * 100}%`,
        width: `${(tile.w / VB_W) * 100}%`,
        height: `${(tile.h / VB_H) * 100}%`,
      }}
    />
  );
}

export function Advantages() {
  const handleClaim = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("apps");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="w-full">
      <div className="relative w-full" style={{ aspectRatio: "1440 / 1056" }}>
        <img
          src={advantagesSvg}
          alt="What is our advantages — Save 10+ hours, never miss mileage deductions, accountant-ready reports, documentation ready, mobile + web in sync"
          className="pointer-events-none block h-full w-full"
          loading="lazy"
          decoding="async"
        />

        {TILES.map((tile) => (
          <AdvantageTile key={tile.label} tile={tile} />
        ))}

        <a
          href="#apps"
          onClick={handleClaim}
          aria-label="Claim your free trial"
          className="absolute rounded-[16px] bg-transparent transition-colors duration-200 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-4 focus-visible:ring-offset-white"
          style={{
            left: `${(602.5 / 1440) * 100}%`,
            top: `${(920 / 1056) * 100}%`,
            width: `${(240 / 1440) * 100}%`,
            height: `${(56 / 1056) * 100}%`,
          }}
        />
      </div>
    </section>
  );
}
