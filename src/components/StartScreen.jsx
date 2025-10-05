// src/components/StartScreen.jsx
import React from "react";

export default function StartScreen({ onStart }) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🎴 سوالف بيتنا</h1>
      <p>اللعبة العائلية الممتعة 👨‍👩‍👦</p>
      <button onClick={onStart} style={{
        padding: "10px 20px",
        fontSize: "18px",
        backgroundColor: "#5a8f7b",
        color: "#fff",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer"
      }}>
        ابدأ اللعبة ▶️
      </button>
    </div>
  );
}
