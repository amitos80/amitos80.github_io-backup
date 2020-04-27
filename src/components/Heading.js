import React from "react";
import PropTypes from "prop-types";

const Heading = ({ icon, title }) => {
  const Icon = icon;

  return (
    <div className="heading flex items-center pb-8">
      <Icon size="0.875rem" className="mr-2" />
      <h3 className="font-bold uppercase text-sm leading-none">{title}</h3>
    </div>
  );
};

Heading.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

export default Heading;
