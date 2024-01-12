import React from "react";

interface CardProps {
  title: string;
  description: string;
  bgColor: string;
  image: string;
  addStep: () => void;
  substractStep: () => void;
  step: number;
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
  numOfSteps,
}) => {
  const prevIsShown: boolean = step > 0 ? true : false;
  const nextIsShown: boolean = step < numOfSteps - 1 ? true : false;

  return (
    <div className="card w-64 bg-base-100 shadow-xl mx-auto my-24">
      <figure className={`bg-${bgColor} h-80`}>
        <img className="p-6" src={image} alt="card-img" />
      </figure>
      <div className="card-body p-[20px] bg-white rounded-b-xl">
        <h2 className="card-title text-base font-bold">{title}</h2>
        <p className="text-xs text-gray-500">{description}</p>
        <div className="card-actions justify-end">
          {prevIsShown && (
            <button className="w-10 py-4" onClick={substractStep}>
              <img src="/public/img/row-button-prev.svg" alt="button next" />
            </button>
          )}
          {nextIsShown && (
            <button className="w-10 py-4" onClick={addStep}>
              <img src="/public/img/row-button-next.svg" alt="button next" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
