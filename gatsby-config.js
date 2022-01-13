module.exports = {
  siteMetadata: {
    title:'ERAINTERFACES',
    description :'We are an EdTech startup based out of Bengaluru. We are on a mission to provide better tools for the academicians and innovative learning frameworks for students to create an ecosystem that could potentially change the way how current pedagogy is in play.',
    copyright : 'This website is copyright 2021 Era Interfaces pvt ltd.',
    siteUrl: `https://erainterfaces.com`,
  },
  plugins: [
    // 'gatsby-theme-elements'
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
   
    // {
    //   resolve:`gatsby-plugin-mdx`,
    //   options: {
    //     extensions:[`.md`,`.mdx`],
    //     gatsbyRemarkPlugins:[
    //       {
    //         resolve:`gatsby-remark-images`,
    //         options: {
    //           maxWidth:1200,
    //         },
    //       },
    //     ]
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     google: {
    //       families: ['Roboto', 'sans-serif'] 
    //     }
    //   }
    // },
    {
      resolve: `gatsby-source-wordpress`,
      options:{
        url:`https://gatsby.erainterfaces.com/graphql`
       
      }
       
    },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "WPGraphQL",
    //     fieldName: "wpgraphql",
    //     url: "https://gatsby.erainterfaces.com/graphql",
    //   },
    // },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/components/Assets/videos`,
      },
  },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
  },
  //  {
  //   resolve: `gatsby-source-filesystem`,
  //   options: {
  //     path: `${__dirname}/content/blogs`,
  //     name: `blogs`,
  //   },
  // },
  
  // {
  //   resolve: `gatsby-transformer-remark`,
  //   options: {
  //     plugins: [
  //       {
  //         resolve: `gatsby-remark-images`,
  //         options: {
  //           maxWidth: 630,
  //         },
  //       },
  //       {
  //         resolve: `gatsby-remark-responsive-iframe`,
  //         options: {
  //           wrapperStyle: `margin-bottom: 1.0725rem`,
  //         },
  //       },
  //       `gatsby-remark-prismjs`,
  //       `gatsby-remark-copy-linked-files`,
  //       `gatsby-remark-smartypants`,
  //     ],
  //   },
  // },
  `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ERA Interfaces Pvt ltd`,
        short_name: `ERA Interfaces`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon:`src/images/era-favicon.jpg`// This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        // *.css files are included by default.
        // To support another syntax (e.g. SCSS),
        // add `postcss-scss` to your project's devDependencies
        // and add the following option here:
        filetypes: {
          ".scss": { syntax: `postcss-scss` },
        },
  
        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`,
        // For all the options check babel-plugin-react-css-modules README link provided above
      },
    },
    {
      resolve: 'gatsby-plugin-web-vitals',
      options: {
        // The Google Analytics property ID; the reporting code won't be generated without it
        trackingId: 'UA-164365131-1',
        // An array with metrics you want to track and send to analytics
        metrics: [`FID`, `TTFB`, `LCP`, `CLS`, `FCP`],
        // Event Category (optional) { string }, default 'Web Vitals'
        eventCategory: 'Performance',
        // Include Web Vitals tracking in development
        // Defaults to false meaning Vitals will only be tracked in production.
        includeInDevelopment: false,
        // Prints metrics in the console when true
        debug: false,
      }
    },
    
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.nodes.map(node => {
    //             return Object.assign({}, node.frontmatter, {
    //               description: node.excerpt,
    //               date: node.frontmatter.date,
    //               url: site.siteMetadata.siteUrl + node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + node.fields.slug,
    //               custom_elements: [{ "content:encoded": node.html }],
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allMarkdownRemark(
    //               sort: { order: DESC, fields: [frontmatter___date] },
    //             ) {
    //               nodes {
    //                 excerpt
    //                 html
    //                 fields { 
    //                   slug 
    //                 }
    //                 frontmatter {
    //                   title
    //                   date
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: "/rss.xml",
    //         title: "Era Website RSS Feed",
    //       },
    //     ],
    //   },
    // },
  ],
}

