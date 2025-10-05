// src/components/SectionScreen.jsx
import React from "react";
import { sections } from "../data/cardsData.js";

export default function SectionScreen({ onSelect }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎴 اختر القسم</h1>
      <p>ابدأ المرح مع أحد أقسام سوالف بيتنا 💬</p>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "40px"
      }}>
        {sections.map((sec) => (
          <div key={sec.id} style={{ cursor: "pointer" }} onClick={() => onSelect(sec)}>
            <img
              src={sec.cover}
              alt={sec.title}
              style={{
                width: "180px",
                borderRadius: "15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
              }}
            />
            <h3 style={{ marginTop: "10px" }}>{sec.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
