import React from "react";
import "./workcard.css";

const WorkCard = ({ cardLogo, cardTitle, cardBio }) => {
  return (
    <div className="work-card-main">
      <div className="card-header">
        {cardLogo}
        <div className="card-title">{cardTitle}</div>
      </div>
      <div className="card-bio">
       {cardBio}
      </div>
    </div>
  );
};

export default WorkCard;
