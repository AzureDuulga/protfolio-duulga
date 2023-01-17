import React from "react";
import style from "./style.module.scss";
import Container from "react-bootstrap/Container";
import { BriefcaseFill, Laptop } from "react-bootstrap-icons";

const Experience = () => {
  return (
    <div id="Experience" className={style.Container}>
      <Container>
        <h1>
          <BriefcaseFill /> Experience
        </h1>
      </Container>
    </div>
  );
};

export default Experience;
