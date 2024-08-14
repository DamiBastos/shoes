export interface Shop {
  id:string;
  email:string,
  postal_code: string,
  state_ship:string,
  name: string,
  lastname: string,
  phone: string,
  street: string,
  number_street: number,
  department: string,
  neighborhood: string,
  city: string,
  state_payment: string,
  items:number,
  total:number,
  subtotal:number,
  user_id:string | undefined,
  createdAt: string;
  updatedAt: string;
}