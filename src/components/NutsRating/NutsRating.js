import React from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import { useInView } from 'react-intersection-observer';
import NutsIcons from './NutsIcons';

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

    const [observerRef, observerInView] = useInView({
        threshold: 0.25,
        triggerOnce: true
    })

    return (
        <Layout ref={observerRef}>

            <Typography
                variant="h2"
                fontSize="clamp(1em, 4vw, 1.75em)"
                sx={{
                    fontStyle: 'italic',
                    marginLeft: `0.75rem`
                }}>
                    Nutz Rating: 
            </Typography>

            <ImageBarLayout>
                {Array.from(Array(rating)).map((_, index) => {
                    
                    return <NutsIcons
                                key={`${new Date()}${index}`}
                                index={index}
                                show={observerInView}
                            />
                })}
            </ImageBarLayout>

        </Layout>
    )
}

export default NutsRating
