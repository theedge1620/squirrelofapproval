import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from 'styled-components'

import Layout from "../components/Layout"
import TagSelector from "../components/TagSelector"

const StyledPage = styled.div`
  position: relative;
  color: white;
  width: 100%;
`

const IndexPage = ({ data }) => {

  const [allTags, setAllTags] = useState([])
  const [selectedTag, setSelectedTag] = useState("")

  useEffect(() => {
    
    //create unique tags to filter articles.  will be sent to the <TagSelector/> component.

    const tagArray = []

    data.allMarkdownRemark.nodes.forEach(item => {

      item.frontmatter.tags.forEach(tag => tagArray.push(tag))

    })

    // console.log(tagArray)

    const tags = [...new Set(tagArray)]

    tags.sort()

    console.log(tags)

    setAllTags(tags)
    
  }, [data])

  const tagSelectorHandler = (tag) => {

    setSelectedTag(tag)

  }

  return (
    <Layout>
      <StyledPage>
          <title>Squirrel of Approval</title>
          <TagSelector tags={allTags} clicked={tagSelectorHandler}/>

      </StyledPage>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          description
          tags
        }
        id
      }
    }
  }
`

export default IndexPage

