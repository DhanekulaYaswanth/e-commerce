import React, { useState, useEffect } from "react";
import { NavLink, Link, Outlet,useLocation } from "react-router-dom";
import './Menu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faCartShopping,  faMoon,  faSun,  faUserPlus } from "@fortawesome/free-solid-svg-icons";

function Menu(props){

    const {theme,
            settheme
        } = props;

    const location = useLocation();
    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        setActivePage(location.pathname);
    }, [location]);


    const handleTheme = () =>{
        settheme(!theme);
    }

    return(
        <div className={theme?"MenuContainer dark":"MenuContainer"}>
            <input type="checkbox" id="hamburger"/>
            <div className={theme?"Menu ":"Menu darkMenu"}>
                <div className="logo">
                    <div className="logotheme">
                        <Link to='/' className='logolink' style={{color:theme?'#fff':''}}><h1>E-Commerce</h1></Link>
                        <label className="theme" onClick={()=>{handleTheme()}}>{theme?<FontAwesomeIcon icon={faMoon} id="Moon" title="dark mode"/>:<FontAwesomeIcon icon={faSun} id="Sun" title="light mode"/>}</label>
                    </div>
                    <label className="hamburger" htmlFor="hamburger">
                        <label htmlFor="hamburger" style={{backgroundColor:theme?'#fff':''}}></label>
                        <label htmlFor="hamburger" style={{backgroundColor:theme?'#fff':''}}></label>
                        <label htmlFor="hamburger" style={{backgroundColor:theme?'#fff':''}}></label>
                    </label>
                </div>
                <ul className="MenuList">
                    <li>
                        <NavLink to='/' className={activePage === '/' ? theme?'link lightactive':'active link' : theme?'link light':'link'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/products' className={activePage === '/products' ? theme?'link lightactive':'active link' : theme?'link light':'link'} >Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={activePage === '/about' ? theme?'link lightactive':'active link' : theme?'link light':'link'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={activePage === '/contact' ? theme?'link lightactive':'active link' : theme?'link light':'link'}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="user">
                    <label>
                        <NavLink to='/login' className={activePage === '/login' ? theme?'lightbtnactive':'btnactive  button' : theme?'lightbtn':'button'}>
                            <FontAwesomeIcon icon={faArrowRightToBracket}/> Login
                        </NavLink>
                    </label>
                    <label>
                        <NavLink to='/register' className={activePage === '/register' ? theme?'lightbtnactive':'btnactive  button' : theme?'lightbtn':'button'}>
                            <FontAwesomeIcon icon={faUserPlus}/> Register
                        </NavLink>
                    </label>
                    <label>
                        <NavLink to='/cart' className={activePage === '/cart' ? theme?'lightbtnactive':'btnactive  button' : theme?'lightbtn':'button'}>
                            <FontAwesomeIcon icon={faCartShopping}/> Cart
                        </NavLink>
                    </label>
                </div>
            </div>
            <div className="Outlet">
                <Outlet/>
            </div>
        </div>
    )
}

export default Menu;