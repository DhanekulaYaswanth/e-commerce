import './App.css';
import { HashRouter,Route,Routes } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Products from './Components/Products/Products.js';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Cart from './Components/Cart/Cart.js';
import { useState } from 'react';
import data from './Components/Products/Data.js';

function App() {

  const [theme,settheme] = useState(false);
  const [products,setproducts] = useState(data);
  const [cart,setcart] = useState([]);

  return (
    <div className={theme?"App darkcolor":"App"}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Menu theme={theme} settheme={settheme} cart={cart}/>}>
            <Route path='/' element={<Home theme={theme}/>}/>
            <Route path='/Products' element={<Products theme={theme} products={products} setproducts={setproducts} cart={cart} setcart={setcart}/>}/>            
            <Route path='/about' element={<About theme={theme}/>}/>
            <Route path='/contact' element={<Contact theme={theme}/>}/>
            <Route path='/login' element={<Login theme={theme}/>}/>
            <Route path='/register' element={<Register theme={theme}/>}/>
            <Route path='/cart' element={<Cart theme={theme} cart={cart} setcart={setcart}/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
