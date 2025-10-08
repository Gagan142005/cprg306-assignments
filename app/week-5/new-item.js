"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    const item = { name, quantity, category };

    console.log(item);
    alert(`Added item:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    // Reset form fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  // Quantity controls
  const increase = () => quantity < 20 && setQuantity(quantity + 1);
  const decrease = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
    >
      {/* Name field */}
      <label className="block text-gray-700 mb-2">
        Item Name
        <input
          type="text"
          required
          placeholder="e.g., milk, 4 L 🥛"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
        />
      </label>

      {/* Quantity field */}
      <label className="block text-gray-700 mb-2">
        Quantity (1–20)
        <p className="text-gray-700 mt-1">Current: {quantity}</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            type="button"
            onClick={decrease}
            disabled={quantity <= 1}
            className={`px-3 py-1 rounded-md text-white ${
              quantity <= 1 ? "bg-gray-200 text-gray-400" : "bg-gray-500 hover:bg-gray-600"
            }`}
          >
            –
          </button>

          <button
            type="button"
            onClick={increase}
            disabled={quantity >= 20}
            className={`px-3 py-1 rounded-md text-white ${
              quantity >= 20 ? "bg-gray-200 text-gray-400" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            +
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-1">Allowed range: 1–20</p>
      </label>

      {/* Category field */}
      <label className="block text-gray-700 mb-4">
        Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400"
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
      </label>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium"
      >
        Add Item
      </button>
    </form>
  );
}
