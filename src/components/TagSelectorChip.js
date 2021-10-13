import React from 'react'
import styled from 'styled-components'
import { Chip } from '@mui/material'

const TagSelectorChip = ({tag, clicked, selected}) => {
    
    let variant = "outlined"

    if (selected){
        variant = "filled"
    }
    
    return (
        <Chip
            label={tag}
            variant={variant}
            onClick={() => clicked(tag)}
            />
    )
}

export default TagSelectorChip
