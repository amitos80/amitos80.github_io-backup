import PropTypes from "prop-types";
import React, { useState, useContext, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import ThemeContext from "../context/ThemeContext";
import Navigation from "./Navigation";
import TopNavMenu from "./TopNavMenu";
import SEO from "./SEO";
import styles from "./Wrapper.module.css";
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const Wrapper = ({ children, location, crumbLabel }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const WOW = require("wowjs");
      const { isMobile } = require("../utils");

      setIsMobile(isMobile);
      new WOW.WOW({ live: false, mobile: false }).init();
    }
  }, []);

  return (
    <div className={`${dark ? styles.dark : styles.light} ${styles.wrapper}`}>
      <div className="breadcrumbs-container">
        <Breadcrumb location={location} crumbLabel={crumbLabel} />
      </div>
      <SEO />
      <TopNavMenu />
      <Navigation />

      <div className="mx-8">{children}</div>
      <ReactTooltip disable={isMobile} />
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string,
  crumbLabel: PropTypes.string
};

export default Wrapper;
