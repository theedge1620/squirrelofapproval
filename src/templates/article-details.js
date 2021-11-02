import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import { getImage, GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from 'styled-components'
import { Paper, Skeleton, Typography } from '@mui/material'

const StyledImageArea = styled.div`
  position: relative;
  margin: 2.75rem 0rem;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
`

const ArticleDetails = ({ data }) => {
    
    // console.log(data)

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
                overflowX: `hidden`
              }}
            >
                <Typography variant="h2" sx={{fontWeight: `900`, textTransform: 'capitalize', marginBottom: `0.5rem`}}>{title}</Typography>
                <Typography variant="h5" component="h3" sx={{fontStyle: 'italic', marginLeft: `0.75rem` }} >Nutz Rating: {rating}</Typography>
                <StyledImageArea>
                  {imageArea}
                  <StaticImage
                    src="../images/squirrel1.png"
                    alt="squirrel face"
                    style={{
                      position: `absolute`,
                      top: `0`,
                      right: `0.5rem`,
                      transform: `rotate(-45deg)`,
                      maxWidth: `5rem`,
                      maxHeight: `5rem`,
                      marginRight: `0.1rem`
                    }}
                    imgStyle={{
                      maxWidth: `5rem`,
                      maxHeight: `5rem`,
                    }}
                    placeholder="NONE"
                  />
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