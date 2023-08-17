import React from "react";
import "../css/Navbar.css";
import { useWindow } from "../customHooks/BrowserWindow";
import { BsBag } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const { width } = useWindow();
  const navigate = useNavigate();
  const auth = localStorage.getItem("auth") || false;
  const user = JSON.parse(localStorage.getItem("user")) || {};

  console.log(auth, user);

  const Logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div
      className="flex justify-between px-10 items-center navbar-div"
      style={{
        background: "white",
        color: "black",
      }}
    >
      {width < 800 ? (
        <div
          className="flex justify-between w-full m-auto p-3 items-center"
          style={{
            background: "white",
            color: "black",
          }}
        >
          <Menu>
            <MenuButton>
              <RxHamburgerMenu />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => navigate("/jwelery")}>
                <p className="m-5 hvr-grow">Jwellery</p>
              </MenuItem>
              <MenuItem onClick={() => navigate("/watches")}>
                <p className="m-5 hvr-grow">Watches</p>
              </MenuItem>
              <MenuItem>
                <p className="m-5 hvr-grow">Gift</p>
              </MenuItem>
              <MenuItem onClick={() => navigate("/contact")}>
                <p className="m-5 hvr-grow">Contact Us</p>
              </MenuItem>
              {auth ? (
                <Accordion allowMultiple>
                  <AccordionItem>
                    <AccordionButton>
                      {user.email} <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Box
                        display="flex"
                        gap={"5px"}
                        alignItems={"center"}
                        onClick={Logout}
                      >
                        Logout <MdOutlineLogout />
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              ) : (
                <MenuItem onClick={() => navigate("/account")}>
                  <p className="m-5 hvr-grow">Account</p>
                </MenuItem>
              )}
            </MenuList>
          </Menu>
          <h1 className="gleams-logo">
            <a href="/">Gleams</a>
          </h1>
          <BsBag size={"30px"} onClick={() => navigate("/bag")} />
        </div>
      ) : (
        <>
          <div>
            <a className="m-5 hvr-grow" href="/jwelery">
              Jwellery
            </a>
            <a className="m-5 hvr-grow" href="/watches">
              Watches
            </a>
            <p className="m-5 hvr-grow">Gift</p>
          </div>
          <h1 className="gleams-logo">
            <a href="/">Gleams</a>
          </h1>
          <div>
            <a className="m-5 hvr-grow" href="/contact">
              Contact Us
            </a>
            <a className="m-5 hvr-grow" href="/bag">
              Bag
            </a>
            {auth ? (
              <>
                <Menu>
                  <MenuButton className="flex">{user.email}</MenuButton>
                  <MenuList>
                    <MenuItem
                      display="flex"
                      gap={"5px"}
                      alignItems={"center"}
                      onClick={Logout}
                    >
                      Logout <MdOutlineLogout />
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <a className="m-5 hvr-grow" href="/account">
                Account
              </a>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
