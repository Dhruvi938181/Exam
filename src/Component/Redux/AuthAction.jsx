export const login = (username, password) => (dispatch) => {
  if (username === "admin" && password === "123456") {
    dispatch({ type: "LOGIN_SUCCESS", payload: { username } });
  } else {
    dispatch({ type: "LOGIN_ERROR", payload: "Invalid credentials" });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
