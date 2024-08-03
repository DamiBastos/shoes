export interface FirstStepData {
    email?: string | null;
    postal_code?: string | null;
    // otros campos que puedas tener en este paso
  }
  
  export interface SecondStepData {
    type_ship?: string| null;
    // otros campos que puedas tener en este paso
  }
  
  export interface ThirdStepData {
    name?:string | null,
      lastname?:string | null,
      phone?:string | null,
      street?:string | null,
      number_street?:string | null,
      department?:string | null,
      neighborhood?:string | null,
      city?:string | null,
  }
  
  export  interface FinalStepData {
type_payment?:string | null    // otros campos que puedas tener en este paso
  }
  
  // Interface global que engloba los datos de todos los pasos
  export interface FormData {
    firstStepData: FirstStepData;
    secondStepData: SecondStepData;
    thirdStepData: ThirdStepData;
    finalStepData: FinalStepData;
    subtotal: number,
    total: number,
    user_id: string
  }
  