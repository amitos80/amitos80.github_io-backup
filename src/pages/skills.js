import React from "react";
import Wrapper from "../components/Wrapper";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import styles from "./index.module.css";

const IndexPage = () => {
  return (
    <Wrapper location={`/skills`} crumbLabel=" Skills">
      <div className={`pt-10 container ${styles.layout} ${styles.containerFadeIn}`}>
        <Hero />
        <Skills />
        <Footer />
      </div>
    </Wrapper>
  );
};

export default IndexPage;
