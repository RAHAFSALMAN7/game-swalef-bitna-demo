// src/components/ScoreBoard.jsx
import React from "react";

export default function ScoreBoard({ scores }) {
  return (
    <div style={{ marginBottom: "15px", fontSize: "18px" }}>
      <p>👩 الأم: {scores.mom} نقطة | 👨 الأب: {scores.dad} نقطة</p>
    </div>
  );
}
