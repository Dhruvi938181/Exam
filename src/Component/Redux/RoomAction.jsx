import axios from "axios";

export const fetchRooms = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3000/rooms");
    dispatch({ type: "FETCH_ROOMS_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "FETCH_ROOMS_ERROR", payload: err.message });
  }
};
