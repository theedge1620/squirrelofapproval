import React from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar'
import acornImg from '../images/acorn.png'

const Layout = styled.div`
    position: absolute;
    top: 0%;
    right: 0%;
    display: grid;
    place-items: center;
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

const RatingAvatar = ({rating}) => {
    
    return (
        <Layout>
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
