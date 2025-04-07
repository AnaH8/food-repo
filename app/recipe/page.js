import RecipeCard from "@/components/RecipeCard";
import React from "react";

export async function getRecipe() {
  try {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php")
    const apiData = await res.json()
    const recipe = apiData.meals[0]
    return recipe
  } catch (err) {
    console.log(err)
  }
}

export default async function RecipePage() {
  const recipe = await getRecipe()
  
  return (
    <RecipeCard recipe={recipe}/>
  )
}
