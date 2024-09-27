import { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
function Navbar() {
  const [menu, setMenu] = useState("restaurante");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("restaurante")}
          className={menu === "restaurante" ? "active" : ""}
        >
          Restaurante
        </li>
        <li
          onClick={() => setMenu("app")}
          className={menu === "app" ? "active" : ""}
        >
          App
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket icon" />
          <div className="dot"></div>
        </div>
        <button type="button">Registrate</button>
      </div>
    </div>
  );
};

export default Navbar;
