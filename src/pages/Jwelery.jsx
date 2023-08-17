import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_JWELERY_ERROR,
  GET_JWELERY_REQUEST,
  GET_JWELERY_SUCCESS,
} from "../redux/Jwelery Reducer/actiontype";
import { getJweleryData } from "../redux/Jwelery Reducer/action";
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

import "../css/Jwelery.css";
import { useWindow } from "../customHooks/BrowserWindow";
import { useLocation, useSearchParams } from "react-router-dom";

const Jwelery = () => {
  const { isLoading, isError, data } = useSelector(
    (store) => store.jweleryReducer
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { width } = useWindow();
  const [searchParams, setSearchParams] = useSearchParams();
  const [brands, setBrands] = useState(searchParams.getAll("brands") || []);
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
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

  const GetJweleryData = async () => {
    dispatch({ type: GET_JWELERY_REQUEST });
    try {
      const res = await getJweleryData(paramsObj, page);
      dispatch({ type: GET_JWELERY_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_JWELERY_ERROR });
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

  const CategoryFilter = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setCategory([...category, name]);
    } else {
      let NewCategory = category.filter((item) => item !== name);
      setCategory(NewCategory);
    }
  };

  const SortPrice = (e) => {
    e.preventDefault();
    setSort(e.target.name);
  };

  useEffect(() => {
    let SearchObj = {
      brands,
      category,
    };
    sort && (SearchObj.order = sort);
    setSearchParams(SearchObj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brands, sort, category]);

  useEffect(() => {
    GetJweleryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, page]);

  return (
    <>
      <div>
        <div className="p-5">
          <img
            src="https://i.postimg.cc/kGxvFdF6/Jwellery-Banner.jpg"
            alt="jwelery"
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
                          id="messica"
                          type="checkbox"
                          name="Messika"
                          onChange={BrandsFilter}
                          checked={brands.includes("Messika")}
                        />
                        <label className="cbx" htmlFor="messica">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Messika</span>
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
                          id="carter"
                          type="checkbox"
                          name="Carter"
                          onChange={BrandsFilter}
                          checked={brands.includes("Carter")}
                        />
                        <label className="cbx" htmlFor="carter">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Carter</span>
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
                          id="mikimoto"
                          type="checkbox"
                          name="Mikimoto"
                          onChange={BrandsFilter}
                          checked={brands.includes("Messica")}
                        />
                        <label className="cbx" htmlFor="mikimoto">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Mikimoto</span>
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
                          id="graff"
                          type="checkbox"
                          name="Graff"
                          onChange={BrandsFilter}
                          checked={brands.includes("Graff")}
                        />
                        <label className="cbx" htmlFor="graff">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Graff</span>
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
                          name="Rings"
                          onChange={CategoryFilter}
                          checked={category.includes("Rings")}
                        />
                        <label className="cbx" htmlFor="rings">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Rings</span>
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
                          name="Necklaces"
                          onChange={CategoryFilter}
                          checked={category.includes("Necklaces")}
                        />
                        <label className="cbx" htmlFor="necklaces">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Necklaces</span>
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
                          id="bracelets"
                          type="checkbox"
                          name="Bracelets"
                          onChange={CategoryFilter}
                          checked={category.includes("Bracelets")}
                        />
                        <label className="cbx" htmlFor="bracelets">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Bracelets</span>
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
                          id="earrings"
                          type="checkbox"
                          name="Earrings"
                          onChange={CategoryFilter}
                          checked={category.includes("Earrings")}
                        />
                        <label className="cbx" htmlFor="earrings">
                          <span>
                            <svg width="12px" height="10px"></svg>
                          </span>
                          <span>Earrings</span>
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
                      id="messica"
                      type="checkbox"
                      name="Messika"
                      onChange={BrandsFilter}
                      checked={brands.includes("Messika")}
                    />
                    <label className="cbx" htmlFor="messica">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Messika</span>
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
                      id="carter"
                      type="checkbox"
                      name="Carter"
                      onChange={BrandsFilter}
                      checked={brands.includes("Carter")}
                    />
                    <label className="cbx" htmlFor="carter">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Carter</span>
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
                      id="mikimoto"
                      type="checkbox"
                      name="Mikimoto"
                      onChange={BrandsFilter}
                      checked={brands.includes("Mikimoto")}
                    />
                    <label className="cbx" htmlFor="mikimoto">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Mikimoto</span>
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
                      id="graff"
                      type="checkbox"
                      name="Graff"
                      onChange={BrandsFilter}
                      checked={brands.includes("Graff")}
                    />
                    <label className="cbx" htmlFor="graff">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Graff</span>
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
                      name="Rings"
                      onChange={CategoryFilter}
                      checked={category.includes("Rings")}
                    />
                    <label className="cbx" htmlFor="rings">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Rings</span>
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
                      name="Necklaces"
                      onChange={CategoryFilter}
                      checked={category.includes("Necklaces")}
                    />
                    <label className="cbx" htmlFor="necklaces">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Necklaces</span>
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
                      id="bracelets"
                      type="checkbox"
                      name="Bracelets"
                      onChange={CategoryFilter}
                      checked={category.includes("Bracelets")}
                    />
                    <label className="cbx" htmlFor="bracelets">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Bracelets</span>
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
                      id="earrings"
                      type="checkbox"
                      name="Earrings"
                      onChange={CategoryFilter}
                      checked={category.includes("Earrings")}
                    />
                    <label className="cbx" htmlFor="earrings">
                      <span>
                        <svg width="12px" height="10px"></svg>
                      </span>
                      <span>Earrings</span>
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

export default Jwelery;
