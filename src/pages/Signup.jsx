import React, { useState } from "react";
import signupImage from "../images/Sign Up form.gif";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FiArrowRight } from "react-icons/fi";
import "../css/Account.css";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InitialSignup = {
  name: "",
  username: "",
  email: "",
  password: "",
  mobile: "",
};

const Signup = () => {
  const [email, setEmail] = useState(false);
  const [name, setName] = useState(false);
  const [username, setUserName] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [password, setPassword] = useState(false);
  const [signup, setSignup] = useState(InitialSignup);
  const [show, setShow] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const HandleChange = (e) => {
    setEmail(false);
    setPassword(false);
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  const Message = (type, message) => {
    messageApi.open({
      type: type,
      content: message,
    });
  };

  const PostUser = async () => {
    try {
      axios
        .post("https://red-dull-salamander.cyclic.app/user", signup)
        .then(() => {
          Message("success", "Signup Successfull, please login now");
          setSignup(InitialSignup);
          setTimeout(() => {
            navigate("/account");
          }, 2000);
        })
        .catch((err) => {
          Message("error", "something went wrong check console");
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const HandleSubmit = () => {
    if (signup.name === "") setName(true);
    else if (signup.username === "") setUserName(true);
    else if (signup.email === "") setEmail(true);
    else if (signup.password === "") setPassword(true);
    else if (signup.mobile === "") setMobile(true);
    else PostUser();
  };

  return (
    <>
      {contextHolder}
      <div>
        <div className="login-div w-4/5 m-auto bg-blue-400 flex gap-10 p-5 my-10 rounded-lg">
          <div>
            <img src={signupImage} alt="login" />
          </div>
          <div className="bg-white rounded-lg p-3">
            <h1 className="text-center text-2xl m-3 font-semibold">Signup</h1>
            <p className="w-3/4 m-auto text-center text-teal-600">
              Get started with our app, just create an account and enjoy the
              experience
            </p>
            <div className="w-4/5 m-auto my-10">
              <div className="m-5">
                <p className="text-teal-700 text-xl ">Name</p>
                <Input
                  type="text"
                  placeholder="enter name"
                  name="name"
                  value={signup.name}
                  onChange={HandleChange}
                />
                {name && <p className="text-red-900 ml-2">Name is required</p>}
              </div>
              <div className="m-5">
                <p className="text-teal-700 text-xl ">Username</p>
                <Input
                  type="text"
                  placeholder="enter unique username"
                  name="username"
                  value={signup.username}
                  onChange={HandleChange}
                />
                {username && (
                  <p className="text-red-900 ml-2">Username is required</p>
                )}
              </div>
              <div className="m-5">
                <p className="text-teal-700 text-xl ">Email</p>
                <Input
                  type="email"
                  placeholder="name@mail.com"
                  name="email"
                  value={signup.email}
                  onChange={HandleChange}
                />
                {email && (
                  <p className="text-red-900 ml-2">Email is required</p>
                )}
              </div>
              <div className="m-5">
                <p className="text-teal-700 text-xl">Password</p>
                <InputGroup mt={"10px"}>
                  <Input
                    type={show ? "text" : "password"}
                    name="password"
                    value={signup.password}
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
              <div className="m-5">
                <p className="text-teal-700 text-xl ">Mobile</p>
                <Input
                  type="number"
                  placeholder="enter your mobile number"
                  name="mobile"
                  value={signup.mobile}
                  onChange={HandleChange}
                />
                {mobile && (
                  <p className="text-red-900 ml-2">Mobile is required</p>
                )}
              </div>
              <button
                className="hvr-sweep-to-right flex gap-1 items-center justify-items-center m-auto my-3 bg-slate-300 p-2 rounded"
                onClick={HandleSubmit}
              >
                SignUp <FiArrowRight size={"20px"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
