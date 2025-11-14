import React, { useState } from "react";
import { MapPin, Users, Heart } from "lucide-react";

function Packages() {
  const packages = [
    {
      id: 1,
      icon: <MapPin size={40} />,
      title: "Adventure Trips",
      description:
        "Thrilling experiences for adrenaline seekers. Hiking, diving, and extreme sports.",
    },
    {
      id: 2,
      icon: <Users size={40} />,
      title: "Family Tours",
      description:
        "Create lasting memories with family-friendly destinations and activities.",
    },
    {
      id: 3,
      icon: <Heart size={40} />,
      title: "Honeymoon Packages",
      description:
        "Romantic getaways designed for couples celebrating their love.",
    },
  ];

  return (
    <section
      id="packages"
      style={{ padding: "5rem 1rem", background: "white" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "0.5rem",
            color: "#1e293b",
          }}
        >
          Our Packages
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "3rem",
            fontSize: "1.1rem",
          }}
        >
          Choose the perfect package for your journey
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Package Card Component
function PackageCard({ icon, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        padding: "2rem",
        background: isHovered ? "#0ea5e9" : "#f1f5f9",
        borderRadius: "12px",
        textAlign: "center",
        transition: "all 0.3s",
        color: isHovered ? "white" : "#1e293b",
        cursor: "pointer",
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: isHovered ? "0 10px 30px rgba(14, 165, 233, 0.3)" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          transition: "transform 0.3s",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        {icon}
      </div>
      <h3
        style={{ fontSize: "1.5rem", marginBottom: "1rem", fontWeight: "bold" }}
      >
        {title}
      </h3>
      <p style={{ lineHeight: "1.6" }}>{description}</p>
    </div>
  );
}

export default Packages;
