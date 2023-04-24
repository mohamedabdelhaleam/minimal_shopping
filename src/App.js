import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import NoMatch from './Components/NoMatch/NoMatch';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element ={<Home />} />
          <Route path='/products' element ={<Products />} />
          <Route path='/products/:id' element ={<SingleProduct />}/>
        <Route path='*' element ={<NoMatch />}/>
      </Routes>
    </div>
  );
}

export default App;
