import { Link } from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
`

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
  font-size: 3.5rem;
  font-family: 'Bangers';
  text-transform: capitalize;
  letter-spacing: 0.25rem;
`

const TitleText = styled.h1`
  color: yellow;
  font-size: 1.5rem;  
  font-family: 'Vujahday Script', cursive;
  word-spacing: 0.35rem;
`

const Logo = () => {
  
  return (
    <StyledLink to="/">
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
        </StyledLink>
    )
}

export default Logo
