import React from "react";
import PropTypes from "prop-types";
import Typist from "react-typist";

const Subtitle = ({ onDone, animate = true }) => {
    if (animate) {
        return (
            <Typist
                startDelay={animate ? 500 : 0}
                avgTypingDelay={animate ? 20 : 0}
                cursor={{ show: false }}
                className="my-2 flex h-32 md:h-40 lg:h-32"
                onTypingDone={onDone}
            >
                <code className="w-full text-sm leading-loose">
                    <div>
                        <span className="text-purple-600">const</span>{" "}
                        <span className="text-yellow-400">me</span>:{" "}
                        <span className="text-yellow-400">Array</span>&lt;
                        <span className="text-yellow-400">Ingredient</span>&gt;{" "}
                        <span className="text-yellow-600">= [</span>
                    </div>
                    <div className="lg:pl-8">
                        <span className="text-red-500">ArchitectureDesign</span>,{" "}
                        <span className="text-red-500">WebDevelopment</span>,{" "}
                        <span className="text-red-500">RapidPrototyping</span>,{" "}
                        <span className="text-red-500">Teaching</span>,{" "}
                    </div>
                    <div className="lg:pl-8">
                        <span className="text-red-500">Guitars</span>,{" "}
                        <span className="text-red-500">Electronics</span>, ...
                        <span className="text-red-500">RocknRoll</span>
                    </div>
                    <div className="text-yellow-600" >];</div>
                </code>
            </Typist>
        );
    }

    return (
      <code className="w-full text-sm leading-loose">
        <div>
            <span className="text-purple-600">const</span>{" "}
            <span className="text-yellow-400">me</span>:{" "}
            <span className="text-yellow-400">Array</span>&lt;
            <span className="text-yellow-400">Ingredient</span>&gt;{" "}
            <span className="text-yellow-600">= [</span>
        </div>
        <div className="lg:pl-8">
            <span className="text-red-500">ArchitectureDesign</span>,{" "}
            <span className="text-red-500">WebDevelopment</span>,{" "}
            <span className="text-red-500">RapidPrototyping</span>,{" "}
            <span className="text-red-500">Teaching</span>,{" "}
        </div>
        <div className="lg:pl-8">
            <span className="text-red-500">Guitars</span>,{" "}
            <span className="text-red-500">Electronics</span>, ...
            <span className="text-red-500">RocknRoll</span>
        </div>
        <div className="text-yellow-600" >];</div>
    </code>);

}

Subtitle.propTypes = {
  onDone: PropTypes.func.isRequired,
  animate: PropTypes.bool
};

export default Subtitle;
