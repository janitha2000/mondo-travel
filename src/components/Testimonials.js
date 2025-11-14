import React from "react";
import { Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
      review:
        "Mondo Travel made our honeymoon unforgettable! The attention to detail and customer service was exceptional.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      review:
        "Best travel agency ever! They planned our family trip perfectly. Every destination exceeded our expectations.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Williams",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
      review:
        "Professional, reliable, and affordable. I've booked three trips with them and always had amazing experiences!",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
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
          What Our Clients Say
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            marginBottom: "3rem",
            fontSize: "1.1rem",
          }}
        >
          Read reviews from our happy travelers
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {testimonials.map((test) => (
            <TestimonialCard key={test.id} {...test} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial Card Component
function TestimonialCard({ name, image, review, rating }) {
  return (
    <div
      style={{
        background: "white",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        textAlign: "center",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "1rem",
          border: "3px solid #0ea5e9",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.25rem",
          marginBottom: "1rem",
        }}
      >
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
        ))}
      </div>
      <p
        style={{
          fontStyle: "italic",
          color: "#64748b",
          marginBottom: "1rem",
          lineHeight: "1.6",
          fontSize: "0.95rem",
        }}
      >
        "{review}"
      </p>
      <h4 style={{ color: "#1e293b", fontWeight: "bold", fontSize: "1.1rem" }}>
        {name}
      </h4>
    </div>
  );
}

export default Testimonials;
