// src/components/GameBoard.jsx
import React, { useState } from "react";
import ScoreBoard from "./ScoreBoard.jsx";
import "./flip.css";

export default function GameBoard({ section, onEnd, onAddScore, scores }) {
  const [current, setCurrent] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showNote, setShowNote] = useState(true);

  const handleFlip = () => {
    if (showNote) setShowNote(false);
    setIsFlipping(true);

    setTimeout(() => {
      setIsFlipping(false);
      if (current < section.cards.length - 1) {
        setCurrent((prev) => prev + 1);
      } else {
        onEnd();
      }
    }, 600);
  };

  const handleAnswer = (player) => {
    onAddScore(player);
    handleFlip();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>{section.title}</h2>
      <ScoreBoard scores={scores} />

      {showNote && (
        <p style={{ color: "#777", fontSize: "16px" }}>
          💡 اقلب الكرت أو اختر من جاوب للانتقال للسؤال التالي
        </p>
      )}

      <div
        className={`flip-card ${isFlipping ? "flipping" : ""}`}
        onClick={handleFlip}
        style={{ cursor: "pointer" }}
      >
        <div className="flip-inner">
          <div className="flip-front">
            <img
              src={section.cards[current]}
              alt="بطاقة السؤال"
              style={{
                width: "300px",
                borderRadius: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            />
          </div>
          <div className="flip-back">
            <img
              src={section.cards[current]}
              alt="بطاقة السؤال"
              style={{
                width: "300px",
                borderRadius: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => handleAnswer("mom")}>👩 الأم جاوبت</button>
        <button onClick={() => handleAnswer("dad")}>👨 الأب جاوب</button>
      </div>

      <p style={{ marginTop: "15px", color: "#555" }}>
        السؤال {current + 1} من {section.cards.length}
      </p>
    </div>
  );
}
