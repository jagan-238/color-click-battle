import React from "react";

function PlayerScore({ player, score }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "300px",           // responsive max width
        width: "90%",                // takes most of the container width
        margin: "10px auto",
        padding: "12px 20px",
        border: "2px solid #4caf50",
        borderRadius: "12px",
        backgroundColor: "#e8f5e9",
        fontWeight: "bold",
        fontSize: "1.1rem",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}
    >
      <span>{player}</span>
      <span>{score}</span>
    </div>
  );
}

export default PlayerScore;
