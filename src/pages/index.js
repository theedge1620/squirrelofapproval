import { Grid } from "@mui/material"
import { graphql, Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import React, { useContext, useEffect, useState } from "react"
import styled from 'styled-components'
import ArticleCards from "../components/ArticleCards"

import Layout from "../components/Layout"
import TagSelector from "../components/TagSelector"
import { TagSelectorContext } from "../contexts/TagSelectorContext"

const StyledPage = styled.div`
  position: relative;
  color: white;
  width: 100%;
`
 
const IndexPage = ({data}) => {

  const [articleData, setArticleData] = useState(data.allMdx.nodes)

  const { tagSelected } = useContext(TagSelectorContext)

  useEffect(() => {

    if(!tagSelected){
      setArticleData(data.allMdx.nodes)
      return
    }

    const selectedData = data.allMdx.nodes.filter(node => {

      return node.frontmatter.tags.includes(tagSelected)

    })

    setArticleData(selectedData)

  }, [tagSelected])
  
  return (
    <Layout>
      <StyledPage>
          <title>Squirrel of Approval</title>
          <TagSelector/>
          <Grid
            container
            style={{
              padding: `0rem 1rem 1.5rem`,
              margin: 0,
              width: '100%',
              gap: `1.25rem`
            }}
          >
            {articleData.map(article => {

              const image = getImage(article.frontmatter.image)

              return (
              <Grid
                item
                sx={{
                  width: `min(100vw, 25rem)`,
                  height: `clamp(15rem, 30vh, 25rem)`,
                  minHeight: `10rem`,
                  maxHeight: `25rem`
                }}
                key={article.slug}
              >
                <Link to={`/articles/${article.slug}`} style={{textDecoration: 'none'}}>
                  <ArticleCards
                    title={article.frontmatter.title}
                    imgURL={image}
                    description={article.frontmatter.description}
                    rating={article.frontmatter.rating}
                  />
                </Link>
              </Grid>
            )
              }
            )}
          </Grid>
      </StyledPage>
    </Layout>
  )
}

export const query = graphql`
  query PageInfoQuery {
    allMdx (sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        slug
        frontmatter {
          date
          description
          rating
          tags
          title
          url
          thumbnail {
            childImageSharp {
              gatsbyImageData(height: 190, width: 340, transformOptions: {fit: COVER})
            }
          }
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default IndexPage

