import React, { useState } from "react";
import StepIndicator from "./StepIndicator";
import CheckoutThirdStep from "./CheckoutThirdStep";
import CheckoutFinalStep from "./CheckoutFinalStep";
import CheckoutFirstStep from "./CheckoutFirstStep";
import CheckoutSecondStep from "./CheckoutSecondStep";
import CheckoutDetails from "./CheckoutDetails";

const CheckoutForm: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };
  return (
    <div className="w-75 d-flex flex-column align-items-center border">
      <h6>CHECKOUT FORM</h6>
      <div className="w-75">
        <StepIndicator step={step} />
        {step === 1 && <CheckoutFirstStep nextStep={nextStep} />}
        {step === 2 && (
          <CheckoutSecondStep prevStep={prevStep} nextStep={nextStep} />
        )}
        {step === 3 && (
          <CheckoutThirdStep prevStep={prevStep} nextStep={nextStep} />
        )}
        {step === 4 && (
          <CheckoutFinalStep prevStep={prevStep} nextStep={nextStep} />
        )}
        {step === 5 && <CheckoutDetails />}
      </div>
    </div>
  );
};

export default CheckoutForm;
