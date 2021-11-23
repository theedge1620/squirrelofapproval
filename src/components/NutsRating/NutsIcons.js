import React, {useEffect, useRef, useState} from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import gsap from 'gsap'
import styled from 'styled-components'


const Layout = styled.div`
    display: flex;
    flex-direction: row;
    transform: scale(0);
`

const NutsIcons = ({index, show}) => {
    
    const delay = index * 0.25

    const iconTL = useRef()
    const iconRef = useRef()

    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {

        iconTL.current = gsap.timeline().pause()

        iconTL.current.to(iconRef.current, {scale: 1, duration: 1.25, ease: "elastic.out(1, 0.3)", delay: delay})

        setLoaded(true)
        
    }, [])

    useEffect(() => {

        if(!show || !loaded) return

        iconTL.current.play()

    }, [show, loaded])

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
