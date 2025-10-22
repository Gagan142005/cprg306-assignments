"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {

  const [items, setItems] = useState(itemsData);


  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
      <div className="max-w-md mx-auto space-y-6">
    
        <NewItem onAddItem={handleAddItem} />
  
        <ItemList items={items} />
      </div>
    </main>
  );
}
