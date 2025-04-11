//this will be the recipe card
import React from "react";
import {Playfair_Display} from "next/font/google"
import { Nunito_Sans } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({subsets: ["latin"], weight: ["400"]});
const nunito = Nunito_Sans({subsets: ["latin"], weight: ["400"]})

export default function Card(props) {

  const {recipes} = props

  return (

    <div className="w-screen h-full">
      <div className="flex flex-col gap-10 items-center p-2 w-screen lg:w-[80%]  mx-auto ">
       
        {recipes.map((item, index)=>{
          return(
            <div className="p-4 w-screen md:w-[90%] shadow-xs/10" key={index}>
              
              <div className="md:flex md:gap-4 lg:gap-6 p-2 mx-auto">
                <div className="md:max-w-[50%] lg:max-w-[60%] transition-transform duration-300 transform hover:scale-102">
                  
                   <Link href={`/recipes/${item.idMeal}`}>
                     <img src={item.strMealThumb} alt="photo" className="object-fill"/>
                   </Link>
                </div>
                <div className="flex flex-col gap-2 md:max-w-[60%]">
                  
                    <Link href={`/recipes/${item.idMeal}`} className="hover:text-[#d17a55]">
                     <h1 className={'text-4xl md:text-4xl lg:text-6xl pt-4 md:pt-0 ' + playfair.className}>{item.strMeal}</h1>
                    </Link>
                  <div className="text-[#d17a55]">
                    <i className="fa-solid fa-tags pr-2"></i>
                    <small className={' ' + nunito.className}>{item.strCategory}, {item.strArea}</small>
                  </div>
                  <p className={' ' + nunito.className}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras id diam ultricies, tincidunt diam in, tincidunt magna. 
                    Orci varius natoque penatibus et magnis dis parturient montes, 
                    nascetur ridiculus mus. Curabitur massa ex, tincidunt varius justo quis, 
                    tincidunt convallis lectus.
                  </p>
                  
                  <Link href={`/recipes/${item.idMeal}`} className={"underline underline-offset-4 decoration-[#d17a55] text-sm md:text-md " + nunito.className}>READ MORE...</Link>
                </div>
              </div>
              
            </div>
          )
        })}
      </div>
    </div>
  );
}
