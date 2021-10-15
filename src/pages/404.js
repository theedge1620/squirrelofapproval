import React,{useEffect, useRef, useState} from "react"
import { navigate } from "gatsby-link"
import styled from 'styled-components'

const StyledLayout = styled.div`
  color: white;
`
const NotFoundPage = () => {

  const [timeToRedirect, setTimeToRedirect] = useState(5)
  const [timeIsUp, setTimeIsUp] = useState(false)

  const timerRef = useRef(timeToRedirect)
  timerRef.current = timerRef.current <= 0 ? 0 : timeToRedirect

  useEffect(() => {

    setInterval(() => {
      setTimeToRedirect(() => timeToRedirect - 1)
    }, 1000)

  }, [])

  useEffect(() => {

    if(!timeIsUp){
      if(timeToRedirect <= 0){
        setTimeIsUp(true)
        return
      }

      setInterval(() => {
        setTimeToRedirect(() => timeToRedirect - 1)
      }, 1000)

    }

    return


  }, [timeToRedirect])

  useEffect(() => {

    if(timeIsUp) navigate('/')
    return

  }, [timeIsUp])

  return (
    <StyledLayout>
      <title>Not found</title>

      <h3>This page does not exist.</h3>
      <p>Redirecting you to the homepage in {timeToRedirect} {timeToRedirect === 1 ? `second` : `seconds`}.</p>

        
    </StyledLayout>
  )
}

export default NotFoundPage
