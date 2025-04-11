//this will contain one recipe
import React from 'react'
import {Playfair_Display} from "next/font/google"
import { Nunito_Sans } from "next/font/google";

const playfair = Playfair_Display({subsets: ["latin"], weight: ["400"]});
const nunito = Nunito_Sans({subsets: ["latin"], weight: ["400"]})

export default function Recipe(props) {
  const {recipe, ingredientList} = props


  return (
    <div className='flex flex-col gap-4 recipe-container p-6 md:p-4 md:w-[60%] md:m-auto'>
      <img className='z-9 w-[100%] h-[100%] object-cover' src={recipe.strMealThumb} alt='food img'/>
      <h1 className={'text-4xl md:text-6xl font-extrabold ' + playfair.className}>{recipe.strMeal}</h1>
      <div className='text-[#d17a55]'>
        <i className="fa-solid fa-tags pr-2"></i>
        <small className={' ' + nunito.className}>{recipe.strCategory}, {recipe.strArea}</small>
      </div>
      <hr className='opacity-15'/>
      <h2 className={'text-lg md:text-2xl ' + playfair.className}>Ingredients</h2>
      <ul className={'list-disc marker:text-[#d17a55] px-8 ' + nunito.className} >
        {ingredientList.map((item, index)=>{
          return (
          <li key={index}>{item.toLowerCase()}</li>
          )
        })}
      </ul>
      <hr className='opacity-15'/>
      <h2 className={'text-lg md:text-2xl font-semibold ' + playfair.className}>Instructions</h2>
      <p className={'px-2 text-justify pb-2 ' + nunito.className}>{recipe.strInstructions}</p>
    </div>
  )
}
