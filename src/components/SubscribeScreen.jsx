import React from "react";

export default function SubscribeScreen({ onBack }) {
  // ✅ هذا هو رابط منتجك الجديد على CardArena
  const productLink =
    "https://cardarena.net/products/%D8%B3%D9%88%D8%A7%D9%84%D9%81-%D8%A8%D9%8A%D8%AA%D9%86%D8%A7-%D8%A7%D9%84%D9%86%D8%B3%D8%AE%D8%A9-%D8%A7%D9%84%D9%83%D8%A7%D9%85%D9%84%D8%A9?variant=51926665429297";

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "60px",
        background: "#fff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <h2>🔒 النسخة التجريبية انتهت</h2>
      <p style={{ fontSize: "18px", marginBottom: "25px" }}>
        لتكمل اللعبة والوصول إلى جميع الكروت، يمكنك شراء النسخة الكاملة من متجرنا
      </p>

      {/* زر الشراء على CardArena */}
      <a
        href={productLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          background: "#5a8f7b",
          color: "white",
          textDecoration: "none",
          padding: "12px 24px",
          borderRadius: "10px",
          fontSize: "17px",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        🛒 اشتري الآن
      </a>

      {/* زر الرجوع داخل اللعبة */}
      <div style={{ marginTop: "25px" }}>
        <button
          onClick={onBack}
          style={{
            background: "transparent",
            color: "#5a8f7b",
            border: "1px solid #5a8f7b",
            padding: "8px 18px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          🔁 العودة للأقسام
        </button>
      </div>
    </div>
  );
}
