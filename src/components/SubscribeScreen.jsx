import React from "react";

export default function SubscribeScreen({ onBack }) {
  // ✅ هذا هو رابط منتجك الحقيقي على Shopify
  const shopifyLink =
    "https://zzi9cd-0f.myshopify.com/products/سوالف-بيتنا-النسخة-الكاملة";

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
        لتكمل اللعبة والوصول إلى جميع الكروت، اشترك عبر متجرنا
      </p>

      {/* زر الشراء على Shopify */}
      <a
        href={shopifyLink}
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
        🛒 اشترك الآن
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
