import React, { useState } from "react";

function Destinations() {
  const destinations = [
    {
      id: 1,
      name: "Maldives",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
      description:
        "Crystal clear waters and pristine beaches await you in this tropical paradise.",
    },
    {
      id: 2,
      name: "Paris, France",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
      description:
        "Experience the city of love with iconic landmarks and rich culture.",
    },
    {
      id: 3,
      name: "Tokyo, Japan",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      description:
        "Discover the perfect blend of ancient traditions and modern innovation.",
    },
    {
      id: 4,
      name: "New York, USA",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
      description:
        "The city that never sleeps offers endless entertainment and iconic sights.",
    },
    {
      id: 5,
      name: "Bali, Indonesia",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
      description:
        "Tropical beaches, rice terraces, and spiritual temples in paradise.",
    },
    {
      id: 6,
      name: "Dubai, UAE",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
      description:
        "Luxury shopping, ultramodern architecture, and desert adventures.",
    },
  ];

  return (
    <section
      id="destinations"
      style={{ padding: "5rem 1rem", background: "#f8fafc" }}
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
          Popular Destinations
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "3rem",
            fontSize: "1.1rem",
          }}
        >
          Explore our handpicked travel destinations
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Destination Card Component
function DestinationCard({ name, image, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: isHovered
          ? "0 10px 30px rgba(0,0,0,0.2)"
          : "0 4px 6px rgba(0,0,0,0.1)",
        transition: "all 0.3s",
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          transition: "transform 0.3s",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
      />
      <div style={{ padding: "1.5rem" }}>
        <h3
          style={{
            fontSize: "1.5rem",
            marginBottom: "0.5rem",
            color: "#1e293b",
          }}
        >
          {name}
        </h3>
        <p
          style={{
            color: "#64748b",
            marginBottom: "1rem",
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>
        <button
          style={{
            padding: "0.75rem 1.5rem",
            background: "#0ea5e9",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#0284c7")}
          onMouseLeave={(e) => (e.target.style.background = "#0ea5e9")}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default Destinations;
