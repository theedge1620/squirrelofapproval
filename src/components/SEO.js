import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ 
    title = null,
    description = null,
    pathname = null,
    article = false
    }) => {

    const {site} = useStaticQuery(query)

    const {
        defaultTitle,
        defaultDescription,
        url
    } = site.siteMetadata

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        siteUrl: `${url}${pathname || '/'}`
    }

    return (
        <Helmet title={seo.title}>
            <meta name='description' content={seo.description}/>
            
            {seo.url && <meta property='og:url' content={seo.siteUrl} />}

            {(article ? true : null) && <meta property='og:type' content='article' />}

            {seo.title && <meta property='og:title' content={seo.title} />}

            {seo.description && (
                <meta property='og:description' content={seo.description}/>
            )}
        </Helmet>
    )
}

export default SEO

const query = graphql`
    query SEO{
        site{
            siteMetadata{
                defaultTitle: title
                defaultDescription: description
                url: siteUrl
            }
        }
    }
`