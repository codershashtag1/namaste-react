import { LOGO_URL } from "../utils/constants";
import { useState } from 'react';
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [text, setText] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between px-10 bg-gray-100 shadow-lg">
      <div className="logo-container">
        <img
          className="w-28"
          src = {LOGO_URL}
        ></img>
      </div>
      <div>
        <ul className = "flex">
          <li className="p-10">Online Status: {onlineStatus === false ? "🔴" : "✅" }</li>
          <li className="p-10"><Link to="/">Home</Link></li>
          <li className="p-10"><Link to="/about">About Us</Link></li>
          <li className="p-10"><Link to="/contact">Contact Us</Link></li>
          <li className="p-10">Cart</li>
          <li className = "p-10">
            <button className = "btn"
              onClick = {() => {(text == "Login") ? setText("Logout") : setText("Login") }}>{text}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;