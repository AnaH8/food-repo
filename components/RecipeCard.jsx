//this will contain one recipe
import React from 'react'

export default function RecipeCard(props) {
  const {recipe, ingredientList} = props


  return (
    <div className='flex flex-col gap-4 p-2 md:p-4 md:w-[70%] md:m-auto lg:w-[90%] lg:m-auto '>
      <img className='object-center object-cover h-[250px] md:h-[400px] md:w-fit' src={recipe.strMealThumb} alt='food img'/>
      <h1 className='text-2xl md:text-4xl font-bold'>{recipe.strMeal}</h1>
      <h2 className='text-lg md:text-2xl font-semibold'>Ingredients</h2>
      <ul className='list-disc px-8' >
        {ingredientList.map((item, index)=>{
          return (
          <li key={index}>{item}</li>
          )
        })}
      </ul>
      <h2 className='text-lg md:text-2xl font-semibold'>Instructions</h2>
      <p className='px-2 text-justify'>{recipe.strInstructions}</p>
    </div>
  )
}
