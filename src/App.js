import './App.css';
import { Route, Routes } from 'react-router-dom';


import Navbar from './Components/NavBar'
import Home from './Components/home'
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp'
import RecipeCard from './Components/RecipeCard'
import RecipeList from './Components/RecipesList'
import AddRecipe from './Components/AddRecipe'
function App() {

  return (
    <>
      <AddRecipe/>
      <Navbar sx={{ zIndex: 5 }}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/RecipeList' element={<RecipeList/>} />
        <Route path='/RecipeList/:id' element={<RecipeCard />} />
        <Route path='/AddRecipe' element={<AddRecipe/>} />
      </Routes>
    </>
  );
}
export default App;