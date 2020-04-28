
import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {

    const site = {
        siteMetadata: {
            title: `Amit Friedberg - Freelancer Full Stack Web Developer`,
            description: `Freelancer Skilled in JS, React, Vue, Styled Components, Nodejs, Webpack, mondoDb, Software Architecture, Atomic Design Methodology and more.`,
            author: `Amit Friedberg`,
            image: 'https://user-images.githubusercontent.com/1379356/80426782-16d76e80-88ef-11ea-9561-fbff831e55c2.png'
        }
    }
  const title = site.siteMetadata.title;
  const description = site.siteMetadata.description;
  const author = site.siteMetadata.author;
  const image = site.siteMetadata.image;

  return (
    <Helmet
//link rel="alternate" href="http://example.com" hreflang="en-us" />
      htmlAttributes={{ lang: "en" }}
      defer={false}
      title={title}
      link={[
          { rel: `canonical`, href: `https://amitos80.github.io/` },
          { rel: `alternate`, href: `https://amitos80.github.io/`, hreflang: `en-us` }
      ]}
      meta={[
        {
          'http-equiv': `content-language`,
          content: `en-us`,
        },
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:url`,
          content:  `https://amitos80.github.io/`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: "og:image",
          content: image,
        },
        {
          name: `twitter:card`,
          content: `Hey there! I'm Amit Friedberg, I've been a developer for the past 9 Years. I've been a full stack web developer in the music, adtech, fintech industries and as a freelancer ([download cv](https://drive.google.com/open?id=1nm-MPpHGrxKl3TsAj8YpV8c8IQwETykV)).
As a developer I always try to come up with the most simple and elegant solution according to the constraints and requirements.
I'm Skilled in JS, React, Vue, Styled Components, Nodejs, Webpack, mondoDb, Software Architecture, Atomic Design Methodology.`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: "twitter:card",
          content: "https://user-images.githubusercontent.com/1379356/80427121-c14f9180-88ef-11ea-930b-de665de4a31d.png",
        },
      ]} >
        <script type="application/ld+json">{`
            {
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": "https://amitos80.github.io",
                "name": "Web Applications Development Services",
                "knowsAbout": "Frontend, Backend, Javascript, HTML, CSS, React, Vue.js, Node.js, MongoDB, MySQL, Cassandra",
                 "alumni": {
                    "@type": "Person",
                    "name": "Amit Friedberg"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+972-52-22-66878",
                    "contactType": "Call/Email",
                    "email": "amitos80@gmail.com",
                    "areaServed": "Worldwide"
                }
            }
        `}
        </script>
        <script type="application/ld+json">{`
            {
                "@context": "https://schema.org/",
                "@type": "Person",
                "name": "Amit Friedberg",
                "url": "https://amitos80.github.io/",
                "image": "https://user-images.githubusercontent.com/1379356/80426782-16d76e80-88ef-11ea-9561-fbff831e55c2.png",
                "sameAs": [
                    "https://www.instagram.com/amitfriedberg",
                    "https://www.facebook.com/amit.friedberg"
                ],
                "jobTitle": "Freelancer Full Stack Web Developer",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Web Applications Development Services"
                }
            }
        `}</script>
        <script type="application/ld+json">{`
        {
            "@context": "http://schema.org/",
            "@type": "Service",
            "serviceType": "Web Applications Development",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web applications development services",
                "itemListElement": [
                    {
                        "@type": "OfferCatalog",
                        "name": "Portfolio",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "image": {
                                    "@type": "ImageObject",
                                    "name": "Web app for recruiting (HR)",
                                    "url": "https://user-images.githubusercontent.com/1379356/80473822-57ff6b00-894f-11ea-8599-b01e765523fa.png",
                                    "alternateName": "Screen shot Lnrd"
                                 }
                            },
                              {
                                "@type": "Offer",
                                "image": {
                                    "@type": "ImageObject",
                                    "name": "Web app tracking cyber attacks in organizations networks",
                                    "url": "https://user-images.githubusercontent.com/1379356/80473801-4fa73000-894f-11ea-8c2d-0e1abe2e4ce4.png",
                                    "alternateName": "Screen shot ciyot"
                                 }
                            },
                              {
                                "@type": "Offer",
                                "image": {
                                    "@type": "ImageObject",
                                    "name": "Music player with multiple streaming providers and real time analytics ",
                                    "url": "https://user-images.githubusercontent.com/1379356/80473822-57ff6b00-894f-11ea-8599-b01e765523fa.png",
                                    "alternateName": "Screen shot Feature.Fm"
                                 }
                            },
                              {
                                "@type": "Offer",
                                "image": {
                                    "@type": "ImageObject",
                                    "name": "Financial Magazine",
                                    "url": "https://user-images.githubusercontent.com/1379356/80473822-57ff6b00-894f-11ea-8599-b01e765523fa.png",
                                    "alternateName": "Screen shot FxEmpire"
                                 }
                            }
                        ]
                    }
                ]
            }
        }
        `}</script>
    </Helmet>
  );
};

export default SEO;
