import React, { Component } from "react";
import Styles from "./style.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SkillSingle from "./skill";
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
          <Row className={Styles.rowBg}>
            <SkillSingle />
          </Row>
        </Container>
      </div>
    );
  }
}
