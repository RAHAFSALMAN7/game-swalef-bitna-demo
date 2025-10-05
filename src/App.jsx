// src/App.jsx
import React, { useState } from "react";
import HomeScreen from "./components/HomeScreen.jsx";
import SectionScreen from "./components/SectionScreen.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  const [started, setStarted] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [scores, setScores] = useState({ mom: 0, dad: 0 });
  const [finished, setFinished] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
    setFinished(false);
  };

  const handleAddScore = (player) => {
    setScores((prev) => ({ ...prev, [player]: prev[player] + 1 }));
  };

  const handleSectionEnd = () => {
    setFinished(true);
  };

  const handleBackToSections = () => {
    setSelectedSection(null);
  };

  // 👇 الصفحة الرئيسية أولاً
  if (!started) {
    return <HomeScreen onStart={handleStart} />;
  }

  if (!selectedSection) {
    return <SectionScreen onSelect={handleSectionSelect} scores={scores} />;
  }

  if (finished) {
    return (
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h2>🎉 خلصت الأسئلة! 🎉</h2>
        <p>جرب قسم آخر من أقسام سوالف بيتنا 👇</p>
        <p style={{ fontSize: "18px", marginTop: "15px" }}>
          👩 الأم: {scores.mom} نقطة | 👨 الأب: {scores.dad} نقطة
        </p>
        <button
          onClick={handleBackToSections}
          style={{
            marginTop: "20px",
            background: "#5a8f7b",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          🔁 العودة للأقسام
        </button>
      </div>
    );
  }

  return (
    <GameBoard
      section={selectedSection}
      onEnd={handleSectionEnd}
      onAddScore={handleAddScore}
      scores={scores}
    />
  );
}

export default App;
