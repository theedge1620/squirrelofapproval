import React from 'react'
import styled from 'styled-components'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';

import Logo from './Logo'

const StyledLayout = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const StyledFooter = styled.footer`
    color: white;
    padding: 1rem;
    margin-top: auto;
`

const Layout = ({children}) => {
       
    return (
            <StyledLayout>

                <AppBar
                    position="relative"
                    sx={{
                        padding: `0.5rem 1rem`
                    }}
                    >
                    <Toolbar>
                        <Logo/>
                    </Toolbar>
                </AppBar>

                {children}
                <StyledFooter>
                    Squirrel of Approval - 2022
                </StyledFooter>
            </StyledLayout>
    )
}

export default Layout