import { OutboundLink } from "gatsby-plugin-google-analytics";
import React from "react";
import social from "../data/social";
import styles from "./Social.module.css";
import PropTypes from 'prop-types'

const Social = ({ animation = false }) => {
  return (
    <div className={styles.container}>
      {social.map((x, i) => {
        const Icon = x.icon;

        return (
          <OutboundLink
            key={x.title}
            href={x.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${x.class} ${animation ? 'animated fadeIn' : '' } `}
            style={{
              animationDelay: animation ? `${i * 0.25 + 0.25}s` : '0s',
            }}
            data-tip={x.title}
            data-place="bottom"
          >
            <Icon color="#FFF" size="0.9em" />
            <span className="sr-only">{x.title}</span>
          </OutboundLink>
        );
      })}
    </div>
  );
};

Social.propTypes = {
    animation: PropTypes.bool
};
export default Social;
