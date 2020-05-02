import React from "react";
import Wrapper from "../components/Wrapper";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import styles from "./index.module.css";

const IndexPage = () => {
  return (
    <Wrapper location={`/projects`} crumbLabel=" Projects">
      <div className={`pt-10 container ${styles.layout} ${styles.containerFadeIn}`}>
        <Hero />
        <Projects />
        <Footer />
      </div>
    </Wrapper>
  );
};

export default IndexPage;
