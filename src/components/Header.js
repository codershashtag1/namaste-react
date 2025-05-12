import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
          <li>
            <div>Search</div>
          </li>
          <li>Home</li>
          <li>Help</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;