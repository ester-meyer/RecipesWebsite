
import React from 'react';
import '../Like.css'
import { useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom';


export default function Like(recipe){

    //only for now
    recipe=useSelector((state)=>state.RecipesSlice.recipes).find(recipe=>recipe.id==102)

    const dispatch = useDispatch()
    const handleCheckboxChange = ()=>{
        dispatch(ToggleFavorite(recipe))
    }
    return(
        <label className="container">
            <input type="checkbox" id="likeCheckbox" onChange={handleCheckboxChange}/>
            <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path>
            </svg>
        </label>
    );
}