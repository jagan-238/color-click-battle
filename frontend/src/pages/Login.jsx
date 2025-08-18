import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "../styles/signup.css"; // reuse signup styles

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      // Store user info (optional)
      localStorage.setItem("user", email);

      // Redirect to Home page
      navigate("/home");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="signup-page"> {/* Full page centered */}
      <div className="signup-box">
        <h1>🎨 Color Clash</h1>
        <p>Login to continue your game!</p>

        <div className="auth-container">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" onClick={handleLogin}>
            Login
          </button>
          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

