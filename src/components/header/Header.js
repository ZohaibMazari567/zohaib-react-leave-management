import React from 'react'
import "./Header.css";
const Header = () => {
  return (
   <>

<header class="header">
      <div className="header-logo-manu">
        <img src={require("/home/zohaib/Documents/zohaib-react-leave-management/src/images/logo.png")} alt="logo" class="header-logo" />

        <div className="manu">
          <nav className="navbar">
            <ul className="navbar-list">
              <li>
                <a href="index.html" className="navbar-link"
                  >Summary</a>
              </li>
              <li>
                <a
                  href="approve-leave.html"
                  class="navbar-link"
                  >Wall Chart</a>
              </li>
              <li>
                <a
                  href="my-leaves.html"
                  className="navbar-link"
                  >My Leaves</a>
              </li>
              <li>
                <a
                  href="submit-request.html"
                  className="navbar-link"
                  >Submit</a>
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
          <img src={require("/home/zohaib/Documents/zohaib-react-leave-management/src/images/setting.png")}alt="" class="navbar-icons" />
          <img src={require("/home/zohaib/Documents/zohaib-react-leave-management/src/images/notification.png")} alt="" class="navbar-icons" />
        </div>

        <div>
          <img src={require("/home/zohaib/Documents/zohaib-react-leave-management/src/images/pic.jpg")} alt="" class="profile" />
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