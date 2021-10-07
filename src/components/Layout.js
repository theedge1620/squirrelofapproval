import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'

import '../styles/global.css'

import Logo from './Logo'

const StyledLayout = styled.div`
    
`
const Layout = ({children}) => {
    return (
        <StyledLayout>
            <AppBar>
                <Toolbar>
                    <Logo/>
                    <IconButton
                        size="medium"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {children}

        </StyledLayout>
    )
}

export default Layout