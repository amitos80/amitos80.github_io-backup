import React from "react";
import Wrapper from "../components/Wrapper";
import AboutMe from "../sections/AboutMe";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import styles from "./index.module.css";

const IndexPage = () => {
  return (
    <Wrapper location={`/about`} crumbLabel=" About" >
      <div className={`pt-10 container ${styles.layout} ${styles.containerFadeIn}`}>
        <Hero />
        <AboutMe />
        <Footer />
      </div>
    </Wrapper>
  );
};

export default IndexPage;
