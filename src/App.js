import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar'
import Home from './Components/home'
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp'
import RecipeCard from './Components/RecipeCard'
import RecipeList from './Components/RecipesList'
function App() {
  const n=111;
  return (
    <>
      <Navbar/>
      {/* <SignUp/> */}
      {/* <RecipeCard/> */}
      <RecipeList/>
      {/* <Home/> */}
    </>
  );
}
export default App;