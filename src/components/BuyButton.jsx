"use client";

import { useState } from "react";

export default function BuyButton() {
  const [ordered, setOrdered] = useState(false);

  const handleOrder = () => {
    setOrdered(true);
  };

  return (
    <div>
      {ordered ? (
        <div className="bg-green-100 text-green-700 px-5 py-3 rounded-xl font-semibold">
          ✅ Order Successful!
        </div>
      ) : (
        <button
          onClick={handleOrder}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-semibold transition"
        >
          Buy Now
        </button>
      )}
    </div>
  );
}