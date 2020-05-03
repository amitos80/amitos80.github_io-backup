import React from "react";
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div  className={`${styles.container} ${styles.topnavmenu}`}>
        <Menu>
            {[
                { href:'/', text: 'Home'},
                { href:'/projects', text: 'Projects'},
                { href:'/skills', text: 'Skills'},
                { href:'/experience', text: 'Experience'},
                { href:'/resume', text: 'Résumé'},
                { href:'/about', text: 'About'}
            ].map((item, key) => (
                    <Link to={item.href} className={`${styles.menuitem} sm:text-sm sm:mr-5 sm:mt-20 text-md mr-10 font-semibold`} key={key}>
                        {item.text}
                        <a id={item.href} href={item.href}></a>
                    </Link>
                )
            )}
        </Menu>
    </div>
  );
};

export default SideBar;
