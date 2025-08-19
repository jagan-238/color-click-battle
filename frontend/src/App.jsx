import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GameRoom from "./components/GameRoom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root ("/") to signup */}
        <Route path="/" element={<Navigate to="/signup" />} />

        {/* Auth pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Main pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<GameRoom />} />
      </Routes>
    </Router>
  );
}

export default App;

