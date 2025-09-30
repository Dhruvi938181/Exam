const RoomDetails = ({ room }) => (
  <div className="col-md-4 mb-3">
    <div className="card p-3">
      <h5>{room.type}</h5>
      <p>Price: ${room.price}</p>
      <p>Status: {room.available ? "Available" : "Booked"}</p>
    </div>
  </div>
);

export default RoomDetails;
