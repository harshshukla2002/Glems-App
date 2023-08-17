import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../css/Checkout.css";

const intialCardState = {
  name: "",
  card: "",
  expiry: "",
  cvv: "",
};

const Payment = () => {
  const [payment, setPayment] = useState("card");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [cardDetails, setCardDetails] = useState(intialCardState);
  const [name, setName] = useState(false);
  const [card, setCard] = useState(false);
  const [expiry, setExpiry] = useState(false);
  const [cvv, setCvv] = useState(false);
  const [number, setNumber] = useState(false);
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const HandleCardChange = (e) => {
    setName(false);
    setCard(false);
    setExpiry(false);
    setCvv(false);

    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const HandleCardSubmit = () => {
    if (cardDetails.name === "") setName(true);
    else if (cardDetails.card === "") setCard(true);
    else if (cardDetails.expiry === "") setExpiry(true);
    else if (cardDetails.cvv === "") setCvv(true);
    else onOpen();
  };

  const HandleMobileSubmit = () => {
    if (mobile === "") setNumber(true);
    else onOpen();
  };

  return (
    <>
      <div className="payment-div w-2/5 m-auto">
        <div className="flex items-center justify-center">
          <p
            className="bg-gray-200 m-4 cursor-pointer p-2 rounded-lg text-xl "
            onClick={() => setPayment("card")}
          >
            Card
          </p>
          <p
            className="bg-gray-200 m-4 cursor-pointer p-2 rounded-lg text-xl "
            onClick={() => setPayment("upi")}
          >
            Upi
          </p>
        </div>
        <div className="m-3">
          {payment === "card" ? (
            <>
              <div>
                <div className="m-2">
                  <p>Name</p>
                  <Input
                    variant={"filled"}
                    placeholder="enter name"
                    name="name"
                    value={cardDetails.name}
                    onChange={HandleCardChange}
                  />
                  {name && (
                    <p className="text-red-500 mx-2"> name is required</p>
                  )}
                </div>
                <div className="m-2">
                  <p>Card Number</p>
                  <Input
                    variant={"filled"}
                    placeholder="0000 0000 0000 0000"
                    name="card"
                    value={cardDetails.card}
                    onChange={HandleCardChange}
                  />
                  {card && (
                    <p className="text-red-500 mx-2"> card is required</p>
                  )}
                </div>
                <div className="m-2">
                  <p>Expiry Date & cvv</p>
                  <div className="flex gap-4">
                    <Input
                      variant={"filled"}
                      placeholder="01/23"
                      name="expiry"
                      value={cardDetails.expiry}
                      onChange={HandleCardChange}
                    />
                    {expiry && (
                      <p className="text-red-500 mx-2"> expiry is required</p>
                    )}

                    <Input
                      variant={"filled"}
                      placeholder="***"
                      name="cvv"
                      value={cardDetails.cvv}
                      onChange={HandleCardChange}
                    />
                    {cvv && (
                      <p className="text-red-500 mx-2"> cvv is required</p>
                    )}
                  </div>
                </div>
                <Button
                  colorScheme="green"
                  w="100%"
                  m="10px"
                  onClick={HandleCardSubmit}
                >
                  Pay
                </Button>
              </div>
            </>
          ) : (
            <>
              <div>
                <div className="m-2">
                  <p>Number</p>
                  <Input
                    variant={"filled"}
                    type="number"
                    placeholder="enter mobile number"
                    onChange={(e) => {
                      setNumber(false);
                      setMobile(e.target.value);
                    }}
                  />
                  {number && (
                    <p className="text-red-500 mx-2"> number is required</p>
                  )}
                </div>
                <Button
                  colorScheme="green"
                  w="100%"
                  m="10px"
                  onClick={HandleMobileSubmit}
                >
                  Pay
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Enter OTP
            </AlertDialogHeader>

            <AlertDialogBody>
              <HStack>
                <PinInput mask>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="green"
                ml={3}
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    navigate("/payment-done");
                  }, 2000);
                }}
              >
                {loading ? <Spinner /> : "Done"}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Payment;
