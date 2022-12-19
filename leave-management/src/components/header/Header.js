import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
   <>

<header class="header">
      <div className="header-logo-manu">
        <img src={require("../images/logo.png")} alt="logo" class="header-logo" />

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
        <div className="option-list">
          <select name="" id="">
            <option value="">Name of organization</option>
            <option value="">Name of organization</option>
            <option value="">jName of organization</option>
            <option value="">Name of organization</option>
          </select>
        </div>

        <div>
          <img src={require("../images/setting.png")}alt="" class="navbar-icons" />
          <img src={require("../images/notification.png")} alt="" class="navbar-icons" />
        </div>

        <div>
          <img src={require("../images/pic.jpg")} alt="" class="profile" />
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
        <ion-icon name="menu-outline" class="mobile-nav-icon"></ion-icon>
        <ion-icon name="close-outline" class="mobile-nav-icon"></ion-icon>
      </div>
    </header>


   </>
  )
}

export default Header