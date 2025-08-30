import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h3>LOGO</h3>
      
          <Link to="/">Home</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/inquiry">Inquiry</Link>
          <Link to="/demo">Demo</Link>
          <Link to="/registered">Registered</Link>
       
    </nav>
  );
}

export default Navbar;
