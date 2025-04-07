import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-body d-flex justify-content-end">
          <ul className="footer-icons d-flex gap-3 list-unstyled mb-0">
            <li className="social-icons">
              <a
                href="https://github.com/AchyutPandey"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size={24} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/achyut-pandey-190b6724a/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={24} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
