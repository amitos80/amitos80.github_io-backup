import React from "react";
import Heading from "../components/Heading";
import { FaInfoCircle } from "../components/Icons";
import Social from '../components/Social'
import Version from '../components/Version'
import PropTypes from 'prop-types'


const Footer = ({ hideHeading, hideDescription, largeText, reverse }) => {

  return (
    <section id="footer">
        {!hideHeading && <Heading icon={FaInfoCircle} title="Freelance web developer" />}
      <div className="mt-0 pt-0 pb-12 text-xs leading-relaxed opacity-85">
        {!hideDescription && <div>Hire Freelance Developer, Remote Developer, Remote Freelance Developer, Hire Remote Web Developer</div>}
        {!reverse && <div style={{ width: '190px' }} className=" h-6 my-6">
            <Social />
        </div>}
        <div className={largeText ? 'text-lg' : ''}>
          <a className="font-light" href="mailto:amitos80@gmail.com?Subject=Freelance project" target="_top">amitos80@gmail.com</a>
        </div>
        <div className={largeText ? 'text-lg' : ''}>
          <a className="font-light" href="https://api.whatsapp.com/send?phone=972522266878&text=From:%20my-resume-website">WhatsApp</a>
        </div>
        <div className={largeText ? 'text-lg' : ''}>
          <a className="font-light" href="tell:+972522266878">+972-52-22-66-878</a>
        </div>
        {reverse && <div style={{ width: '190px' }} className=" h-6 my-6">
            <Social />
        </div>}
        <Version />
      </div>
    </section>
  );
};

Footer.propTypes = {
    hideHeading: PropTypes.bool,
    hideDescription: PropTypes.bool,
    largeText: PropTypes.bool,
    reverse: PropTypes.bool
};

export default Footer;
