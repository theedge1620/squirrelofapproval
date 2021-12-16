import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import { useInView } from 'react-intersection-observer'
import NutsIcons from './NutsIcons'
import gsap from 'gsap'

const Layout = styled.div`

`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    opacity: 0;
`

const ImageBarLayout = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
`

const NutsRating = ({rating}) => {

    const ratingRef = useRef()
    const ratingTLRef = useRef()

    const [animationComplete, setAnimationComplete] = useState(false)

    const [observerRef, observerInView] = useInView({
        threshold: 0.25,
        triggerOnce: true
    })

    useEffect(() => {

        ratingTLRef.current = gsap.timeline().pause()

        ratingTLRef.current.to(ratingRef.current,
            {
                opacity: 1, duration: 0.75, delay: 0.75, onComplete:() => {
                    setAnimationComplete(true)
                }
            }
            )

    }, [])

    useEffect(() => {

        if(!observerInView) return

        ratingTLRef.current.play()

    }, [observerInView])

    return (
        <Layout ref={observerRef}>
            <Wrapper ref={ratingRef}>
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
                                delay={index * 0.25 + 0.1}
                                show={animationComplete}
                            />
                })}
            </ImageBarLayout>
            </Wrapper>
        </Layout>
    )
}

export default NutsRating
