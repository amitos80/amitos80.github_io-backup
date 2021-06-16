import PropTypes from "prop-types";
import React, { useState, useContext, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import ThemeContext from "../context/ThemeContext";
import Navigation from "./Navigation";
import TopNavMenu from "./TopNavMenu";
import SEO from "./SEO";
import styles from "./Wrapper.module.css";
import MyBreadCrumbs from './MyBreadCrubs';

const Wrapper = ({ children, breaddata }) => {
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
      {breaddata.crumbs && breaddata.crumbs.length > 1 && <MyBreadCrumbs breaddata={breaddata} />}
      {breaddata && breaddata.location && <SEO location={breaddata.location} />}
      <TopNavMenu location={breaddata.location} />
      <Navigation />

      <div className="mx-8">{children}</div>
      <ReactTooltip disable={isMobile} />
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  breaddata: PropTypes.object
};

export default Wrapper;
