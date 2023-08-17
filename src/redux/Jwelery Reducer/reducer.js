import {
  GET_JWELERY_ERROR,
  GET_JWELERY_REQUEST,
  GET_JWELERY_SUCCESS,
} from "./actiontype";

const InitialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case GET_JWELERY_REQUEST:
      return { ...state, isLoading: true };
    case GET_JWELERY_SUCCESS:
      return { ...state, isLoading: false, data: payload };
    case GET_JWELERY_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
