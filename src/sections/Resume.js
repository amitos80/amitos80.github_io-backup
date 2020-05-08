import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics";
import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { FaLink, IoIosDocument } from "../components/Icons";
import PropTypes from 'prop-types'

const Resume = ({ expended = false }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "resume/cv.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <section id="resume">
      <Heading icon={IoIosDocument} title="Résumé">
          <OutboundLink
              href="https://amitos80.github.io/resume-cv-amit-friedberg-freelance-web-developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-xs font-light"
          >
              Download CV
          </OutboundLink>
      </Heading>

      {!expended && <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8 items-center wow fadeIn">
        <div className="col-span-1 md:col-span-2">
          <OutboundLink
            href="https://amitos80.github.io/resume-cv-amit-friedberg-freelance-web-developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-64 md:h-48 lg:h-64 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg"
          >
            <FaLink className="absolute" color="#FFF" size="5rem" />
            <GatsbyImage
              alt="Amit Friedberg Résumé CV"
              title="Amit Friedberg Résumé CV"
              loading="lazy"
              className="absolute w-full h-64 md:h-48 lg:h-64 object-cover rounded-lg hover:opacity-50 duration-200"
              imgStyle={{ objectPosition: "top" }}
              {...data.file.childImageSharp}
            />
            <span className="sr-only">Download Résumé</span>
          </OutboundLink>
        </div>
        <div className="col-span-1 md:col-span-3">
          <h4 className="text-lg lg:text-xl font-semibold">
            Home Made Résumé
          </h4>

          <Button
            className="mt-8"
            icon={IoIosDocument}
            title="Download Résumé"
            onClick={() =>
              window.open("https://amitos80.github.io/resume-cv-amit-friedberg-freelance-web-developer.pdf", "_blank")
            }
          />
        </div>
      </div>}

        {expended && <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8 items-center wow fadeIn">
            <div className="col-span-4 md:col-span-4">
                <h4 className="text-lg lg:text-xl font-semibold">
                    Amit Friedberg
                </h4>
                <h4 className="text-lg lg:text-lg font-semibold">
                    FREELANCER | FRONTEND DEVELOPER | BACKEND DEVELOPER | INSTRUCTOR
                </h4>
                <p className="mt-2 pb-5 text-sm text-justify">
                    {`I love coding, In the last decade, I have had extended experience in Web Development in multiple frameworks and platforms such as React, Vuejs, Nodejs and many more.
                    I've been a frontend and backend web developer (full stack web developer) in the Music, Adtech, Cyber, Fintech industries as an employee and a freelancer. I also enjoy instructing and teaching.
                    For 2 years I taught at the course at Visual Communication department at Shenkar Engineering And Design. The idea was to give students coding skills
                    and tools to create interactive installations.`}
                </p>
                <div className="flex flex-col ">
                    {[
                        { href:'/projects', text: 'Projects'},
                        { href:'/skills', text: 'Skills'},
                        { href:'/experience', text: 'Experience'},
                        { href:'/', text: 'Home Page' }
                    ].map((item, key) => (
                            <Link to={item.href} className="text-md font-semibold" key={key}>{item.text}</Link>
                        )
                    )}
                </div>
            </div>




            <div className="col-span-1 md:col-span-2">
                <OutboundLink
                    href="https://amitos80.github.io/resume-cv-amit-friedberg-freelance-web-developer.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-64 md:h-48 lg:h-64 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg"
                >
                    <FaLink className="absolute" color="#FFF" size="5rem" />
                    <GatsbyImage
                        alt="Amit Friedberg Résumé CV"
                        title="Amit Friedberg Résumé CV"
                        loading="lazy"
                        className="absolute w-full h-64 md:h-48 lg:h-64 object-cover rounded-lg hover:opacity-50 duration-200"
                        imgStyle={{ objectPosition: "top" }}
                        {...data.file.childImageSharp}
                    />
                    <span className="sr-only">Download Résumé</span>
                </OutboundLink>
            </div>
            <div className="col-span-1 md:col-span-3">
                <h4 className="text-lg lg:text-xl font-semibold">
                    Home Made Résumé
                </h4>

                <Button
                    className="mt-8 clear-button"
                    icon={IoIosDocument}
                    title="Download Résumé"
                    onClick={() =>
                        window.open("https://amitos80.github.io/resume-cv-amit-friedberg-freelance-web-developer.pdf", "_blank")
                    }
                />
            </div>

        </div>}
    </section>
  );
};

Resume.propTypes = {
    expended: PropTypes.bool
};

export default Resume;
