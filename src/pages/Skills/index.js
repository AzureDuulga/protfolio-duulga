import React, { Component } from "react";
import Styles from "./style.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Laptop } from "react-bootstrap-icons";

export default class Skills extends Component {
  render() {
    return (
      <div id="Skills" className={Styles.Container}>
        <div className="text-center text-white">
          <Laptop />
          Skills & Abilities
        </div>
        <Container>
          <Row>
            <Col>1 of 1</Col>
            <Col>1 of 1</Col>
            <Col>1 of 1</Col>
            <Col>1 of 1</Col>
            <Col>1 of 1</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
