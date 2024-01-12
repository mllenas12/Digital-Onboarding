import React from "react";
import styled from "styled-components";

interface IndicatorProps {
  index: number;
  currentStep: number;
  numOfSteps: number;
}

const StyledIndicator = styled.button<IndicatorProps>`
  background-color: ${(props) =>
    props.index == props.currentStep ? "black" : "#ebebeb"};
  height: ${(props) => (props.index == props.currentStep ? "3px" : "1px")};
  border-radius: 5px;
  margin: 2px 3px;
  cursor: pointer;
  padding: ${(props) => (props.index == props.currentStep ? "2px 6px" : "2px")};
`;

const Indicator: React.FC<IndicatorProps> = ({
  index,
  currentStep,
  numOfSteps,
}) => {
  return (
    <StyledIndicator
      index={index}
      currentStep={currentStep}
      numOfSteps={numOfSteps}
    />
  );
};

export default Indicator;
