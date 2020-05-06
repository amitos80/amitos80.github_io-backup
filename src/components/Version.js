import React from "react";
import styles from "./Version.module.css";
const meta = require('../../package.json');

const Version = () => {
  return (
    <div className={styles.container}>
        <div className="text-yellow-400 text-xs leading-relax">v{meta.version}</div>
    </div>
  );
};

export default Version;
