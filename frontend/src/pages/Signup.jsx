import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "../styles/signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/game"); 
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h1> Color Clash</h1>
        <p>Match and arrange colors quickly to score points!</p>

        <div className="auth-container">
          <h2>Create Account</h2>
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
          <button className="btn" onClick={handleSignup}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none", color: "blue" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

