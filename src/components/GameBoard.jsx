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
    <div
      style={{
        textAlign: "center",
        marginTop: "30px",
        padding: "0 15px",
      }}
    >
      <h2 style={{ fontSize: "clamp(20px, 5vw, 28px)" }}>{section.title}</h2>

      <ScoreBoard scores={scores} />

      {showNote && (
        <p
          style={{
            color: "#777",
            fontSize: "clamp(14px, 3.5vw, 16px)",
            margin: "10px 0 20px",
          }}
        >
          💡 اقلب الكرت أو اختر من جاوب للانتقال للسؤال التالي
        </p>
      )}

      {/* الكرت */}
      <div
        className={`flip-card ${isFlipping ? "flipping" : ""}`}
        onClick={handleFlip}
        style={{
          cursor: "pointer",
          maxWidth: "90vw",
          margin: "0 auto 25px auto",
        }}
      >
        <div className="flip-inner">
          <div className="flip-front">
            <img
              src={section.cards[current]}
              alt="بطاقة السؤال"
              style={{
                width: "100%",
                maxWidth: "320px",
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
                width: "100%",
                maxWidth: "320px",
                borderRadius: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </div>
      </div>

      {/* الأزرار */}
      <div
        style={{
          marginTop: "25px",
          display: "flex",
          flexDirection: "column", // ⬅ يخليهم تحت بعض
          alignItems: "center",
          gap: "15px",
        }}
      >
        <button
          onClick={() => handleAnswer("mom")}
          style={{
            width: "80%",
            maxWidth: "320px",
            padding: "14px",
            fontSize: "clamp(16px, 5vw, 18px)",
            borderRadius: "12px",
            background: "#f59e0b",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "0.3s",
          }}
        >
          👩 الأم جاوبت
        </button>

        <button
          onClick={() => handleAnswer("dad")}
          style={{
            width: "80%",
            maxWidth: "320px",
            padding: "14px",
            fontSize: "clamp(16px, 5vw, 18px)",
            borderRadius: "12px",
            background: "#3b82f6",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "0.3s",
          }}
        >
          👨 الأب جاوب
        </button>
      </div>

      <p
        style={{
          marginTop: "20px",
          color: "#555",
          fontSize: "clamp(14px, 3.5vw, 16px)",
        }}
      >
        السؤال {current + 1} من {section.cards.length}
      </p>
    </div>
  );
}
