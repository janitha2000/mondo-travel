import React, { useState } from "react";
import { Phone, Mail, MapPinned } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll get back to you soon.`);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" style={{ padding: "5rem 1rem", background: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "0.5rem",
            color: "#1e293b",
          }}
        >
          Get In Touch
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "3rem",
            fontSize: "1.1rem",
          }}
        >
          We'd love to hear from you
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* Contact Information */}
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                color: "#1e293b",
              }}
            >
              Contact Information
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <Phone size={24} color="#0ea5e9" />
                <span style={{ color: "#334155" }}>+1 (555) 123-4567</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <Mail size={24} color="#0ea5e9" />
                <span style={{ color: "#334155" }}>info@mondotravel.com</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <MapPinned size={24} color="#0ea5e9" />
                <span style={{ color: "#334155" }}>
                  123 Travel Street, NY 10001
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ ...inputStyle, resize: "vertical" }}
              />
              <button
                onClick={handleSubmit}
                style={{
                  padding: "1rem",
                  background: "#0ea5e9",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#0284c7")}
                onMouseLeave={(e) => (e.target.style.background = "#0ea5e9")}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  padding: "1rem",
  border: "2px solid #e2e8f0",
  borderRadius: "8px",
  fontSize: "1rem",
  fontFamily: "inherit",
  transition: "border-color 0.3s",
};

export default Contact;
