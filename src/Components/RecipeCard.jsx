import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"

export default function RecipeCard({id}){
        const [recipe, setRecipe] = useState(null)
        const reciepe=useSelector(slices=>slices.RecipesSlice).recipes.find(recipe => recipe.id === id)
        useEffect(()=>{
            setRecipe(reciepe)
        })
    return(
        <div style={{width: '18vw', height: '60vh', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}}>
            <img src={reciepe.image} style={{width: '100%', height: '40vh', objectFit: 'cover'}}/>
        </div>
    )
}