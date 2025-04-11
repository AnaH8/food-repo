import Recipe from "@/components/Recipe";
import React from "react";

async function getRecipe() {
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

function handleIngredient(recipe){
  let ingredients = []
  for(let j=1;j<=20;j++){
    if(recipe[`strIngredient`+j]) {
      ingredients.push((`${recipe[`strMeasure${j}`]} ${recipe[`strIngredient${j}`]}`))
    }
  }
  return ingredients
}

export default async function RecipePage() {
  const recipe = await getRecipe()
  const ingredientList = handleIngredient(recipe)
  //console.log(ingredientList)
  return (
    <Recipe recipe={recipe} ingredientList={ingredientList}/>
  )
}
