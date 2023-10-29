import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import './Header.css'
const Header = () => {
    // let mobileNav = document.getElementsByClassName('mobileNav');
    // let menuIcon = document.querySelectorAll('.icons');
    // const [icon,setIcon] = useState();
  return (
    <div className="header">
        <h1 className="logo">
            Logo
        </h1>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
        <div className='mobileNav'>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                </li>
            </ul>
        </div>
        <div className="nav2">
            <ul>
            <li>
        <AiOutlineMenu className="icons active"/>
            </li>
            <li>
        <AiOutlineClose className="icons"/>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Header
