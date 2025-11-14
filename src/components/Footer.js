import React from "react";

function Footer() {
  return (
    <footer
      style={{
        background: "#1e293b",
        color: "white",
        textAlign: "center",
        padding: "2rem 1rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h3
          style={{
            fontSize: "1.5rem",
            marginBottom: "1rem",
            color: "#0ea5e9",
          }}
        >
          Mondo Travel
        </h3>
        <p style={{ marginBottom: "0.5rem", color: "#cbd5e1" }}>
          &copy; 2024 Mondo Travel. All rights reserved.
        </p>
        <p style={{ color: "#cbd5e1" }}>Made with  for travelers worldwide</p>
      </div>
    </footer>
  );
}

export default Footer;
