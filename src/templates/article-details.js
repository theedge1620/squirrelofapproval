import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from 'styled-components'
import { Paper, Skeleton, Typography } from '@mui/material'
import NutsRating from '../components/NutsRating/NutsRating'

const StyledImageArea = styled.div`
  position: relative;
  margin: 2.75rem 0rem;
  width: 100%;
  display: flex;
  justify-content: center;
`

const ArticleDetails = ({ data }) => {
    
    const {
        body,
        frontmatter: { date, description, image, rating, title, url }
    } = data.mdx
    
    const featuredImage = getImage(image)

    let imageArea = (
      <Skeleton
        animation="wave"
        variant="rectangular"
      />
    )

    if(featuredImage){
      imageArea = (
        <GatsbyImage
          image={featuredImage}
          alt={description}
        />
      )
    }

    return (
        <Layout>
          <title>{title}</title>
            <Paper
              style={{
                padding: `0.5rem`,
                overflowX: `hidden`,
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`
              }}
            >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: `900`,
                    textTransform: 'capitalize',
                    marginBottom: `0.5rem`,
                    textAlign: `center`
                  }}>
                    {title}
                </Typography>

                <NutsRating rating={rating}/>

                <StyledImageArea>
                  {imageArea}
                </StyledImageArea>

                <MDXRenderer>{body}</MDXRenderer>
            </Paper>
        </Layout>
    )
}

export const query = graphql`
query PageBuilderQuery($slug: String!) {
    mdx(slug: {eq: $slug}) {
      body
      frontmatter {
        date
        description
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        rating
        title
        url
      }
    }
  }
`


export default ArticleDetails