import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import "./GameRoom";
function Navbar() {
  const navigate = useNavigate();
  
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("user"); // e.g., store user info after login

  const handleLogout = () => {
    localStorage.removeItem("user"); // clear user info
    navigate("/login"); // redirect to login
  };

  return (
    <nav className="navbar">
      {/* Title on the left */}
      <h2 className="navbar-title">🎨 Color Clash</h2>

      {/* Centered links */}
      <div className="navbar-links">
        {/* <Link to="/signup">Signup</Link> */}

        {isLoggedIn && (
          <Link to="/game">Start Game</Link> // Link to GameRoom page
        )}

        {!isLoggedIn ? (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

