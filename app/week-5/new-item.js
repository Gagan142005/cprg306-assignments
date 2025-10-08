"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();

    const item = { name, quantity, category };
    console.log(item);
    alert(`Added item:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    // Reset
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  function increment() {
    if (quantity < 20) setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Week 5 — New Item
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name Field */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Item Name</label>
            <input
              type="text"
              placeholder="e.g., milk, 4 L 🥛"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Quantity Field */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Quantity (1–20)
            </label>
            <p className="text-gray-700">Current: <span className="font-semibold">{quantity}</span></p>
            <div className="flex items-center gap-2 mt-2">
              <button
                type="button"
                onClick={decrement}
                disabled={quantity <= 1}
                className={`px-3 py-1 rounded-md text-white ${
                  quantity <= 1 ? "bg-gray-200 text-gray-400" : "bg-gray-500 hover:bg-gray-600"
                }`}
              >
                –
              </button>

              <button
                type="button"
                onClick={increment}
                disabled={quantity >= 20}
                className={`px-3 py-1 rounded-md text-white ${
                  quantity >= 20 ? "bg-gray-200 text-gray-400" : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                +
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-1">Allowed range: 1–20</p>
          </div>

          {/* Category Field */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}
