import React from 'react'
import styled from 'styled-components'
import Paper from '@mui/material/Paper'
import { Chip } from '@mui/material'

const Item = styled(Paper)`
    user-select: none;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    
`

const TagSelectorCard = ({tag, clicked, selected}) => {
    
    let variant = "outlined"

    if (selected){
        variant = "filled"
    }
    
    return (
        <Chip label={tag} variant={variant} onClick={() => clicked(tag)}/>
    )
}

export default TagSelectorCard
