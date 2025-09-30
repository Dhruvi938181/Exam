const initialState = {
  data: [],
  error: null,
};

export const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ROOMS_SUCCESS":
      return { ...state, data: action.payload };
    case "FETCH_ROOMS_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
