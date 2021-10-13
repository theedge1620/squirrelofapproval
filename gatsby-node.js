const path = require('path')

exports.createPages = async ({graphql, actions, reporter}) => {

    const articleBuilderQuery = await graphql(`
    query PageBuildQuery {
        allMdx {
          nodes {
            slug
          }
        }
      }
    `)

    if(articleBuilderQuery.errors){
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    articleBuilderQuery.data.allMdx.nodes.forEach(node => {

        actions.createPage({
            path: `/articles/${node.slug}`,
            component: path.resolve(`src/templates/article-details.js`),
            context: { slug: node.slug }
        })

    })  

}