import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';



const SEO = ({ location }) => {
    const meta = {
        '/': {
            siteMetadata: {
                title: `Amit Friedberg - Tel-Aviv based Freelancer Full Stack Web Developer`,
                description: `Freelancer Skilled in JS, React, Vue, Styled Components, Nodejs, Webpack, mondoDb, Software Architecture, Atomic Design Methodology and more.`,
                author: `Amit Friedberg`,
                image: `"https://amitos80.github.io/site-screenshot.png"`
            }
        },
        '/resume/': {
            siteMetadata: {
                title: `Freelancer Full Stack Web Developer Online Résumé`,
                description: `Online Résumé CV of a Tel-Aviv based Freelancer Skilled in JS, React, Vue, Styled Components, Nodejs, Webpack, mondoDb, Software Architecture, Atomic Design Methodology and more.`,
                author: `Amit Friedberg`,
                image: `"https://amitos80.github.io/resume-screenshot.png"`
            }
        },
        '/about/': {
            siteMetadata: {
                title: `About Amit Friedberg Tel-Aviv based Freelancer Full Stack Web Developer`,
                description: `About me Bio of Amit Friedberg Tel-Aviv based  Freelancer Full Stack Web Developer`,
                author: `Amit Friedberg`,
                image: `"https://amitos80.github.io/about-screenshot.png"`
            }
        },
        '/experience/': {
            siteMetadata: {
                title: `About Amit Friedberg Tel-Aviv based Freelancer Full Stack Web Developer proven experience`,
                description: `Professional experience of  Amit Friedberg Tel-Aviv based Freelancer Full Stack Web Developer`,
                author: `Amit Friedberg`,
                image: `"https://amitos80.github.io/experience-screenshot.png"`
            }
        },
        '/projects/': {
            siteMetadata: {
                title: `Projects Amit Friedberg Tel-Aviv based Freelancer Full Stack Web Developer took part in`,
                description: `Amit Friedberg Tel-Aviv based Freelancer Full Stack Web Developer Projects list`,
                author: `Amit Friedberg`,
                image: `"https://amitos80.github.io/projects-screenshot.png"`
            }
        },
        '/skills/': {
            siteMetadata: {
                title: `Skills of Amit Friedberg Tel-Aviv based Freelancer Full Stack Web Developer`,
                description: `Amit Friedberg Tel-Aviv based Freelancer Full Stack Web Developer Skills list`,
                author: `Amit Friedberg`,
                image: `"https://amitos80.github.io/skills-screenshot.png"`
            }
        }
    };

  const site = meta[location];
  if (!site) return null;

  const siteScreenshot = site.siteMetadata.image;
  const title = site.siteMetadata.title;
  const description = site.siteMetadata.description;
  const author = site.siteMetadata.author;
  const profileImage = `"https://amitos80.github.io/profile.png"`;
  const orgName = '"Freelancer Web Applications Developer"';
  const skills = '"Frontend development, Backend development, Javascript, HTML, CSS, React, Vue.js, Node.js, MongoDB, MySQL, Cassandra, Software Development, Building web apps, Freelancer developer"';

  // const image = site.siteMetadata.image;
  // const cvImage = `"https://user-images.githubusercontent.com/1379356/80427121-c14f9180-88ef-11ea-930b-de665de4a31d.png"`;

  const person = `{
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Amit Friedberg",
    "url": "https://amitos80.github.io/",
    "image": ${profileImage},
    "sameAs": [
        "https://www.instagram.com/amitfriedberg",
        "https://www.facebook.com/amit.friedberg",
        "https://www.linkedin.com/in/amit-friedberg-64bb53a"
    ],
    "jobTitle": "Freelancer Full Stack Web Developer",
    "worksFor": {
        "@type": "Organization",
        "name": ${orgName}
    }
  }`;

  const contactPoint = `{
    "@type": "ContactPoint",
        "telephone": "+972-52-22-66878",
        "contactType": "Call/Email/WhatsApp",
        "email": "amitos80@gmail.com",
        "areaServed": "Worldwide"
    }`;

  /* TODO:
     add to Service
     "serviceUrl": "https://amitos80.github.io/",
     "servicePhone": ${contactPoint},
     "serviceSmsNumber": ${contactPoint},
"servicePhone": "+972522266878",
     "audience": {
                "@type": "Audience",
                "audience": "Startup companies, Tech companies, Tech entrepreneurs, HR recruiters, Software companies, Small businesses"
            },
  */


  const pageUrl = `https://amitos80.github.io${location}`;
    return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      defer={false}
      title={title}
      link={[
          { rel: `canonical`, href: pageUrl },
          { rel: `alternate`, href: pageUrl, hreflang: `en-us` }
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
          content:  pageUrl,
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
          content: profileImage.replace(/["']/g, '')
        },
        {
          name: `twitter:card`,
          content: description,
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
          content: siteScreenshot.replace(/["']/g, '')
        },
      ]} >
        <script type="application/ld+json">{`
            {
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": "https://amitos80.github.io",
                "name": ${orgName},
                "alumni": ${person},
                "funder": ${person},
                "knowsAbout": ${skills},
                "contactPoint": ${contactPoint},
                "location": {
                    "@type": "PostalAddress",
                    "addressCountry": "Israel",
                    "addressLocality": "Tel-Aviv",
                    "addressRegion": "Tel-Aviv",
                    "postalCode": "6433222",
                    "streetAddress":"Dizengoff 50",
                    "alternateName": "Tel-Aviv based Freelancer Web Developer - https://amitos80.github.io",
                    "description": "Tel-Aviv based Freelancer web developer Résumé and portfolio"
                },
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "Israel",
                    "addressLocality": "Tel-Aviv",
                    "addressRegion": "Tel-Aviv",
                    "postalCode": "6433222",
                    "streetAddress":"Dizengoff 50",
                     "subjectOf": {
                        "@type": "CreativeWork",
                        "creator": ${person},
                        "funder": ${person},
                        "maintainer": ${person},
                        "genre": ${skills},
                        "headline": "Tel-Aviv based Freelancer full stack web developer",
                        "text": "Fast, responsive, modern web applications development. Amit Friedberg Full Stack Web Developer",
                        "thumbnailUrl": ${siteScreenshot}
                    }
                }
            }
        `}
        </script>
        <script type="application/ld+json">{`
           ${person}
        `}</script>
        <script type="application/ld+json">{`
        {
            "@context": "http://schema.org/",
            "@type": "Service",
            "serviceType": "Tel-Aviv based based Web Applications Development service",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": ${orgName},
                "itemListElement": [
                    {
                        "@type": "OfferCatalog",
                        "name": "Portfolio",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "image": {
                                    "@type": "ImageObject",
                                    "name": "Tel-Aviv based Freelancer full stack web developer portfolio - Web app for smart recruiting employees",
                                    "url": "https://amitos80.github.io/lnrd.png",
                                    "alternateName": "Screen shot Lnrd"
                                 }
                            },
                            {
                                "@type": "Offer",
                                "image": {
                                    "@type": "ImageObject",
                                    "name": "Tel-Aviv based Freelancer full stack web developer portfolio - Music player with multiple streaming providers and real time analytics (https://feature.fm)",
                                    "url": "https://amitos80.github.io/ffm-player.png",
                                    "alternateName": "Screen shot Feature.Fm"
                                 }
                            },
                            {
                                "@type": "Offer",
                                "image": {
                                    "@type": "ImageObject",
                                    "name": "Tel-Aviv based Freelancer full stack web developer portfolio - Financial Magazine (https://www.fxempire.com/)",
                                    "url": "https://amitos80.github.io/fxempire.png",
                                    "alternateName": "Screen shot FxEmpire"
                                 }
                            },
                            {
                                "@type": "Offer",
                                "image": {
                                    "@type": "ImageObject",
                                    "name": "Tel-Aviv based Freelancer full stack web developer portfolio - My Résumé and portfolio web site",
                                    "url": "https://amitos80.github.io/site-screenshot.png",
                                    "alternateName": "Screen shot Résumé and portfolio web site"
                                 }
                            },
                            {
                                "@type": "Offer",
                                "image": {
                                    "@type": "ImageObject",
                                    "name": "Tel-Aviv based Freelancer full stack web developer portfolio - Cyiot at Orchestra group tel aviv",
                                    "url": "https://amitos80.github.io/ciyot.png",
                                    "alternateName": "Screen shot Cyiot at Orchestra group tel aviv"
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

SEO.propTypes = {
    location: PropTypes.string
};

export default SEO;
