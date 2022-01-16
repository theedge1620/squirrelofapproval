module.exports = {
  siteMetadata: {
    siteUrl: "https://www.squirrelofapproval.com",
    title: "Squirrel of Approval",
    description: "Squirrel of Approval is the world's leading squirrel approved commentary site for all the news that makes you go a bit nutz."
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
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`
    
],
};
