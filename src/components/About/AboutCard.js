import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mamadou Siradiou Diallo </span>
            from <span className="purple"> Conakry, Guinea.</span>
            <br />
            I am currently employed as a web developer at Numerikap.
            <br />
            I am a student in Computer Engineering at University Nongo of Conakry.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Solve algorithm problems
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mamadou Siradiou Diallo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
