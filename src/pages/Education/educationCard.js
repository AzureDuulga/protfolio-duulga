import React from "react";
import { cardData } from "./cardData.js";
import style from "./style.module.scss";
import Button from "react-bootstrap/Button";

const EducationCard = () => {
  return (
    <>
      {cardData.map((cardData) => {
        return (
          <div className={style.cardBorder}>
            <img src={cardData.img} alt="eduImg" />
            <div className={style.eduText}>
              <h3>
                {cardData.major} at {cardData.school}
              </h3>
              <h5>
                {cardData.startdate}-{cardData.enddate}
              </h5>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EducationCard;
