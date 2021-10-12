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
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-remark`,
],
};
