import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import { GoSearch } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import AlienLogo from "../../assets/alien-logo.png";
import { FiChevronDown } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="nav-top">
      <div className="navbar-main">
        <div className="nav-left" onClick={()=> navigate("/")}>
          <img src={AlienLogo} alt="alien_loo" className="web-logo" />
          <p>Aliena</p>
        </div>
        <div className="nav-right">
          <div className="nav-links">
            <NavLink to="/home">HOME</NavLink>
            <NavLink to="/about-us">ABOUT US</NavLink>
            <NavLink to="/gallery">
              <span>GALLERY </span>
              <FiChevronDown className="dropdown-arrow" />
            </NavLink>
            <NavLink to="blog">
              <span>BLOG </span>
              <FiChevronDown className="dropdown-arrow" />
            </NavLink>
            <NavLink to="/shop">
              <span>SHOP </span>
              <FiChevronDown className="dropdown-arrow" />
            </NavLink>
            <NavLink to="/pages">
              <span>PAGES </span>
              <FiChevronDown className="dropdown-arrow" />
            </NavLink>
            <NavLink to="/contacts">CONTACTS</NavLink>
          </div>
          <div className="nav-right-logos">
            <GoSearch className="logo-class" />
            <AiOutlineShoppingCart className="logo-class" />
          </div>
          {hamburgerOpen === false ? (
            <GiHamburgerMenu
              className="hamburger-menu-icons"
              onClick={() => setHamburgerOpen(true)}
            />
          ) : (
            <RxCross2
              className="hamburger-menu-icons"
              onClick={() => setHamburgerOpen(false)}
            />
          )}  
        </div>
      </div>
      {hamburgerOpen && (
        <div className="open-menu-items">
          <NavLink to="/home">HOME</NavLink>
          <NavLink to="/about-us">ABOUT US</NavLink>
          <NavLink to="/gallery">
            <span>GALLERY </span>
            <FiChevronDown className="dropdown-arrow" />
          </NavLink>
          <NavLink to="blog">
            <span>BLOG </span>
            <FiChevronDown className="dropdown-arrow" />
          </NavLink>
          <NavLink to="/shop">
            <span>SHOP </span>
            <FiChevronDown className="dropdown-arrow" />
          </NavLink>
          <NavLink to="/pages">
            <span>PAGES </span>
            <FiChevronDown className="dropdown-arrow" />
          </NavLink>
          <NavLink to="/contacts">CONTACTS</NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
