import React from "react";



const AboutMe = () => {
    const __html = `<div>Hey there!</div>
            <div>Tel-Aviv based freelancer Software development enthusiast with a passion for web development and the js echo-system.</div>

            <div>I've been a developer for the past 9 Years. During that period I gained lots of experience in developing fast,
             beautiful, responsive web apps in multiple roles and companies in the music, adtech, journalism, and fintech industries.
             Nowadays work as a freelancer web developer giving development and consulting services for companies. <a style="font-size: 14px" href="https://drive.google.com/open?id=1nm-MPpHGrxKl3TsAj8YpV8c8IQwETykV" target="_blank">(check out my cv)</a></div>

            <div>As a developer, I always try to come up with the most simple and elegant solution according to the constraints and requirements.
             I'm Skilled in JS, React, Vue, Styled Components, Nodejs, Webpack, MongoDB, Software Architecture, Atomic Design Methodology and always love to learn new technologies.</div>`

    return (
        <section id="about-me">
            <div className="grid lg:grid-cols-6 gap-12 items-center">
                <h2 dangerouslySetInnerHTML={{ __html }} className="text-justify md:col-span-4 lg:col-span-6 wow fadeIn" />
            </div>
        </section>
    );
};

export default AboutMe;
