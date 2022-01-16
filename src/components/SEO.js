import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ 
    title = null,
    description = null,
    pathname = null,
    article = false,
    tags = null,
    image = null
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
            
            {seo.siteUrl && <meta property='og:url' content={seo.siteUrl} />}

            {(article ? true : null) && (
            <meta property='og:type' content='article' />
                
            )}

            {(article ? true : null) && (
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type":"blog",
                            "name": "${seo.title}",
                            "description": "${seo.description}",
                            "url":"${seo.siteUrl}",
                            "image":"${image || null}"
                        }                                   
                    `}
                </script>               
            
            )}


            {seo.title && <meta property='og:title' content={seo.title} />}

            {seo.description && (
                <meta property='og:description' content={seo.description}/>
            )}

            {tags && <meta name='keywords' content={tags.join(',')} />}

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