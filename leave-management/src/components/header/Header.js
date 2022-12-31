import React from 'react'
import "./Header.css";

import { Link } from 'react-router-dom';


function click(){

  const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

  
  const toggleNavbar = () => {
       
    nav_header.classList.toggle("active");

  };
  mobile_nav.addEventListener("click", () => toggleNavbar());

}


  





  




const Header = () =>
{
  return (
    
   <>
   
   

<header class="header">
      <div className="header-logo-manu">
        <img src="images/logo.png" alt="logo" class="header-logo" />

        <div className="manu">
          <nav className="navbar">
            <ul className="navbar-list">
              <li>
                <Link to={"/"} className="navbar-link"
                  >Summary</Link>
              </li>
              <li>
                <Link to={"/aprove"}
                  class="navbar-link"
                  >Wall Chart</Link>
              </li>
              <li>
                <Link to={"/myleave"}
                  className="navbar-link"
                  >My Leaves</Link>
              </li>
              <li>
                <Link to={"/submit"}
                  className="navbar-link"
                  >Submit</Link>
              </li>
             
            </ul>
          </nav>
        </div>
      </div>

      <div className="button">

      <div className="search-bar">
        
        <img src="images/search.png" alt="" className="search-icon" />
        <input type="text" className="search-input" placeholder="Search"/>

     </div>

        <div>
          <img src="images/setting.png"alt="" class="navbar-icons" />
          <img src="images/notification.png" alt="" class="navbar-icons" />
        </div>

        <div>
          <img src="images/pic.jpg" alt="" class="profile" />
        </div>

        <div className="list2">
          <select name="" id="" class="list2">
            <option value="">Momcilo</option>
            <option value="">Momcilo</option>
            <option value="">Momcilo</option>
            <option value="">Momcilo</option>
          </select>
        </div>
      </div>

      <div className="mobile-navbar-btn">
        <i class="fa-solid fa-bars mobile-nav-icon" name="menu-outline" onClick={click} ></i>
        <i class="fa-regular fa-circle-xmark mobile-nav-icon" name="close-outline" onClick={click}></i>
      </div>
    </header>
   
   
  

   </>

   

  )
}


export default Header

