interface ButtonProps {
  texto: string;
  extraStyle?: string;
}

const ButtonStyled: React.FC<ButtonProps> = ({ texto, extraStyle }) => {
  return (
    <button className={`px-4 py-2 btn bg-black text-light ${extraStyle}`}>
      {texto}
    </button>
  );
};

// <style>
//   .btn {
//     background-color: black;
//     color: white;
//   }
// </style>

export default ButtonStyled;
