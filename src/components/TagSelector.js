import React from 'react'
import styled from 'styled-components'

const StyledLayout = styled.div`
    position: sticky;
    top: 0;
    background: red;
    max-height: 2rem;
    height: 100%;
    width: 100%;
`

const TagSelector = () => {
    return (
        <StyledLayout>

            Tags go here...

        </StyledLayout>

    )
}

export default TagSelector
