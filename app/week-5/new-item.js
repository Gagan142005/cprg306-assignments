"use client";
import { useState } from "react";

export default function NewItem() {
  
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");


  function handleSubmit(event) {
    event.preventDefault(); 

    
    const item = { name, quantity, category };
    console.log(item);

    
    alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

  
    setName("");
    setQuantity(1);
    setCategory("produce");
  }


  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleIncrease() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg p-6 shadow-lg w-80"
    >
  
      <label className="block mb-2 text-gray-600">Item Name</label>
      <input
        type="text"
        required
        placeholder="e.g., milk, 4 L 🥛"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
      />

  
      <label className="block mb-2 text-gray-600">Quantity (1–20)</label>
      <p className="text-gray-600">
        Current: <span className="font-bold text-gray-700">{quantity}</span>
      </p>

  
      <div className="flex items-center gap-2 my-2">
        <button
          type="button"
          onClick={handleDecrease}
          className={`px-3 py-1 rounded-md text-white ${
            quantity <= 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          −
        </button>

        <button
          type="button"
          onClick={handleIncrease}
          className={`px-3 py-1 rounded-md text-white ${
            quantity >= 20
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          +
        </button>
      </div>

      <p className="text-sm text-gray-600 mb-4">Allowed range: 1–20</p>

  
      <label className="block mb-2 text-gray-600">Category</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
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


      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md"
      >
        Add Item
      </button>
    </form>
  );
}
