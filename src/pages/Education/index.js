import React from "react";
import styles from "./style.module.scss";
import { Laptop } from "react-bootstrap-icons";
import EducationCard from "./educationCard";
import Container from "react-bootstrap/Container";

const Education = () => {
  return (
    <div id="Education" className={styles.Container}>
      <Container className={styles.edu}>
        <h1>
          <Laptop />
          My Education
        </h1>
        <p>
          Education Is Not The Learning Of Facts, But The Training Of The Mind
          To Think.
        </p>
        <EducationCard />
      </Container>
    </div>
  );
};

export default Education;
