import React from "react";
import styles from "./style.module.scss";
import { PersonFill } from "react-bootstrap-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="About" className={styles.Container}>
      <div className="text-center">
        <h1>
          <PersonFill />
          About ME
        </h1>
        <img
          className="rounded shadow-lg"
          src="https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBvcnRyYWl0fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=700&q=60"
          alt="AboutMe picture"
        />
      </div>
      <Container>
        <h2>I'm Duulga</h2>
        <h5>Full Stack Developer</h5>
        <p>
          I am a Full-Stack developer based in Pune, India. I am an Information
          Technology undergraduate from SPPU. I am very passionate about
          improving my coding skills & developing applications & websites. I
          build WebApps and Websites using MERN Stack. Working for myself to
          improve my skills. Love to build Full-Stack clones.
        </p>
        <Row>
          <Col>Age: 24</Col>
          <Col>
            <p>Email:</p>duulga16@gmail.com
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Phone: </p>+976 99261196
          </Col>
          <Col>
            <p>Place:</p>Ulaanbaatar, Mongolia
          </Col>
        </Row>
        <Button variant="primary">Resume ></Button>
      </Container>
    </div>
  );
};

export default About;
