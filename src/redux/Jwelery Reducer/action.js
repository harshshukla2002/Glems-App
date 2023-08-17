import axios from "axios";

export const getJweleryData = (params, page) => {
  return axios.get(
    `https://red-dull-salamander.cyclic.app/jewellery?_limit=10&_page=${page}`,
    params
  );
};
