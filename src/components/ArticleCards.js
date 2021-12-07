import React, {useEffect, useRef, useState} from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import styled from 'styled-components'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea, Skeleton } from '@mui/material'
import RatingAvatar from './RatingAvatar'

const StyledAvatarContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const StyledTitleArea = styled.div`
  position: absolute;
  padding: 0.5rem 0.5rem;
  width: 100%;
  max-height: 50%;
  bottom: 0;
  left: 0;
  background: rgba(30, 30, 30, 0.95);
`

const ArticleCards = ({index, title, imgURL, description, rating}) => {
    
  const contentRef = useRef()
  const contentTL = useRef()

  const [cardObserverRef, cardInView] = useInView({
    threshold: 0.25,
    triggerOnce: true
  })

  const [imgLoaded, setImageLoaded] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {

    contentTL.current = gsap.timeline().pause()

    contentTL.current.from(contentRef.current, {opacity: 0, duration: 0.25,
      onComplete: () => {
        setAnimationComplete(true)
      }})

  },[])

  useEffect(() => {

    if(!cardInView) return

    contentTL.current.play()

  }, [cardInView])

  useEffect(() => {

    if(imgURL){

      setImageLoaded(true)
    }

  }, [imgURL])

  let img = (
    <Skeleton
      sx={{ height: 1, width:1 }}
      animation="wave"
      variant="rectangular"
    />
  )
  
  if(imgLoaded){
    img = (
    <GatsbyImage
      image={imgURL}
      alt={description}
      style={{
        width: `100%`,
      }}
      imgStyle={{
        objectPosition: `0% 0%`

      }}
      placeholder="NONE"
    />
    )
  }

    return (
        <Card sx={{ 
          position: 'relative',
          width: 1,
          height: 1,
        }}
        ref={cardObserverRef}
        >
        <CardActionArea
          sx={{
            height: 1,
            width: 1
          }}
          ref={contentRef}

        >
            {img}
          <CardContent
          >
            <StyledTitleArea>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            </StyledTitleArea>
          </CardContent>
        </CardActionArea>
        <StyledAvatarContainer>

          <RatingAvatar animationComplete={animationComplete} rating={rating}/>

        </StyledAvatarContainer>
      </Card>
    )
}

export default ArticleCards
