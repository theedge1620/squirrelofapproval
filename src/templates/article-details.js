import React, {useEffect, useRef} from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from 'styled-components'
import { Paper, Skeleton, Typography } from '@mui/material'
import NutsRating from '../components/NutsRating/NutsRating'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'

import bgImg from '../images/bg-squirrel.jpeg'

const StyledDivider = styled.hr`
  width: 100%;
  margin: clamp(1.5rem, 5vh, 2.5rem) 0rem;
  border-width: 0rem;
  border-top-width: 0.25rem;
  border-style: solid;
  border-image:
    linear-gradient(
      to right,
      transparent, rgba(155, 155, 155, 0.8), transparent      
    ) fill 100% 0 stretch;
`

const TitleWrapper = styled.div``

const ImageAreaWrapper = styled.div``

const ImageWrapper = styled.div``

const StyledImageArea = styled.a`
  position: relative;
  margin: 0rem auto;
`

const StyledBodyAreaWrapper = styled.div`
`

const StyledBodyArea = styled.main`
  max-width: 70ch;
  opacity: 0;
  margin-top: 1rem;
  line-height: clamp(1.75em, 5vh, 2.5em);
  text-align: center;

  & a, a:visited {
    color: orange;
  }

  &::first-line{
    font-weight: 900;
    font-size: 1.25em;
    line-height: 3em;
  }

  &::first-letter{
    font-size: 3.75em;
    font-family: "Luxurious Script";
    /* margin: 0rem 0.25rem;
    padding: 0rem;
    padding-left: 0.2em;
    padding-right: 0.5em; */
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    /* background-image: url(${bgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat; */
    /* border-radius: 0.5rem;
    border: 0.25rem solid white; */
  }

`

const StyledLinkArea = styled.a`
  color: orange;
  margin: 3rem auto 1rem;

  &:visited{
    color: orange;
  }
`

const ArticleDetails = ({ data }) => {
    
    const titleRef = useRef()
    const titleTLRef = useRef()
    const picRef = useRef()
    const picTLRef = useRef()
    const bodyRef = useRef()
    const bodyTLRef = useRef()

    const [bodyObserverRef, bodyInView] = useInView({
      threshold: 0.25,
      triggerOnce: true
    })

    const [picObserverRef, picInView] = useInView({
      threshold: 0.25,
      triggerOnce: true
    })

    const [titleObserverRef, titleInView] = useInView({
      threshold: 0.25,
      triggerOnce: true
    })

  useEffect(() => {

    bodyTLRef.current = gsap.timeline().pause()

    bodyTLRef.current.fromTo(bodyRef.current,
      {y: 50},
      {y: 0, opacity: 1, duration: 0.75}
    )

    titleTLRef.current = gsap.timeline().pause()

    titleTLRef.current.fromTo(titleRef.current,
      {y: -50},
      {y: 0, opacity: 1,duration: 0.75, delay: 0.25})

    picTLRef.current = gsap.timeline().pause()

    picTLRef.current.from(picRef.current,
      {scale: 0, opacity: 0,  duration: 0.5, delay: 0.5})

  }, [])

  useEffect(() => {

    if(!bodyInView) return

    bodyTLRef.current.play()

  }, [bodyInView])

  useEffect(() => {

    if(!titleInView) return

    titleTLRef.current.play()

  }, [titleInView])

  useEffect(() => {

    if(!picInView) return

    picTLRef.current.play()

  }, [picInView])

    const {
        body,
        frontmatter: { date, description, image, rating, title, url }
    } = data.mdx
    
    const formattedDate = new Date(date).toLocaleDateString('en-us', { day:"numeric", year:"numeric", month:"short"})
    const featuredImage = getImage(image)

    let imageArea = (
      <Skeleton
        animation="wave"
        variant="rectangular"
      />
    )

    if(featuredImage){
      imageArea = (
        <GatsbyImage
          image={featuredImage}
          alt={description}
        />
      )
    }

    return (
        <Layout>
          <title>{title}</title>
            <Paper
              style={{
                padding: `0.5rem 1.0rem 1.0rem`,
                overflowX: `hidden`,
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`
              }}
            >
              <TitleWrapper
                ref={titleObserverRef}
              >
                <Typography
                  ref={titleRef}
                  variant="h1"
                  fontSize="clamp(1.25em, 8vw, 3.5em)"
                  sx={{
                    opacity: 0,
                    fontWeight: `900`,
                    textTransform: 'capitalize',
                    marginBottom: `0.75rem`,
                    textAlign: `center`
                  }}>
                    {title}
                </Typography>
                </TitleWrapper>

                <NutsRating rating={rating}/>

                <StyledDivider/>

                <Typography
                  variant="caption"
                  sx={{
                    alignSelf: 'end',
                    fontSize: '.65em',
                    marginBottom: '1rem',
                    wordWrap: 'none'
                  }}
                >
                  Squirrel Approved on: <em><strong>{formattedDate}</strong></em>
                </Typography>

                <ImageAreaWrapper
                  ref={picObserverRef}
                >
                  <ImageWrapper
                    ref={picRef}
                    >
                <StyledImageArea
                  href={url}
                  target="_blank"
                  rel="noopener"
                >
                  {imageArea}
                </StyledImageArea>
                </ImageWrapper>
                </ImageAreaWrapper>

                <StyledDivider/>

                  <StyledBodyAreaWrapper ref={bodyObserverRef}>
                <StyledBodyArea ref={bodyRef}>
                <MDXRenderer>
                  {body}
                  </MDXRenderer>
                  </StyledBodyArea>
                  </StyledBodyAreaWrapper>
                  <StyledLinkArea href={url} target="_blank" rel="noopener">click here for the story source</StyledLinkArea>
            </Paper>
        </Layout>
    )
}

export const query = graphql`
query PageBuilderQuery($slug: String!) {
    mdx(slug: {eq: $slug}) {
      body
      frontmatter {
        date
        description
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        rating
        title
        url
      }
    }
  }
`


export default ArticleDetails