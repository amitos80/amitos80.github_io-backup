import React from "react";
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styles from "./MyBreadCrumbs.module.css";

const MyBreadCrumbs = ({ breaddata = { crumbs: [] } }) => {
    const elementsNew = breaddata.crumbs.map(item => ({ pathname: item.pathname, crumlabel: item.crumbLabel.replace(/-/g, ' ') }));
    return (
        <div className={styles.bccontainer}>
            <ul className={`${styles.list} breadcrumb__list`}>
                {elementsNew.map((value, index) => (
                    <li key={index} className="breadcrumb__item">
                        <Link key={index} to={`${value.pathname}`}>{value.crumlabel}
                            {index !== elementsNew.length - 1 && <span>&nbsp;&gt;&nbsp;</span>}
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

MyBreadCrumbs.propTypes = {
    breaddata: PropTypes.object
};

export default MyBreadCrumbs;