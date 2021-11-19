import React, {useEffect, useState} from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar'
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

const ArticleCards = ({title, imgURL, description, rating}) => {
    
  const [imgLoaded, setImageLoaded] = useState(false)

  useEffect(() => {

    if(imgURL){
      setImageLoaded(true)
    }

  }, [imgURL])

  let img = (
    <Skeleton
      sx={{ height: 190 }}
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
          width: 1
        }}>
        <CardActionArea>
          {img}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <StyledAvatarContainer>

          <RatingAvatar rating={rating}/>

        </StyledAvatarContainer>
      </Card>
    )
}

export default ArticleCards
