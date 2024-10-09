import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import {
  searchOutline,
  cartOutline,
  menuOutline,
  closeOutline,
} from "ionicons/icons";
import { person, key } from "ionicons/icons"; // Import icons for login and register
import "./Navbar.css";
import { PublicRoutes } from "../../models/routes";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSearchOpen(false); // Close search if menu is opened
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setMenuOpen(false); // Close menu if search is opened
  };

  // Detect screen size to manage mobile and desktop views
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className={`links ${menuOpen ? "active" : ""}`}>
        <a href={`/${PublicRoutes.ENTERPRISES}`}>Emprendimientos</a>
        <a href={`/${PublicRoutes.ENTERPRISES}/${PublicRoutes.CATEGORIES}`}>
          Categorias
        </a>
        <a href={`/${PublicRoutes.ABOUT_US}`}>Nosotros</a>
        <div className="CTA-login-register">
          <a href="#link3">Link 3</a>
          <a href="#link3">Link 3</a>
        </div>
      </div>

      <div className="logo">
        <a to="/">
          <img src="/img/logo.svg" alt="Logo" className="logo-img" />{" "}
          {/* Use the relative path */}
        </a>
      </div>

      <div className="icons">
        {isMobile ? (
          <>
            <IonIcon
              icon={searchOutline}
              onClick={toggleSearch}
              className="search-icon"
            />
            <IonIcon icon={cartOutline} className="cart-icon" />
            <IonIcon
              icon={menuOpen ? closeOutline : menuOutline}
              onClick={toggleMenu}
              className="hamburger"
            />
          </>
        ) : (
          <div className="right-section">
            <div className="searchBox">
              <IonIcon
                icon={searchOutline}
                onClick={toggleSearch}
                className="search-icon"
              />
              <input type="text" placeholder="Search..." />
            </div>
            <div>
              <a
                href={`/${PublicRoutes.AUTH}/${PublicRoutes.LOGIN}`}
                className="nav-link"
              >
                <IonIcon icon={person} className="nav-icon" />
                Iniciar
              </a>
              <a
                href={`/${PublicRoutes.AUTH}/${PublicRoutes.REGISTER}`}
                className="nav-link"
              >
                <IonIcon icon={key} className="nav-icon" />
                Registro
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Search overlay for mobile/tablet */}
      {isMobile && (
        <div className={`search-overlay ${searchOpen ? "active" : ""}`}>
          <input type="text" placeholder="Search..." />
          <IonIcon
            icon={closeOutline}
            onClick={toggleSearch}
            className={`close-icon ${searchOpen ? "active" : ""}`}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
