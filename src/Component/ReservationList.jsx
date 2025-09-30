import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ReservationList = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.reservations);

  const [search, setSearch] = useState("");
  const [filterRoom, setFilterRoom] = useState("");
  const [editReservation, setEditReservation] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      const res = await axios.get("http://localhost:3000/reservations");
      dispatch({ type: "FETCH_RESERVATIONS_SUCCESS", payload: res.data });
    };
    fetchReservations();
  }, [dispatch]);

  const handleCancel = async (id) => {
    await axios.delete(`http://localhost:3000/reservations/${id}`);
    dispatch({ type: "DELETE_RESERVATION_SUCCESS", payload: id });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:3000/reservations/${editReservation.id}`,
      editReservation
    );
    dispatch({ type: "UPDATE_RESERVATION_SUCCESS", payload: editReservation });
    setEditReservation(null);
  };

  const filtered = data.filter(r =>
    r.guestName.toLowerCase().includes(search.toLowerCase()) &&
    (filterRoom ? r.roomId.toString() === filterRoom : true)
  );

  return (
    <div className="container mt-4">
      <h2>Reservations</h2>

      <div className="d-flex mb-3">
        <input
          className="form-control me-2"
          placeholder="Search Guest"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="form-select"
          value={filterRoom}
          onChange={e => setFilterRoom(e.target.value)}
        >
          <option value="">All Rooms</option>
          <option value="1">Room 1</option>
          <option value="2">Room 2</option>
          <option value="3">Room 3</option>
        </select>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Guest</th><th>Room</th><th>Check-In</th><th>Check-Out</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(r => (
            <tr key={r.id}>
              <td>{r.guestName}</td>
              <td>{r.roomId}</td>
              <td>{r.checkIn}</td>
              <td>{r.checkOut}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => setEditReservation(r)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleCancel(r.id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editReservation && (
        <div className="card p-3 mt-3">
          <h4>Edit Reservation</h4>
          <form onSubmit={handleUpdate}>
            <input
              className="form-control mb-2"
              value={editReservation.guestName}
              onChange={e => setEditReservation({ ...editReservation, guestName: e.target.value })}
            />
            <input
              className="form-control mb-2"
              value={editReservation.roomId}
              onChange={e => setEditReservation({ ...editReservation, roomId: e.target.value })}
            />
            <input
              type="date"
              className="form-control mb-2"
              value={editReservation.checkIn}
              onChange={e => setEditReservation({ ...editReservation, checkIn: e.target.value })}
            />
            <input
              type="date"
              className="form-control mb-2"
              value={editReservation.checkOut}
              onChange={e => setEditReservation({ ...editReservation, checkOut: e.target.value })}
            />
            <button className="btn btn-primary">Update</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ReservationList;
