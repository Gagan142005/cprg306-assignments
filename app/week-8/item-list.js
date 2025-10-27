"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <p className="text-gray-400">Sort by:</p>

        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-1 rounded-md border ${
            sortBy === "name"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-1 rounded-md border ${
            sortBy === "category"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Category
        </button>
      </div>

      <ul className="space-y-3">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)} // Added click handler
          />
        ))}
      </ul>
    </div>
  );
}
