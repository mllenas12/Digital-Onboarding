// import React from "react";
import { useState } from "react";
import tutorialData from "./data.json";
import "/src/styles.css";
import Card from "./components/Card";

function App() {
  const [step, setStep] = useState(0);
  const currentData = tutorialData[step];

  function nextStep() {
    if (step < tutorialData.length - 1) {
      setStep((prev) => prev + 1);
    }
  }

  function prevStep() {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  }

  return (
    <div className="bg-base-100">
      <Card
        {...currentData}
        addStep={nextStep}
        substractStep={prevStep}
        step={step}
        numOfSteps={tutorialData.length}
      />
    </div>
  );
}

export default App;
