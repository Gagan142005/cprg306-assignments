"use client";

import { useState } from "react";
import { useUserAuth } from "../../../contexts/AuthContext";  
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const { user } = useUserAuth(); 


  if (!user) {
    return (
      <main className="bg-black text-white min-h-screen p-6">
        <h1 className="text-3xl font-bold text-center">
          You must be logged in to view the shopping list.
        </h1>
      </main>
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [items, setItems] = useState(itemsData);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  function cleanItemName(name) {
    return name
      .split(",")[0]
      .replace(/[^\p{L}\s]/gu, "")
      .trim();
  }

  function handleItemSelect(item) {
    const cleanedName = cleanItemName(item.name);
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>

      <div className="flex gap-6">
        <div className="w-1/2 space-y-6">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
