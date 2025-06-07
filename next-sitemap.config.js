/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_BASE_URL || "https://portfolio-sherwin-romero.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,
};
