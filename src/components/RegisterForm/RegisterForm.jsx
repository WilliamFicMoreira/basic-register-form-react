import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DeliveryData from "./DeliveryData";
import PersonalData from "./PersonalData";
import UserData from "./UserData";

function RegisterForm({ onFormSubmit }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [colectedData, setData] = useState({});
  useEffect(() => {
    if (currentStep === forms.length - 1) {
      onFormSubmit(colectedData);
    }
  });

  const forms = [
    <UserData onFormSubmit={colectData} />,
    <PersonalData onFormSubmit={colectData} />,
    <DeliveryData onFormSubmit={colectData} />,
    <Typography variant="h5"> Obrigado por se cadastrar. </Typography>,
  ];

  function colectData(data) {
    setData({ ...colectedData, ...data });
    // console.log(colectedData);
    nextStep();
  }

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  return (
    <>
      <Stepper activeStep={currentStep}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados Pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados de Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalizacao</StepLabel>
        </Step>
      </Stepper>
      {forms[currentStep]}
    </>
  );
}

export default RegisterForm;
