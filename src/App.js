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

function App() {

  const [theme,settheme] = useState(false);

  return (
    <div className={theme?"App darkcolor":"App"}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Menu theme={theme} settheme={settheme}/>}>
            <Route path='/' element={<Home theme={theme} settheme={settheme}/>}/>
            <Route path='/Products' element={<Products theme={theme} settheme={settheme}/>}/>            
            <Route path='/about' element={<About theme={theme} settheme={settheme}/>}/>
            <Route path='/contact' element={<Contact theme={theme} settheme={settheme}/>}/>
            <Route path='/login' element={<Login theme={theme} settheme={settheme}/>}/>
            <Route path='/register' element={<Register theme={theme} settheme={settheme}/>}/>
            <Route path='/cart' element={<Cart theme={theme} settheme={settheme}/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
