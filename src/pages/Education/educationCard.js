import React from "react";
import { cardData } from "./cardData.js";

const EducationCard = () => {
  return (
    <>
      {cardData.map(() => {
        return (
          <div>
            <img src={cardData.img} alt="eduImg" />
            <h3>
              {cardData.major} of {cardData.school}
            </h3>
            <p>
              {cardData.startdate}-{cardData.enddata}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default EducationCard;
