import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./OTPRequest.css";

const OTPRequest = ({ handleClick, handleAppChange, details, isClickBTN }) => {
  const handleClickChild = () => {
    const name = "Xác nhận";
    handleClick(name);
  };

  // const handleFormChange = (id, data) => {
  //   handleAppChange(id, data);
  // };
  const handleFormChange = (name, data) => {
    handleAppChange(name, data);
  };

  return (
    <div className="otprequest">
      <span className="otprequest__logo">
        <img src="./Content.png" alt="Content Logo" />
      </span>
      <h1>Xác nhận mã OTP</h1>
      <p>
        Chúng tôi đã gửi mã OTP đến số điện thoại của bạn. Vui lòng kiểm tra
        điện thoại của bạn.
      </p>
      <Input
        id={5}
        name="otp"
        type="text"
        placeholder="Mã OTP"
        request="Chưa nhập đủ thông tin OTP"
        handleFormChange={handleFormChange}
        isClickBTN={isClickBTN}
        details={details}
      />

      <Button
        className="btnform"
        name="Xác nhận"
        handleClickChild={handleClickChild}
      />

      <p className="question">
        Chưa nhận được mã OTP?
        <a href="#"> Gửi lại </a>
      </p>
    </div>
  );
};

export default OTPRequest;
