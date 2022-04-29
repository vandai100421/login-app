import React, { useEffect, useState } from "react";
import "./Input.css";

const Input = ({
  id,
  name,
  type,
  label,
  placeholder,
  request,
  handleFormChange,
  details,
  isClickBTN,
}) => {
  // const [isChange, setIsChange] = useState(false);
  const [values, setValues] = useState("");

  const changetext = (e) => {
    const data = e.target.value;
    handleFormChange(name, data);
    // setIsChange(true);
    setValues(data);
  };
  // const changetext = (e) => {
  //   const data = e.target.value;
  //   handleFormChange(id, data);
  //   // setIsChange(true);
  //   setValues(data)
  // };

  useEffect(() => {
    // console.log("thay doi");
    console.log("hien thi lai noi dung nay", name);
  }, [values]);
  // console.log(values, name);

  // const checkForm = (id) => {
  //   let check = true;
  //   if (isClickBTN === true) {
  //     if (id === 1 && details.name === "") check = false;
  //     else if (id === 2 && details.sdt === "") check = false;
  //     else if (id === 3 && details.pass.length < 8) check = false;
  //     else if (id === 4 && details.repass !== details.pass) check = false;
  //     else if (id === 5 && details.otp === "") check = false;
  //   }
  //   return check;
  // };
  const checkForm = (name) => {
    let check = true;
    if (isClickBTN === true) {
      if (name === "pass" && details.pass.length < 8) check = false;
      if (name === "repass" && details.repass !== details.pass) check = false;
      if (details[name] === "") check = false;
    }
    return check;
  };

  // otp
  return (
    <div className="inputform">
      <label> {label} </label>
      <br />
      <input
        className="input-normal"
        type={type}
        placeholder={placeholder}
        onChange={changetext}
        names={name}
        values={values}
      />
      {checkForm(name) === false && (
        <span className=" request-normal request-highlight">{request}</span>
      )}
    </div>
  );
};

export default Input;
