import { createFileRoute } from "@tanstack/react-router";

/**
 * Static sitemap. New shareable routes should be added here so search
 * engines and the route-sync script keep them in lockstep with src/routes/.
 */
const SITE_ORIGIN = "https://figma-craft-39.lovable.app";

const ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/ca", changefreq: "weekly", priority: "0.9" },
  { path: "/us", changefreq: "weekly", priority: "0.9" },
  { path: "/login", changefreq: "yearly", priority: "0.3" },
  { path: "/signup", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "monthly", priority: "0.5" },
  { path: "/privacy", changefreq: "monthly", priority: "0.5" },
];

function buildSitemap() {
  const lastmod = new Date().toISOString().split("T")[0];
  const urls = ROUTES.map(
    (r) =>
      `  <url><loc>${SITE_ORIGIN}${r.path}</loc><lastmod>${lastmod}</lastmod><changefreq>${r.changefreq}</changefreq><priority>${r.priority}</priority></url>`,
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(buildSitemap(), {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        }),
    },
  },
});
