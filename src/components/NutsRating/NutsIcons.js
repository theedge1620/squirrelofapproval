import React, {useEffect, useRef} from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import gsap from 'gsap'
import styled from 'styled-components'


const Layout = styled.div`
    display: flex;
    flex-direction: row;
    transform: scale(0);
`

const NutsIcons = ({delay = 0.25, show = false}) => {
    
    const iconTL = useRef()
    const iconRef = useRef()
    
    useEffect(() => {

        iconTL.current = gsap.timeline().pause()

        iconTL.current.to(iconRef.current, {scale: 1, duration: 1.25, ease: "elastic.out(1, 0.3)", delay: delay})

    }, [])

    useEffect(() => {

        if(!show ) return

        iconTL.current.play()

    }, [show])

    return (
        <Layout
            ref={iconRef}
        >
            <StaticImage
                src="../../images/acorn.png"
                alt="nuts rating acorn"
                style={{
                    maxWidth: `2.5rem`,
                    maxHeight: `2.5rem`,
                    transform: `rotate(-45deg)`
                }}
                imgStyle={{
                    maxWidth: `5rem`,
                    maxHeight: `5rem`,
                }}
                placeholder="NONE"
            />
        </Layout>
    )
}

export default NutsIcons
