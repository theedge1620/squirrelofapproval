import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Typography } from '@mui/material'

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
`

const ImageBarLayout = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
`

const NutsRating = ({rating}) => {
    
    const createImageBar = (imageTotal) => {

        const imageArray = []

        for(let i=0; i < imageTotal; i++){
            
            imageArray.push(
                <StaticImage
                    key={`${new Date()}${i}`}
                    src="../images/acorn.png"
                    alt="nuts rating acorn"
                    style={{
                        maxWidth: `2.5rem`,
                        maxHeight: `2.5rem`,
                        transform: `rotate(-45deg)`
                    }}
                    imgStyle={{
                        maxWidth: `5rem`,
                        maxHeight: `5rem`,
                    }}
                    placeholder="NONE"
                />
            )

        }

        return imageArray

    }
    
    const imageArray = createImageBar(rating).map(element => element)

    return (
        <Layout>

            <Typography
                variant="h5"
                component="h3"
                sx={{
                    fontStyle: 'italic',
                    marginLeft: `0.75rem`
                }}>
                    Nutz Rating: 
            </Typography>

            <ImageBarLayout>
                {imageArray}
            </ImageBarLayout>

        </Layout>
    )
}

export default NutsRating
