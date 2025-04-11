
import Recipe from '@/components/Recipe'
import React from 'react'

async function getRecipes(id) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    // console.log(url)
    try {
      const res = await fetch(url)
      if(!res.ok) {
        throw new Error('something went wrong')
      }
      const apiData = await res.json()
      const recipe = apiData?.meals[0]
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
export default async function SearchPage({params}) {
    const {id} = await params
    const recipe = await getRecipes(id)
    const ingredientList = handleIngredient(recipe)
    return (
        <Recipe recipe={recipe} ingredientList={ingredientList}/>
      )
}
