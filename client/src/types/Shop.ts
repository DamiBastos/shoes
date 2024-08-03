export interface Shop {
  id:string;
  email:string,
  postal_code: string,
  type_ship:string,
  name: string,
  lastname: string,
  phone: string,
  street: string,
  number_street: number,
  department: string,
  neighborhood: string,
  city: string,
  type_payment: string,
  state_purchase: string,
  items:number,
  total:number,
  subtotal:number,
  user_id:string | undefined,
  createdAt: string;
  updatedAt: string;
}