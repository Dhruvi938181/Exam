import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Hotel</Link>
        <div>
          <Link className="btn btn-link text-light" to="/rooms">Rooms</Link>
          <Link className="btn btn-link text-light" to="/reservations">Reservations</Link>
          <Link className="btn btn-link text-light" to="/reserve">Book Now</Link>

          {isAuthenticated ? (
            <>
              <span className="text-light me-3">
                Welcome, <strong>{user?.username}</strong>
              </span>
              <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link className="btn btn-success" to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
