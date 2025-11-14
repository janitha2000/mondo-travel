import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        zIndex: 1000,
        padding: "1rem 0",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "#0ea5e9",
              fontSize: "1.8rem",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            Mondo Travel
          </h1>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#0ea5e9",
            }}
            className="mobile-menu-btn"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links */}
          <ul
            style={{
              display: "flex",
              gap: "2rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="nav-links"
          >
            <li>
              <a href="#home" style={linkStyle}>
                Home
              </a>
            </li>
            <li>
              <a href="#destinations" style={linkStyle}>
                Destinations
              </a>
            </li>
            <li>
              <a href="#packages" style={linkStyle}>
                Packages
              </a>
            </li>
            <li>
              <a href="#testimonials" style={linkStyle}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" style={linkStyle}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
          .nav-links {
            display: ${isOpen ? "flex" : "none"} !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
        }
      `}</style>
    </nav>
  );
}

const linkStyle = {
  color: "#334155",
  textDecoration: "none",
  fontWeight: "500",
  transition: "color 0.3s",
};

export default Navbar;
