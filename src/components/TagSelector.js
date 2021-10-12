import React from 'react'
import Stack from '@mui/material/Stack'
import styled from 'styled-components'

import TagSelectorCard from './TagSelectorCard'

const StyledLayout = styled.div`
    position: sticky;
    padding: 0.5rem;
    top: 0;
    background: red;
    max-height: 5rem;
    height: 100%;
    width: 100%;
`

const TagSelector = ({tags, clicked}) => {
    return (
        <StyledLayout>
            <Stack
                direction={'row' }
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="center"
                alignItems="center"
            >
            {tags.map(tag => (
                    <TagSelectorCard clicked={clicked} key={tag} tag={tag}/>
                )                
            )}
            </Stack>

        </StyledLayout>

    )
}

export default TagSelector
