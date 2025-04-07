import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fraud from "../../Assets/Projects/fraud.png";
import digit from "../../Assets/Projects/digit.png";
import cartpole from "../../Assets/Projects/cartpole.png";
import compress from "../../Assets/Projects/compress.png";
import cliff from "../../Assets/Projects/cliff.png";
import movie from "../../Assets/Projects/movie.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've built.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fraud}
              isBlog={false}
              title="Fraud Detection"
              description="A Machine Learning model which uses Unsupervised ML (Self-Organizing Maps) to prevent frauds by flagging potential fraudulent customers from a dataset of credit card applications"
              ghLink="https://github.com/AchyutPandey/Self-Organizing-Map"  
              demoLink="https://colab.research.google.com/drive/1uoI519sA4qLn_DHAVv6Nv6cYxR4dOwQR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compress}
              isBlog={false}
              title="Image Compression"
              description="A Macine Learning model which uses K-means algorithm to compress images by reducing the number of unique colours in the image and thus reducing the size of the image"
              ghLink="https://github.com/AchyutPandey/ImageCompression-K-means"
              demoLink="https://colab.research.google.com/drive/1RI3krpTbK20GpHZKStLgR9esHQEugDWa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cartpole}
              isBlog={false}
              title="CartPole Agent"
              description="Trained an agent using neural network to play the game of Cart Pole (available on gymnasium) using algorithms like Q-learning and SARSA of Reinforcement Learning and a custom epsilon-greedy policy."
              ghLink="https://github.com/AchyutPandey/CartPole"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cliff}
              isBlog={false}
              title="Cliff Walking"
              description="Trained a reinforcement learning agent to play the game of Cliff Walking using algorithms like Q-learning and SARSA and a custom epsilon-greedy policy. Used a Q table to store the reward values of each option."
              ghLink="https://github.com/AchyutPandey/CliffWalking"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Recommendation System"
              description="Designed a movie recommender system for cinephiles to recommend similar movies using libraries like NLTK and scikit-learn and an algorithm called cosine-similarity."
              ghLink="https://github.com/AchyutPandey/Movie-Recommender-System"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digit}
              isBlog={false}
              title="Digit Recognition"
              description="Trained a Neural Network to recognise hand-written digits using the MNIST dataset. Visulasied the model performance using different metrics. Tuned the parameters further to achieve an accuracy of 97%."
              ghLink="https://github.com/AchyutPandey/Digit-Recognition-System"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

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

export default Projects;
