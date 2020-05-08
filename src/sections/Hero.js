import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import Parallax from "parallax-js";
import React, { useRef, useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Social from "../components/Social";
import Subtitle from "../components/Subtitle";
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { localStorageGet } from '../utils'

const Hero = () => {
  const parallaxRef = useRef(null);
  const [parallax, setParallax] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "photo.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  useEffect(() => {
      setIsLoaded(localStorageGet('loaded'));
  }, []);


  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { isMobile } = require("../utils");
      setIsMobile(isMobile);
    }
  }, []);

  useEffect(() => {
    if (isMobile) {
      setParallax(
        new Parallax(parallaxRef.current, {
          invertX: false,
          invertY: false,
        }),
      );
    }

    return () => {
      parallax && parallax.destroy();
    };
  }, [parallaxRef]);

  return (
    <section style={{ minHeight: '50vh' }} id="hero" className="min-h-screen flex items-center container">
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 row-gap-8 lg:gap-16 justify-center lg:justify-start items-center mt-8 md:mt-12 lg:mt-0">
        <div ref={parallaxRef} className="col-span-2">
          <div style={{ width: '200px' }} className="mx-auto" data-depth="0.4">
            <GatsbyImage title="profile photo" alt="profile photo" loading="lazy" {...data.photo.childImageSharp} />
              <div style={{ width: '190px' }} className="mx-auto h-2 my-6">
                  {!isLoaded && showSocial && <Social animation={!isLoaded} />}
                  {isLoaded && <Social animation={!isLoaded} />}
              </div>
              <div  className="text-xs font-light flex-center low-opacity light">
                  <OutboundLink
                      className={`text-xs font-light low-opacity light ${ !isLoaded ? 'animated fadeIn' : ''}  `}
                      style={{
                          animationDelay: !isLoaded ? `${21.5 * 0.25 + 0.25}s` : '0s',
                      }}
                      data-place="bottom"
                      href="mailto:amitos80@gmail.com?Subject=Freelance project"
                      target="_top"
                  >
                      amitos80@gmail.com
                  </OutboundLink>
              </div>
          </div>
        </div>
        <div className="col-span-3">


          <h1 className="sr-only">
            Amit Friedberg<br />
            Ninja Web Developer / Teacher / Maker / Guitar Shredder
          </h1>

          <div className="text-center lg:text-left flex flex-col items-center lg:ml-4 lg:items-start">
            <Subtitle
              animate={!isLoaded}
              onDone={() => {
                setShowSocial(true);
                ReactTooltip.rebuild();
              }}
            />


          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
