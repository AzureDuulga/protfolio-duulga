import React from "react";
import Col from "react-bootstrap/Col";
import Styles from "./style.module.scss";
import { skillsData } from "./skillsdata";

const SkillSingle = () => {
  return (
    <>
      {skillsData.map((skillsData) => {
        return (
          <Col xs={2} className={Styles.colBg}>
            <img
              className={Styles.img}
              src={skillsData.icon}
              alt={skillsData.name}
            />
            <p>{skillsData.name}</p>
          </Col>
        );
      })}
    </>
  );
};

export default SkillSingle;
