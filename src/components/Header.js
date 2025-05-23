import { LOGO_URL } from "../utils/constants";
import { useState } from 'react';
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux"

const Header = () => {
  const [text, setText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartStore = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between px-10 bg-gray-100 shadow-lg">
      <div className="logo-container">
        <img
          className="w-28"
          name="logo_img"
          src = {LOGO_URL}
        ></img>
      </div>
      <div>
        <ul className = "flex">
          <li className="p-10 text-2xl">Online Status: {onlineStatus === false ? "🔴" : "✅" }</li>
          <li className="p-10 text-2xl"><Link to="/">Home</Link></li>
          <li className="p-10 text-2xl"><Link to="/about">About Us</Link></li>
          <li className="p-10 text-2xl"><Link to="/contact">Contact Us</Link></li>
          <li className="p-10 text-2xl font-bold text-green-900"><Link to="/cart">Cart ({cartStore.length}) items</Link></li>
          <li className = "p-10">
            <button className = "bg-gray-300 px-4 py-2 rounded-lg text-xl font-bold"
              onClick = {() => {(text == "Login") ? setText("Logout") : setText("Login") }}>{text}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;