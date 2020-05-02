import React from "react";
import Heading from "../components/Heading";
import { FaInfoCircle } from "../components/Icons";

const Footer = () => {

  return (
    <section id="footer">
      <Heading icon={FaInfoCircle} title="Tel-Aviv based freelancer full stack web developer - Contact" />
      <div className="mt-0 pt-0 pb-8 text-xs leading-relaxed opacity-75">
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
