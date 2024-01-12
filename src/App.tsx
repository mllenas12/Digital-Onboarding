import React from "react";
import { useState } from "react";
import "/src/styles.css";
import Card from "./components/Card";

function App() {
  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description:
        "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: "primary",
      image: "public/img/time_managment.svg",
    },
    {
      title: "Programa projectes propis",
      description:
        "Més val 10 hores treballant projeces propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge",
      bgColor: "secondary",
      image: "public/img/programming.svg",
    },
    {
      title: "Procura descansar",
      description:
        "Descansar bé i desconectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: "success",
      image: "public/img/meditation.svg",
    },
  ];

  const [step, setStep] = useState(0);
  const currentData = tutorialData[step];

  function nextStep() {
    if (step < tutorialData.length - 1) {
      setStep((prevStep) => prevStep + 1);
    }
  }

  return (
    <div className="bg-base-100">
      <Card {...currentData} addStep={nextStep} />
    </div>
  );
}

export default App;
