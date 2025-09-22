import { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setLoggedIn } from "../../../actions/UserAction";

function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLogIn = useSelector((store) => store.status);

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      dispatch(setLoggedIn(false));
    }
  }, [dispatch]);

  // const isLogIn = props.isLogIn;
  const handleLogOut = () => {
      sessionStorage.removeItem("token");
      dispatch(setLoggedIn(false));
      navigate("/login", { replace: true });
  };

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
        {!isLogIn && <Link to="/login">Login</Link>}
        {!isLogIn && <Link to="/">SignUp</Link>}
          {isLogIn && 
            <button className="logout-btn" onClick={handleLogOut}>
              Logout
            </button>
          }
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
          {!isLogIn && <Link to="/login">Login</Link>}
          {!isLogIn && <Link to="/">SignUp</Link>}
            {isLogIn && 
              <button className="logout-btn" onClick={handleLogOut}>
                Logout
              </button>
            }
          <a href="mailto:thevk70@gmail.com" className="contact-txt">
            Contact
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
