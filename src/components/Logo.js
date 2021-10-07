import React from 'react'
import styled from 'styled-components'

import squirrel from '../images/squirrel.png'

const StyledLayout = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    align-items: center;
`

const BackgroundIMG = styled.img`
  margin-right: 0.1rem;
  max-width: 20%;
  max-height: 5rem;
`

const TitleHeader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

const SquirrelText = styled.h1`
  color: red;
  font-weight: 900;
  font-size: clamp(2.5rem, 5vw, 3.0rem);
`

const TitleText = styled.h1`
  color: white;
  font-size: clamp(1.5rem, 2vw, 2.0rem);  

`

const Logo = () => {
    return (
        <StyledLayout>
            <BackgroundIMG src={squirrel}/>
            <TitleHeader>
                <SquirrelText>SQUIRREL</SquirrelText> <TitleText>OF APPROVAL</TitleText>
            </TitleHeader>
        </StyledLayout>
    )
}

export default Logo
