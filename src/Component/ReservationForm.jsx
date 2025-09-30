import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ReservationForm = () => {
  const [guestName, setGuestName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReservation = { guestName, roomId, checkIn, checkOut };
    const res = await axios.post("http://localhost:3000/reservations", newReservation);
    dispatch({ type: "ADD_RESERVATION_SUCCESS", payload: res.data });
    setGuestName(""); setRoomId(""); setCheckIn(""); setCheckOut("");
    navigate("/reservations")
  };

  return (
    <div className="container mt-4">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Guest Name"
          value={guestName} onChange={e => setGuestName(e.target.value)} />
        <input className="form-control mb-2" placeholder="Room ID"
          value={roomId} onChange={e => setRoomId(e.target.value)} />
        <input type="date" className="form-control mb-2"
          value={checkIn} onChange={e => setCheckIn(e.target.value)} />
        <input type="date" className="form-control mb-2"
          value={checkOut} onChange={e => setCheckOut(e.target.value)} />
        <button className="btn btn-primary">Reserve</button>
      </form>
    </div>
  );
};

export default ReservationForm;
