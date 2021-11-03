import React from 'react'
import TagSelectorProvider from './src/contexts/TagSelectorContext'
import './src/styles/global.css'

import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
  key: 'css',
  prepend: true,
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: [
      'Rubik',
      'sans-serif'
    ]
  }
})

// Wraps every page in a component
export const wrapRootElement = ({ element }) => {
  return (
    <CacheProvider value={cache}>

    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <TagSelectorProvider>
          {element}
        </TagSelectorProvider>
      </ThemeProvider>
    </StyledEngineProvider>
    </CacheProvider>
  )
}