import React, { useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const nevigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    console.log(isLoggedIn);
    
  }, []);

  const handleLogOut = () => {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
    nevigate("/login");
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav">
      <div className="nav-logo">
        <img
          src="https://ci3.googleusercontent.com/meips/ADKq_NYaNMgUTCMhVRuT3z0R2yYn-9zO01HqqWpXPCcywvjjPHbbcI7d8hvbrjNFJWbHArRgPx1_1PiViW9G6uDc6LZwdlGtUzMTMmpcWAVMMWDBqb9TmIGSIi13STf4eY2Yi9s=s0-d-e1-ft#https://production-cuvette.s3.ap-south-1.amazonaws.com/cuvette+wordmark.png"
          alt="Cuvette Tech"
          width="120"
        />
      </div>

      {/* Button to toggle menu on small screens */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Links for large screens and overlay for small screens */}
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        {!isLoggedIn &&<a href="/login">Login</a>}
        {!isLoggedIn && <a href="/">SignUp</a>}
        {isLoggedIn &&<a href="#" onClick={handleLogOut}>Logout</a>}
        <a href="mailto:thevk70@gmail.com" className="contact-txt">
          Contact
        </a>
      </div>

      {/* Full-screen overlay menu for small screens */}
      {isMenuOpen && (
        <div className="full-screen-menu">
          <button className="close-menu" onClick={toggleMenu}>
            ✕
          </button>
          {!isLoggedIn && <a href="/login">Login</a>}
          {!isLoggedIn && <a href="/">SignUp</a>}
          {isLoggedIn && <a href="#" onClick={handleLogOut}>Logout</a>}
          <a href="mailto:thevk70@gmail.com" className="contact-txt">
            Contact
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
