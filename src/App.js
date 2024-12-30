import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar'
import Home from './Components/home'
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp'
import RecipeCard from './Components/RecipeCard'
import RecipesList from './Components/RecipesList';
function App() {
  const n=100;
  return (
    <>
      <Navbar/>
      {/* <SignUp/> */}
      {/* <RecipeCard id={n}/> */}
      <RecipesList/>
      {/* <Home/> */}
    </>
  );
}
export default App;