import React from "react";
import "./Button.css";
const Button = ({ handleClickChild, name }) => {
  const clickedButton = (e) => {
    e.preventDefault();// không reload lại trang
    handleClickChild();
  };

  return (
    <div className="btnform">
      <button onClick={clickedButton}> {name} </button>
    </div>
  );
};

export default Button;
