import React from "react";
import Wrapper from "../components/Wrapper";
import AboutMe from "../sections/AboutMe";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import styles from "./index.module.css";
import PropTypes from 'prop-types'

const IndexPage = ({ pageContext }) => {
    console.log('pageContext -> ', pageContext);
  return (
    <Wrapper breaddata={pageContext.breadcrumb}>
      <div className={`pt-10 container ${styles.layout} ${styles.containerFadeIn}`}>
        <Hero />
        <AboutMe />
        <Footer />
      </div>
    </Wrapper>
  );
};

IndexPage.propTypes = {
    pageContext: PropTypes.object
};

export default IndexPage;
