import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Student",
          "MERN Stack Developer",
          "Open Source Contributor",
          "JavaFX Developer",
          "Swing Developer",
          "Spring Boot Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  );
}

export default Type;
