import React from "react";

interface CardProps {
  title: string;
  description: string;
  bgColor: string;
  image: string;
  addStep: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, addStep }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn btn-neutral" onClick={addStep}>
        Next Step
      </button>
    </div>
  );
};

export default Card;
