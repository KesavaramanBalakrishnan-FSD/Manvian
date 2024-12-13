import React from "react";
import ReactTypingEffect from "react-typing-effect";

const TypingEffect = () => {
  return (
    <>
      <div className="typing-font-size">
        <ReactTypingEffect
          text={[
            "What's your dream?",
            "What's your end goal?",
            "Waiting for an opportunity?",
            "Is your dream big?",
            "Want to build impact?",
            "Want to become an entrepreneur?",
            "Want to become an expert?",
            "Want to level up?",
            "Are you hungry for your career?",
            "Want to be a change maker?",
          ]}
        />
      </div>
    </>
  );
};

export default TypingEffect;
