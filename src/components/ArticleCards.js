import React, {useEffect, useState} from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Skeleton } from '@mui/material';


const ArticleCards = ({title, imgURL, description, rating}) => {
    
  const [imgLoaded, setImageLoaded] = useState(false)

  useEffect(() => {

    if(imgURL){
      setImageLoaded(true)
    }

  }, [imgURL])

  // console.log(imgURL)

  let img = (
    <Skeleton
      sx={{ height: 190 }}
      animation="wave"
      variant="rectangular"
    />
  )
  
  if(imgLoaded){
    img = 
    // <CardMedia
    //         component="img"
    //         height="140"
    //         image={imgURL}
    //         alt="squirrel"
    //       />
    <GatsbyImage
      image={imgURL}
      alt={description}
    />
  }

    return (
        <Card xs={{maxWidth: 345}} style={{ maxWidth: 345 }}>
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
      </Card>
    )
}

export default ArticleCards
