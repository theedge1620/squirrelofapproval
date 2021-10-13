import React, {useContext} from 'react'
import styled from 'styled-components'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuSharpIcon from '@mui/icons-material/MenuSharp'

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
                            edge="end"
                            color="inherit"
                            aria-label="menu"
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