import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./AuthReducer";
import { reservationReducer } from "./ReservationReducer";
import { roomReducer } from "./RoomReducer";

const rootReducer = combineReducers({
  rooms: roomReducer,
  reservations: reservationReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
