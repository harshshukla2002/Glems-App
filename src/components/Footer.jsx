import React from "react";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { BsInstagram, BsPinterest } from "react-icons/bs";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <div>
      <footer className="flex justify-between gap-10 p-20 bg-zinc-800 text-white flex-wrap">
        <div>
          <h1 className="text-xl font-extrabold uppercase">
            <a href="/">Gleams</a>
          </h1>
          <div className="flex gap-4 mt-32 cursor-pointer">
            <FaFacebookF />
            <BsInstagram />
            <BsPinterest />
            <FaTelegramPlane />
          </div>
        </div>
        <div className="flex flex-col gap-5 font-light">
          <p className="hover:border-b-2 border-white cursor-pointer w-24">
            Contact Us
          </p>
          <p className="hover:border-b-2 border-white cursor-pointer w-14">
            Servise
          </p>
          <p className="hover:border-b-2 border-white cursor-pointer w-14">
            Return
          </p>
          <p className="hover:border-b-2 border-white cursor-pointer">
            Sterms of use
          </p>
          <p className="hover:border-b-2 border-white cursor-pointer">
            How to order?{" "}
          </p>
        </div>
        <div className="flex flex-col gap-5 font-light">
          <p className="hover:border-b-2 border-white cursor-pointer w-12">
            Rings
          </p>
          <p className="hover:border-b-2 border-white cursor-pointer w-20">
            Bracelets
          </p>
          <p className="hover:border-b-2 border-white cursor-pointer w-16">
            Earrings
          </p>
          <p className="hover:border-b-2 border-white cursor-pointer">
            Necklaces & Pendants
          </p>
          <p className="hover:border-b-2 border-white cursor-pointer w-16">
            Watches
          </p>
        </div>
        <div className="w-96 flex flex-col gap-10">
          <h1 className="text-xl font-bold">
            Discover the latest collections, news and exclusive launches
          </h1>
          <div className="flex justify-between gap-4 p-2 border-b-2 border-white">
            <input
              style={{ outline: "none" }}
              type="text"
              placeholder="enter your email adderess"
              className="bg-transparent border-none p-2"
            />
            <button>
              <HiMiniArrowLongRight size={"30px"} />
            </button>
          </div>
          <div className="flex justify-between">
            <p className="hover:border-b-2 border-white cursor-pointer w-24">
              Legal Notice
            </p>
            <p className="hover:border-b-2 border-white cursor-pointer w-28">
              Private Policy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
