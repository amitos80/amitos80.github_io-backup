import React from "react";
import { Link } from 'gatsby'
import styles from "./TopNavMenu.module.css";
import PropTypes from 'prop-types'

const TopNavMenu = ({ location }) => {
  return (
    <div  className="hidden md:flex lg:flex xl:flex justify-space-around pt-5 pl-20">
        {[
            { href:'/', text: 'Home'},
            { href:'/projects/', text: 'Projects'},
            { href:'/skills/', text: 'Skills'},
            { href:'/experience/', text: 'Experience'},
            { href:'/resume/', text: 'Résumé'},
            { href:'/about/', text: 'About'}
        ].map((item, key) => (
                <Link to={item.href} className={`${item.href === location ? styles.selected : ''} ${styles.item} sm:text-sm text-md mr-10 font-semibold`} key={key}>{item.text}</Link>
            )
        )}
    </div>
  );
};

TopNavMenu.propTypes = {
    location: PropTypes.string
};

export default TopNavMenu;
