// src/components/HomeScreen.jsx
import React from "react";

export default function HomeScreen({ onStart }) {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "60px",
      }}
    >
      <img
        src="/card/main.png"
        alt="سوالف بيتنا"
        style={{
          width: "300px",
          borderRadius: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          marginBottom: "30px",
        }}
      />

      <h1 style={{ marginBottom: "10px" }}>🎴 سوالف بيتنا</h1>
      <p style={{ color: "#666", marginBottom: "25px" }}>
        اللعبة العائلية الممتعة 👨‍👩‍👦
      </p>

      <button
        onClick={onStart}
        style={{
          backgroundColor: "#5a8f7b",
          color: "#fff",
          border: "none",
          padding: "12px 24px",
          borderRadius: "12px",
          fontSize: "18px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#4c7e6c")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#5a8f7b")}
      >
        ▶️ ابدأ اللعبة
      </button>
    </div>
  );
}
