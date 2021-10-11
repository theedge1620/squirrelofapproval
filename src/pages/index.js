import React from "react"
import styled from 'styled-components'

import Layout from "../components/Layout"
import TagSelector from "../components/TagSelector"

const StyledPage = styled.div`
  position: relative;
  color: white;
  width: 100%;
`

const IndexPage = () => {

  return (
    <Layout>
      <StyledPage>
          <title>Squirrel of Approval</title>
          <TagSelector/>

      </StyledPage>
    </Layout>
  )
}

export default IndexPage
