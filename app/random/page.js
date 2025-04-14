'use client'
import Recipe from "@/components/Recipe";
import React, { useEffect, useState } from "react";



function handleIngredient(recipe){
  let ingredients = []
  for(let j=1;j<=20;j++){
    if(recipe[`strIngredient`+j]) {
      ingredients.push((`${recipe[`strMeasure${j}`]} ${recipe[`strIngredient${j}`]}`))
    }
  }
  return ingredients
}

export default function RandomPage() {

  const [recipe, setRecipe] = useState({})
 
  useEffect(()=>{
    async function getRecipe() {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        if(!res.ok) {
          throw new Error('something went wrong')
        }
        const apiData = await res.json()
        const recipe = apiData?.meals[0]
        setRecipe(recipe)

      } catch (err) {
        console.log(err)
      }
    }
    getRecipe()
  },[])
 
  const ingredientList = handleIngredient(recipe)

  return (
    <Recipe recipe={recipe} ingredientList={ingredientList}/>
  )
}
