
import React from 'react'

async function getRecipe(name) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    console.log(url)
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      //const apiData = await res.json()
      if(!res.ok) {
        throw new Error('something went wrong')
      }
      return res.json()
    //   console.log(apiData)
    //   const recipe = apiData?.meals
    //   return recipe
    } catch (err) {
      console.log(err)
    }
  }

// function handleIngredient(recipe){
//     let ingredients = []
//     for(let j=1;j<=20;j++){
//       if(recipe[`strIngredient`+j]) {
//         ingredients.push((`${recipe[`strMeasure${j}`]} ${recipe[`strIngredient${j}`]}`))
//       }
//     }
//     return ingredients
//   }
export default async function SearchPage({params}) {
    const {name} = await params
    const recipe = await getRecipe(name)
    console.log(recipe)
    // const ingredientList = handleIngredient(recipe)
  return (
    // <RecipeCard recipe={recipe} ingredientList={ingredientList}/>
    <div>you looked for: {name}</div>
  )
}
