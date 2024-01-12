import React from "react";
import tutorialData from "../tutorialData.json";
import Indicator from "./Indicator.tsx";

interface CardProps {
  title: string;
  description: string;
  bgColor: string;
  image: string;
  addStep: () => void;
  substractStep: () => void;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  numOfSteps: number;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  bgColor,
  image,
  addStep,
  substractStep,
  step,
  setStep,
  numOfSteps,
}) => {
  const prevIsShown: boolean = step > 0 ? true : false;
  const nextIsShown: boolean = step < numOfSteps - 1 ? true : false;

  const indicators = tutorialData.map((tutorial, index) => {
    const handleClickChange = () => {
      setStep((prev) => (prev = index));
    };
    return (
      <Indicator
        key={tutorial.title}
        index={index}
        currentStep={step}
        numOfSteps={tutorialData.length}
        onClick={handleClickChange}
      />
    );
  });

  return (
    <div className="card w-64 bg-base-100 shadow-xl mx-auto my-24 ">
      <figure className={`h-80`} style={{ backgroundColor: `${bgColor}` }}>
        <img className="p-6" src={image} alt="card-img" />
      </figure>
      <div className="card-body p-[20px] bg-white rounded-b-xl">
        <h2 className="card-title text-base font-bold">{title}</h2>
        <p className="text-xs text-gray-500">{description}</p>
        <div className="card-actions  my-3">
          <div className="flex flex-row my-auto me-auto">{indicators}</div>
          {prevIsShown && (
            <button className="w-10" onClick={substractStep}>
              <img src="/public/img/row-button-prev.svg" alt="button next" />
            </button>
          )}
          {nextIsShown && (
            <button className="w-10" onClick={addStep}>
              <img src="/public/img/row-button-next.svg" alt="button next" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
