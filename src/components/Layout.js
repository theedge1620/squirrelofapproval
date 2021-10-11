import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import IconButton from '@material-ui/core/IconButton';
import MenuSharpIcon from '@material-ui/icons/MenuSharp'

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