import React from "react";
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const MyBreadCrumbs = ({ breaddata = { crumbs: [] } }) => {
    const elementsNew = breaddata.crumbs.map(item => ({ pathname: item.pathname, crumlabel: item.crumbLabel.replace(/-/g, ' ') }));
    console.log(elementsNew)

    return (
        <>
            <div className="breadcrumbs-container">
                <div className="md:flex lg:flex xl:flex">
                    <ul className="breadcrumb__list">
                        {elementsNew.map((value, index) => {
                            return  <li key={index} className="breadcrumb__item">
                                <Link key={index} to={`${value.pathname}`}>{value.crumlabel} <span> / </span> </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

MyBreadCrumbs.propTypes = {
    breaddata: PropTypes.object
};

export default MyBreadCrumbs;
