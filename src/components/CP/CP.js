import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import from "./ProjectCards";
import Particle from "../Particle";
import leetcode from "../../Assets/Projects/leetcode.png";
import codeforces from "../../Assets/Projects/codeforces.png";
import codechef from "../../Assets/Projects/codechef.png";
import chatify from "../../Assets/Projects/chatify.png";

import Cards from "./Cards";

export default function CP() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple"> Competitive Programming </strong> skills
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've built.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Cards
              imgPath={leetcode}
              isBlog={false}
              title="Leetcode"
              maxrat="1861"
              ghLink="https://leetcode.com/u/Viper51/"  
              demoLink="https://colab.research.google.com/drive/1uoI519sA4qLn_DHAVv6Nv6cYxR4dOwQR"
            />
          </Col>

          <Col md={4} className="project-card">
            <Cards
              imgPath={codeforces}
              isBlog={false}
              title="Codeforces"
              maxrat="1354"
              //description="A Macine Learning model which uses K-means algorithm to compress images by reducing the number of unique colours in the image and thus reducing the size of the image"
              ghLink="https://codeforces.com/profile/viper51"
              demoLink="https://colab.research.google.com/drive/1RI3krpTbK20GpHZKStLgR9esHQEugDWa"
            />
          </Col>

          <Col md={4} className="project-card">
            <Cards
              imgPath={codechef}
              isBlog={false}
              title="Codechef"
              maxrat="1759"
              //description="Trained an agent to play the game of Cart Pole using algorithms like Q-learning and SARSA of Reinforcement Learning."
              ghLink="https://www.codechef.com/users/upansh_522"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <Cards
              imgPath={leaf}
              isBlog={false}
              title="Cliff Walking"
              description="Trained a reinforcement learning agent to play the game of Cliff Walking using algorithms like Q-learning and SARSA."
              ghLink="https://github.com/AchyutPandey/CliffWalking"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <Cards
              imgPath={suicide}
              isBlog={false}
              title="Movie Recommendation System"
              description="Designed a movie recommender system for cinephiles to recommend similar movies using libraries like NLTK and scikit-learn and an algorithm called cosine-similarity."
              ghLink="https://github.com/AchyutPandey/Movie-Recommender-System"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <Cards
              imgPath={emotion}
              isBlog={false}
              title="Digit Recognition"
              description="Trained a Neural Network to recognise hand-written digits using the MNIST dataset. Visulasied the model performance using different metrics. Tuned the parameters further to achieve an accuracy of 97%."
              ghLink="https://github.com/AchyutPandey/Digit-Recognition-System"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Stock Management System"
              description="Made a stock management system using Python and MySQL to manage the inventory of a business. The system has features like adding, deleting and updating available stock of different products."
              ghLink="https://github.com/AchyutPandey/StockManagement"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}
