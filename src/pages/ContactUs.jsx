import React, { useState } from "react";
import { useWindow } from "../customHooks/BrowserWindow";
import gleamsLogo from "../images/Gleams-Logo.png";
import "../css/ContactUs.css";
import { Button } from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { notification } from "antd";

const initialObj = {
  name: "",
  email: "",
  description: "",
};

const ContactUs = () => {
  const { width } = useWindow();
  const [form, setForm] = useState(initialObj);
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [description, setDescription] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Message sended! we will get back to you soon.",
    });
  };

  const HandleChange = (e) => {
    setName(false);
    setEmail(false);
    setDescription(false);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const HandleSubmit = () => {
    if (form.name === "") setName(true);
    else if (form.email === "") setEmail(true);
    else if (form.description === "") setDescription(true);
    else {
      openNotificationWithIcon("success");
      setForm(initialObj);
    }
  };

  return (
    <>
      {contextHolder}
      <div className="flex flex-row justify-between gap-5 p-10 w-11/12 m-auto items-center about-div">
        <div>
          <div>
            <h1 className="text-xl font-bold">About</h1>
            <p>Gleams is More Than Just Gliding</p>
          </div>
          <div className="my-20 text-lg">
            <p className={width < 1000 ? "my-10 w-full" : "my-10 w-11/12 pb-1"}>
              Our Company is an exclusive supplier of jwelery from the world
              best brands. We take pride in offering our customers only the
              highest quality product created from precious metals and stones by
              the most experienced master jwelers.
            </p>
            <p className={width < 1000 ? "my-10 w-full" : "my-10 w-11/12 pb-1"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, doloremque totam consequatur odit minima et sunt
              tempore veniam temporibus officiis dolorum tempora quia quod
              distinctio corporis velit a, commodi dicta!
            </p>
          </div>
          <p className="cursor-pointer hover:underline uppercase tracking-widest">
            Our Stores
          </p>
        </div>
        <img width={"50%"} src={gleamsLogo} alt="gleamsLogo" />
      </div>
      <div className="contact-wrapper">
        <div>
          <h1 className="p-1 border-b-4 border-green-500 text-2xl font-semibold text-left">
            Get In Touch
          </h1>
          <div className="flex gap-3 items-center">
            <IoLocationOutline size={"30px"} />
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="flex gap-3 items-center">
            <BsTelephone size={"30px"} />
            <p>+91 1234567890</p>
          </div>
          <div className="flex gap-3 items-center">
            <FiMail size={"30px"} />
            <p>gleams@mail.com</p>
          </div>
        </div>
        <div className="contact-form">
          <div>
            <p>Name</p>
            <input
              type="text"
              placeholder="enter name"
              name="name"
              value={form.name}
              onChange={HandleChange}
            />
            {name && <p className="text-red-900 ml-2">name is required</p>}
          </div>
          <div>
            <p>Email</p>
            <input
              type="text"
              placeholder="name@email.com"
              name="email"
              value={form.email}
              onChange={HandleChange}
            />
            {email && <p className="text-red-900 ml-2">email is required</p>}
          </div>
          <div>
            <p>How can i help you?</p>
            <textarea
              placeholder="enter description...."
              name="description"
              value={form.description}
              onChange={HandleChange}
            />
            {description && (
              <p className="text-red-900 ml-2">description is required</p>
            )}
          </div>
          <div>
            <Button
              display={"flex"}
              gap={"5px"}
              variant={"none"}
              onClick={HandleSubmit}
            >
              Send
              <AiOutlineSend />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
