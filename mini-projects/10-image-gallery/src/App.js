import React, { useState } from "react";
import galleryData from "./galleryData";
import "./App.css";

function App() {
  const [images, setImages] = useState(galleryData);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleFilter = (category) => {
    setActiveCategory(category);
    setImages(
      category === "all"
        ? galleryData
        : galleryData.filter((img) => img.category === category)
    );
  };

  const categories = ["all", "nature", "animals", "architecture"];

  return (
    <div className="gallery-container">
      <h1 className="title">📸 Image Gallery with Filter</h1>

      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`filter-btn ${
              activeCategory === category ? "active" : ""
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="image-grid">
        {images.map((img) => (
          <div className="image-card" key={img.id}>
            <img src={img.src} alt={img.alt} title={img.title} />
            <p className="image-title">{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
