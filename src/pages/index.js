import React from "react";
import Wrapper from "../components/Wrapper";
import AboutMe from "../sections/AboutMe";
import Education from "../sections/Education";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Languages from "../sections/Languages";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Skills from "../sections/Skills";
import Work from "../sections/Work";
import styles from "./index.module.css";
import PropTypes from 'prop-types';
import { localStorageGet, localStorageSet } from '../utils'



const IndexPage = ({ pageContext }) => {
    const loaded = localStorageGet('loaded');
    if (!loaded) {
        setTimeout(() => localStorageSet('loaded', true, 2 * 60 * 1000), 8000);
    }
  return (
    <Wrapper breaddata={pageContext.breadcrumb}>
      <div className={`pt-10 container ${styles.layout} `}>
        <Hero />
        <AboutMe />
        <Projects />
        <div className={styles.workEducation}>
          <Work />
          <Education />
        </div>
        <Skills />
        <Resume />
        <Languages />
        <Footer />
      </div>
    </Wrapper>
  );
};

IndexPage.propTypes = {
    pageContext: PropTypes.object
};

export default IndexPage;
