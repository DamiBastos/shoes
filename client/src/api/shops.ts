import { link } from ".";
import { Shop } from "../types/Shop";
import Swal from 'sweetalert2';


export const userListShop = async (id: string | undefined): Promise<Shop[]> => {
    try {
      const response = await fetch(`${link}/purchase/user/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      
      return data; 
    } catch (error) {
      console.error("Error fetching shoes:", error);
      return [];
    }
  };

  export const listShops = async () => {
    try {
      const response = await fetch(`${link}/purchase`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();      
      return data.body.purchase; 
    } catch (error) {
      console.error("Error fetching shops:", error);
      return [];
    }
  };

  export const postPurchase = async (body: any) => {
    try {
      const response = await fetch(`${link}/purchase/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Mostrar alerta de éxito con opciones de redirección
      Swal.fire({
        icon: 'success',
        title: 'Compra realizada',
        text: 'Tu compra se ha realizado con éxito.',
        showCancelButton: true,
        confirmButtonText: 'Ir al inicio',
        cancelButtonText: 'Ver compras',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/';
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          window.location.href = '/compras';
        }
      });
  
      return data; // Devuelve la respuesta completa si es necesario
    } catch (error) {
      console.error("Error al realizar la compra:", error);
  
      // Mostrar alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al realizar la compra. Por favor, inténtalo de nuevo más tarde.',
        confirmButtonText: 'OK'
      });
  
      throw error; // Propaga el error para que pueda ser manejado por el llamador
    }
  };