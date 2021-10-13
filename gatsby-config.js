module.exports = {
  siteMetadata: {
    siteUrl: "https://www.squirrelofapproval.com",
    title: "Squirrel of Approval",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    { 
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: `articles`
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
      }
    },
    `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}`
    //   }
    // }
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
],
};
