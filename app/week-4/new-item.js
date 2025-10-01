"use client";

import { useState } from "react";

export default function NewItem() {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
  <div className="bg-white p-6 rounded-md shadow-md w-96">
    <p className="text-gray-700 mb-4">
      Quantity:{" "}
      <span
        className={`font-bold ${
          count === 1 || count === 20 ? "text-gray-400" : "text-gray-400"
        }`}
      >
        {count}
      </span>
    </p>

    <div className="flex items-center space-x-4 mb-2">
      <button
        onClick={decrement}
        disabled={count === 1}
        className={`w-12 h-12 rounded-md text-xl font-bold ${
          count === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-100 hover:bg-gray-200 text-black"
        }`}
      >
        –
      </button>

      <button
        onClick={increment}
        disabled={count === 20}
        className={`w-12 h-12 rounded-md text-xl font-bold ${
          count === 20
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        +
      </button>
    </div>

    <p className="text-sm text-gray-500">Allowed range: 1–20</p>
  </div>
);
}
