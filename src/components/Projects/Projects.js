import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={bitsOfCode}
                isBlog={false}
                title="WeatherScope"
                description="A simple and intuitive weather web application that allows users to check the current weather conditions in a city or at their current location using geolocation. Built with HTML, CSS and JS. Powered by the OpenWeatherMap API to provide real-time, detailed weather information."
                demoLink="https://weatherscope.vercel.app/"
                ghLink="https://github.com/Siradio7/read_meteo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MyContacts"
              description="An android contact directory app, crafted following Orange Digital Center(ODC) training. Simplify managing your personal and professional contacts with a user-friendly interface."
              ghLink="https://github.com/Siradio7/MyContacts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MusicPlayer"
              description="A sleek and intuitive music player built with JavaFX. Enjoy seamless playback, dynamic controls and playlist management for a personalized listening experience."
              ghLink="https://github.com/Siradio7/music_player"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MysteryWord"
              description="Dive into the captivating world of our word guessing game with hidden letters: challenge your mind and uncover hidden words by deciphering clues, for a stimulating and entertaining gaming experience."
              ghLink="https://github.com/Siradio7/MysteryWord"
              demoLink="https://mystery-word.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Fondation UNC"
              description="This GitHub repository showcases the project I've developed for my university, aimed at streamlining same-day appointments with the founder. Managed exclusively by the founder's secretary and the founder themselves, the application offers a user-friendly interface for efficient appointment coordination. Dive into the source code to learn more about its functionality and implementation."
              demoLink="https://fondation-unc.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
