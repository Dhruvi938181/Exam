import axios from "axios";

export const fetchReservations = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3000/reservations");
    dispatch({ type: "FETCH_RESERVATIONS_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "FETCH_RESERVATIONS_ERROR", payload: err.message });
  }
};

export const addReservation = (reservation) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:3000/reservations", reservation);
    dispatch({ type: "ADD_RESERVATION_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "ADD_RESERVATION_ERROR", payload: err.message });
  }
};

export const updateReservation = (id, updated) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:3000/reservations/${id}`, updated);
    dispatch({ type: "UPDATE_RESERVATION_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "UPDATE_RESERVATION_ERROR", payload: err.message });
  }
};

export const deleteReservation = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/reservations/${id}`);
    dispatch({ type: "DELETE_RESERVATION_SUCCESS", payload: id });
  } catch (err) {
    dispatch({ type: "DELETE_RESERVATION_ERROR", payload: err.message });
  }
};
