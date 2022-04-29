import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import FormLogin from "./Containers/FormLogin/FormLogin";
import OTPRequest from "./Containers/OTPResquest/OTPRequest";

function App() {
  const [isClickBTN, setIsClickBTN] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [details, setDetails] = useState({
    name: "",
    sdt: "",
    pass: "",
    repass: "",
    otp: "",
  });

  const checkForm = () => {
    if (
      details.name !== "" &&
      details.sdt !== "" &&
      details.pass.length >= 8 &&
      details.repass === details.pass
    ) {
      setIsSignup(!isSignup);
      return true;
    }
    return false;
  };

  const checkOTP = () => {
    if (details.otp !== "") {
      console.log("Thong tin cua hang: ", details);
      setIsSignup(!isSignup);
      details.name = "";
      details.sdt = "";
      details.pass = "";
      details.repass = "";
      details.otp = "";
    } else {
      console.log("Chua dien du thong tin otp");
    }
  };

  const handleClick = (name) => {
    if (name === "Đăng kí") {
      if (checkForm() === false) {
        setIsClickBTN(true);
      } else setIsClickBTN(false);
    } else {
      setIsClickBTN(false);
      checkOTP();
    }
  };

  const handleAppChange = (names, data) => {
    details[names] = data;
    setDetails({...details});
    setIsClickBTN(false);
  };

  return (
    <div className="App">
      {isSignup && (
        <FormLogin
          handleClick={handleClick}
          handleAppChange={handleAppChange}
          isSignup={isSignup}
          isClickBTN={isClickBTN}
          details={details}
        />
      )}
      {!isSignup && (
        <OTPRequest
          handleClick={handleClick}
          handleAppChange={handleAppChange}
          isSignup={isSignup}
          isClickBTN={isClickBTN}
          details={details}
        />
      )}
    </div>
  );
}

export default App;
