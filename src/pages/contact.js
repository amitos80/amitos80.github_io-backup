import React from "react";
import Wrapper from "../components/Wrapper";
import Footer from "../sections/Footer";
import * as styles from "./index.module.css";
import PropTypes from 'prop-types'



const IndexPage = ({ pageContext }) => {
  return (
    <Wrapper breaddata={pageContext.breadcrumb}>
      <div className={`pt-10 container contact ${styles.layout} `}>
        <Footer hideDescription={true} hideHeading={true} largeText={true} reverse={true}/>
      </div>
    </Wrapper>
  );
};

IndexPage.propTypes = {
    pageContext: PropTypes.object
};

export default IndexPage;
