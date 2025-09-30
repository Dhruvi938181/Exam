const initialState = {
  user: null,
  error: null,
  isAuthenticated: false, 
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, error: null, isAuthenticated: true };
    case "LOGIN_ERROR":
      return { ...state, error: action.payload, isAuthenticated: false };
    case "LOGOUT":
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
};