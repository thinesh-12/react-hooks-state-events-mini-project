import React from "react";

function CategoryFilter({ categories, selectedCategory, setFilter }) {
  function handleClick(category) {
    setFilter(category);
  }

  return (
    <div className="categories">
      <h4>Category filters</h4>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
