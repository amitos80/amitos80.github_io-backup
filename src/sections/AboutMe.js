import React from "react";



const AboutMe = () => {
    const into = `Hey there!
            I'm Amit Friedberg, I've been a developer for the past 9 Years. I've been a full stack web developer in the music, adtech, fintech industries and as a freelancer ([download cv](https://drive.google.com/open?id=1nm-MPpHGrxKl3TsAj8YpV8c8IQwETykV)).
            As a developer I always try to come up with the most simple and elegant solution according to the constraints and requirements.
            I'm Skilled in JS, React, Vue, Styled Components, Nodejs, Webpack, mondoDb, Software Architecture, Atomic Design Methodology.`
    return (
        <section id="about-me">


            <div className="grid lg:grid-cols-6 gap-12 items-center">
                <h2 className="text-justify md:col-span-4 lg:col-span-6 wow fadeIn">
                    {into}
                </h2>
            </div>
        </section>
    );
};

export default AboutMe;
