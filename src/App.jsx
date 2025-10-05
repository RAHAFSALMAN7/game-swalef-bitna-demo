// src/App.jsx
import React, { useState, useEffect } from "react";
import HomeScreen from "./components/HomeScreen.jsx";
import SectionScreen from "./components/SectionScreen.jsx";
import GameBoard from "./components/GameBoard.jsx";
import SubscribeScreen from "./components/SubscribeScreen.jsx";

function App() {
  const [started, setStarted] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [scores, setScores] = useState({ mom: 0, dad: 0 });
  const [demoEnded, setDemoEnded] = useState(false);

  // 🧠 عند تحميل الصفحة نتحقق إذا المستخدم أنهى النسخة التجريبية
  useEffect(() => {
    const demoStatus = localStorage.getItem("demoEnded");
    if (demoStatus === "true") {
      setDemoEnded(true);
    }
  }, []);

  // 💾 نحفظ الحالة عندما تنتهي النسخة التجريبية
  useEffect(() => {
    if (demoEnded) {
      localStorage.setItem("demoEnded", "true");
    }
  }, [demoEnded]);

  const handleStart = () => setStarted(true);

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
  };

  const handleAddScore = (player) => {
    setScores((prev) => ({ ...prev, [player]: prev[player] + 1 }));
  };

  const handleSectionEnd = () => {
    setDemoEnded(true);
    localStorage.setItem("demoEnded", "true");
  };

  const handleBackToSections = () => {
    setSelectedSection(null);
  };

  // ✅ إذا خلص النسخة التجريبية، خليه دايمًا يروح لصفحة الاشتراك
  if (demoEnded) return <SubscribeScreen onBack={handleBackToSections} />;

  if (!started) return <HomeScreen onStart={handleStart} />;

  if (!selectedSection)
    return <SectionScreen onSelect={handleSectionSelect} scores={scores} />;

  return (
    <GameBoard
      section={selectedSection}
      onEnd={handleSectionEnd}
      onAddScore={handleAddScore}
      scores={scores}
      isDemo={true} // 🔥 فقط 3 كروت
    />
  );
}

export default App;
