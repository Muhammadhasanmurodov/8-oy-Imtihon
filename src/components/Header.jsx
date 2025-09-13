import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navBar">
      <div className="navbar-container">
        <img src="/assets/images/logo.svg" alt="Logo" width={260} />

        <div className="to-pages">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "navLink active" : "navLink"}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "navLink active" : "navLink"}
          >
            About
          </NavLink>
          <NavLink 
            to="/recipes" 
            className={({ isActive }) => isActive ? "navLink active" : "navLink"}
          >
            Recipes
          </NavLink>
        </div>

        <button className="btnNavbar">Browse recipes</button>

        <button 
          className="clickMeBtn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img 
            src="/assets/images/icon-hamburger-menu.svg" 
            alt="Menu" 
            width={18} 
            height={16} 
          />
        </button>
      </div>

      {menuOpen && (
        <div className="mobileMenu">
          <NavLink 
            to="/" 
            className="navLink"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className="navLink"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink 
            to="/recipes" 
            className="navLink"
            onClick={() => setMenuOpen(false)}
          >
            Recipes
          </NavLink>
          <button className="btnMenu">Browse recipes</button>
        </div>
      )}
    </nav>
  );
}
