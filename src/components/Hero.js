import React from "react";

function Hero() {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        background:
          'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600") center/cover',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        marginTop: "70px",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Discover Your Next Adventure
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            marginBottom: "2rem",
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          Explore the world with us
        </p>
        <button
          style={{
            padding: "1rem 2.5rem",
            fontSize: "1.1rem",
            background: "#0ea5e9",
            color: "white",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "transform 0.3s, box-shadow 0.3s",
            boxShadow: "0 4px 15px rgba(14, 165, 233, 0.4)",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 20px rgba(14, 165, 233, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 15px rgba(14, 165, 233, 0.4)";
          }}
        >
          Book Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
