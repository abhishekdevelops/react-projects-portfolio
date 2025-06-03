import React, { useState } from "react";
import galleryData from "./galleryData";

function App() {
  const [images, setImages] = useState(galleryData); // stores images to show
  const [activeCategory, setActiveCategory] = useState("all"); // current selected filter

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setImages(galleryData); // show all
    } else {
      const filtered = galleryData.filter((img) => img.category === category);
      setImages(filtered);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Image Gallery with Filter</h1>

      {/* Filter Buttons */}
      <div style={{ marginBottom: "20px" }}>
        {["all", "nature", "animals", "architecture"].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            style={{
              margin: "0 10px",
              padding: "10px 20px",
              backgroundColor: activeCategory === category ? "#4da6ff" : "#ccc",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {/* Capitalize button label */}
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "0 20px",
        }}
      >
        {images.map((img) => (
          <div
            key={img.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              title={img.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <p style={{ padding: "10px", margin: 0 }}>{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
