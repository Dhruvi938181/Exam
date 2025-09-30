import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector(state => state.auth); 

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123456") {
      dispatch({ type: "LOGIN_SUCCESS", payload: { username } });
    } else {
      alert("Invalid credentials! Try admin /123456");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/reservations"); 
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input className="form-control mb-2" placeholder="Username"
          value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" className="form-control mb-2" placeholder="Password"
          value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-success w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
