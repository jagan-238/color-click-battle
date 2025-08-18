import React from "react";

function Target({ onClick }) {
  return (
    <img
      src="https://img.icons8.com/emoji/96/target-emoji.png"
      alt="target"
      onClick={onClick}
      style={{
        width: "100px",
        maxWidth: "15vw",               // responsive width
        height: "auto",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
        display: "block",
        margin: "20px auto"
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.3)";
        e.currentTarget.style.boxShadow = "0 0 15px rgba(76, 175, 80, 0.7)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    />
  );
}

export default Target;
