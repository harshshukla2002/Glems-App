import { Button, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Checkout.css";

const InitialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  country: "",
  zipcode: "",
  mobile: "",
};

const Checkout = () => {
  const [addressform, setAddressform] = useState(InitialState);
  const [name, setName] = useState(false);
  const [address, setAddress] = useState(false);
  const [zipcode, setZipcode] = useState(false);
  const [city, setCity] = useState(false);
  const [state, setState] = useState(false);
  const [country, setCountry] = useState(false);
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();

  const HandleChange = (e) => {
    setName(false);
    setAddress(false);
    setCity(false);
    setCountry(false);
    setState(false);
    setZipcode(false);
    setMobile(false);
    const { name, value } = e.target;
    setAddressform({ ...addressform, [name]: value });
  };

  const HandleSubmit = () => {
    if (addressform.name === "") setName(true);
    else if (addressform.address === "") setAddress(true);
    else if (addressform.city === "") setCity(true);
    else if (addressform.state === "") setState(true);
    else if (addressform.country === "") setCountry(true);
    else if (addressform.zipcode === "") setZipcode(true);
    else if (addressform.mobile === "") setMobile(true);
    else {
      navigate("/payment");
    }
  };

  return (
    <>
      <div className="address-wrapper w-2/5 m-auto my-4 p-5">
        <div>
          <h1 className="text-center text-xl font-semibold border-b-2 border-slate-400">
            Enter Details
          </h1>
          <div className="m-2">
            <p>Name</p>
            <Input
              variant={"filled"}
              placeholder="enter name"
              name="name"
              value={addressform.name}
              onChange={HandleChange}
            />
            {name && <p className="text-red-500 mx-2"> name is required</p>}
          </div>
          <div className="m-2">
            <p>Address Line</p>
            <Input
              variant={"filled"}
              placeholder="enter address"
              name="address"
              value={addressform.address}
              onChange={HandleChange}
            />
            {address && (
              <p className="text-red-500 mx-2"> address is required</p>
            )}
          </div>
          <div className="m-2">
            <p>City</p>
            <Input
              variant={"filled"}
              placeholder="enter city"
              name="city"
              value={addressform.city}
              onChange={HandleChange}
            />
            {city && <p className="text-red-500 mx-2"> city is required</p>}
          </div>
          <div className="m-2">
            <p>State</p>
            <Input
              variant={"filled"}
              placeholder="enter state"
              name="state"
              value={addressform.state}
              onChange={HandleChange}
            />
            {state && <p className="text-red-500 mx-2"> state is required</p>}
          </div>
          <div className="m-2">
            <p>Country</p>
            <Select name="country" onChange={HandleChange}>
              <option value="India">India</option>
              <option value="america">America</option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
              <option value="Britain">Britain</option>
            </Select>
            {country && (
              <p className="text-red-500 mx-2"> country is required</p>
            )}
          </div>
          <div className="m-2">
            <p>Zip Code</p>
            <Input
              type="number"
              variant={"filled"}
              placeholder="enter zipcode"
              name="zipcode"
              value={addressform.zipcode}
              onChange={HandleChange}
            />
            {zipcode && (
              <p className="text-red-500 mx-2"> zipcode is required</p>
            )}
          </div>
          <div className="m-2">
            <p>Mobile</p>
            <Input
              type="number"
              variant={"filled"}
              placeholder="enter number"
              name="mobile"
              value={addressform.mobile}
              onChange={HandleChange}
            />
            {mobile && <p className="text-red-500 mx-2"> mobile is required</p>}
          </div>
          <div className="mt-5">
            <Button w={"100%"} colorScheme="green" onClick={HandleSubmit}>
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
