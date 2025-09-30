import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoomDetails from "./RoomDetails";

const RoomList = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.rooms);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:3000/rooms");
        dispatch({ type: "FETCH_ROOMS_SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({ type: "FETCH_ROOMS_ERROR", payload: err.message });
      }
    };
    fetchRooms();
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h2>Available Rooms</h2>
      <div className="row">
        {data.map((room) => (
          <RoomDetails key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomList;
