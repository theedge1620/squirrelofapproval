import React, {useEffect, useState} from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import styled from 'styled-components'
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

const ArticleCards = ({title, imgURL, description, rating}) => {
    
  const [imgLoaded, setImageLoaded] = useState(false)

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
    />
    )
  }

    return (
        <Card sx={{ 
          position: 'relative',
          width: 1,
          height: 1,
        }}>
        <CardActionArea
          sx={{
            height: 1,
            width: 1
          }}
        >
            {img}
          <CardContent>
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

          <RatingAvatar rating={rating}/>

        </StyledAvatarContainer>
      </Card>
    )
}

export default ArticleCards
