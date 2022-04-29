import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./FormLogin.css";

const inputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    label: "Tên cửa hàng*",
    placeholder: "Nhập tên cửa hàng",
    request: "Ban chưa nhập tên cửa hàng",
  },
  {
    id: 2,
    name: "sdt",
    type: "text",
    label: "Số điện thoại*",
    placeholder: "Nhập số điện thoại",
    request: "Ban chưa nhập số điện thoại",
  },
  {
    id: 3,
    name: "pass",
    type: "password",
    label: "Mật khẩu*",
    placeholder: "Nhập mật khẩu",
    request: "Mật khẩu phải có ít nhất 8 kí tự.",
  },
  {
    id: 4,
    name: "repass",
    type: "password",
    label: "Xác nhận mật khẩu",
    placeholder: "Xác nhận lại mật khẩu",
    request: "Mật khẩu không trùng khớp",
  },
];

function FormLogin({ handleClick, handleAppChange, details, isClickBTN }) {
  // const [register] = useForm();

  const handleClickChild = () => {
    const name = "Đăng kí";
    handleClick(name);
  };

  // const handleFormChange = (name, data) => {
  //   handleAppChange(name, data);
  // };
  const handleFormChange = (name, data) => {
    handleAppChange(name, data);
  };
  return (
    <div className="formlogin">
      <div className="section__form">
        <div className="header">
          <div className="header__logo">
            <img src="Content.png" alt="logo" />
            <span className="header__text">Untitled UI</span>
          </div>
        </div>

        <form className="content">
          <h1 className="content__header"> Đăng ký cửa hàng </h1>

          {inputs.map((input) => (
            <Input
              key={input.id}
              id={input.id}
              name={input.name}
              type={input.type}
              label={input.label}
              placeholder={input.placeholder}
              request={input.request}
              handleFormChange={handleFormChange}
              isClickBTN={isClickBTN}
              details={details} // truyền vào để xử lý việc có hiển thị request hay k
            />
          ))}

          <Button
            className="btnform"
            name="Đăng ký"
            handleClickChild={handleClickChild}
          />
          <p className="question">
            Bạn đã có cửa hàng chưa?
            <a href="#"> Đăng nhập </a>
          </p>
        </form>

        <div className="footer">
          <span className="footer__text">© Esy 2022</span>
          <span className="footer__mail">
            <img src="./Icon.png" alt="email" />
            help@esy.com
          </span>
        </div>
      </div>
      {/* het section form */}

      <div className="section__img">
        <div className="img_ip12">
          <img src="iPhone 12.png" alt="anh thay the"></img>
        </div>
      </div>

      {/* het section img */}
    </div>
  );
}

export default FormLogin;
