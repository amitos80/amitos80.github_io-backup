import React from "react";
import Wrapper from "../components/Wrapper";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Resume from "../sections/Resume";
import styles from "./index.module.css";
import PropTypes from 'prop-types'


const IndexPage = ({ pageContext }) => {


  return (
    <Wrapper breaddata={pageContext.breadcrumb}>
      <div className={`pt-10 container ${styles.layout} `}>
        <Hero />
        <Resume expended={true} />
        <Footer />
      </div>
    </Wrapper>
  );
};

IndexPage.propTypes = {
    pageContext: PropTypes.object
};

export default IndexPage;
