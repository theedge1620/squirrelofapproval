import React, {createContext, useEffect, useState} from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export const TagSelectorContext = createContext()

const TagSelectorProvider = ({children}) => {

    const data = useStaticQuery(graphql`
        query TagSelectorContextQuery {
            allMarkdownRemark {
            nodes {
                frontmatter {
                tags
                }
                id
            }
            }
        }
    `)

    const [allTags, setAllTags] = useState([])
    const [tagSelected, setTagSelected] = useState("")

    useEffect(() => {
    
        //create unique tags to filter articles.  will be sent to the <TagSelector/> component.
    
        const tagArray = []
    
        data.allMarkdownRemark.nodes.forEach(item => {
    
          item.frontmatter.tags.forEach(tag => tagArray.push(tag))
    
        })
        
        const tags = [...new Set(tagArray)]
    
        tags.sort()
        
        setAllTags(tags)
        
      }, [data])

    const handleTagSelected = (value) => {

        if(tagSelected === value){
            setTagSelected("")
            return
        }

        setTagSelected(value)

    }

    return(

        <TagSelectorContext.Provider value={{allTags, tagSelected, handleTagSelected}}>
            {children}
        </TagSelectorContext.Provider>

    )
}

export default TagSelectorProvider