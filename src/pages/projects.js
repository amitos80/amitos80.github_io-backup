import React from "react";
import Wrapper from "../components/Wrapper";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import styles from "./index.module.css";
import PropTypes from 'prop-types'
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
        <Projects />
        <Footer />
      </div>
    </Wrapper>
  );
};

IndexPage.propTypes = {
    pageContext: PropTypes.object
};

export default IndexPage;
