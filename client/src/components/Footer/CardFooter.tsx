import React from 'react';
import "./CardFooter.css"

interface CardFooterProps {
  principal: string;
  secondary: string;
  icon: string;
}

const CardFooter: React.FC<CardFooterProps> = ({icon, principal, secondary}) => {
  return (
<div
  className="d-flex flex-column align-items-center justify-content-center text-center"
>
  <div className="d-flex align-items-center justify-content-center">
    <i className={icon}></i>
    <h2 className="text-center">{principal}</h2>
  </div>

  <h5>{secondary}</h5>
</div>
  );}

export default CardFooter;