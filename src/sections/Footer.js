import React from "react";
import Heading from "../components/Heading";
import { FaInfoCircle } from "../components/Icons";
import Social from '../components/Social'

const Footer = () => {

  return (
    <section id="footer">
      <Heading icon={FaInfoCircle} title="Freelance web developer" />
      <div className="mt-0 pt-0 pb-12 text-xs leading-relaxed opacity-85">
          Hire Freelance Developer, Remote Developer, Remote Freelance Developer, Hire Remote Web Developer
        <div style={{ width: '138px' }} className=" h-6 my-6">
            <Social />
        </div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=972522266878&text=From:%20my-resume-website">WhatsApp</a>
        </div>
        <div>
          <a href="tell:+972522266878">+972522266878</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
