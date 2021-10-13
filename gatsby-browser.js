import React from 'react'
import TagSelectorProvider from './src/contexts/TagSelectorContext'
import './src/styles/global.css'

// Wraps every page in a component
export const wrapPageElement = ({ element }) => {
  return <TagSelectorProvider>{element}</TagSelectorProvider>
}