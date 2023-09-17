import axios from "axios";

export const getWatchData = (params, page) => {
  return axios.get(
    `https://dull-erin-buffalo-vest.cyclic.cloud/watches?_limit=10&_page=${page}`,
    params
  );
};
