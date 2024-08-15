import React, { useEffect, useState } from "react";
import StepIndicator from "./StepIndicator";
import CheckoutThirdStep from "./CheckoutThirdStep";
import CheckoutFinalStep from "./CheckoutFinalStep";
import CheckoutFirstStep from "./CheckoutFirstStep";
import CheckoutSecondStep from "./CheckoutSecondStep";
import CheckoutDetails from "./CheckoutDetails";
import { FormData } from "../../types/FormData";
import { useUser } from "../UserContext";
import { postPurchase } from "../../api/shops";

const CheckoutForm: React.FC = () => {
  const { cart, user } = useUser();

  const [step, setStep] = useState(1);
  const [subtotal, setSubtotal] = useState(1);
  const [total, setTotal] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    // Inicializar con los datos que esperas de cada paso
    firstStepData: { email: "", postal_code: "" },
    secondStepData: { type_ship: "" },
    thirdStepData: {
      name: "",
      lastname: "",
      phone: "",
      street: "",
      number_street: "",
      department: "",
      neighborhood: "",
      city: "",
    },
    finalStepData: { type_payment: "" },
    subtotal: 0,
    total: 0,
    user_id: "",
  });

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const updateFormData = (stepName: string, data: object) => {
    setFormData((prevData) => ({
      ...prevData,
      [stepName]: data,
    }));
  };

  const handleSubmit = () => {
    const combinedData = {
      ...formData.firstStepData,
      ...formData.secondStepData,
      ...formData.thirdStepData,
      ...formData.finalStepData,
      items: cart.items,
      subtotal: subtotal,
      total: total,
      user_id: user?.id,
    };

    postPurchase(combinedData);
  };

  useEffect(() => {
    // Asegúrate de que cart y user estén definidos y no estén vacíos
    if (cart && cart.items && cart.items.length > 0 && user) {
      const items = cart.items;
      const calculatedSubtotal = items.reduce(
        (sum: number, item: any) => sum + item.price * item.quantity,
        0
      );
      setSubtotal(calculatedSubtotal);
      setTotal(calculatedSubtotal);
    }
  }, [cart, user, setFormData]); // Dependencias actualizadas

  return (
    <div className="w-75 d-flex flex-column align-items-center border">
      <div className="w-75">
        <StepIndicator step={step} />
        {step === 1 && (
          <CheckoutFirstStep
            nextStep={nextStep}
            updateFormData={(data: object) =>
              updateFormData("firstStepData", data)
            }
          />
        )}
        {step === 2 && (
          <CheckoutSecondStep
            prevStep={prevStep}
            nextStep={nextStep}
            updateFormData={(data: object) =>
              updateFormData("secondStepData", data)
            }
          />
        )}
        {step === 3 && (
          <CheckoutThirdStep
            prevStep={prevStep}
            nextStep={nextStep}
            updateFormData={(data: object) =>
              updateFormData("thirdStepData", data)
            }
          />
        )}
        {step === 4 && (
          <CheckoutFinalStep
            prevStep={prevStep}
            nextStep={nextStep}
            updateFormData={(data: object) =>
              updateFormData("finalStepData", data)
            }
          />
        )}
        {step === 5 && (
          <CheckoutDetails
            formData={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
