import React, { useEffect, useState } from "react";
import payment from "../images/Online payment.gif";
import { Result } from "antd";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PaymentDone = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <img w="90%" m="auto" src={payment} alt="" />
        ) : (
          <>
            <Result
              status="success"
              title="Successfully Purchased"
              subTitle="Your Order number: 2017182818828182881. Product will dispatched in 2-3 days and in next 10 days it will arrive at your door step"
              extra={[
                <Button onClick={() => navigate("/")}>Go To Home</Button>,
              ]}
            />
          </>
        )}
      </div>
    </>
  );
};

export default PaymentDone;
