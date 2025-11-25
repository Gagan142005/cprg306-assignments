"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      const mealData = await fetchMealIdeas(ingredient);
      setMeals(mealData);
    }

    loadMealIdeas();
  }, [ingredient]);

  return (
  <div className="text-white">
    <h2 className="text-xl font-bold mb-4">
      Meal ideas for “{ingredient}”
    </h2>

    <ul className="grid grid-cols-2 gap-4">
      {meals.map((meal) => (
        <li
          key={meal.idMeal}
          className="border rounded-lg p-4 text-center hover:bg-gray-800 transition cursor-pointer"
        >
          {meal.strMeal}
        </li>
      ))}
    </ul>
  </div>
);
}
