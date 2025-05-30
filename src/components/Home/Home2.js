import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an Information Technology undergrad at <span className="purple"> IIIT Bhopal </span>.<br></br>
              I have a strong interest in problem-solving and a passion <br></br>
              for building <span className="purple"> machine learning projects. </span>
              <br></br>
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++ and Python. </b>
              </i>
              <br />
              And I love to build &nbsp;
              <i>
                <b className="purple">ML projects </b>
                {/* also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b> */}
              </i>
              <br />
              <br />
              {/* Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
          <Tilt>
  <img
    src={myImg}
    className="img-fluid"
    alt="avatar"
    style={{ 
      height: "200px", // Set equal height and width for a perfect circle
      width: "200px", 
      borderRadius: "50%",
      objectFit: "cover" ,// Ensures the image fills the circular frame nicely
      objectPosition: "center top"
    }}
  />
</Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><span className="purple">FIND ME </span> ON </h1>
            <p>
              {/* Feel free to connect with me <br></br><br></br> */}
              <br></br>
              <span className="purple">E MAIL </span>: achyut23pandey@gmail.com<br></br>
              <span className="purple">CONTACT NO.</span>: +91 8382929157
            </p><br></br>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AchyuytPandey"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://x.com/Achyut__Pandey"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/achyut-pandey-190b6724a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="mailto:achyut23pandey@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
