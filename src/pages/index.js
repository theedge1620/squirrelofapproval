import React from "react"
import styled from 'styled-components'

import Layout from "../components/Layout"



const StyledPage = styled.div`
  position: relative;
  color: white;
  width: 100%;
  padding: 0.5rem;
  display: flex;
`



const IndexPage = () => {

  return (
    <Layout>
      <StyledPage>
          <title>Squirrel of Approval</title>

      </StyledPage>
    </Layout>
  )
}

export default IndexPage
