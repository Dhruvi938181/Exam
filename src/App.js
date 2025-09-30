import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Navbar from "./Component/Navbar";
import PrivateRoute from "./Component/PrivateRoute";
import ReservationForm from "./Component/ReservationForm";
import ReservationList from "./Component/ReservationList";
import RoomList from "./Component/RoomList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<RoomList />} />
          <Route path="/rooms" element={<RoomList />} />
          <Route
            path="/reservations"
            element={
              <PrivateRoute>
                <ReservationList />
              </PrivateRoute>
            }
          />
          <Route
            path="/reserve"
            element={
              <PrivateRoute>
                <ReservationForm />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
