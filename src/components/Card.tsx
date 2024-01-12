import React from "react";

interface CardProps {
  title: string;
  description: string;
  bgColor: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
