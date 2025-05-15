import { LOGO_URL } from "../utils/constants";
import { useState } from 'react';
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [text, setText] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src = {LOGO_URL}
        ></img>
      </div>
      <div className="navbar-container">
        <ul className="nav-items">
          <li>Online Status: {onlineStatus === false ? "🔴" : "✅" }</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li><button className="btn" onClick={() => {
            (text == "Login") ? setText("Logout") : setText("Login")
          }}>{text}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;