import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Shoot`,
    siteUrl: `https://www.yourdomain.tld`,
    author: `Wisnu Pramadhitya Ramadhan`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    // Manifest
    `gatsby-plugin-google-gtag`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
      },
    },

    // Internal
    `gatsby-plugin-tsconfig-paths`,

    // UI
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,

    // Data Related
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `published-photos`,
        path: `${__dirname}/published-photos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
  ],
};

export default config;
