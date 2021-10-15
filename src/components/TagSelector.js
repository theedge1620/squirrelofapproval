import React, {useContext} from 'react'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import styled from 'styled-components'

import { TagSelectorContext } from '../contexts/TagSelectorContext'

import TagSelectorChip from './TagSelectorChip'

const StyledLayout = styled.div`
    position: sticky;
    padding: 0.25rem;
    top: 0;
    height: 5rem;
    width: 100%;
    background: var(--bgcolor);
    z-index: 1000;
`

const TagSelector = () => {
    
    const { allTags, tagSelected, handleTagSelected } = useContext(TagSelectorContext)
    
    return (
        <StyledLayout>
            <Grid
                container
                spacing={0.5}
                justifyContent="center"
                alignItems="center"
                style={{
                    height: `100%`,
                }}
            >
            {allTags.map(tag => (
                <Grid item key={tag}>

                    <TagSelectorChip
                        clicked={handleTagSelected}
                        tag={tag}
                        selected={tagSelected === tag}
                    />

                </Grid>
                )                
            )}
            </Grid>
        </StyledLayout>
    )
}

export default TagSelector
