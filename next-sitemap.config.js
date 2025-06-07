module.exports = {
  siteUrl: "https://portfolio-sherwin-romero.vercel.app", // your live site
  generateRobotsTxt: true, // useful for search engines
  exclude: [], // no pages to exclude
  transform: async (config, path) => {
    // Only include the root path
    if (path !== "/") return null;
    return {
      loc: path, // location of the page
      changefreq: "monthly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    };
  },
};
