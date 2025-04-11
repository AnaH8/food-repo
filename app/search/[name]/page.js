
import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

async function getRecipes(name) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    // console.log(url)
    try {
      const res = await fetch(url)
      if(!res.ok) {
        throw new Error('something went wrong')
      }
      const apiData = await res.json()
      const recipes = apiData?.meals
      return recipes
    } catch (err) {
      console.log(err)
    }
  }

export default async function SearchPage({params}) {
    const {name} = await params
    const recipes = await getRecipes(name)

    if(recipes){
      return (
        <Card recipes={recipes} />
    )} else{
    return (
      <div className='h-screen text-center'>
        <p>0 recipes found for &#39;{name}&#39;</p>
        <Link href={'/'}>Go back</Link>
      </div>
    )
  }
}
