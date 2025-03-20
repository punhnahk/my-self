import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Type() {
  return (
    <span className="text-sky-300 font-bold">
      <Typewriter
        words={["Software Developer", "Freelancer", "MERN Stack Developer"]}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
}

export default Type;
