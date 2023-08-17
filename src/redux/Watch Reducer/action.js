import axios from "axios";

export const getWatchData = (params, page) => {
  return axios.get(
    `https://red-dull-salamander.cyclic.app/watches?_limit=10&_page=${page}`,
    params
  );
};
