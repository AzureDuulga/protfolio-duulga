import React from "react";
import styles from "./style.module.scss";
import { Laptop } from "react-bootstrap-icons";
import EducationCard from "./educationCard";

const Education = () => {
  return (
    <div id="Education" className={styles.Education}>
      <h2>
        <Laptop />
        My Education
      </h2>
      <p>
        Education Is Not The Learning Of Facts, But The Training Of The Mind To
        Think.
      </p>
      <EducationCard />
    </div>
  );
};

export default Education;
