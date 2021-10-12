import React from 'react'
import styled from 'styled-components'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import IconButton from '@mui/material/IconButton';
import MenuSharpIcon from '@mui/icons-material/MenuSharp'

import '../styles/global.css'

import Logo from './Logo'

const StyledLayout = styled.div`
    width: 100%;
`
const Layout = ({children}) => {
    return (
        <StyledLayout>
            <AppBar position="relative">
                <Toolbar>
                    <Logo/>
                    <IconButton
                        size="medium"
                        // edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuSharpIcon
                            fontSize="large"
                        />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {children}

        </StyledLayout>
    )
}

export default Layout