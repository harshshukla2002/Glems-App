import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Jwelery from "../pages/Jwelery";
import Watches from "../pages/Watches";
import ContactUs from "../pages/ContactUs";
import Account from "../pages/Account";
import Signup from "../pages/Signup";
import Bag from "../pages/Bag";
import JwellerySinglePage from "./JwellerySinglePage";
import WatchesSinglepage from "./WatchesSinglepage";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";
import PaymentDone from "../pages/PaymentDone";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/jwelery" element={<Jwelery />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/jwelery/:id" element={<JwellerySinglePage />} />
        <Route path="/watches/:id" element={<WatchesSinglepage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-done" element={<PaymentDone />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
