import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import Moment from "react-moment"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from 'styled-components'

const ArticleDetails = ({ data }) => {
    
    // console.log(data)

    const {
        body,
        frontmatter: { date, description, image, rating, title, url }
    } = data.mdx
    
    const featuredImage = getImage(image)

    return (
        <Layout>
            <div>
                <h2>{title}</h2>
                <h3>{rating}</h3>
                <div>
                    <GatsbyImage image={featuredImage} alt={description} />
                </div>
                <MDXRenderer>{body}</MDXRenderer>
            </div>
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