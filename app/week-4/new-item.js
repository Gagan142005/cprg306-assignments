// "use client";
// import { useState } from 'react';
// export default function NewItem() {
//     const [quantity, setQuantity] = useState(1);
//     const increment = () => {
//         if (quantity < 20) {
//             setQuantity(quantity + 1);
//           }
//     };
//     const decrement = () => {
//         if (quantity > 1) {
//           setQuantity(quantity - 1);
//         }
//       };
//       return (
//         <div className="bg-white p-6 rounded-md shadow-md w-96">
//           <p className="text-gray-700 mb-4"></p>
//           {/* <h2 className="text-2xl font-bold mb-6">Choose Quantity</h2> */}
//           <div className="flex items-center space-x-6">
//             <button
//               onClick={decrement}
//               disabled={quantity === 1}
//               className="px-5 py-3 bg-blue-500 text-white rounded-xl disabled:bg-gray-400"
//             >
//               -
//             </button>
//             <span className="text-2xl font-semibold">{quantity}</span>
//             <button
//               onClick={increment}
//               disabled={quantity === 20}
//               className="px-5 py-3 bg-blue-500 text-white rounded-xl disabled:bg-gray-400"
//             >
//               +
//             </button>
//           </div>
//         </div>
//       );
// }

"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-96">
      <p className="text-gray-700 mb-4">
        Quantity:{" "}
        <span className={quantity === 1 || quantity === 20 ? "text-gray-400" : "text-black"}>
          {quantity}
        </span>
      </p>

      <div className="flex items-center space-x-4 mb-2">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`w-12 h-12 rounded-md text-xl font-bold ${
            quantity === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-100 hover:bg-gray-200 text-black"
          }`}
        >
          –
        </button>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`w-12 h-12 rounded-md text-xl font-bold ${
            quantity === 20
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
