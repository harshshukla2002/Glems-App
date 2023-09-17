import React, { useState } from "react";
import loginImage from "../images/Web Security.gif";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { MdEmail, MdPassword } from "react-icons/md";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";
import "../css/Account.css";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoGoogle } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

const InitialLogin = {
  email: "",
  password: "",
};

const Account = () => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [login, setLogin] = useState(InitialLogin);
  const [show, setShow] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const HandleChange = (e) => {
    setEmail(false);
    setPassword(false);
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const Message = (type, message) => {
    messageApi.open({
      type: type,
      content: message,
    });
  };

  const SearchUser = async () => {
    try {
      const res = await axios.get(
        "https://dull-erin-buffalo-vest.cyclic.cloud/user"
      );
      const data = res.data;
      let find = false;

      data.forEach((item) => {
        if (item.email === login.email && item.password === login.password) {
          find = true;
          localStorage.setItem("auth", true);
          localStorage.setItem("user", JSON.stringify(item));
        }
      });

      if (find) {
        Message("success", "Login Success");
        setLogin(InitialLogin);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        Message("error", "Something went wrong please check credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HandleSubmit = () => {
    if (login.email === "") setEmail(true);
    else if (login.password === "") setPassword(true);
    else SearchUser();
  };

  return (
    <>
      {contextHolder}
      <div>
        <div className="login-div w-4/5 m-auto bg-blue-400 flex gap-10 p-5 my-10 rounded-lg">
          <div>
            <img src={loginImage} alt="login" />
          </div>
          <div className="bg-white rounded-lg p-3">
            <h1 className="text-center text-2xl m-3 font-semibold">
              Login to your account
            </h1>
            <p className="w-3/4 m-auto text-center text-teal-600">
              Get started with our app, just create an account and enjoy the
              experience
            </p>
            <div className="w-4/5 m-auto my-10">
              <div className="m-5">
                <p className="text-teal-700 text-xl ">Email</p>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <MdEmail />
                  </InputLeftElement>
                  <Input
                    type="email"
                    placeholder="name@mail.com"
                    name="email"
                    value={login.email}
                    onChange={HandleChange}
                  />
                </InputGroup>
                {email && (
                  <p className="text-red-900 ml-2">Email is required</p>
                )}
              </div>
              <div className="m-5">
                <p className="text-teal-700 text-xl">Password</p>
                <InputGroup mt={"10px"}>
                  <InputLeftElement pointerEvents="none">
                    <MdPassword />
                  </InputLeftElement>
                  <Input
                    type={show ? "text" : "password"}
                    name="password"
                    value={login.password}
                    onChange={HandleChange}
                  />
                  <InputRightElement>
                    <Button variant={"none"} onClick={() => setShow(!show)}>
                      {show ? <LuEyeOff /> : <LuEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {password && (
                  <p className="text-red-900 ml-2">Password is required</p>
                )}
              </div>
              <button
                className="hvr-sweep-to-right flex gap-1 items-center justify-items-center m-auto my-3 bg-slate-300 p-2 rounded"
                onClick={HandleSubmit}
              >
                Login <FiArrowRight size={"20px"} />
              </button>
            </div>
            <div class="separator">
              <hr class="line" />
              <span>Or</span>
              <hr class="line" />
            </div>
            <div className="flex items-center justify-center m-3 gap-4 cursor-pointer">
              <FaFacebookF size={"25px"} className="hvr-grow" />
              <BiLogoGoogle size={"30px"} className="hvr-grow" />
              <AiFillGithub size={"30px"} className="hvr-grow" />
            </div>
            <div className="m-4">
              <p className="text-center">
                Don't have account?{" "}
                <a className="text-blue-800 underline mx-1" href="/signup">
                  Signup
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
