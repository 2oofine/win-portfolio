/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://portfolio-sherwin-romero.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false, // disable sitemap index file generation
  exclude: [],

  transform: async (config, path) => {
    // Only include the root path in the sitemap
    if (path !== "/") return null;
    return {
      loc: path,
      changefreq: "monthly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    };
  },
};
