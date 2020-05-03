import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React, { useState, useEffect, useContext } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";
import ThemeContext from "../context/ThemeContext";
import sections from "../data/sections";
import { IoIosColorPalette, MdMenu } from "./Icons";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { toggleDark } = useContext(ThemeContext);
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { isMobile } = require("../utils");
      setIsMobile(isMobile);
    }
  }, []);

  const scrollToTop = () =>
    scroll.scrollToTop({
      delay: 50,
      duration: 600,
      smooth: "easeInOutCubic",
    });

  const scrollTo = id =>
    scroller.scrollTo(id, {
      delay: 50,
      offset: -50,
      duration: 600,
      smooth: "easeInOutCubic",
    });

  const SectionLink = x => {
    const Icon = x.icon;

    return (
      <div
        style={{ color: x.color }}
        key={x.id}
        data-tip={x.title}
        data-place="right"
        onClick={() => scrollTo(x.id)}
      >
        <Icon />
      </div>
    );
  };

  return (
    <div
      className={`${styles.container} animated ${
        isMobile ? "fadeInDown" : "fadeInLeft"
      }`}
    >
      <div
        className="flex-center cursor-pointer"
        onClick={scrollToTop}
        data-tip="Go to Top"
        data-place="right"
      >
        <GatsbyImage
          alt="website icon"
          title="website icon"
          loading="lazy"
          className="low-opacity"
          {...data.icon.childImageSharp}
        />
      </div>
      <div className="hidden md:flex flex-col justify-center items-center">
        <div className={styles.menu}>
          <MdMenu />
        </div>
        <div className={styles.sectionLinks}>{sections.map(SectionLink)}</div>
      </div>
      <div
        className={`${styles.toggle} flex-center cursor-pointer hover:text-primary-500`}
        onClick={toggleDark}
        data-tip="Toggle Dark Mode"
        data-place="right"
      >
      <IoIosColorPalette />
      </div>
    </div>
  );
};

export default Navigation;
