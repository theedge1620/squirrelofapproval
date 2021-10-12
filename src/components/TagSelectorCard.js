import React from 'react'
import styled from 'styled-components'
import Paper from '@mui/material/Paper'

const Item = styled(Paper)`
    user-select: none;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    
`

const TagSelectorCard = ({tag}) => {
    return (
        <Item>
            {tag}
        </Item>
    )
}

export default TagSelectorCard
