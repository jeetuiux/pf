export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/api/",
        "/coming-soon/",
      ],
    },
    sitemap: "https://jeetux.vercel.app/sitemap.xml",
  };
}