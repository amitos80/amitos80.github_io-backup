import React from "react";
import { Link } from 'gatsby'

const TopNavMenu = () => {
  return (
    <div className="hidden md:flex lg:flex xl:flex justify-space-around top-nav-menu">
        {[
            { href:'/', text: 'Home'},
            { href:'/projects', text: 'Projects'},
            { href:'/skills', text: 'Skills'},
            { href:'/experience', text: 'Experience'},
            { href:'/about', text: 'About'},
            { href:'/resume', text: 'Résumé'},
        ].map((item, key) => (
                <Link to={item.href} className="text-md mr-10 font-semibold" key={key}>{item.text}</Link>
            )
        )}
    </div>
  );
};

export default TopNavMenu;
