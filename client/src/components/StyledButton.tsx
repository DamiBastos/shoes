import React from 'react';
import './ButtonStyled.css'; // Asegúrate de importar el archivo CSS

interface ButtonProps {
  texto: string;
  extraStyle?: string;

}

const ButtonStyled: React.FC<ButtonProps> = ({ texto, extraStyle }) => {
  return (
    <button className={`clickStyle px-4 py-2 btn bg-black text-light ${extraStyle}`}>
      {texto}
    </button>
  );
};


export default ButtonStyled;
