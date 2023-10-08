import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
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
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu theme={theme} settheme={settheme}/>}>
            <Route index path='/' element={<Home/>}/>
            <Route path='/Products' element={<Products/>}/>            
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
