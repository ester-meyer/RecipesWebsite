import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar'
import Home from './Components/home'
import SignUp from './Components/SignUp'
import RecipeCard from './Components/RecipeCard'
import RecipeList from './Components/RecipesList'
import AddRecipe from './Components/AddRecipe'
import Page404 from './Components/Page404';
function App() {

  return (
    <>
      <Navbar sx={{ zIndex: 5 }} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/RecipeList' element={<RecipeList />} />
        <Route path='/RecipeList/:id' element={<RecipeCard />} />
        <Route path='/AddRecipe' element={<AddRecipe />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </>
  );
}
export default App;