const config = require('./config/website')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    title: config.siteTitle,
    twitterHandle: config.twitterHandle,
    description: config.siteDescription,
    keywords: ['TZI Cards'],
    canonicalUrl: config.siteUrl,
    image: config.siteLogo,
    author: {
      name: config.author,
      minibio: `
        <strong>TZI Cards</strong> is a unique deck of cards inspired by the ancient lunar calendar.
      `,
    },
    organization: {
      name: config.organization,
      url: config.siteUrl,
      logo: config.siteLogo,
    },
    social: {
      twitter: config.twitterHandle,
      fbAppID: '',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/entries`,
        name: 'entries',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/lore`,
        name: 'lore',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/deck`,
        name: 'deck',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/games`,
        name: 'games',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/formations`,
        name: 'formations',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/games/tu-tzi`,
        name: 'tu-tzi',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/games/fighting-numbers`,
        name: 'fighting-numbers',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/animals`,
        name: 'animals',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/cards`,
        name: 'cards',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/glyphs`,
        name: 'glyphs',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/earthly-branches`,
        name: 'earthly-branches',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/elements`,
        name: 'elements',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/niandai`,
        name: 'niandai',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://hyxos.us10.list-manage.com/subscribe/post?u=1cb0b142f71bdb1ca1c6b9f3b&amp;id=10882e50c0',
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: '#fafafa',
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ID,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.fields.date,
                  url: site.siteMetadata.siteUrl +"/"+ edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl +"/"+ edge.node.fields.slug,
                })
              })
            },
            query: `
              {
                allMdx(
                  limit: 1000,
                  filter: { frontmatter: { published: { ne: false } } }
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 250)
                      fields { 
                        slug
                        date
                      }
                      frontmatter {
                        title
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Blog RSS Feed',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/lib/typography`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
