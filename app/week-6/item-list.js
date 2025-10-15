"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // make a copy of items
  let sortedItems = [...items];

  // sort by name or category
  if (sortBy === "name") {
    sortedItems.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => (a.category > b.category ? 1 : -1));
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* sort buttons */}
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

      {/* show items */}
      <ul className="space-y-3">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
