import { graphql } from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const StyledLayout = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    align-items: center;
`

const TitleHeader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

const SquirrelText = styled.h1`
  color: red;
  font-weight: 900;
  font-size: clamp(2rem, 5vw, 3.0rem);
`

const TitleText = styled.h1`
  color: white;
  font-size: clamp(1.25rem, 2vw, 2.0rem);  

`

const Logo = () => {
  
  return (
        <StyledLayout>
            <StaticImage
              src="../images/squirrel.png"
              alt="squirrel logo"
              placeholder="tracedSVG"
              style={{
                maxWidth: `5rem`,
                maxHeight: `5rem`,
                marginRight: `0.1rem`
              }}
              imgStyle={{
                maxWidth: `5rem`,
                maxHeight: `5rem`,
              }}
              />
            <TitleHeader>
                <SquirrelText>SQUIRREL</SquirrelText> <TitleText>OF APPROVAL</TitleText>
            </TitleHeader>
        </StyledLayout>
    )
}

export default Logo
