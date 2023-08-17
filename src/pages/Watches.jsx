import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_WATCHES_ERROR,
  GET_WATCHES_REQUEST,
  GET_WATCHES_SUCCESS,
} from "../redux/Watch Reducer/actiontype";
import { getWatchData } from "../redux/Watch Reducer/action";
import {
  AiFillCaretDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import ProductCard from "../components/ProductCard";
import { Spin } from "antd";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  SimpleGrid,
} from "@chakra-ui/react";

import "../css/Watches.css";
import { useWindow } from "../customHooks/BrowserWindow";
import { useLocation, useSearchParams } from "react-router-dom";

const Watches = () => {
  const { isLoading, isError, data } = useSelector(
    (store) => store.watchReducer
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { width } = useWindow();
  const [searchParams, setSearchParams] = useSearchParams();
  const [brands, setBrands] = useState(searchParams.getAll("brands") || []);
  const [collections, setCollections] = useState(
    searchParams.getAll("gender") || []
  );
  const [sort, setSort] = useState(searchParams.get("order") || "");
  const location = useLocation();

  const paramsObj = {
    params: {
      brand: searchParams.getAll("brands"),
      category: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  const GetgetWatchData = async () => {
    dispatch({ type: GET_WATCHES_REQUEST });
    try {
      const res = await getWatchData(paramsObj, page);
      dispatch({ type: GET_WATCHES_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_WATCHES_ERROR });
    }
  };

  const BrandsFilter = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setBrands([...brands, name]);
    } else {
      let NewBrands = brands.filter((item) => item !== name);
      setBrands(NewBrands);
    }
  };

  const GenderFilter = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setCollections([...collections, name]);
    } else {
      let NewCollections = collections.filter((item) => item !== name);
      setCollections(NewCollections);
    }
  };

  const SortPrice = (e) => {
    e.preventDefault();
    setSort(e.target.name);
  };

  useEffect(() => {
    let SearchObj = {
      brands,
      gender: collections,
    };
    sort && (SearchObj.order = sort);
    setSearchParams(SearchObj);
  }, [brands, sort, collections]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    GetgetWatchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, page]);

  return (
    <>
      <div>
        <div className="p-5">
          <img
            src="https://i.postimg.cc/SNHzQPWH/watch-Bnner.jpg"
            alt="watches"
            className="w-full m-auto"
          />
        </div>
        {width < 800 ? (
          <div className="bg-zinc-800 mb-10 p-5">
            <Menu m="10px" color="white">
              <MenuButton>
                <Flex alignItems={"center"} gap="4px" color={"white"}>
                  Filter By <AiFillCaretDown />
                </Flex>
              </MenuButton>
              <MenuList>
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <AccordionButton>Brands</AccordionButton>
                    <AccordionPanel>
                      <div className="checkbox-wrapper-4">
                        <input
                          className="inp-cbx"
                          id="citizen"
                          type="checkbox"
                          name="Citizen"
                          onChange={BrandsFilter}
                          checked={brands.includes("Citizen")}
                        />
                        <label className="cbx" htmlFor="citizen">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Citizen</span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                      <div className="checkbox-wrapper-4">
                        <input
                          className="inp-cbx"
                          id="Emporio Armani"
                          type="checkbox"
                          name="Emporio Armani"
                          onChange={BrandsFilter}
                          checked={brands.includes("Emporio Armani")}
                        />
                        <label className="cbx" htmlFor="Emporio Armani">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Emporio Armani</span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                      <div className="checkbox-wrapper-4">
                        <input
                          className="inp-cbx"
                          id="invicta"
                          type="checkbox"
                          name="Invicta"
                          onChange={BrandsFilter}
                          checked={brands.includes("Citizen")}
                        />
                        <label className="cbx" htmlFor="invicta">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Invicta</span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                      <div className="checkbox-wrapper-4">
                        <input
                          className="inp-cbx"
                          id="tissot"
                          type="checkbox"
                          name="Tissot"
                          onChange={BrandsFilter}
                          checked={brands.includes("Tissot")}
                        />
                        <label className="cbx" htmlFor="tissot">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Tissot</span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                      <div className="checkbox-wrapper-4">
                        <input
                          className="inp-cbx"
                          id="tissot"
                          type="checkbox"
                          name="Tissot"
                          onChange={BrandsFilter}
                          checked={brands.includes("Tissot")}
                        />
                        <label className="cbx" htmlFor="tissot">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Tissot</span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                      <div className="checkbox-wrapper-4">
                        <input
                          className="inp-cbx"
                          id="fossil"
                          type="checkbox"
                          name="Fossil"
                          onChange={BrandsFilter}
                          checked={brands.includes("Fossil")}
                        />
                        <label className="cbx" htmlFor="fossil">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Fossil</span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                      <div className="checkbox-wrapper-4">
                        <input
                          className="inp-cbx"
                          id="diesel"
                          type="checkbox"
                          name="Diesel"
                          onChange={BrandsFilter}
                          checked={brands.includes("Diesel")}
                        />
                        <label className="cbx" htmlFor="diesel">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Diesel</span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                      <div className="checkbox-wrapper-4">
                        <input
                          className="inp-cbx"
                          id="Lucin Piccard"
                          type="checkbox"
                          name="Lucin Piccard"
                          onChange={BrandsFilter}
                          checked={brands.includes("Lucin Piccard")}
                        />
                        <label className="cbx" htmlFor="Lucin Piccard">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Lucin Piccard</span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                      <div className="checkbox-wrapper-4">
                        <input
                          className="inp-cbx"
                          id="casio"
                          type="checkbox"
                          name="Casio"
                          onChange={BrandsFilter}
                          checked={brands.includes("Casio")}
                        />
                        <label className="cbx" htmlFor="casio">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Casio</span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                      <div className="checkbox-wrapper-4">
                        <input
                          className="inp-cbx"
                          id="michael Kors"
                          type="checkbox"
                          name="Michael Kors"
                          onChange={BrandsFilter}
                          checked={brands.includes("Michael Kors")}
                        />
                        <label className="cbx" htmlFor="michael Kors">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Michael Kors</span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                      <div className="checkbox-wrapper-4">
                        <input
                          className="inp-cbx"
                          id="mavado"
                          type="checkbox"
                          name="Mavado"
                          onChange={BrandsFilter}
                          checked={brands.includes("Mavado")}
                        />
                        <label className="cbx" htmlFor="mavado">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Mavado</span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                      <div className="checkbox-wrapper-4">
                        <input
                          className="inp-cbx"
                          id="cabochon"
                          type="checkbox"
                          name="Cabochon"
                          onChange={BrandsFilter}
                          checked={brands.includes("Cabochon")}
                        />
                        <label className="cbx" htmlFor="cabochon">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Cabochon</span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                      <div className="checkbox-wrapper-4">
                        <input
                          className="inp-cbx"
                          id="mathey Tissot"
                          type="checkbox"
                          name="Mathey Tissot"
                          onChange={BrandsFilter}
                          checked={brands.includes("Mathey Tissot")}
                        />
                        <label className="cbx" htmlFor="mathey Tissot">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Mathey Tissot</span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>Collection</AccordionButton>
                    <AccordionPanel>
                      <div className="checkbox-wrapper-4">
                        <input
                          className="inp-cbx"
                          id="rings"
                          type="checkbox"
                          name="Mens"
                          onChange={GenderFilter}
                          checked={collections.includes("Mens")}
                        />
                        <label className="cbx" htmlFor="rings">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Mens</span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                      <div className="checkbox-wrapper-4">
                        <input
                          className="inp-cbx"
                          id="necklaces"
                          type="checkbox"
                          name="Womens"
                          onChange={GenderFilter}
                          checked={collections.includes("Womens")}
                        />
                        <label className="cbx" htmlFor="necklaces">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Womens</span>
                        </label>
                        <svg className="inline-svg">
                          <symbol id="check-4" viewBox="0 0 12 10">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </symbol>
                        </svg>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>SORT</AccordionButton>
                    <AccordionPanel>
                      <div className="radio-buttons">
                        <label className="radio-button">
                          <input
                            value="option1"
                            type="radio"
                            name=""
                            onChange={SortPrice}
                            checked={sort === ""}
                          />
                          <div className="radio-circle"></div>
                          <span className="radio-label">Low To High</span>
                        </label>
                        <label className="radio-button">
                          <input
                            value="option2"
                            type="radio"
                            name="desc"
                            onChange={SortPrice}
                            checked={sort === "desc"}
                          />
                          <div className="radio-circle"></div>
                          <span className="radio-label">High To Low</span>
                        </label>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </MenuList>
            </Menu>
          </div>
        ) : (
          <div className="bg-zinc-800 mb-10 p-5">
            <div className="w-4/5 m-auto flex justify-between items-center text-white">
              <h1>Filter By: </h1>
              <Menu>
                <MenuButton>
                  <Flex alignItems={"center"} gap="4px">
                    BRANDS <AiFillCaretDown />
                  </Flex>
                </MenuButton>
                <MenuList>
                  <div className="checkbox-wrapper-4">
                    <input
                      className="inp-cbx"
                      id="citizen"
                      type="checkbox"
                      name="Citizen"
                      onChange={BrandsFilter}
                      checked={brands.includes("Citizen")}
                    />
                    <label className="cbx" htmlFor="citizen">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Citizen</span>
                    </label>
                    <svg className="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                  </div>
                  <div className="checkbox-wrapper-4">
                    <input
                      className="inp-cbx"
                      id="Emporio Armani"
                      type="checkbox"
                      name="Emporio Armani"
                      onChange={BrandsFilter}
                      checked={brands.includes("Emporio Armani")}
                    />
                    <label className="cbx" htmlFor="Emporio Armani">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Emporio Armani</span>
                    </label>
                    <svg className="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                  </div>
                  <div className="checkbox-wrapper-4">
                    <input
                      className="inp-cbx"
                      id="invicta"
                      type="checkbox"
                      name="Invicta"
                      onChange={BrandsFilter}
                      checked={brands.includes("Citizen")}
                    />
                    <label className="cbx" htmlFor="invicta">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Invicta</span>
                    </label>
                    <svg className="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                  </div>
                  <div className="checkbox-wrapper-4">
                    <input
                      className="inp-cbx"
                      id="tissot"
                      type="checkbox"
                      name="Tissot"
                      onChange={BrandsFilter}
                      checked={brands.includes("Tissot")}
                    />
                    <label className="cbx" htmlFor="tissot">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Tissot</span>
                    </label>
                    <svg className="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                  </div>
                  <div className="checkbox-wrapper-4">
                    <input
                      className="inp-cbx"
                      id="tissot"
                      type="checkbox"
                      name="Tissot"
                      onChange={BrandsFilter}
                      checked={brands.includes("Tissot")}
                    />
                    <label className="cbx" htmlFor="tissot">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Tissot</span>
                    </label>
                    <svg className="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                  </div>
                  <div className="checkbox-wrapper-4">
                    <input
                      className="inp-cbx"
                      id="fossil"
                      type="checkbox"
                      name="Fossil"
                      onChange={BrandsFilter}
                      checked={brands.includes("Fossil")}
                    />
                    <label className="cbx" htmlFor="fossil">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Fossil</span>
                    </label>
                    <svg className="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                  </div>
                  <div className="checkbox-wrapper-4">
                    <input
                      className="inp-cbx"
                      id="diesel"
                      type="checkbox"
                      name="Diesel"
                      onChange={BrandsFilter}
                      checked={brands.includes("Diesel")}
                    />
                    <label className="cbx" htmlFor="diesel">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Diesel</span>
                    </label>
                    <svg className="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                  </div>
                  <div className="checkbox-wrapper-4">
                    <input
                      className="inp-cbx"
                      id="Lucin Piccard"
                      type="checkbox"
                      name="Lucin Piccard"
                      onChange={BrandsFilter}
                      checked={brands.includes("Lucin Piccard")}
                    />
                    <label className="cbx" htmlFor="Lucin Piccard">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Lucin Piccard</span>
                    </label>
                    <svg className="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                  </div>
                  <div className="checkbox-wrapper-4">
                    <input
                      className="inp-cbx"
                      id="casio"
                      type="checkbox"
                      name="Casio"
                      onChange={BrandsFilter}
                      checked={brands.includes("Casio")}
                    />
                    <label className="cbx" htmlFor="casio">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Casio</span>
                    </label>
                    <svg className="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                  </div>
                  <div className="checkbox-wrapper-4">
                    <input
                      className="inp-cbx"
                      id="michael Kors"
                      type="checkbox"
                      name="Michael Kors"
                      onChange={BrandsFilter}
                      checked={brands.includes("Michael Kors")}
                    />
                    <label className="cbx" htmlFor="michael Kors">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Michael Kors</span>
                    </label>
                    <svg className="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                  </div>
                  <div className="checkbox-wrapper-4">
                    <input
                      className="inp-cbx"
                      id="mavado"
                      type="checkbox"
                      name="Mavado"
                      onChange={BrandsFilter}
                      checked={brands.includes("Mavado")}
                    />
                    <label className="cbx" htmlFor="mavado">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Mavado</span>
                    </label>
                    <svg className="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                  </div>
                  <div className="checkbox-wrapper-4">
                    <input
                      className="inp-cbx"
                      id="cabochon"
                      type="checkbox"
                      name="Cabochon"
                      onChange={BrandsFilter}
                      checked={brands.includes("Cabochon")}
                    />
                    <label className="cbx" htmlFor="cabochon">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Cabochon</span>
                    </label>
                    <svg className="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                  </div>
                  <div className="checkbox-wrapper-4">
                    <input
                      className="inp-cbx"
                      id="mathey Tissot"
                      type="checkbox"
                      name="Mathey Tissot"
                      onChange={BrandsFilter}
                      checked={brands.includes("Mathey Tissot")}
                    />
                    <label className="cbx" htmlFor="mathey Tissot">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Mathey Tissot</span>
                    </label>
                    <svg className="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                  </div>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton>
                  <Flex alignItems={"center"} gap="4px">
                    Collection <AiFillCaretDown />
                  </Flex>
                </MenuButton>
                <MenuList>
                  <div className="checkbox-wrapper-4">
                    <input
                      className="inp-cbx"
                      id="rings"
                      type="checkbox"
                      name="Mens"
                      onChange={GenderFilter}
                      checked={collections.includes("Mens")}
                    />
                    <label className="cbx" htmlFor="rings">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Mens</span>
                    </label>
                    <svg className="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                  </div>
                  <div className="checkbox-wrapper-4">
                    <input
                      className="inp-cbx"
                      id="necklaces"
                      type="checkbox"
                      name="Womens"
                      onChange={GenderFilter}
                      checked={collections.includes("Womens")}
                    />
                    <label className="cbx" htmlFor="necklaces">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Womens</span>
                    </label>
                    <svg className="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                  </div>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton>
                  <Flex alignItems={"center"} gap="4px">
                    SORT <AiFillCaretDown />
                  </Flex>
                </MenuButton>
                <MenuList color={"black"} p="10px">
                  <div className="radio-buttons">
                    <label className="radio-button">
                      <input
                        value="option1"
                        type="radio"
                        name=""
                        onChange={SortPrice}
                        checked={sort === ""}
                      />
                      <div className="radio-circle"></div>
                      <span className="radio-label">Low To High</span>
                    </label>
                    <label className="radio-button">
                      <input
                        value="option2"
                        type="radio"
                        name="desc"
                        onChange={SortPrice}
                        checked={sort === "desc"}
                      />
                      <div className="radio-circle"></div>
                      <span className="radio-label">High To Low</span>
                    </label>
                  </div>
                </MenuList>
              </Menu>
            </div>
          </div>
        )}
        <div>
          {isLoading ? (
            <div className="text-center m-10">
              <Spin size="large" />
            </div>
          ) : isError ? (
            <div className="text-center m-10">
              <h1 className="text-3xl">Something Went Wrong</h1>
            </div>
          ) : (
            <SimpleGrid columns={[1, 2, 4]} gap="10px" p="20px">
              {data?.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
            </SimpleGrid>
          )}
        </div>
        <div className="flex gap-2 m-10">
          <button
            className="flex gap-3 items-center border-2 border-black px-5 py-1 rounded hover:bg-black hover:text-white"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            <AiOutlineArrowLeft size={"20px"} />
            Previous
          </button>
          <span className="border-2 border-black p-2 rounded">{page}</span>
          <button
            className="flex gap-3 items-center border-2 border-black px-5 py-1 rounded hover:bg-black hover:text-white"
            onClick={() => setPage(page + 1)}
          >
            Next
            <AiOutlineArrowRight size={"20px"} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Watches;
