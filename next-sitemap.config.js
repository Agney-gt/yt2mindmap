/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yt2mindmap.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    '/api/*',
    '/mindmap/*',
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://yt2mindmap.com/server-sitemap.xml'
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api',
          '/mindmap'
        ]
      }
    ]
  }
}