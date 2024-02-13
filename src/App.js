import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Books from './Components/Books/Books';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RecipeCard from './Components/RecipeCard/RecipeCard';
import Footer from './Components/Footer/Footer';
import Favourites from './Components/Favourites/Favourites';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/books' element={<Books />}></Route>
        <Route path='/favourites' element={<Favourites/>}></Route>
        <Route path='/recipeCard/:id' element={<RecipeCard />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
