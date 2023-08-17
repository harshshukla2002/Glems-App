import {
  GET_WATCHES_ERROR,
  GET_WATCHES_REQUEST,
  GET_WATCHES_SUCCESS,
} from "./actiontype";

const InitialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case GET_WATCHES_REQUEST:
      return { ...state, isLoading: true };
    case GET_WATCHES_SUCCESS:
      return { ...state, isLoading: false, data: payload };
    case GET_WATCHES_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
