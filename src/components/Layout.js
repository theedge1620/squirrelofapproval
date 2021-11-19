import React from 'react'
import {css, jsx} from '@emotion/react'
import styled from 'styled-components'
// import {styled} from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';

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
                    </Toolbar>
                </AppBar>

                {children}
            </StyledLayout>
    )
}

export default Layout