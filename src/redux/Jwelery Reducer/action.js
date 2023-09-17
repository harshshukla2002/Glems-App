import axios from "axios";

export const getJweleryData = (params, page) => {
  return axios.get(
    `https://dull-erin-buffalo-vest.cyclic.cloud/jewellery?_limit=10&_page=${page}`,
    params
  );
};
