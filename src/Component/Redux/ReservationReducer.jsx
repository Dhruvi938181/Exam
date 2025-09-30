const initialState = {
  data: [],
  error: null,
};

export const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RESERVATIONS_SUCCESS":
      return { ...state, data: action.payload };
    case "ADD_RESERVATION_SUCCESS":
      return { ...state, data: [...state.data, action.payload] };
    case "UPDATE_RESERVATION_SUCCESS":
      return {
        ...state,
        data: state.data.map((r) =>
          r.id === action.payload.id ? action.payload : r
        ),
      };
    case "DELETE_RESERVATION_SUCCESS":
      return {
        ...state,
        data: state.data.filter((r) => r.id !== action.payload),
      };
    case "FETCH_RESERVATIONS_ERROR":
    case "ADD_RESERVATION_ERROR":
    case "UPDATE_RESERVATION_ERROR":
    case "DELETE_RESERVATION_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
