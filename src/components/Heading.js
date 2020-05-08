import React from "react";
import PropTypes from "prop-types";

const Heading = ({ icon, title, children }) => {
  const Icon = icon;

  return (
    <div className="heading flex items-center pb-4">
      <Icon size="0.875rem" className="mr-2" />
      <h3 className="font-bold uppercase text-sm leading-none">{title}</h3>
      {children && children}
    </div>
  );
};

Heading.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default Heading;
