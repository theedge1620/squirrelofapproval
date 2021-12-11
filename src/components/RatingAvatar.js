import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar'
import acornImg from '../images/acorn.png'
import gsap from 'gsap'

const Layout = styled.div`
    position: absolute;
    top: 0%;
    right: 0%;
    display: grid;
    place-items: center;
    transform: scale(0);
`

const StyledRating = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-0%, -25%);
    font-weight: bolder;
    font-size: 1.25em;
    color: hsl(54, 100%, 54%);
    text-shadow: 0rem 0rem 0.5rem rgba(0, 0, 0, 0.5);
`

const RatingAvatar = ({animationComplete, rating}) => {

    const avatarRef = useRef()
    const avatarTL = useRef()

    useEffect(() => {

        avatarTL.current = gsap.timeline().pause()

        avatarTL.current.to(avatarRef.current, 
            {scale: 1,  duration: 1.25, ease: "elastic.out(1, 0.3)", delay: 1.0}
            )

    }, [])

    useEffect(() => {

        if(!animationComplete) return

        avatarTL.current.play()

        return

    }, [animationComplete])

    return (
        <Layout
            ref={avatarRef}
        >
            <Avatar
                alt="Nuts Acorn Img"
                src={acornImg}
                sx={{
                    width: `3.5rem`,
                    height: `3.5rem`,
                    padding: `0.1rem`,
                    transform: `rotate(-45deg)`
                    }}
            />
            <StyledRating >{rating}</StyledRating>
             
        </Layout>
    )
}

export default RatingAvatar
