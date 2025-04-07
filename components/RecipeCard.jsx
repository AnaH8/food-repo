//this will contain one recipe
import React from 'react'

export default function RecipeCard(props) {
  const {recipe} = props


  return (
    <div className='flex flex-col gap-2 p-2 md:p-4'>
      <img className='object-center object-cover h-[200px]' src={recipe.strMealThumb} alt='food img'/>
      <h1>{recipe.strMeal}</h1>
      <h2>Ingredients</h2>

      <h2>Instructions</h2>
      <p>{recipe.strInstructions}</p>
    </div>
  )
}
