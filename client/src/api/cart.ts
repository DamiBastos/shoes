import Swal from 'sweetalert2';

export const addItemToCart = async (productId: number,userId: number | undefined) => {    
  const response = await fetch('http://localhost:3000/cart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId,userId }),
  });

  if (!response.ok) {
    throw new Error('Error al agregar el producto al carrito');
  }

  const data = await response.json();

  
  return data;
};

export const emptyCart = async (userId: number | undefined) => {
  try {
    const response = await fetch('http://localhost:3000/cart/empty', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });

    if (!response.ok) {
      throw new Error('Error al vaciar el carrito');
    }

    const data = await response.json();  

    // SweetAlert para éxito
    Swal.fire({
      title: '¡Éxito!',
      text: 'El carrito ha sido vaciado correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload(); // Recarga la página
        // O redirige a una ruta específica
        // window.location.href = "/ruta-especifica";
        // history.push("/ruta-especifica"); // Si estás utilizando React Router
      }
    });

    return data;

    
  } catch (error: any) {
    // SweetAlert para error
    Swal.fire({
      title: 'Error',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });

    throw error;
  }
};
