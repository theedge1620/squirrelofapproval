import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from 'styled-components'
import { Paper, Skeleton, Typography } from '@mui/material'

const StyledImageArea = styled.div`
  position: relative;
  margin: 0.5rem 0rem;
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
            <Paper
              style={{
                padding: `0.5rem`
              }}
            >
                <Typography variant="h2" style={{fontWeight: `900`, textTransform: 'capitalize'}}>{title}</Typography>
                <Typography variant="h4" component="h3" >Nutz Rating: {rating}</Typography>
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